# Instances

So, you learned how to write a class. That's great! But how do you actually use them?

This is where the terminology of *instances* comes in. When you write a class, you have just written the underlying logic of how an object can function, you haven't actually created that object. You need to *instantiate* it, or create an instance of your class.

Let's say you have the following `Employee` class, and they're allowed to clock in and clock out. They also have various attributes.

```python
class Employee:

    def __init__(self):
        self.employee_id = 34
        self.title = "Programmer"
        self.salary = 90000
        self.working = False

    def clock_in(self):
        self.working = True

    def clock_out(self):
        self.working = False
```

How do we make an instance of the employee class and actually use the code? It's simple!

```python
employee1 = Employee()
employee2 = Employee()
employee3 = Employee()
```

In the code above, we created THREE different instances of the employee class. This means we now have three Employee objects that we can use in our code.

If we want to utilize the methods or attributes in our class we can invoke them like this:

```
employee1.check_in()

employee2.check_out()

print(employee3.title)
```

Here, you can see that even though the `check_in` and `check_out` methods have the parameter `self` in our class code, we don't actually pass anything into the method when we call it. This is because `self` just tells the method to reference the instance it belongs to. This gives the method access to everything inside the object.

To complete this challenge and get a flag you must:
1. Create a class called `Dog`.
2. Give it an attribute called `is_sitting` and set it to `False` by default.
3. Create a method called `sit` that sets the attribute `is_sitting` to `True`.
4. Create an instance of your `Dog` class and call the `sit` method. 
5. Print out the `is_sitting` attribute of your Dog instance to make sure it says `True` after calling `sit`.

After you have written that, run `/challenge/verify <your_python_file>` to verify your code and receive the flag!
