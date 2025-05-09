async function showFlag(secret, event){
    if(event instanceof MouseEvent){
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
    else{
        alert("No cheating!");
    }
}

// using this as a way to prevent the user from simply sending a request to the showFlag endpoint
async function getSecret(event) {
        if (event instanceof MouseEvent) {
            let response = await fetch('/get-secret', { method: 'POST' });
            let data = await response.json();
            return data.secret;
        }
        else {
            // can probably still be cheated but at this point it's harder than just doing the intended solution :)
            alert("No cheating!");
        }
}


function disabButton() {
    document.getElementById("GetFlag").disabled = true;
}

function enabButton() {
    document.getElementById("GetFlag").disabled = false;
}