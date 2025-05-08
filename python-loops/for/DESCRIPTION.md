The **for loop** in Python provides the ability to loop over items in an iterable sequence such as a list or string. 

#### Syntax of a Python For Loop:
```
for VARIABLE in SEQUENCE:
	# statement(s)
```

**Example of a Python For Loop with a List:**
```
numbers = [1, 5, 6, 2, 7, 8, 2, 9, 10]
total = 0

for number in numbers:
	total = total + number
  
print("Total: ", total)
```

**Examples of a Python For Loop with different `range()` Parameters:**
```
'''
Fun tip!
You can use end='' to change how python prints, the default is end='\n' to print a special secret newline character
You won't need to use this for this challenge, we just didn't want you to have to scroll alot to read the example output :)
'''

for number in range(5):
	print(number, end=' ')
print() # Print an empty line

for number in range(10, 20):
	print(number, end=' ')
print() # Print an empty line
  
for number in range(1, 10, 2):
	print(number, end=' ')
print() # Print an empty line
```
Running the code above will output the following:
```  
0 1 2 3 4 
10 11 12 13 14 15 16 17 18 19 
1 3 5 7 9 
```

#### Challenge:
Use python to write a program that prints even number

1. Create a new file with the file extension `.py`
2. Write python to accept a positive integer from the user
3. Write python, using a `for()` loop, that iterates through the range **starting at 0** to the given number
4. **Print only even numbers** up until the user specified number

```bash
# Example Running of the program
python yourScript.py
Enter A Number: 10
2
4
6
8
10
```

5. Test your code with `python yourFile.py`
6. Verify your solution with `verify yourFile.py`
