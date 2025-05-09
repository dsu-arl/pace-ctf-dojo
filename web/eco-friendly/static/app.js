
function getFlag(){
    const stack = new Error().stack;
    // console.log(stack);
    if (stack.includes("console")) {
        alert("Nice try! No cheating via console.");
        return;
    }
    getSecret().then(secret => flagReq(secret).then(flag => {alert(flag)}));
}

// using this as a way to prevent the user from simply sending a request to the showFlag endpoint
async function getSecret() {
    const stack = new Error().stack;
    if (stack.includes("console")) {
        // can probably still be cheated but at this point it's harder than just doing the intended solution :)
        alert("Nice try! No cheating via console.");
        return;
    }
    else {
        let response = await fetch('/get-secret', { method: 'POST' });
        let data = await response.json();
        return data.secret;
    }
}

async function flagReq(secret){
    const stack = new Error().stack;
    if (stack.includes("console")) {
        alert("Nice try! No cheating via console.");
        return;
    }
    else{
        let response = await fetch('/call-python', {
            "method":"POST",
            headers: {
                'Content-Type': 'application/json'
            },
            "body": JSON.stringify({ "jsSecret": secret }),
        });
        let data = await response.json();
        return data.flag
    }
}



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


function mapStatus(obj) {
    const result = {};
    for (let key in obj) {
        result[key] = obj[key] ? "yes" : "no";
    }
    return result;
}



function loadDivers(name1 = "Dave", name2 = "Scuba Steve"){
    let diverList = {
        diver1: new Diver(name1),
        diver2: new Diver (name2)
    };
     
    return diverList;
}

function renderCreatureStatus(){
    diverList = loadDivers();
    for(let name in diverList){
        let diver = diverList[name];
        if(diver.isProbablyGettingEatenByAShark()){
            alert("OH NO!!!!!");
            getFlag();
        }
    }

    const container = document.getElementById("fishInfo");
    container.innerHTML = ""; // Clear old output

    for (let name in fishList) {
        let fish = fishList[name];
        let finsStatus = mapStatus(fish.fins);
        let scalesStatus = mapStatus(fish.scales);

        container.innerHTML += `
        <div class="fishCard">
            <div><strong>${name.toUpperCase()}</strong>: ${fish.color}, ${fish.length}cm</div>
            <div class="statusRow">
            <div>
                <strong>Healthy Fins:</strong>
                ${Object.entries(finsStatus).map(([part, status]) => `<div>${part}: ${status}</div>`).join('')}
            </div>
            <div>
                <strong>Healthy Scales:</strong>
                ${Object.entries(scalesStatus).map(([part, status]) => `<div>${part}: ${status}</div>`).join('')}
            </div>
            </div>
        </div>
        `;
    }


    const diveContainer = document.getElementById("diverInfo");
    diveContainer.innerHTML = ""; // Clear old output

    for (let name in diverList) {
        let diver = diverList[name];
        let diverEaten = diver.isProbablyGettingEatenByAShark() ? "yes" : "no";
        let diverO2 = diver.oxygenPercentage;
        
        diveContainer.innerHTML += `
        <div class="diverCard">
            <div><strong>${name.toUpperCase()}: ${diver.name}</strong></div>
            <div class="statusRow">
            <div>
                <strong>Status:</strong></br>
                Oxygen Level: ${diverO2}</br>
                Possibly Getting Eaten: ${diverEaten}
            </div>
            </div>
        </div>
        `;
    }
}

function formListener(){
    document.getElementById("fishForm").addEventListener("submit", function(e) {
        e.preventDefault(); // prevent form from reloading the page

        const form = e.target;
        const species = form.elements["Species"].value.toLowerCase();
        const concern = form.elements["Concern"].value.toLowerCase();
        const part = form.elements["Part"].value.toLowerCase();
        const status = form.elements["Status"].value.toLowerCase();

        updateFishHealth(species, concern, part, status);
        form.reset();
    });
}