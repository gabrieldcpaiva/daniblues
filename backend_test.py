#!/usr/bin/env python3
"""
Backend API Test Suite for Dani Blues Hair & Beauty
Tests all backend endpoints for functionality and error handling
"""

import requests
import json
import sys
from datetime import datetime

# Backend URL from frontend .env
BACKEND_URL = "http://localhost:8001"

def test_health_endpoint():
    """Test GET /api/health endpoint"""
    print("🔍 Testing Health Check Endpoint...")
    try:
        response = requests.get(f"{BACKEND_URL}/api/health", timeout=10)
        
        if response.status_code == 200:
            data = response.json()
            if data.get("status") == "healthy":
                print("✅ Health check passed")
                return True
            else:
                print(f"❌ Health check failed - unexpected response: {data}")
                return False
        else:
            print(f"❌ Health check failed - status code: {response.status_code}")
            return False
            
    except requests.exceptions.RequestException as e:
        print(f"❌ Health check failed - connection error: {e}")
        return False

def test_services_endpoint():
    """Test GET /api/services endpoint"""
    print("\n🔍 Testing Services Endpoint...")
    try:
        response = requests.get(f"{BACKEND_URL}/api/services", timeout=10)
        
        if response.status_code == 200:
            services = response.json()
            
            # Check if we have exactly 4 services
            if len(services) == 4:
                print("✅ Services endpoint returned 4 services")
                
                # Check for expected service IDs
                expected_ids = {"haircuts", "treatments", "products", "analysis"}
                actual_ids = {service.get("id") for service in services}
                
                if expected_ids == actual_ids:
                    print("✅ All expected services present (haircuts, treatments, products, analysis)")
                    
                    # Verify service structure
                    for service in services:
                        if all(key in service for key in ["id", "title", "description", "icon"]):
                            continue
                        else:
                            print(f"❌ Service missing required fields: {service}")
                            return False
                    
                    print("✅ All services have required fields")
                    return True
                else:
                    print(f"❌ Service IDs mismatch. Expected: {expected_ids}, Got: {actual_ids}")
                    return False
            else:
                print(f"❌ Expected 4 services, got {len(services)}")
                return False
        else:
            print(f"❌ Services endpoint failed - status code: {response.status_code}")
            return False
            
    except requests.exceptions.RequestException as e:
        print(f"❌ Services endpoint failed - connection error: {e}")
        return False

def test_contact_form_valid():
    """Test POST /api/contact with valid data"""
    print("\n🔍 Testing Contact Form with Valid Data...")
    
    contact_data = {
        "name": "Sarah Johnson",
        "email": "sarah.johnson@email.com",
        "phone": "+44 7700 900123",
        "message": "Hi Dani, I'm interested in booking a Brazilian hair treatment. Could you please let me know your availability for next week?",
        "service_interest": "treatments"
    }
    
    try:
        response = requests.post(
            f"{BACKEND_URL}/api/contact",
            json=contact_data,
            headers={"Content-Type": "application/json"},
            timeout=10
        )
        
        if response.status_code == 200:
            data = response.json()
            if "message" in data and "id" in data:
                print("✅ Contact form submission successful")
                print(f"   Response: {data['message']}")
                print(f"   ID: {data['id']}")
                return True
            else:
                print(f"❌ Contact form response missing required fields: {data}")
                return False
        else:
            print(f"❌ Contact form failed - status code: {response.status_code}")
            print(f"   Response: {response.text}")
            return False
            
    except requests.exceptions.RequestException as e:
        print(f"❌ Contact form failed - connection error: {e}")
        return False

def test_product_inquiry_valid():
    """Test POST /api/product-inquiry with valid data"""
    print("\n🔍 Testing Product Inquiry with Valid Data...")
    
    inquiry_data = {
        "name": "Emma Thompson",
        "email": "emma.thompson@email.com",
        "phone": "+44 7700 900456",
        "product_name": "Lowell Protein Treatment Mask",
        "message": "I'm interested in purchasing the Lowell protein treatment mask. Could you tell me more about the benefits and how to use it?"
    }
    
    try:
        response = requests.post(
            f"{BACKEND_URL}/api/product-inquiry",
            json=inquiry_data,
            headers={"Content-Type": "application/json"},
            timeout=10
        )
        
        if response.status_code == 200:
            data = response.json()
            if "message" in data and "id" in data:
                print("✅ Product inquiry submission successful")
                print(f"   Response: {data['message']}")
                print(f"   ID: {data['id']}")
                return True
            else:
                print(f"❌ Product inquiry response missing required fields: {data}")
                return False
        else:
            print(f"❌ Product inquiry failed - status code: {response.status_code}")
            print(f"   Response: {response.text}")
            return False
            
    except requests.exceptions.RequestException as e:
        print(f"❌ Product inquiry failed - connection error: {e}")
        return False

