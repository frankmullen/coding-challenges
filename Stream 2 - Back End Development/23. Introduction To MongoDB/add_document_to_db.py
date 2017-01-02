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
doc = {"name": "Code", "surname": "Institute", "twitter": "@codersinstitute"}
coll.insert(doc)
result = coll.find_one()
print result
# {u'twitter': u'@codersinstitute', u'_id': ObjectId('5629264db1bae125ac446ba5'), u'surname': u'Institute', u'name': u'Code'}