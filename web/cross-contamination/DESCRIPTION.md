## Challenge Description  
The Directory of Cool Dudes has been updated! After they were shown the XSS vulnerability in the previous version, the developers decided to add some cool new features along with their patch. However, it seems they might still have some weaknessess in their code...

***(Recommended challenges to complete first: `Eco-Friendly`, `Directory of Cool Dudes`)***
### How It Works:  
The goal of this challenge, like the `Directory of Cool Dudes` challenge, is to use cross-site scripting to call the `getFlag()` function. However, this time it's not so straightforward! You will also need to utilize prototype pollution to bypass the input sanitization, allowing the full XSS payload to be read in. Some additional background information about XSS and prototype pollution will be given below:

#### Alternative XSS Payloads
For various reasons, sometimes XSS payloads in the form `<script>doStuff();</script>` won't be executed. Luckily, there are plenty of different ways we can try to trigger our JS payload. Here are some examples:

- `<a id=x tabindex=1 onfocus='doStuff();'></a>`
- `<img src='#' onerror='doStuff();'>`
- `<details ontoggle='doStuff();' open>xss</details>`
- `<body onload='doStuff();'>`

This is not even close to the full list of ways our JS could potentially execute from HTML tags -- the possibilities are nearly endless and sometimes it just takes a little experimentation to bypass weaker protections.



#### More Prototype Pollution Fun
In the `Eco-Friendly` challenge we looked at attacks similar to the following:

```js
function setUserValue(user, prop1, prop2, val){
    user[prop1][prop2] = val;
}

let myUser = new Guest();
setUserValue(myUser, "__proto__", "role", "admin");
setUserValue(myUser, "__proto__", "adminLevel", "root");
```

```js  
> myUser.role
"admin"

> myUser.adminLevel
"root"

// even newly created users will be admin
> let myUser2 = new Guest();

> myUser2.role
"admin"

> myUser2.adminLevel
"root"
```
While all prototype pollution attacks involve modifying the prototype of an object, there are other ways this can happen too. For example, consider a helper function used to combine multiple JS objects:

```js
function merge(target, source) {
    for (const attr in source) {
        if (
            typeof target[attr] === "object" &&
            typeof source[attr] === "object"
        ) {
            merge(target[attr], source[attr])
        } else {
            target[attr] = source[attr]
        }
    }
}
```

If we're able to pass a JS object like the folowing to this function, we can set a property of the prototype!:
`{"__proto__": {"evilProperty": "evilValue"}}`

Nearly this exact form of vulnerability has been found in libraries such as `lodash` and `Hoek`.


### The Challenge
Your goal for this challenge is to use prototype pollution to bypass the XSS filter and call the `getFlag()` function. As a hint, here is some of the new backend code: 


```js  

function createPerson(name, about, likes, dislikes, test=false){
    if(test){
        let person = Object.create(defaultPerson);
        return person;
    }
    else{
        let person = Object.create(defaultPerson);
        person.name = name;
        person.about = about;
        person.likes = likes;
        person.dislikes = dislikes;

        return person;
    }
}


function updatePerson(event, originalPerson, name){
    const form = document.getElementById('updateForm');
    const formData = new FormData(form);

    const item = formData.get('item');
    const rawInfo = formData.get('info');
    try {
        info = JSON.parse(rawInfo);
      } catch (e) {
        info = rawInfo; // Keep it as a string if parsing fails
      }
    newInfo = {[item]: info};
    // REST OF FUNCTION REDACTED
```
## Challenge Steps
1. Navigate to the `/challenge` directory
2. Run `./verify`
3. Open the web browser and navigate to `127.0.0.1:5000` by typing it into the URL bar
4. Try to use prototype pollution in conjunction with XSS to call `getFlag();`!