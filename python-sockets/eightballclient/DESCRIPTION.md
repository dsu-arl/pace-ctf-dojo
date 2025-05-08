# Eight Ball Client

Now that you are familiar with sockets, we want to throw a challenge at you. There is a service we have created that functions as a magic 8 ball. Your job will be to create a client program that interacts appropriately with this service. I will outline how the 8 Ball server functions, and you will have to utilize that information to create an appropriate client.

## Program Outline

Once you connect to the server at `127.0.0.1` on port `1337` the client will...
1. Send you a banner so you know what you connected to.
2. Receive a question from the client.
3. It will then send an answer back and close the connection.

*Note: If you ask it for the flag, it might give it to you.*

Run `/challenge/run` to start the server. Then interact with it using your client program and try to get the flag!
