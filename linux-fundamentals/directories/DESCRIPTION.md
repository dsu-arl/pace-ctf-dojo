Before you start this challenge, you should have some understanding of how Linux works.

# The Linux Filesystem

In Linux, the filesystem is structured like a tree, starting from the root directory (denoted by the character '/'), which is the base of everything. A 'directory' is just a folder. Think of / as the foundation that holds every file and folder on the system. Here are a few essential directories to get familiar with:

- `/` (Root): The top level of the filesystem. All other files and folders are organized underneath it.
- `/home` Directory: This is where personal files and folders for each user are stored. Each user has their own folder inside /home, such as /home/username, which is like a private workspace.
- `/tmp` Directory: Stores temporary files that are deleted when the machine is restarted. Don't store important things here!

As an example, if you're a Linux user with the account name 'wkiffin', your home directory would be:
`/home/wkiffin`
- `/` at the beginning is the root of the directory tree, where all paths start.
- `home` is the folder inside '/' that all Linux users home directories are stored.
- `wkiffin` is the directory where our specific user files are stored.

Understanding this structure helps you know where to find your files, system settings, and applications on Linux.

In this challenge you will be learning how to traverse the Linux filesystem with the `cd` command, as well as listing directory content with `ls`. You can start the VSCode workspace, open a terminal, and run `/challenge/solve` to get your instructions.

This means you're running a file named 'solve' found within the 'challenge' directory that is held within the root '/' directory!
