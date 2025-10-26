# Dani Blues Hair & Beauty

A sophisticated two-page website for Dani Blues Hair & Beauty, a premium UK salon specializing in Brazilian hair treatments and Lowell products.

## Features

- **Elegant Design**: Minimalistic layout with black, white, and gold accents
- **Responsive Design**: Optimized for mobile and desktop
- **SEO Optimized**: Meta tags and keywords for search engines
- **Professional Services**: Haircuts, treatments, and online analysis
- **Product Catalog**: Complete Lowell hair product lines from 2024/2025 catalog
- **Contact Integration**: WhatsApp booking and contact forms
- **Modern Tech Stack**: React, FastAPI, MongoDB

## Pages

### Home Page
- Hero section with elegant slogan
- Bio section about Dani Blues
- Services showcase
- Contact section with map integration

### Products Page
- Complete Lowell product catalog
- Accordion-style product listings
- Product inquiry functionality
- Professional product descriptions

## Technology Stack

- **Frontend**: React 18, Tailwind CSS, Framer Motion
- **Backend**: FastAPI, Python
- **Database**: MongoDB
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion for smooth transitions

## Getting Started

### Prerequisites

- Node.js 16+ and yarn
- Python 3.8+
- MongoDB

## Setup

### 1. Clone the Repository

```bash
git clone https://github.com/gabrieldcpaiva/daniblues.git
cd daniblues
```

### 2. Environment Configuration

Copy the `.env.example` file and configure your environment variables:

```bash
cp .env.example .env
```

Update the `.env` file with your specific configuration:
- Database connection string (MongoDB URI)
- API URLs
- WhatsApp contact number
- Security keys
- CORS origins

### 3. Backend Setup

Install Python dependencies:

```bash
cd backend
pip install -r requirements.txt
```

Start the backend server:

```bash
# Development
python server.py

# Production (with uvicorn)
uvicorn server:app --host 0.0.0.0 --port 8000
```

### 4. Frontend Setup

Install Node.js dependencies:

```bash
cd frontend
yarn install
```

Start the development server:

```bash
# Development
yarn start

# Build for production
yarn build
```

### 5. Database Setup

Ensure MongoDB is running locally or configure a remote MongoDB connection in your `.env` file.

```bash
# Start MongoDB locally (if installed)
mongod
```

### 6. Running the Application

**Development Mode:**

1. Start MongoDB (if local)
2. Start the backend server (port 8000)
3. Start the frontend server (port 3000)
4. Access the application at `http://localhost:3000`

**Production Mode:**

1. Build the frontend: `cd frontend && yarn build`
2. Start the backend with uvicorn: `uvicorn server:app --host 0.0.0.0 --port 8000`
3. Serve the frontend build or use the deployment configuration

### 7. Testing

```bash
# Backend tests
cd backend
python backend_test.py

# Frontend tests (if configured)
cd frontend
yarn test
```

## Services

- **Professional Haircuts**: Expert haircuts tailored to your style
- **Brazilian Hair Treatments**: Premium treatments for restoration
- **Lowell Product Sales**: High-quality hair care products
- **Online Hair Analysis**: Professional consultation services

## Contact

- **Location**: Edinburgh / Bathgate, Scotland
- **Phone**: +44 7403477724
- **WhatsApp**: Available for booking
- **Social Media**: Instagram and Facebook links

## License

© 2024 Dani Blues Hair & Beauty. All rights reserved.
