import requests
import sys
from datetime import datetime

class SimpleAPITester:
    def __init__(self, base_url="https://c4d09356-fb22-4235-9a92-6df4a3a763a5.preview.emergentagent.com"):
        self.base_url = base_url
        self.tests_run = 0
        self.tests_passed = 0

    def run_test(self, name, method, endpoint, expected_status, data=None):
        """Run a single API test"""
        url = f"{self.base_url}/{endpoint}"
        headers = {'Content-Type': 'application/json'}

        self.tests_run += 1
        print(f"\n🔍 Testing {name}...")
        print(f"URL: {url}")
        
        try:
            if method == 'GET':
                response = requests.get(url, headers=headers, timeout=10)
            elif method == 'POST':
                response = requests.post(url, json=data, headers=headers, timeout=10)

            success = response.status_code == expected_status
            if success:
                self.tests_passed += 1
                print(f"✅ Passed - Status: {response.status_code}")
                try:
                    response_data = response.json()
                    print(f"Response: {response_data}")
                except:
                    print(f"Response: {response.text[:200]}")
            else:
                print(f"❌ Failed - Expected {expected_status}, got {response.status_code}")
                print(f"Response: {response.text[:200]}")

            return success, response.json() if success and response.headers.get('content-type', '').startswith('application/json') else {}

        except Exception as e:
            print(f"❌ Failed - Error: {str(e)}")
            return False, {}

    def test_root_endpoint(self):
        """Test root API endpoint"""
        return self.run_test(
            "Root API Endpoint",
            "GET",
            "api/",
            200
        )

    def test_create_status_check(self):
        """Create a status check"""
        test_data = {
            "client_name": f"test_client_{datetime.now().strftime('%H%M%S')}"
        }
        success, response = self.run_test(
            "Create Status Check",
            "POST",
            "api/status",
            200,
            data=test_data
        )
        return success, response

    def test_get_status_checks(self):
        """Get all status checks"""
        return self.run_test(
            "Get Status Checks",
            "GET",
            "api/status",
            200
        )

def main():
    print("🚀 Starting Backend API Tests...")
    print("=" * 50)
    
    # Setup
    tester = SimpleAPITester()

    # Test root endpoint
    success, _ = tester.test_root_endpoint()
    if not success:
        print("❌ Root endpoint failed - this might indicate server issues")

    # Test create status check
    success, response = tester.test_create_status_check()
    if success:
        print(f"✅ Successfully created status check with ID: {response.get('id', 'N/A')}")
    else:
        print("❌ Status check creation failed")

    # Test get status checks
    success, response = tester.test_get_status_checks()
    if success:
        status_checks = response if isinstance(response, list) else []
        print(f"✅ Successfully retrieved {len(status_checks)} status checks")
    else:
        print("❌ Status check retrieval failed")

    # Print final results
    print("\n" + "=" * 50)
    print(f"📊 Backend API Test Results:")
    print(f"Tests passed: {tester.tests_passed}/{tester.tests_run}")
    
    if tester.tests_passed == tester.tests_run:
        print("🎉 All backend tests passed!")
        return 0
    else:
        print("⚠️  Some backend tests failed")
        return 1

if __name__ == "__main__":
    sys.exit(main())