# Helpful Tools

When creating socket programs, you may get an error that looks like this:

``

This is really annoying, especially if you have to run tests rapidly, one after another. To fix this issue, we can call a particular method within our socket that allows us to configure options. This is the `setsockopt` method, which stands for 'set socket option'.

The function takes three paramters:
1. Level
2. Option
3. Value

## Level

This signifies the 'level' at which we are defining our selected option. The three most common levels are:
- socket.SOL_SOCKET - Socket-level options (base level)
- socket.IPPROTO_TCP - TCP-level options
- socket.IPPROTO_UDP - UDP-level options

For most of your socket programming, setting options at the base level will be your go to.

## Option

This signifies the actual 'option' you want to edit. The most common options are:
- SO_BROADCAST - Enable or disable broadcasting on the socket.
- SO_KEEPALIVE - Enable keepalive messages on the socket.
- SO_REUSEADDR - Allow the socket to reuse a local address that is still in TIME_WAIT state after a previous connection has been closed.
- SO_SNDBUF - Sets the size of the send buffer.
- SO_RCVBUF - Sets the size of the receive buffer.

## Value

The value you pass is dependant on the option you are setting. For SO_BROADCAST, SO_KEEPALIVE, and SO_REUSEADDR you will pass either a 1 or a 0.
- 1 enables the option.
- 0 disables the option.

For any other option, you will need to look up what value needs to be passed in order to configure it properly.

Now that you know that, I want you to create a simple server program that allows it to reuse its address and port that it is binding to. When you're done you will run '/challenge/run <your_filename>' so I can analyze your code and see if you did it correctly!
