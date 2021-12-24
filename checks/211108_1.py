from requests import post

url = 'https://localhost:8000/api-token-auth/'
user_cred = {'username': '', 'password': ''}
response = post(url, data=user_cred)
resp_data = response.json()
print(resp_data)
