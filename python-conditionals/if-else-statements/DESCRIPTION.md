An **if-else statement** operates similarily to an `if` statement, except it provides an additional block of code to run if the conditional evaluates to `false`.

#### Python `if-else` statement syntax:
```
if EXPRESSION:
	# statement(s) to be executed if EXPRESSION is true
else:
	# statement(s) to be executed if EXPRESSION is false
```
If the expression evalues to `true`, then the statement(s) inside of the `if` block are executed. If the expression evaluates to `false`, then the code inside of the `else` block are executed.

**Example of Python `if-else` statement:**
```
age = 25
print("age: ", age)

if age >= 18:
	print("Eligible to Vote!")
else:
	print("Not Eligible to Vote!")
```

#### Challenge:
Use python to determine if a number is even or odd

1. Create a new file with the file extension `.py`
2. Write python to accept an integer from user input
2. Write the python code to determine if the number entered is even or odd
```bash
# Example Running of the program
python yourScript.py
Enter a number: 15
15 is odd
```
3. Test your code with `python yourFile.py`
4. Verify your solution with `verify yourFile.py`