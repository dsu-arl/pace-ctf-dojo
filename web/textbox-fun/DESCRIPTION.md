## Challenge Description
This challenge serves as an intro to Cross-site scripting. Cross-site scripting, or XSS is a web exploitation technique in which the attacker is able to execute Javascript code on a page via cleverly crafted input.

### How It Works:

XSS can happen in lots of different ways, but usually this vulnerability occurs when the site accepts some input from a user, then unsafely displays the input back to them. There are two primary categories of XSS:

#### Reflected XSS
Reflected XSS occurs when the server accepts some input from the user, then reflects that input somewhere on the page returned to them. Usually this occurs via some POST request which is submitted, modifying the page based on the user's input. 

A good example would be the search function of a website: if the user entered something like `<script>alert("Gotcha!");</script>` into the search box, the resulting page might have a section of HTML that looks like `<h2>Your search: <script>alert("Gotcha!");</script></h2>`. The code within the script tags would run, spawning an alert box that says "Gotcha!".

#### Stored XSS
Stored XSS works in much the same way as Reflected XSS, and can also be referred to as Persistent XSS. The factor that makes Stored XSS different is that inputs the user enters are stored somewhere on a server, and can be used somewhere else in a context that triggers the vulnerability. This means that the XSS could occur when ***other*** users navigate to a page as well, opening up possibilities for all sorts of new payloads. 

An example of Stored XSS could be an auction site where users can list their items for sale -- if an attacker lists an item with an XSS payload as the name, other users attempting to view that item would trigger the script on their machine, falling victim to an attack.

## Challenge Steps
1. Navigate to the `/challenge` directory
2. Run `./verify`
3. Open the web browser and navigate to `127.0.0.1:5000` by typing it into the URL bar
4. Try to get XSS on the page! 

