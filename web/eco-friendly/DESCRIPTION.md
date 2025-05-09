## Challenge Description  
The Atlantis Aquarium is rolling out a new piece of software they call their "fish tracker," intended to show some info about their fish and allow users to report health concerns they might notice in the animals. They also include some info about the friendly divers maintaining the habitat, and there's even an automated alert system in case the fish get too rowdy! Unfortunately, the tool has some issues -- as it turns out, trash and oil spills aren't the only kinds of pollution they need to worry about...

### How It Works:  
This challenge is based on a JavaScript vulnerability called **Prototype Pollution**. Before getting into the vulnerability, let's look at how JavaScript works:

#### JavaScript Background:
**Objects** in JavaScript can consist of many different data types and can be declared like this: 
```js   
let First = {
    funnyNumber: 1337,
    booleanVar: false,
    anotherObject: { funnierNumber: 13337, numberStr: "leet" }
}; 
```

We can create a class for objects which inherit from another object like so: 
```js  
function Second(name){
    let result = Object.create(First);
    result.name = name;
    return result; 
}
```

Now we can create a `second` object which will inherit everything from `first`:
```js  
let myObject = new Second("Douglas");
```
```js  
> myObject.name
"Douglas"

> myObject.funnyNumber
1337
```

#### Prototypes
The way objects and inheritance work in JavaScript is through the use of **prototypes** -- each object is linked to another "prototype" object that serves as a base, starting object. That object might be linked to another prototype, which is linked to another, and so on. This series of links is referred to as the **prototype chain**, and often goes all the way up to JavaScript's base level `Object.prototype`. Object prototypes can be referenced with `__proto__`. From the previous example, `myObject.__proto__` specifies the `First` object.

In the case that a property/method of an object is referred to and does not exist, the prototype chain will be searched:

```js   
myObject.toString();
```
- `Second` does not have the `toString()` method
- `myObject.__proto__` AKA `First` does not have the `toString()` method
- `First.__proto__` AKA the base `Object.prototype` *does* have `toString()`, so this function is used. 

#### Prototype Pollution
With that background information out of the way, now we can talk about how prototype functionality can be abused by attackers in JavaScript. Imagine we have two classes which are based on the same prototype:

```js   
let User = {
    role: "user",
    isActive: true,
    preferences: {
        theme: "light",
        notifications: true
    }
};

function Admin(username, adminLevel) {
    let result = Object.create(User);
    result.username = username;
    result.role = "admin";
    result.adminLevel = adminLevel;
    return result;
}

function Guest(){
    let result = Object.create(User);
    result.username = "guest";
    return result;
}
```

Now imagine that for some reason code like this is accessible to an attacker:
```
function setUserValue(user, prop1, prop2, val){
    user[prop1][prop2] = val;
}
```

An attacker can use this to modify the prototype, making everything that inherits `User` an admin!

```js  
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

This is the basis of a prototype pollution attack. Often, attacks might change the base `Object.prototype`, affecting nearly everything on the page.

### The Challenge
Your goal for this challenge is to use prototype pollution to trigger the alert that happens when a diver is in trouble. To help, the relevant code is shown below as a reference:

```js  
let seaCreature = {
    swimming: true,
    underwater: true,
    caught: false,
};

function Fish(color, length, species){
    let fish = Object.create(seaCreature);
    fish.length = length;
    fish.color = color;
    fish.species = species;
    fish.fins = {dorsal: true, ventral: true, pectoral: true}
    fish.scales = {left: true, right: true, belly: true, tail: true}
    return fish;
}

function updateFishHealth(species, area, part, val){
    val = val.toLowerCase();
    if(val === "y" || val === "yes"){
        val = true;
    }
    else if(val === "n" || val === "no"){
        val = false;
    }
    else{
        alert("Invalid status, please enter y/n");
        return;
    }
    fishList[species][area][part] = val;
    renderCreatureStatus();
}

function Diver(name){
    let diver = Object.create(seaCreature);
    diver.name = name;
    diver.oxygenPercentage = 100;
    diver.isProbablyGettingEatenByAShark = () => {
        return(diver.caught === true && diver.swimming === false);
    }
    return diver;
}

const fishList = {
    salmon: new Fish("Silver", 30, "Salmon"),
    clownfish: new Fish("Orange", 5, "Clownfish"),
    tuna: new Fish("Blue", 40, "Tuna"),
    anglerfish: new Fish("Dark Brown", 20, "Anglerfish"),
    pufferfish: new Fish("Yellow", 10, "Pufferfish")
};
```
## Challenge Steps
1. Navigate to the `/challenge` directory
2. Run `./verify`
3. Open the web browser and navigate to `127.0.0.1:5000` by typing it into the URL bar
4. Try to use prototype pollution to trick the aquarium into thinking their divers are in trouble -- once you do, the flag will be given.