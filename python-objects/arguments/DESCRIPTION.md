# Arguments

In the past two challenges, you have learned how to create classes, and then use those classes as objects. Since objects are meant to reflect real life "things" there needs to be some customization. Going back to our `Car` class from the first challenge, not EVERY vehicle will have the same fuel count, color, make, model, etc. We could just create different classes for every different combination of these things, but that defeats the whole purpose of a class! Classes are supposed to be basic models of real life things that we can build upon!

One thing that allows us to build upon our basic classes are arguments. Arguments are passed to a class when it is being *instantiated* for the purpose of specifying particular attributes that our unique to our particular instance. Let's use the car as an example.

```python

class Car:

    def __init__(self):
        self.color = "Black"
        self.make = "Dodge"
        self.model = "Viper"
        self.year = 2017
        self.spoiler = None
        self.started = False
        self.driving = False

    def start(self):
        if not self.started:
            self.started = True

    def go(self):
        if self.started and not self.driving:
            self.driving = True

    def stop(self):
        if self.started and self.driving:
            self.driving = False

```

This is a bigger version of our `Car` class. You can see there are many attributes here. Many of them are car agnostic (they are the same for all cars), but a few are not. This class really only works well for representing a Black 2017 Dodge Viper. However, we can rewrite this class so that we can make any car we want. Any make, model, color, and year. Let's see how.

```python

class Car:

    def __init__(self, make, model, year, color):
        self.color = color
        self.make = make
        self.model = model
        self.year = year
        self.spoiler = None
        self.started = False
        self.driving = False

    def start(self):
        if not self.started:
            self.started = True

    def go(self):
        if self.started and not self.driving:
            self.driving = True

    def stop(self):
        if self.started and self.driving:
            self.driving = False

```

You'll notice the changes were made to our `__init__` function. 
1. Our `__init__` function now has more paramters than just `self`. Our initialization function now takes in `make`, `model`, `year`, and `color`. This is how we will pass in that specific infomration.
2. Within `__init__` we are setting our class attributes to the new parameters we are passing to our init function. `self.color = color`, `self.make = make`, etc. It is good convention to name the paramters to our `__init__` function the same as the class attributes we are creating.  

Now this class can be used to represent ANY vehicle we want! But how do we do that? We can specify these particular variables when we are creation instances of our cars! Here are a couple examples of how we may create a couple unique vehicles using the same `Car` class.

```python

viper = Car("Dodge", "Viper", 2017, "Black")
tesla = Car("Tesla", "Model S", 2023, "Gray")

viper.start()
viper.go()
viper.stop()

tesla.start()
tesla.go()
tesla.stop()

```

In the above code, we used our very basic car class to create TWO unqiue car objects that have different attributes that we assigned when we *instantiated* our `Car` class. This allows our classes to remain barebones, with a lot of customization!

For this challenge:
1. Create a `Student` class.
2. Give the `Student` class customizable attributes for their name, age, and gender.
3. Create two unique instances of the `Student` class.
NOTE: You don't need to create any methods for this student class.

Run `/challenge/verify <your_python_file> to verify your code and receive the flag. 
