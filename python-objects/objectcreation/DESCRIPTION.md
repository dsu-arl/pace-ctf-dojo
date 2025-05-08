# Object Creation

Creating an object in Python is simple. You define a class using the class keyword. A class acts as a blueprint for creating objects. You can give an object specific attributes (variables) and methods (functions) that define its behavior.

Here’s an example of a basic class:

```python
class MyClass:
    def __init__(self):
        self.my_attribute = 5
 
    def my_method(self):
        print(self.my_attribute)
```
Let's break it down:

- `class MyClass` defines a new class called `MyClass`. The class name can be anything you like.

- `__init__(self)` is a special method that runs when you create an instance of the class, which is known as an **object**. It sets up the object's initial state.

- `self` refers to the specific instance of the class. You use it to store and access attributes and methods tied to that instance.

- `my_method(self)` is a method (essentially a function) attached to the class. It can access the object's attributes using self.

Challenge:

Create a Car class.

Give it a fuel attribute of 50.

Add a go method that subtracts 1 from the fuel attribute each time it's called.

👉 Run /challenge/verify <your_python_file> to check your solution!
