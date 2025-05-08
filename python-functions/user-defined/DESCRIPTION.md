Lastly, Python allows you to define your own functions. This is what we care about the most, as it allows you to write code that does a specific task and use it throughout your program. In this module  we will focus on teaching you how to define your own functions (the syntax), how to pass arguments, and return values. 

#### Python Function Syntax:
Python function definition follows these rules:
- Function blocks begin with the keyword `def` followed by the function name, parentheses `()`, and a colon `:`
- The code block then starts and must be indented
- Finally, the statement `return` exits a function

Put that all together and you will get something that looks like this:
```
def FUNCTION_NAME():
	# Function Code Block Starts
  # Statement(s) to be executed
  return
```

Taking what we learned in the very first module, we can write a hello world greeting function. It would look like this:
```
def greeting():
	print("Hello World!")
  return
```
Now that this is created anytime we call the function `greeting`, "Hello World!" will be printed.
This brings up a good point though, how do we call a function?

Defining a function only gives it a name, specifies the parameters that are to be used in the function, and structures the blocks of code to be included in the function. But, you need to be able to use that. The way to call a function is very similar to the way we called some of the built-in functions, like `print()` and `int()`. They are called by simply using the functions name. Using the `greeting()` function above, I will demonstrate how we would call it:
```
# Function Definition
def greeting():
	print("Hello World")
  return
  
# Main Program, we want to call it here
greeting()
```

#### Challenge:
Use python to write a functon that prints the number 1-10

1. Create a new file with the file extension `.py`
2. Write python, using a function, that prints the numbers 1-10
3. Test your code with `python yourFile.py`
4. Verify your solution with `verify yourFile.py`
