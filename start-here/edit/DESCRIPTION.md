## Challenge Description
You may also want to edit an existing file. There are many ways to do this, but one simple option is to use the "Explorer" option in the VSCode Menu. 
First, click the Explorer button - directly below the menu `☰` button in the top left, the Explorer button looks like 2 pieces of paper. 
From there, you should see a blue button "Open Folder". Click that, and then you will be able to type and search for which folder you want to open.
If you leave the default "/home/hacker", you can see all of the files you have created in your home directory. 

Note: If you are asked "Do you trust the authors of the files in this folder?", check the box, and click "Yes, I trust the authors".

In your home directory, you should see your myfile.txt that you made in the previous challenge.
You will also see some system files (`.bashrc`, `.profile`, etc.) - these files are needed for the VSCode Workspace to run properly. Don't edit them!

When you see a file you want to re-open, click on that file name to open it in VSCode. After editing a file, `CTRL+S` will save your changes.

In this challenge, your task is to re-open `myfile.txt` and edit the contents of the file so it contains the phrase "Hello World!". (Make sure to save it!)

Once you have updated this file, open a terminal and run `/challenge/solve` to verify your solution and receive your flag!

Note: Most pwn.college challenges are case sensitive and must match the requirements exactly - "Hello World!" is different from "hello world"

## Challenge Steps
1. Start and open the VSCode Workspace
2. Open your home directory/folder in the Explorer Menu
3. Open `myfile.txt`, and replace the contents with "Hello World!"
4. Run `/challenge/solve` to receive the flag

