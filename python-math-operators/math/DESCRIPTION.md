Now that you know how to get input from a user, you need to learn how to do things with that input. The first thing we are going to cover is math operators. Python supports many different **Math Operators**, the following are what we care about right now:

| Operator | Name | Example |
|---|---|---|
| + | Addition | `a+b` |
| - | Subtraction | `a-b` |
| * | Multiplication | `a*b` |
| / | Division | `a/b` |
| % | Modulus | `a*b` |
| ** | Exponent | `a**b` |
| // | Floor Division | `a//b` |

You likely have used every operator before - besides Modulus and Floor Division. Modulus is like division, but returns the remainder. For example, `4%2` would return 0 since `2` can fit into `4` exactly twice (with a remainder of 0). What would `5%2` return? 

Floor division is rather straight forward. It is just like division, but will round down if there is a remainder. For example, `5//2` would return `2`, whereas `5/2` would return `2.5`. 

Here is an example of how you might use these math operators...
```python
# add 2 numbers together
x = int( input("Enter your first number: ") )
y = int( input("Enter your second number: ") )

sum = x + y
print("{} + {} = {}".format(x, y, sum))
```

The output will look like this:
```bash
# example output
Enter your first number: 4
Enter your second number: 5
4 * 5 = 20
```

#### Challenge:
Use python to let the user enter a number and detect if that number is odd or even. Your program should print `0` for even and `1` for odd.

1. Create a new file with the file extension `.py`
2. Write the python code to get a number from the user (Don't forget to typecast)
3. Use modulus to show if the number is odd or even. Your program should print `0` for even and `1` for odd. *(Remember even numbers are always divisible by two)*
```bash
# example output
Please enter a number: 5
1
```

```bash
# example output
Please enter a number: 8
0
```
4. Test your code with `python yourFile.py`
5. Verify your solution with `verify yourFile.py`
