import time
import alert
from boltiot import Bolt
api_key = ""
device_id  = ""
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
