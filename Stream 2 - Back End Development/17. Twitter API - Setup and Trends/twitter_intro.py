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

#DUB_WOE_ID = 560743
LON_WOE_ID = 44418
LA_WOE_ID = 2442047

#dub_trends = api.trends_place(DUB_WOE_ID)
lon_trends = api.trends_place(LON_WOE_ID)
la_trends = api.trends_place(LA_WOE_ID)

#dub_trends_set = set([trend['name']
 #                     for trend in dub_trends[0]['trends']])

lon_trends_set = set([trend['name']
                      for trend in lon_trends[0]['trends']])
la_trends_set = set([trend['name']
                      for trend in la_trends[0]['trends']])


common_trends = set.intersection(la_trends_set, lon_trends_set)

print common_trends