def test_contact_form_invalid_email():
    """Test POST /api/contact with invalid email"""
    print("\n🔍 Testing Contact Form with Invalid Email...")
    
    contact_data = {
        "name": "Test User",
        "email": "invalid-email",
        "phone": "+44 7700 900123",
        "message": "Test message",
        "service_interest": "haircuts"
    }
    
    try:
        response = requests.post(
            f"{BACKEND_URL}/api/contact",
            json=contact_data,
            headers={"Content-Type": "application/json"},
            timeout=10
        )
        
        if response.status_code == 422:  # Validation error
            print("✅ Contact form properly rejected invalid email")
            return True
        elif response.status_code == 400:  # Bad request
            print("✅ Contact form properly rejected invalid email (400)")
            return True
        else:
            print(f"❌ Contact form should reject invalid email - got status: {response.status_code}")
            print(f"   Response: {response.text}")
            return False
            
    except requests.exceptions.RequestException as e:
        print(f"❌ Contact form invalid email test failed - connection error: {e}")
        return False

def test_contact_form_missing_required():
    """Test POST /api/contact with missing required fields"""
    print("\n🔍 Testing Contact Form with Missing Required Fields...")
    
    contact_data = {
        "email": "test@email.com"
        # Missing name and message
    }
    
    try:
        response = requests.post(
            f"{BACKEND_URL}/api/contact",
            json=contact_data,
            headers={"Content-Type": "application/json"},
            timeout=10
        )
        
        if response.status_code == 422:  # Validation error
            print("✅ Contact form properly rejected missing required fields")
            return True
        elif response.status_code == 400:  # Bad request
            print("✅ Contact form properly rejected missing required fields (400)")
            return True
        else:
            print(f"❌ Contact form should reject missing fields - got status: {response.status_code}")
            print(f"   Response: {response.text}")
            return False
            
    except requests.exceptions.RequestException as e:
        print(f"❌ Contact form missing fields test failed - connection error: {e}")
        return False

def test_product_inquiry_invalid_email():
    """Test POST /api/product-inquiry with invalid email"""
    print("\n🔍 Testing Product Inquiry with Invalid Email...")
    
    inquiry_data = {
        "name": "Test User",
        "email": "not-an-email",
        "product_name": "Test Product",
        "message": "Test inquiry"
    }
    
    try:
        response = requests.post(
            f"{BACKEND_URL}/api/product-inquiry",
            json=inquiry_data,
            headers={"Content-Type": "application/json"},
            timeout=10
        )
        
        if response.status_code == 422:  # Validation error
            print("✅ Product inquiry properly rejected invalid email")
            return True
        elif response.status_code == 400:  # Bad request
            print("✅ Product inquiry properly rejected invalid email (400)")
            return True
        else:
            print(f"❌ Product inquiry should reject invalid email - got status: {response.status_code}")
            print(f"   Response: {response.text}")
            return False
            
    except requests.exceptions.RequestException as e:
        print(f"❌ Product inquiry invalid email test failed - connection error: {e}")
        return False

def main():
    """Run all backend tests"""
    print("🚀 Starting Dani Blues Hair & Beauty Backend API Tests")
    print(f"📍 Testing backend at: {BACKEND_URL}")
    print("=" * 60)
    
    tests = [
        ("Health Check", test_health_endpoint),
        ("Services Endpoint", test_services_endpoint),
        ("Contact Form (Valid)", test_contact_form_valid),
        ("Product Inquiry (Valid)", test_product_inquiry_valid),
        ("Contact Form (Invalid Email)", test_contact_form_invalid_email),
        ("Contact Form (Missing Fields)", test_contact_form_missing_required),
        ("Product Inquiry (Invalid Email)", test_product_inquiry_invalid_email),
    ]
    
    passed = 0
    failed = 0
    
    for test_name, test_func in tests:
        try:
            if test_func():
                passed += 1
            else:
                failed += 1
        except Exception as e:
            print(f"❌ {test_name} failed with exception: {e}")
            failed += 1
    
    print("\n" + "=" * 60)
    print("📊 TEST RESULTS SUMMARY")
    print("=" * 60)
    print(f"✅ Passed: {passed}")
    print(f"❌ Failed: {failed}")
    print(f"📈 Success Rate: {(passed/(passed+failed)*100):.1f}%")
    
    if failed == 0:
        print("\n🎉 All tests passed! Backend API is working correctly.")
        return True
    else:
        print(f"\n⚠️  {failed} test(s) failed. Please check the issues above.")
        return False

if __name__ == "__main__":
    success = main()
    sys.exit(0 if success else 1)