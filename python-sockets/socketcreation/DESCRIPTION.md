# Python Network Programming

Programming is fun, but sometimes we like to take it to the next level. That's where network programming comes in. Network programming in Python allows us to create programs that communicate with other programs on other computers. This could be a different computer on the same network, or even a computer on the internet. With network programming you can create a chat program that you and your friends can use or a web server to host your own website. The only limit is your creativity.

# Sockets

In order to allow our program to connect to and interact to other computers we need to use `sockets`. You can think of sockets as walkie-talkies. Your friend has one walkie-talkie set to a particular channel. He's waiting for you to switch your walkie-talkie to that channel and initate a conversation.

## Client and Server

When you get into the realm of network programming you will need to know the vocabulary of `client` and `server`.
- `client` - A user seeking to connect to some resource on a network.
- `server` - A resource being hosted on a network for others to connect to.

A great way to visualize this is with web browsing. Google hosts there search engine on a `server` as a resource. You, as a `client`, are able to connect to google and use their search engine.

# Python Sockets

Now that we have a cursory understanding of what sockets are, we are ready to look at HOW we actually write a python program that puts these ideas into practice. The first thing we need is a library that interacts with our Operating Systems socket functionality. Thankfully, Python comes with its very own socket library, so no need to install anything extra! This can be used in our program as such:

```python
import socket
```

Now, to create a socket we need to make an instance of the socket class that is inside the `socket` library we just imported:

```python
sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
```

In the above example, you may notice there are two weird parameters we are passing as we create a socket.
- `socket.AF_INET` - This parameter identifies the 'address family' our socket will be using. The available 'address families' are AF\_INET, which tells us we will be using IPv4, AF\_INET6, which tells us we will be using IPv6, and AF\_UNSPEC, which uses whatever is available. 
- `socket.SOCK_STREAM` - This parameter identifies which protocol we will be using between TCP and UDP. SOCK\_STREAM says we will be using TCP, SOCK\_DGRAM says we will be using UDP.

These two flags will be what you will use in 99% of your network programming, unless you specifically need to use a different address family or protocol.

After you create a socket, you have to decide whether you are creating a `client` or a `server` program. Right now, we will be creating a `client` program. Now that we have decided that, our path forward is relatively simple. All we must do now is connect our created socket to a resource we want access to, and then interact with it by sending and receiving data. Here is how to do that:

```python
resource_address = ('IP', PORT_NUMBER)   # Notice, this is a tuple.
sock.connect(resource_address)

sock.send('DATA'.encode())
dirtuh = sock.recv(SIZE_IN_BYTES)

print(dirtuh.decode('UTF-8'))
sock.close()
```

In this challenge, using python, create a socket and connect it to '127.0.0.1' on port 1337. Send any data you want, and make sure to receive data from the server to get the flag!
