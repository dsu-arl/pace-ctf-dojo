function getFlag(){
    const stack = new Error().stack;
    if (stack.includes("console") || stack.includes("anonymous")) {
        alert("Nice try! No cheating via console.");
        return;
    }
    flagReq().then(flag => {alert(flag)});
}

let defaultPerson = {
    name: "default name",
    about: "Short description about the person",
    likes: "Some things the person enjoys",
    dislikes: "Some things the person doesn't like"
};

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
    
    let newPerson = createPerson(name, originalPerson["about"], originalPerson["likes"], originalPerson["dislikes"]); 
    merge(newPerson, newInfo); // add in new stuff
    updateReq(newPerson);
}

async function newTestDude(){
    let person = createPerson(0, 0, 0, 0, test=true);
    await addReq(person);
}

async function loadDirectory(){
    let response = await fetch('/get-directory', { method:'GET'});
    let data = await response.json();
    return data;
}

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

  // -------- REQUEST HELPER FUNCS ----------

  async function flagReq(){
    const stack = new Error().stack;
    if (stack.includes("console") || stack.includes("anonymous")) {
        alert("Nice try! No cheating via console.");
        return;
    }
    else{
        let response = await fetch('/call-python', { method:'POST'});
        let data = await response.json();
        return data.flag;
    }
}

async function addReq(person){
    const stack = new Error().stack;
    if (stack.includes("console")) {
        alert("Nice try! No cheating via console.");
        return;
    }
    else{
        let form = new FormData();
        form.append("name", person.name);
        form.append("bio", person.about);
        form.append("likes", person.likes);
        form.append("dislikes", person.dislikes);
        let response = await fetch('/add', {
            "method":"POST",
            "body": form
        });
    }
}


async function updateReq(person){
    const stack = new Error().stack;
    if (stack.includes("console")) {
        alert("Nice try! No cheating via console.");
        return;
    }
    else{
        let response = await fetch('/update-person', {
            "method":"POST",
            headers: {
                'Content-Type': 'application/json'
            },
            "body": JSON.stringify(person)
        });
    }
}