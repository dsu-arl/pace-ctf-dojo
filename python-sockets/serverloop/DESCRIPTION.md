# Python Network Programming

In the last challenge, you created a server that you could connect to. However, once you connect to that server and close the connection, the server program itself finishes execution and ends. You won't be able to connect back to it unless you start the server again.

The way to keep the server running is to implement a server loop. This is a loop that keeps going until someone tells it to stop. This allows the server to accept connections even after other ones have been closed. 

Think of websites. You are able to make a request to facebook, and then later that same day make another request to facebook. This is because the web server doesn't just end when clients are done, it stays open for potential new connections!

We can implement this in our code by writing a `while` loop (you can just use `while True`) around our `sock.accept()` call. Then, within the `while` loop, we can perform our necessary tasks with the connected socket before closing the connection. 

Hint: This [StackOverflow Article](https://stackoverflow.com/questions/7749341/basic-python-client-socket-example) may prove helpful.

In this challenge, edit your server code so that it doesn't stop executing after one connection, but stays running and ready to accept new connections. When you're done, start your server, and run `/challenge/run` to test if it works. Remember that the client will be connecting to port `1337`!

Keep in mind, for each new connection you get, you will need to receive data coming from the client and print it out.
