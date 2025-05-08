Now, there might be a case in which you need to check multiple expressions to be `true`. If this is the case Python `if-else` statements support an additional way to check an expression - the `elif` block. This works similar to the `else` block, as the `elif` is also optional. However, an `if-else` block can contain only one `else` block, whereas there can be as many `elif` block as necessary following an `if` block.

#### Python `if-elif-else` statement syntax:
```
if EXPRESSION1:
	# statement(s) to be executed if EXPRESSION1 is true
elif EXPRESSION2:
	# statement(s) to be executed if EXPRESSION2 is true
else:
	statement(s) to be executed if EXPRESSION1 and EXPRESSION2 are false
```
The keyword `elif` is a short form of `else if`. It allows the logic to be arranged in a cascade of `elif` statements after the first `if` statement. If the first `if` statement evaluates to `false`, subsequent `elif` statements are evaluated one by one and comes out of the cascade if any one is satisfied. Lastly, the `else` block will be executed only if all the preceding `if` and `elif` conditions fail.

Using the example we covered in the Nested Conditional Section, we can get a simplied `if-else` statement that looks like this:
```
amount = 2500
print("Amount: ", amount)

if amount > 10000:
	discount = amount * 20 / 100
elif amount > 5000:
	discount = amount * 10 / 100
elif amount > 1000:
	discount = amount * 5 / 100
else:
	discount = 0
  
print("Total: ", amount - discount)
```

#### Challenge:
Use python to compare two numbers, printing the comparison result

1. Create a new file with the file extension `.py`
2. Write python to accept two integers (x, y) from user input
2. Write the python code to determine if x is greater than, equal to, or less than y and prints the result
```bash
# Example Running of the program
python yourScript.py
X: 15
Y: 25
x (15) is less than y(25)
```
```bash
# Another Example Running of the program
python yourScript.py
X: 35
Y: 25
x (35) is greater than y(25)
```
```bash
# Example Running of the program
python yourScript.py
X: 15
Y: 15
x (15) is equal to y(15)
```

3. Test your code with `python yourFile.py`
4. Verify your solution with `verify yourFile.py`