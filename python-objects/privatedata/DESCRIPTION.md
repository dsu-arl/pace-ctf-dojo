# Private Data

To understand this next topic, let's take a look back at the basics of Object-Oriented Programming! Remember, objects are first written as classes. These classes can be used by anyone to create instances of objects. Someone using these classes will have access to the various attributes and methods we program into our classes.

In our classes so far, every piece of them has been "public". This means that whoever is using our class in their code can access every attribute and method inside our class. This is okay for the small classes we have been writing. Though, sometimes, we want to have methods or attributes that the user can't directly access.

For example, let's say we have a class that represents a bank account:

```python
class BankAccount:
    def __init__(self, owner, initial_balance):
        self.owner = owner
        self.balance = initial_balance 

    def deposit(self, amount):
        if amount > 0:
            self.balance += amount
            print(f"Deposited ${amount}")
        else:
            print("Deposit must be positive")

    def withdraw(self, amount):
        if 0 < amount <= self.__balance:
            self.balance -= amount
            print(f"Withdrew ${amount}")
        else:
            print("Insufficient funds or invalid amount")

    def get_balance(self):
        return self.balance

```

In this example, we have programmed this class in the exact same way as our previous ones. Everything is public. This can pose a huge problem! When we give this class to a user, they're able to directly access the `balance` attribute. This means they can change the account balance to whatever they want without using the `deposit` method to add money! 

For example:

```python
my_account = BankAccount("Chase", 1337)

# I can still use the deposit method as normal...
my_account.deposit(400)

# But I can also just make myself exceedingly rich without it.
my_account.balance = 500000000
```

This doesn't do a good job of modeling a true bank account. We don't want the user to be able to directly access the `balance` attribute. How do we do that? To make an attribute, or method, private within a class, we add two underscores (`__`) to the start of its name. So the new class defintion would look like this:

```python
class BankAccount:
    def __init__(self, owner, initial_balance):
        self.owner = owner
        self.__balance = initial_balance  # private attribute

    def deposit(self, amount):
        if amount > 0:
            self.__balance += amount
            print(f"Deposited ${amount}")
        else:
            print("Deposit must be positive")

    def withdraw(self, amount):
        if 0 < amount <= self.__balance:
            self.__balance -= amount
            print(f"Withdrew ${amount}")
        else:
            print("Insufficient funds or invalid amount")

    def get_balance(self):
        return self.__balance
```

Notice that the `balance` method now is called `__balance`. This will tell our python interpreter that we can't actually access that attribute directly. We need to use either the `withdraw` or the `deposit` methods to actually change the value of `__balance`. If we tried to access `__balance` directly , we would get an `AttributeError`.

For this challenge:
1. Write a class called `Car`.
2. Give it a private `fuel` attribute, and set it to 0.
3. Add a method called `add_fuel` that adds 10 to your `fuel` variable when it is called.
4. Add a method called `drive` that takes in a number representing miles.
	- For each mile you travel, you lose 3 fuel. 
	- Make sure to add checks so that if you are unable to expend exactly 3 fuel, you cannot drive.
5. Add a method called `fuel_gauge` that returns value of the fuel variable that the car has.

Run `/challenge/verify <your_python_file>` to verify your code and get the flag!
