# Python Network Programming

In the last challenge we gave a high level overview of sockets. We mentioned the idea of `client` and `server` sockets. Clients connect to a particular resource over a network connection, and Servers are computers that are hosting these resources that others connect to.

In this challenge, we are going to look at how we can create our own Server sockets. This means we will be able to serve our own resource or service that lets others connect.

You will start off with the basic program from last challenge:

```python
import socket

bind_addr = ('127.0.0.1', 1337)		# Note: This is a tuple
sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
```

In the code above you can see we `import` the `socket` library. After that, we define the address and port we want to bind our socket to. To `bind` a socket is to in effect give it home address. We are saying, "Our service or resource can be found at '127.0.0.1' and port 1337." We then create our socket, calling it `sock`. **Can you remember what socket.AF_INET and socket.SOCK_STREAM denote?** 

*Note: The IP '127.0.0.1' denotes your own computer. It's also known as "localhost". This means that only YOU will be able to access whatever is being served on port 1337. It is not publically hosted.*

From here, our steps diverge slightly. Rather than connecting our socket to a resource, we have to actually go through and bind it. Then we have to listen for new connections, and then we must accept the incoming connections as they come. The following code outlines what that looks like:

```python
# Bind the socket to our desired address and port

sock.bind(bind_addr)	# Another way to write this without a variable would be 'sock.bind(('127.0.0.1', 1337))'
```

Listen for incoming connections. The paramater to the 'listen' method for our socket denotes the backlog. If backlog is specified, it must be at least 0 (if it is lower, it is set to 0); it specifies the number of unaccepted connections that the system will allow before refusing new connections. If not specified, a default reasonable value is chosen.

```python
sock.listen(1)
```

Accept any incoming connections. We provide two varibles 'client\_socket' and 'client\_address' because the 'accept' method returns two variables. 'client\_socket' will be an actual socket we can 'send' and 'recv' data from. 'client\_address' is information about that socket. 

```python
client_socket, client_address = sock.accept()
```

```python
# Now that we have a connected client, we can interact with it.
client_socket.send(DATA)
client_data = client_socket.recv(SIZE_IN_BYTES)

client_socket.close()
```

In this challenge, using python, create a server socket and bind it to '127.0.0.1' on port 1337. Be ready to receive connections. Run /challenge/run, and be ready to receive data from the connection that it makes. If you are successful, you should have the flag sent to you. Print out the data to get the flag!
