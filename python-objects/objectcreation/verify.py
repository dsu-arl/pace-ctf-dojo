#!/usr/bin/exec-suid --real -- /usr/bin/python -I
import sys
from random import randint
import importlib.util
from os.path import exists, join

def import_module_by_path(module_path):
   module_name = "custom_module"
   spec = importlib.util.spec_from_file_location(module_name, module_path)
   custom_module = importlib.util.module_from_spec(spec)
   spec.loader.exec_module(custom_module)
   return custom_module

try:
	USER_FILE = join('/home/hacker', sys.argv[1])
except IndexError:
	print("Please give me tha name of your python file like so\n")
	print("/challenge/verify <your_python_file_name_here>")
	exit(-1)

# Identify user file and import it
if not exists(USER_FILE):
	print("Error: That file doesn't seem to exist.")
	exit(-1)

try:
	car = import_module_by_path(USER_FILE)
except ImportError as e:
	print(f"Failed to import data from {USER_FILE}.")
	print(e)
	exit(-1)

c = car.Car()
if c.fuel != 50:
	print("The Car classes starting fuel is not 50!")
	exit(0)

num = randint(1, 50)
for x in range(0, num):
	c.go()

if c.fuel != 50 - num:
	print("Your go function didn't subtract the necessary fuel, check that again!")
	exit(0)

print("Congratulations! I was able to use your class to create a functioning Car object!")

with open('/flag', 'r') as fObj:
	print(fObj.read())
