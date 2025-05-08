# Writing Data to File 

In programming, we often want to save data to a file, either for further processing, or to keep track of specific points of data. There are two different ways we can write data to a file. In our last challenge, we discussed the specific modes you can pass to the `open` function to allow specific functionality with a file object. Two write, we have two options:
1. `w` - Stands for "write".
2. `a` - Stands for "append".

The difference between the two is that `append` mode will write data to an already existing file by insterting it at the end (or wherever you specify in the document). The `write` mode will create the file as brand new, or if the file already exists, it will overwrite the data with whatever you give it. We will look at the `write` mode in this challenge.

To write data to a file, it is very similar to reading. Instead of using `fileObject.read()`, you will use `fileObject.write(DATA)`.

For this challenge:
1. Create the file `/home/hacker/my_data.txt` in python.
2. Write whatever data you want to the file.
3. Run `/challenge/verify` to receive the flag.
