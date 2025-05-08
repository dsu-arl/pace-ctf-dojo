Programming is so much more than printing things to the screen. We also need to learn how to store information and use it throughout the program: this can be accomplished with variables.

Variables allow us to store data in our programs, and use it to compute results! You can imagine a variable as a box that can hold a single value at a time. All variables need a name, this is how we can access them to store/process data.

Python makes using variables super simple, as it doesn't care about defining the type of the variable. That is to say, you give python what you want to store and it just handles it, whereas some languages require you to explicitly declare what type it is beforehand.

For the sake of this lesson we only care about Integers (whole numbers), Floats (decimal point numbers), and Strings (words/sentences). Here is how we declare each:
```python
counter = 1000          # creates an integer numeric variable
total = 1024.67		    # creates a float numeric variable
name = "The Rizzler" 	# creates a string variable
```
Later we will learn how to use these variables throughout the program, but for now we are only concerned about declaring them correctly. The easiest way to verify that you created your variables correctly is to print them to the screen. Again, Python makes this super easy. We will use the same method (`print()`) we used in the Printing Text challenge, but pass the variables into it instead of hardcoding a string. This allows us to display the contents of our variables to the user.

#### Variable Syntax:
```python
[VARIABLE_NAME] = [DATA_TO_STORE]

print([VARIABLE_NAME])
```
To print the variables declared above:
```python
# Print each variable to the screen
print(counter)
print(total)
print(name)
```
Try printing out your variables, and verify that they are exactly the same as what you assigned them to in your program. 



#### Challenge:
Use python to create 3 variables. They can have any name, and any data stored in them. Maybe try saving your name, age, and GPA! 
After creating and storing data in them, print them all out!

1. Create a new file with the file extension `.py`
2. Write python to create 3 variables and print them to the screen
3. Test your solution with `python yourFile.py`
4. Verify your solution with `verify yourFile.py`
