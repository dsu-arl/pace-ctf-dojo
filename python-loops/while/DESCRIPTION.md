**While loops** will repeat whatever is in the loop block *while* a given condition is `True`. It checks the conditional every iteration before executing the loop block. As soon as the condition is `False`, the program control passes to the line immediately following the loop.

If it fails to turn `False`, the loop continues to run and will not stop unless forced to stop. Such loops are called infinite loops, and are not ideal in a compute program.

#### Syntax of a Python while loop:
```
while EXPRESSION:
	# statement(s) to run will EXPRESSION evaluates to True
```

**Example of a Python while loop:**
```
count = 0
while count < 5:
	count = count + 1
  print("Iteration number {}".format(count))

print("End of while loop")
```

#### Challenge:
Use python to write a Count Down program

1. Create a new file with the file extension `.py`
2. Write python to accept an integer from the user
3. Write a program that then counts down from the given number to 1, printing each number on a newline
4. The program should stop when it reaches 1 and then print "Blast Off!"

```bash
# Example Running of the program
python yourScript.py
Enter A Number: 5
5
4
3
2
1
Blast Off!
```

5. Test your code with `python yourFile.py`
6. Verify your solution with `verify yourFile.py`
