import sys
import requests
import json
import os
import logging

logging.basicConfig(level=logging.INFO)

RUNWAY_API_URL = os.getenv("RUNWAY_API_URL")

def call_runway_api(api_key, input_data):
    headers = {
        "Authorization": f"Bearer {api_key}",
        "Content-Type": "application/json",
    }
    try:
        response = requests.post(RUNWAY_API_URL, headers=headers, json=input_data)
        response.raise_for_status()
        return response.json()
    except requests.exceptions.RequestException as e:
        logging.error(f"Runway API error: {e}")
        raise

if __name__ == "__main__":
    try:
        if len(sys.argv) < 2:
            raise ValueError("Missing required command-line argument.")

        args = json.loads(sys.argv[1])
        
        if not isinstance(args, dict):
            raise ValueError("Invalid JSON format in argument.")

        api_key = args.get("api_key")
        platform = args.get("platform")
        input_data = args.get("input_data")

        if not api_key or not platform or input_data is None:
            raise ValueError("Missing required fields in input JSON.")

        if platform == "runway":
            result = call_runway_api(api_key, input_data)
        else:
            raise ValueError("Invalid platform specified")

        print(json.dumps(result))
    
    except Exception as e:
        logging.error(f"Error: {e}")
        print(json.dumps({"error": str(e)}))
