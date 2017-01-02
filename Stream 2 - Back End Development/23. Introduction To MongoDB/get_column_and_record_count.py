import pymongo

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
coll.drop()  # remove the collection
docs = [{"name": "Code", "surname": "Institute", "twitter": "@codersinstitute"},
        {"name": "Stephen", "surname": "Fry", "twitter": "@stephenfry"},
        {"name": "Stephen", "surname": "Dedalus", "twitter": "@stephend"}]
coll.insert_many(docs)
results = coll.find({"name": "Stephen"})
print results.count()  # 2
print coll.count()  # 3