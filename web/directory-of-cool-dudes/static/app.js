function getFlag(){
    const stack = new Error().stack;
    if (stack.includes("console") || stack.includes("anonymous")) {
        alert("Nice try! No cheating via console.");
        return;
    }
    flagReq().then(flag => {alert(flag)});
}


async function flagReq(){
    const stack = new Error().stack;
    if (stack.includes("console") || stack.includes("anonymous")) {
        alert("Nice try! No cheating via console.");
        return;
    }
    else{
        let response = await fetch('/call-python', { method:'POST'});
        let data = await response.json();
        return data.flag
    }
}