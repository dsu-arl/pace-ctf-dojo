An **if statement** in Python evaluates if some conditional is `true` or `false`. It contains a logical expression that compares some data (variables, program state, etc.), and a decision is made based on the result of that expression. 

#### Python `if` statement syntax:
```
if EXPRESSION:
	# statement(s) to be executed if EXPRESSION is true
```
If the expression evaluates to `true`, then the statement(s) inside of the `if` block are executed. If the expression evaluates to `false`, then the code inside the `if` block is essentially skipped and the code after the end of the `if` block is executed. 


**Example of Python `if` statement:**
```
discount = 0
total = 1200

if amount > 1000:
	discount = amount * 10 / 100
  
print("Total: {}".format(amount-discount))
```

#### Challenge:
Use python to determine which number is greater than another number. *Remember that if an if statement doesn't evaluate to True, then the inside code doesn't run!*

1. Create a new file with the file extension `.py`
2. Write python code to accept two integers (x, y) from user input
2. Write python code that prints out which number is larger, using `if` statements.
```bash
# Example Running of the program
python yourScript.py
X: 15
Y: 23
23 is greater than 15
```

```bash
# Another Example
python yourScript.py
X: 15
Y: 5
15 is greater than 5
```

3. Test your code with `python yourFile.py`
4. Verify your solution with `verify yourFile.py`
