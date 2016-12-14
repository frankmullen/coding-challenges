import json
import tweepy
from tweepy import OAuthHandler

CONSUMER_KEY = '5iAHR2qnaAfRwAVGTkPPf2ce1'
CONSUMER_SECRET = 'P9ELBB8hDQvHWgIvgyGGXwaiqKfnnS9ZsWgTuTL49DX1n782iS'
OAUTH_TOKEN = '157667845-K6LblGInIKvmI3XQQilUb1dWP9lWGAbxh3l9rXG7'
OAUTH_TOKEN_SECRET = 'IqlrqgY3iCneXmkT0VqZwr741EJN19h5o8B7V9NKPbiad'

auth = OAuthHandler(CONSUMER_KEY, CONSUMER_SECRET)
auth.set_access_token(OAUTH_TOKEN, OAUTH_TOKEN_SECRET)

api = tweepy.API(auth)

count = 10
query = 'Dublin'

# Get all status
results = [status for status in tweepy.Cursor(api.search, q=query).items(count)]
print json.dumps(results[0]._json, indent=4)

for status in results:
    print status.text.encode('utf-8')
    print status.user.id
    print status.user.screen_name
    print status.user.profile_image_url_https
    print status.user.followers_count
    print status.place


