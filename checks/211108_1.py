from requests import post

url = 'http://localhost:8000/api/token/'
user_cred = {'username': 'kpk', 'password': 'pass'}
response = post(url, data=user_cred)
resp_data = response.json()
print(resp_data)


{'refresh': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY0MDQzODI5NCwiaWF0IjoxNjQwMzUxODk0LCJqdGkiOiI2NjUzY2QyOTc0MDk0OGE0YjU0ZWY5ZjI0YmQ3Yzg5YSIsInVzZXJfaWQiOjF9.oXbYiKQ4kmImMWf4HvRa2Td-kSTPLS5Cb1mV4HYkJJQ',
 'access': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjQwMzUyMTk0LCJpYXQiOjE2NDAzNTE4OTQsImp0aSI6ImZlZDgxMzc4MDBiNjQyMmRhMGU1ZDBiYTg3NGQwNTRhIiwidXNlcl9pZCI6MX0.97a7M1-FlMM2oxMpmTVkHyqeXvo_KZRW7LaPE8c7H6o'}