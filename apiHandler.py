# intergrated python script to handle the API calls to Runway and if pika wants to run it, it can be added in the future
import sys
import requests
import json

# API endpoints
# PIKA_API_URL = "Put the Pika API, but it didnt work in time" 
RUNWAY_API_URL = "Put that lovely Runway API here"

def call_runway_api(api_key, input_data):
    headers = {
        "Authorization": f"Bearer {api_key}",
        "Content-Type": "application/json",
    }
    response = requests.post(RUNWAY_API_URL, headers=headers, json=input_data)
    if response.status_code == 200:
        return response.json()
    else:
        raise Exception(f"Runway API error: {response.status_code} - {response.text}")

if __name__ == "__main__":
    # Parse command-line arguments
    args = json.loads(sys.argv[1])
    api_key = args["api_key"]
    platform = args["platform"]
    input_data = args["input_data"]

    try:
        if platform == "runway":
            result = call_runway_api(api_key, input_data)
        else:
            raise ValueError("Invalid platform specified")

        # Return the result as JSON
        print(json.dumps(result))
    except Exception as e:
        print(json.dumps({"error": str(e)}))