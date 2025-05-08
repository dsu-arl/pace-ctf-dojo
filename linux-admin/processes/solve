#!/opt/pwn.college/python
from os.path import exists
import subprocess

DATA_FILE = "/tmp/.user.data"

def print_instructions():
    print("""
        In this challenge you will learn about Linux processes!
        A process is a running program on the computer. At any given time,
        there are many processes running. There are times where you will want
        to be able to view what processes are running on the system, and interact
        with them. To view the processes currently running, run the command "ps aux"
        in your terminal.

        For this challenge, I will run the sleep command on the terminal for you. See
        if you can find the process ID (PID) of the sleep process using the "ps aux" command.

        When you've found it, run "/challenge/solve" again and enter the PID number.

        Good luck!
    """)

def setup():
    # Run sleep for 10 minutes
    sleep_proc = subprocess.Popen(["sleep", "600"])

    # Write the pid of the sleep process to a file to get it later
    with open(DATA_FILE, "w") as f:
        f.write(f"pid:{sleep_proc.pid}")

def check():
    with open(DATA_FILE, "r") as f:
        pid = f.read().split(":")[1]

    user_pid = input("What is the PID of the sleep process: ")

    if user_pid == pid:
        print("That is correct! Here is your flag:\n")
        with open("/flag", "r") as f:
            print(f.read())
    else:
        print("That's not quite right, here's a hint: use the grep command to search for the sleep process like this: \"ps aux | grep sleep\"")
        exit(0)

def main():
    if not exists(DATA_FILE):
        print_instructions()
        setup()
        exit(0)

    check()

if __name__ == "__main__":
    main()
