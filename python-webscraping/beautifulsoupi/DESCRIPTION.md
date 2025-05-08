# Beautifulsoup4

Using the requests library we are capable of getting website information that we can then manipulate in our programs. However, as you witnessed in the third requests challenge, the data we get from websites is filled with HTML tags that taints the data we really want to look at. Thankfully someone created a library called `beautifulsoup4` that allows us to scan through this data, find particular tags, and grab the data we really want.

We are only going to touch the bare surface of `beautifulsoup` in these beginner challenges. To dive deeper visit the [Beautiful Soup Documentation](https://www.crummy.com/software/BeautifulSoup/bs4/doc/) page.

## The Basics
```python
from bs4 import BeautifulSoup

# Create a 'Soup' object that we use to parse HTML
soup = BeautifulSoup(WEBSITE_DATA, 'html.parser')

# We can use this soup object to identify all
# occurances of a particular tag.

links = soup.find_all('a') # This returns a list that contains ALL anchor tags.

# Here is how you could go about scraping all
# of the actual links from those anchor tags.
for link in links:
	print(link.get('href'))

```

NOTE: If Beautiful Soup is not able to find any tags that you specify, it will return None. This allows you to test if you found any tags with the following `if` statement:

```python
if links == None:
	# Code that runs if we DON'T find links
else:
	# Code that runs if we DO find links
```

In your first Beautiful Soup challenge you will need to tell me exactly how many links are in the HTML code that you receive through a GET request. Then through a POST request you will send back the answer as follows `{'answer': <integer>}`, where integer is how many 'a' tags there are.
