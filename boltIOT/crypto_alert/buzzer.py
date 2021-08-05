import time
import alert
from boltiot import Bolt
api_key = "af75e60d-1600-4152-872d-ac60f9ad3982"
device_id  = "BOLT8023410"
mybolt = Bolt(api_key, device_id)
responsee = mybolt.isOnline()
print (responsee)



while True:
    price =  alert.get_doge_price()
    print(price)
    if price < 15:
       mybolt.digitalWrite('0', 'HIGH')
       time.sleep(5)
    mybolt.digitalWrite('0', 'LOW')
    time.sleep(5)
