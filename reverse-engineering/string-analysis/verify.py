#!/usr/bin/exec-suid --real -- /usr/bin/python -I

import sys
sys.path.append('/challenge')

def print_flag():
	try:
		with open("/flag", "r") as f:
			print(f.read())
	except FileNotFoundError:
		print("Error: Flag file not found.")

# Add your imports and other code below here
import hashlib

correctHash = "e3a7c4dae59461747e6bc287aca85095"

if __name__ == "__main__":
	guessString = input("Enter the string:").encode('utf-8')
	# myHash = hashlib.md5(guessString)
	if hashlib.md5(guessString).hexdigest() == correctHash:
		print_flag()
	else:
		print("Incorrect string, try again!")
