async function getMessages() {
    const response = await fetch("https://kool.krister.ee/chat/TA23A")
    const messages = await response.json()
    for(let i = 0; i < messages.length; i++){
        console.log(messages[i]["name"] + ": " + messages[i]["msg"])
        const p = document.createElement("p")
        p.innerText = messages[i]["name"] + ": " + messages[i]["msg"]
        document.body.appendChild(p)
    }
}

// Kodus tegemiseks: https://developer.mozilla.org/en-US/docs/Learn/Forms/Sending_and_retrieving_form_data

getMessages()