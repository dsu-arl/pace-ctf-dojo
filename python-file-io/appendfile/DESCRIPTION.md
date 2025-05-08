# Appending Data to File 

Last challenge we learned how to 'write' data to a new file. This act created a new file and put the data we wanted into it. What happens if you want to open an already existing file and write to it without overwriting the data? You can `append` to it!

Appending data to a file will always add the data to the end of the file, to preserve all previous data. 

To append data to a file, you will still use the `write` method for your file object. However, when you `open` the file, you will need to specify append (`a`) as the mode of operation for your file. 

For this challenge:
1. Append data to the file `/home/hacker/append_to_me.txt` using python.
2. Run your python code to append the data.
3. Run `/challenge/verify` to verify and receive the flag.
