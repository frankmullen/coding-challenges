import pymongo
import datetime
from datetime import timedelta
def mongo_connect():
   try:
       conn = pymongo.MongoClient()
       print "Mongo is connected!"
       return conn
   except pymongo.errors.ConnectionFailure, e:
       print "Could not connect to MongoDB: %s" % e
conn = mongo_connect()
db = conn['twitter_stream']
coll = db.my_collection
coll.drop()  # remove the collection to avoid duplicates when testing
docs = [{"name": "Code", "surname": "Institute", "twitter": "@codersinstitute",
        "date": datetime.datetime.utcnow()},
       {"name": "Stephen", "surname": "Fry", "twitter": "@stephenfry",
        "date": datetime.datetime.utcnow() - timedelta(days=2)},
       {"name": "Stephen", "surname": "Dedalus", "twitter": "@stephend",
        "date": datetime.datetime.utcnow() + timedelta(days=10)},
       {"name": "Armand", "surname": "Tanzarian", "twitter": "@armandt",
        "date": datetime.datetime.utcnow() - timedelta(days=10), "_id": "22"}]
coll.insert_many(docs)
date = datetime.datetime.utcnow()
for doc in coll.find({"date": {"$lt": date}}).sort("name"):  # see  also -  $lte, $gte, $ne
   print doc