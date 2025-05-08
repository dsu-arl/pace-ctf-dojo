Now that you understand variables, it is important to learn how to change them on the fly. This allows your program to be interactive, and can be accomplished by using user input. 

Starting with what you already know, you should be able to understand what the following does:
```python
name = "The Rizzler"
location = "Ohio"

print("Hello, my name is", name)
print("I am from", location)
```
If you run this program repeatedly, the same output would be displayed. But what happens if you want to use a different name? Or different location? You have to open the code, change the values for each variable, save and run. This doesn't sound too bad right now, but imagine the code base was thousands of lines of python - this would not be ideal.

Because of this, you need a way to assign different values from the user in runtime - while the program is running. This can be accomplished with the `input()` function. We've used the `print()` function before to display output to the user, this time `input()` will "read in" input _from_ the user.

When the program encounters the `input()` function, it will wait for the user to enter data until the Enter key is pressed. The sequence of characters that the user typed then get stored in a string variable for further use. The program then proceeds to run any following lines of code. 

```python
name = input()
location = input()

print("Hello, my name is", name)
print("I am from", location)
```

Now the variables are not assigned a specific value until runtime. Every time this program is run different values can be inputed. So the program has become truly interactive.

You can copy the code above and see for yourself what the `input()` prompt looks like! You may notice that the program doesn't seem to be doing much of anything - until you type a word and hit Enter. This brings up a couple of questions...

***How does the user know the program is waiting for input?***
The user will have no idea that the program is waiting for input. If they know what the program is supposed to be doing, it will probably be fine. But if they don't, it might appear as though the program is hanging or not responding. You can give the user some instructions by providing a text prompt. This could be as simple as a print statement before the input line or by passing a prompt string to the input function.

Both methods will effectively accomplish the same thing, but with one small difference. If the prompt is a separate print line before the input call, the program will display these on two separate lines. If you pass the prompt to the input function, the program will both display the prompt and get user input on the same line. 
```python
# separate lines
print("Enter your name:")
name = input()
  
# the same line
name = input("Enter your name: ")
```

#### Challenge:
Use python to read a user's name and tell them Hello

1. Create a new file with the file extension `.py`
2. Write python to accept a name from the user - make sure to give them a prompt!
3. Print `Hello, <name>` where `<name>` is the value of your name variable
```bash
# Example Running of the program
python yourScript.py
What is your name: Greg
Hello, Greg
```
4. Test your code with `python yourFile.py`
5. Verify your solution with `verify yourFile.py`
