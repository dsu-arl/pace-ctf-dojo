**Function arguments** are the values or variables passed into a function when it is called. You can define what is to be passed when calling your function and the function's behavior will often depend on the arguments passed. This adds a new rule to our function definition:
-  Any parameters or arguments should be placed within the function definition's parentheses

While defining a function, you specify a list of variables within the parentheses (these are referred to as **parameters**). These parameters act as a placeholder for the data that will be passed to the function when it is called. When the function is called, value to each of these parameters must be provided and can be used just like any other variable, but are referred to by the parameter name. The values provided are known as **arguments**. 

**Example:**
```
def greeting(name):
	print("Hello {}".format(name))
  return
  
greeting("Batman")
greeting("Brandon")
greeting("Chris")
```
Running this code will produce the following output:
```
Hello Batman
Hello Brandon
Hello Chris
```

Python supports mainy different types of Function Arguments, but the one we will cover in-depth is **Positional/Required** arguments. This is nothing new, as what we just wrote is considered a positional or required argument. They are called this, because the function cannot execute unless every parameter listed gets an argument in the correct positional order. Let's look at another example:
```
def printInfo(name, age):
	print("Name: ", name)
  print("Age: ", age)
  
printInfo("Brandon", 14)
printInfo("Chris")
```
Executing this code will print the following:
```
Name: Brandon
Age: 14
Traceback (most recent call last):
	File "test.py", line 6, in <module>
  	printInfo();
TypeError: printInfo() takes exactly 2 arguments (1 given)
```
From this we can see the first function call worked as expected because every parameter was passed in the correct order. The second one did not, as we did not pass anything for `age` and that is a required parameter.


#### Challenge:
Use python to write a basic calculator function

1. Create a new file with the file extension `.py`
2. Write python to accept two integers from the user
3. Write python, using a function, that requires three parameters: number1, number2, and operation. 
   1. Your calculator should support these operations: add, subtract, multiply, divide
   2. Print the result or an error message if the user attempts division by zero
4. Call this function once for each supported operation

```bash
# Example Running of the program
python yourScript.py
Number 1: 13
Number 2: 12
25
1
156
1.08
```
5. Test your code with `python yourFile.py`
6. Verify your solution with `verify yourFile.py`