# Private Methods

Last challenge we saw that you can have private attributes that those using your class cannot directly access. You can also do the same with methods! Why might we want to create a private method? Sometimes there are methods that we write that help other methods perform their intended duty, but we don't want those using our class to be able to directly call them.

Take the following `CakeMaker` class for example:

```python
class CakeMaker:
    def bake_cake(self):
        print("Starting to bake a cake!")
        self.__mix_ingredients()
        self.__bake_in_oven()
        self.__add_frosting()
        print("Cake is ready!")

    def __mix_ingredients(self):  # private method
        print("Mixing flour, eggs, sugar...")

    def __bake_in_oven(self):  # private method
        print("Baking at 350°F for 30 minutes...")

    def __add_frosting(self):  # private method
        print("Adding chocolate frosting on top.")
```

In this example, you can see that the same double underscore (`__`) syntax is used with our method names. This class has 4 methods:
1. `bake_cake`
2. `__mix_ingredients`
3. `__bake_in_oven`
4. `__add_frosting`

Three of these methods are private. The only callable method this class has is `bake_cake`. This method then goes on to call the three private methods! This way, the person using our class can just call one method rather than three methods. 

For this challenge:
1. Write a class called `Clock` with two attributes: hours and minutes. And set them both equal to 0.
2. Create a private method called `__is_valid(self, hours, minutes)`.
	- This will take in two integers. You will have to validate that it is an appropriate time, in military syntax. This means it can range from 0:00 - 23:59.
	- If the integers provided fall within the requirements for military time, then return `True`, otherwise return `False`.
3. Create a public method called `show_time` that prints out the time!
4. Create a public method called `set_time(self, hours, minutes)`.
	- Call the private `__is_valid` method inside this method.
	- If the provided time is valid, set the corresponding attributes. 

Run `/challenge/verify <your_python_file>` to verify your code and get the flag!
