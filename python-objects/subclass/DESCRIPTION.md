# Sub-classes

Now that you have a basic grasp of classes, we will look at a more advanced technique used in Object-Oriented Programming in Python. 

Let me pose a common problem you may encounter. Let's say you want to create seeral different animal classes. You may have a pig, a horse, and a donkey. These three animals are distinct in many ways, and similar in others. It makes sense to separate them.

However, they all also perform a lot of the same tasks. They all eat, sleep, and walk. If you created three classes: one for `Pig`, one for `Horse`, and one for `Donkey` you would also have to write the `eat`, `sleep`, and `walk` methods for each of the classes, even though they are the same thing.

To get around this, we can use something called sub-classes! A sub-class is a class that derives methods and attributes from a parent class, but then adds its own functionality when necessary!

How does this help with our above example? I'll show you!

You can start by creating an `Animal` class like this:

```python
class Animal:

	def __init__(self, color):
		self.color = color
		self.is_walking = False
		self.is_eating = False
		self.is_sleeping = False

	def walk(self):
		self.is_walking = True
		self.is_eating = False
		self.is_sleeping = False

	def eat(self):
		self.is_walking = False
		self.is_eating = True
		self.is_sleeping = False

	def sleep(self):
		self.is_walking = False
		self.is_eating = False
		self.is_sleeping = True
```

You can see in the above class it has the attributes necessary to denote if an animal is walking, sleeping, or eating. It also has the methods necessary to perform those tasks! This is a very generic `Animal` class that we can now create subclasses from!

Let me show you what creating a `Donkey` subclass looks like!

```python
class Donkey(Animal):

	def __init__(self, color, name):
		super().__init__(color)
		self.name = name
		self.color = color
		self.is_carrying = False

	def carry(self):
		self.is_carrying = True

```

In the definition to our sub-class, you may notice a couple new things!
1. In our `class` definition, we have added parenthesis and put our parent class inside it. This tells the `Donkey` class to inherit from the `Animal` class.
2. In our `__init__` method for our `Donkey` class, we call `super().__init__()`. All this is doing is running the `__init__` function from the `Animal` class within the `__init__` function of our `Donkey` class. This initializes it with the attributes and methods of our parent `Animal` class!

Note, also, that the `Animal` class has a `color` attribute we can pass to it. Our `Donkey` class utilizes that same field, but we pass it into `super().__init__()` which will initialize the `color` attribute for us.

I also added a new attribute to donkey called `name`. This doesn't get passed to `super().__init__()` because it doesn't exist in the `Animal` class. 

Now that we have written the `Donkey` class, inheriting from the `Animal` class, we should be able to use `Donkey` like this:

```python
d = Donkey("Gray")
d.eat()
d.walk()
d.carry()
d.sleep()
```

Notice how I didn't have to write the `eat`, `walk`, or `sleep` methods for the `Donkey` class! I only had to write them once! Now, any animal sub-class that I create using the `Animal` parent class will all have the attributes and methods associted with the `Animal` class.

This makes objects very customizable, and versatile. You can create very generic classes, and then expand them through sub-classes that have more specific functionality while retaining the original functionality of the parent class!

For this challenge, I will give you an `Employee` class, and you have to create a sub-class using the `Employee` class.

```python
class Employee:
    def __init__(self, name, employee_id, salary):
        self.name = name
        self.employee_id = employee_id
        self.salary = salary

    def display_info(self):
        print(f"Name: {self.name}, ID: {self.employee_id}, Salary: ${self.salary}")
```

1. Create a sub-class called `Doctor`.
2. Give him a customizble attribute of `specialty`
	- It will look something like this: `def __init__(self, name, employee_id, salary, specialty)`. This specialty will be something like: Cardiologist, Pediatrician, Surgeon, etc.  
3. Create a `diagnose` method that takes in a patients name, and a diagnosis and then prints out "<name> is diagonsed with <diagnosis>."

To verify your code and get the flag, run `/challenge/verify <your_python_file>`
