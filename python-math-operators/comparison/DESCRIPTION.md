Programming involves alot more than just doing math on numbers. Another important aspect to programming is comparison. Comparison Operators return `True` or `False` based on the comparison being made. We will cover this in more detail later, but for now understanding how they look and what they return is important. The following **Comparison Operators** are important to know:

| Operator | Name | Example |
|---|---|---|
| == | Equal | `a==b`, returns `true` if `a` is the same as `b` |
| != | Not Equal | `a!=b`, returns `true` if `a` is not the same as `b` |
| > | Greater Than | `a>b`, returns `true` if `a` is greater than `b` |
| < | Less Than | `a<b`, returns `true` if `a` is less than `b` |
| >= | Greater Than or Equal to | `a>=b`, returns `true` if `a` is greater than or equal to `b` |
| <= | Less Than or Equal to | `a<=b`, returns `true` if `a` is less than or equal to `b` |

Comparison Operators also leads us to a new data type! These comparisons return a **boolean** result. Boolean variables can be either `True` or `False` - only one or the other at any given time. 
This means that instead of resulting in an integer or a float, comparisons result in a boolean or `bool`. You can treat this result like a normal variable - you can store it, print it, and update it.

```python
x = int(input("Enter a number: "))
res = x > 0 # use a variable to store result
print("Checking if number is positive: ", res)
print("Checking if number is negative: ", x < 0) # print result without storing
print("Checking if number is 0: ", x == 0)
```

Here are some examples of what the output might look like...
```
Enter a number: 5
Checking if number is positive:  True
Checking if number is negative:  False
Checking if number is 0:  False
```
```
Enter a number: -8
Checking if number is positive:  False
Checking if number is negative:  True
Checking if number is 0:  False
```
```
Enter a number: 0
Checking if number is positive:  False
Checking if number is negative:  False
Checking if number is 0:  True
```

#### Challenge:
Use python to read two numbers from the user and detect if the first number is smaller than the second.

1. Create a new file with the file extension `.py`
2. Write the python code to read in two numbers from a user
3. Use **comparison operators** to print **True**, if the first number is less than or equal to the second number. If this is not the case, print **False**

**Example 1:**
```
First number: 4
Second number: 8
Checking if first number is less than or equal to second:  True
```
**Example 2:**
```
First number: 23
Second number: 2
Checking if first number is less than or equal to second:  False
```
4. Test your code with `python yourFile.py`
5. Verify your solution with `verify yourFile.py`
