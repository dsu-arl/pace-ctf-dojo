# POST requests

A POST request is one of the most commonly used HTTP methods for sending data to a server. Instead of asking for information (as in a GET request), a POST request sends data to the server to be processed. This is typically used when you submit a form on a website, such as logging in, creating a new account, or posting a comment. For instance, when you fill in your details and hit "Sign Up" on a website, your browser sends a POST request to the server with all your information.

Think of a POST request as saying, "Here’s some data; please handle it." The server receives the data, processes it (maybe saves it in a database), and often sends back a response to confirm that the data was received successfully or to give you more information.

In python, you will need to specify your POST data using a dictionary. You will also need to utilize the post method in the requests library as follows:

```python
# Import the requests library so we can use it
import requests

# Create POST data dictionary
data = {'username': 'wkiffin', 'password': 'Password1!'}

# Create a variable named response to store the data we
# receive from calling requests.post. Pass our data through
# the 'json' argument
response = requests.post(ENTER YOUR URL HERE, json=data)

# Print the website data we were sent back
print(response.text)
```

In this challenge, you have to send a POST request to `http://localhost` with any data you want.
