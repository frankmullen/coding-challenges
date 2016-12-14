from tweepy import Stream
from tweepy import OAuthHandler
from tweepy.streaming import StreamListener

CONSUMER_KEY = '5iAHR2qnaAfRwAVGTkPPf2ce1'
CONSUMER_SECRET = 'P9ELBB8hDQvHWgIvgyGGXwaiqKfnnS9ZsWgTuTL49DX1n782iS'
OAUTH_TOKEN = '157667845-K6LblGInIKvmI3XQQilUb1dWP9lWGAbxh3l9rXG7'
OAUTH_TOKEN_SECRET = 'IqlrqgY3iCneXmkT0VqZwr741EJN19h5o8B7V9NKPbiad'

keyword_list = ['kanye', 'rogueone', 'c#', 'ruby']  # track list


class MyStreamListener(StreamListener):
    def on_data(self, data):
        try:
            with open('tweet_mining.json', 'a') as tweet_file:
                tweet_file.write(data)
                return True
        except BaseException as e:
            print "Failed on_data: %s" % str(e)
        return True

    def on_error(self, status):
        print status
        return True


auth = OAuthHandler(CONSUMER_KEY, CONSUMER_SECRET)
auth.set_access_token(OAUTH_TOKEN, OAUTH_TOKEN_SECRET)

twitter_stream = Stream(auth, MyStreamListener())
twitter_stream.filter(track=keyword_list)