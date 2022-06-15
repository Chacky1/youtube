import requests
import time

email = "toto@toto.fr"
passwordFound = ""

def requestBackend(email, password) :
  uri = "http://localhost:3000/api/auth/login"
  bodyInformation = {
    'email': email,
    'password': password
  }
  req = requests.post(url = uri, headers = {'Content-Type': 'application/json'}, json = bodyInformation)
  print("{0} : {1}".format(password, req.status_code))
  if (req.status_code == 200) :
    global passwordFound 
    passwordFound = password

with open("password-list.txt") as file:
  lines = file.read().splitlines()
  for line in lines:
    requestBackend(email, line)
    time.sleep(1)

print("Le mot de passe de {0} est : {1}".format(email, passwordFound))