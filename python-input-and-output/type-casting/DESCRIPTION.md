***Input is only stored in strings, but how do we do math on strings?***
For example, how would we add 7 to the user's age? With the knowledge we've gained so far, we may try something like this:
```python
age = input("Enter your age: ")
future_age = age + 7
print("Age in the future", future_age)
```

Unfortunately, if you were to run the code above you would likely encouter a `TypeError`. 
This is because Python does not have the ability to do math on strings. So if you're expecting the user to input a numeric value, it will have to be converted from a group of _characters_ into a _number_, which can then be used throughout the rest of the program. Thankfully, Python allows "type casting" and makes this process very easy. 
In the example above, we can most likely assume that `age` is an integer (a whole number) and the input we get from the user will need to be an integer. To convert `age` from the input string to an integer/numberical value, you can simply "cast" it to an integer using the `int()` function. 
The `int()` function takes a string variable, and gives you the integer value stored in that string.

```python
age = input("Enter your age: ") # read in as a string
age = int(age) # type cast to an int
future age = age + 7 # do some math
print("Age in the future", future_age) # print updated value
```

A shorter way to type the same thing:
```python
# read in as a string, then immediately cast to an int
age = int(input("Enter your age: ")) 
future_age = age + 7
print("Age in the future", future_age)
```

Python will let you type cast to other data types as well. The ones you should be concerned about are `int()`, `float()`, and `str()`. 

#### Challenge:
Use python to calculate a users age + 7

1. Create a new file with the file extension `.py`
2. Write python to accept an integer from user input that represents their age
3. Write the python code to calculate their age in 7 years and prints the resulting number
```bash
# Example Running of the program
python yourScript.py
What is your age: 15
22
```
4. Test your code with `python yourFile.py`
5. Verify your solution with `verify yourFile.py`
