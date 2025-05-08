# With Open

Making sure that we close our files after using them is tedious. We're often forgetful. Thankfully, Python has a great way of dealing with this. We don't have to worry about properly closing our files because Python will take care of it if we use the `with open` functionality.

The `with open` functionality creates an indented block of code that allows all code in the indented block to interact with the open file object. After the indented block is finished, the file object is automatically closed, you don't have to handle that anymore. Here I will show you the old way of handling files in python, and then what it looks like using `with open`.

```python
# Old Way

file_object = open('my_data.txt', 'r')
data = file_object.read()
file_object.close()
print(data)
```

```python
# Using 'with open'

with open('my_data.txt', "a+") as file_object:	# Notice that you can set more than one mode. I did "a+" which allows us to append and read data
	# All of the code written within this 'with open' block 
	# have access to 'file_object' as if it's an open file.
	data = file_object.read()
	file_object.write("I'm writing this line")
	file_object.write("And I'm writing this line")

# Outside of the 'with open' block, our file is closed and inaccessible
# but our variable 'data' which was created in the 'with open' block is
# still usable. 
print(data)
```

You can see that the syntax for opening a file is very similar. The differences are that we use the keyword `with`, `as` which denotes the variable we want to store the file object in, and we finish the line with a colon (`:`) to start an indented block.

Code in that indented block has access to the file object so you're able to read, write, append, etc.

For this challenge:
1. Open a file called `bee_movie_script.txt` using `with open`
2. Write `According to all known laws of aviation...` in the file.
3. Run your python script.
4. Run `/challenge/verify <your_python_file.py>` to get the flag!
