# Read Data From Existing Files

Sometimes in our programs, we want the capability to read in data from files that exist on our computer. Programs, such as video games, often utilize game save files. This is where specific data detailing the game state is written to a file that the game can then load on the next run and pick up where you left off.

Another reason why understanding File Input and Output when programming is because our program is meant to collect data that we want to save. Maybe it's pulling information about the weather that we then write to an easy to read csv file. There are many reasons to learn to manipulate files.

How do we actually interact with files in python? The crux of all file interaction in python programming revolves around what is known as a `File Object`. This file object represents a file and we can do many things with it, such as read and write. So how do we create a file object?

First, you will need to know the location of the file you'd like to open on your system. On windows, this typically looks something like this: `C:\Users\John\Desktop`. Since we are on linux, this will look slightly different. The same file location on Linux would be written as `/home/John/Desktop`. So, let's say you have a newly downloaded picture of you and your friends. This would most likely be found at the following location: `/home/John/Downloads/my_picture.jpg`. This location is what we will need to properly open a file in python.

Opening a file is rather simple:

```python
myFile = open("/home/John/Documents/poems.txt", "r")
```

There are a couple things to point out about this line of code:
1. The `open` function does what it says. It opens a file and returns a `File Object` stored in the variable `myFile`. 
2. The `open` function takes two parameters:
	1. The file location: `/home/John/Documents/poems.txt`.
	2. The mode with which we are interacting with the file: `r`. The "r" stands for "read", as that is what we want to do with the file. There are several different modes you can use when interacting with files, based on what you want to do. We will cover the most basic ones as we go through this module. 

Now that we have a file object stored in `myFile` we can actually now interact with the file. Though, since we only passed "r" to it, we can only read from the file. So let's do that!

```python
data = myFile.read()
print(data)
```

The code in the snippet directly above is self explanatory. We read the data from our file that we opened by calling `myFile.read()`, and then we store the data from that file in the variable `data`. We then print out that data so we can see what was in the file.

For this challenge:
1. Open the file `/home/hacker/readme.txt` in python.
2. Read the data into a variable and then print it out.
3. Take the printed out data, run `/challenge/verify` and supply the data when prompted to receive the flag.
