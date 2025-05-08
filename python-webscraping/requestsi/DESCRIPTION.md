# GET requests

A GET request is the most common internet request ever sent. Anytime you browse to a webpage on the internet, say 'www.google.com', your browser will send a GET request to the google servers. Your browser is basically asking the google servers "Hey, can I GET the data at www.google.com?", the server then processes that GET request and sends you over the data you ask for. This data comes to your browser as HTML/CSS markup that your browser then reads and renders into the famous search page we all know and love.

This all happens when we type a website in our url and hit enter, that's easy enough, but how do we send a GET request with python?

## Python Requests Library

If you're familiar with Python you may know that it has access to a large quantity of 'libraries' that users can integrate into their own code. These libraries provide functionality that extends Python in useful ways. For instance, the 'math' library gives the user access to more advanced mathematical operations. Here we will be utilizing a library called 'requests'. This extends Python's capabilities to be able to perform web requests!

Now, the 'math' library comes included with Python when you first install it, 'requests' does not. In a normal environment you would have to install 'requests' yourself by running the command `pip install requests`. However, in this environment 'requests' is already installed for you!

In this challenge you will have to use python to send a `GET` request to `http://localhost`

Use this example to perform your GET request:
```python
# Import the requests library so we can use it
import requests

# Create a variable named response to store the data we
# receive from calling requests.get
response = requests.get(ENTER YOUR URL HERE)

# Print the website data we were sent back
print(response.text)
```
