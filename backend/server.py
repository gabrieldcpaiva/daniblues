from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
from typing import Optional
import os
from dotenv import load_dotenv
from motor.motor_asyncio import AsyncIOMotorClient
from datetime import datetime
import uuid
import logging

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

load_dotenv()

app = FastAPI(title="Dani Blues Hair & Beauty API", version="1.0.0")

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# MongoDB connection with error handling
try:
    MONGO_URL = os.environ.get("MONGO_URL")
    logger.info(f"Connecting to MongoDB: {MONGO_URL}")
    client = AsyncIOMotorClient(MONGO_URL)
    db = client.daniblues
except Exception as e:
    logger.error(f"Failed to connect to MongoDB: {e}")
    # Continue without database for basic health checks
    client = None
    db = None

# Pydantic models
class ContactForm(BaseModel):
    name: str
    email: EmailStr
    phone: Optional[str] = None
    message: str
    service_interest: Optional[str] = None

class ProductInquiry(BaseModel):
    name: str
    email: EmailStr
    phone: Optional[str] = None
    product_name: str
    message: Optional[str] = None

@app.get("/api/health")
async def health_check():
    health_status = {"status": "healthy", "message": "Dani Blues API is running"}
    
    # Check database connection
    if db is not None:
        try:
            await db.admin.command('ping')
            health_status["database"] = "connected"
        except Exception as e:
            logger.error(f"Database health check failed: {e}")
            health_status["database"] = "disconnected"
            health_status["status"] = "degraded"
    else:
        health_status["database"] = "not_configured"
        health_status["status"] = "degraded"
    
    return health_status

@app.post("/api/contact")
async def submit_contact_form(contact: ContactForm):
    if db is None:
        raise HTTPException(status_code=503, detail="Database service unavailable")
    
    try:
        contact_data = {
            "id": str(uuid.uuid4()),
            "name": contact.name,
            "email": contact.email,
            "phone": contact.phone,
            "message": contact.message,
            "service_interest": contact.service_interest,
            "created_at": datetime.utcnow(),
            "status": "new"
        }
        
        await db.contacts.insert_one(contact_data)
        logger.info(f"Contact form submitted: {contact_data['id']}")
        return {"message": "Contact form submitted successfully", "id": contact_data["id"]}
    except Exception as e:
        logger.error(f"Error submitting contact form: {e}")
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/api/product-inquiry")
async def submit_product_inquiry(inquiry: ProductInquiry):
    if db is None:
        raise HTTPException(status_code=503, detail="Database service unavailable")
    
    try:
        inquiry_data = {
            "id": str(uuid.uuid4()),
            "name": inquiry.name,
            "email": inquiry.email,
            "phone": inquiry.phone,
            "product_name": inquiry.product_name,
            "message": inquiry.message,
            "created_at": datetime.utcnow(),
            "status": "new"
        }
        
        result = await db.product_inquiries.insert_one(inquiry_data)
        logger.info(f"Product inquiry submitted: {inquiry_data['id']}")
        return {"message": "Product inquiry submitted successfully", "id": inquiry_data["id"]}
    except Exception as e:
        logger.error(f"Error submitting product inquiry: {e}")
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/api/services")
async def get_services():
    services = [
        {
            "id": "haircuts",
            "title": "Professional Haircuts",
            "description": "Expert haircuts tailored to your unique style and face shape",
            "icon": "✂️"
        },
        {
            "id": "treatments",
            "title": "Brazilian Hair Treatments",
            "description": "Premium Brazilian hair treatments for restoration and revitalization",
            "icon": "💆‍♀️"
        },
        {
            "id": "products",
            "title": "Lowell Product Sales",
            "description": "High-quality Lowell hair products for professional home care",
            "icon": "🛍️"
        },
        {
            "id": "analysis",
            "title": "Online Hair Analysis",
            "description": "Professional online consultation and hair analysis services",
            "icon": "🔍"
        }
    ]
    return services

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8001)