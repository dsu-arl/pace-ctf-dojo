In the last challenge you practiced finding generic HTML tags. In this challenge we will practice getting tags that have a specific "class" and "id" identifier attached to them. This looks very similar to how we got our tags. Now, instead of supplying the particular tag we want to find ('p', 'a', 'span', etc.) we will supply the name of the class and id we want to find. However, we need to let Python know that we're looking for a class or id, and we do this by using the CSS syntax used to identify them. This means when we are searching for a class name of "button" we will pass the string ".button", where the '.' denotes a class. If we want to identify a tag with the ID "submit" we will pass the string "#submit", where the '#' denotes we are looking for an ID.

In this challenge you will need to find out how many tags belong to the "secret" class. You will also need to get the content of the tag that has an id of "findme". You will then send your answer as a POST request with the following data:
```python
{'answer1': NUMBER OF TAGS WITH SPECIFIC CLASS, 'answer2': STRING FROM TAG WITH SPECIFIED ID}
``` 

Get to it!
