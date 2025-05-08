Python also supports **nested conditional statements** which means we can use an `if` or `if-else` statement inside of an existing `if` or `if-else` statement.

#### Python Nested Conditional Statement Syntax:
```
if EXPRESSION1:
	# statement(s) to be executed if EXPRESSION1 is true
  if EXPRESSION2:
  	# statement(s) to be executed if EXPESSION1 and EXPRESSION2 is true
```

**Example of Python Nested Conditional Statements:**
```
number = 36
print("number= ", number)

if number % 2 == 0:
	if number % 3 == 0:
  		print("Divisible by 3 and 2")
```

Again, nesting isn't just limited to `if` statements. Say we have the following example: We offer different rates of discount on different purchase prices.
	- 20% on amounts exceeding 10000
  	- 10% on amounts between 5000 - 10000
    - 5% on amounts between 1000 - 5000
    - No discounts on amounts under 1000

```
amount = 2500
print("Amount: ", amount)

if amount > 10000:
  discount = amount * 20 / 100
else:
  if amount > 5000:
    discount = amount * 10 / 100
  else:
    if amount  > 1000:
      discount = amount * 5 / 100
    else:
      discount = 0

print("Total: ", amount - discount)
```

#### Challenge:
Use python to write a simple ATM system

1. Create a new file with the file extension `.py`
2. Write python code that gets two integers from the user (current balance, and amount to withdraw)
3. Write a simple python ATM system, using nested conditionals, that can do the following:
   1. If a user requests to withdraw an amount greater than their current balance, print an insufficient funds message
   2. If a user requests to withdraw a negative amount, print an error message
   3. If the user requests to withdraw an amount that is not a multiple of 20, print an error message
   4. If the withdrawal is successful, deduct the amount from the balance and print the new balance
4. Write the python code that print a message indicating the result of the transaction
```bash
# Example Running of the program
python yourScript.py
Balance: 15
Withdraw: 20
Error: Insufficient funds
```

```bash
# Another Example
pyton yourScript.py
Balance: 120
Withdraw: 20
New Balance: $100
```

```bash
# Another Example
pyton yourScript.py
Balance: 120
Withdraw: -20
Error: Withdraw Amount Must Be Positive
```

```bash
# Another Example
pyton yourScript.py
Balance: 150
Withdraw: 45
Error: Withdraw Amount Must Be a Multiple of 20
```

3. Test your code with `python yourFile.py`
4. Verify your solution with `verify yourFile.py`
