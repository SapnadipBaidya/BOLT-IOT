import requests
import json, time
from boltiot import Bolt
api_key = "af75e60d-1600-4152-872d-ac60f9ad3982"
device_id  = "BOLT8023410"
mybolt = Bolt(api_key, device_id)
def get_doge_price():
   time.sleep(30)
   URL = "https://min-api.cryptocompare.com/data/price?fsym=DOGE&tsyms=USD,JPY,EUR,INR" # REPLACE WITH CORRECT URL
   response = requests.request("GET", URL)
   response = json.loads(response.text)
   current_price = response["INR"]
   return current_price

