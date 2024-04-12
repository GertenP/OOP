

async function getMessages() {
    const response = await fetch("https://kool.krister.ee/chat/TA23A")
    const messages = await response.json()
    for (let i = 0; i < messages.length; i++) {
        console.log(messages[i]["name"] + ": " + messages[i]["msg"])
        const p = document.createElement("p")
        p.innerText = messages[i]["name"] + ": " + messages[i]["msg"]
        document.body.appendChild(p)
    }
}

// Kodus tegemiseks: https://developer.mozilla.org/en-US/docs/Learn/Forms/Sending_and_retrieving_form_data

getMessages()

async
function
    getMessage() {

    const
        response
            =
            await
    fetch('https://kool.krister.ee/chat/TA23A')

    const
        messages
            =
            await
    response.json()

    console.log(messages)




    for (let i = 0; i < messages.length; i++) {
        const p = document.createElement('p')
        p.innerText = messages[i].message ?? messages[i].name
        document.body.appendChild(p)
    }
    window.scrollTo(0,99999)
}

getMessage()


var input = document.getElementById("myInput");






input.addEventListener("keypress",
    function (event) {




        if (event.key
            ===
            "Enter") {



            event.preventDefault();



            document.getElementById("myBtn").click();

        }

    });




fetch("https://kool.krister.ee/chat/TA23A", {

    method:
        "post",

    headers: {

        'Accept':
            'application/json',

        'Content-Type':
            'application/json'

    },






    body:
        JSON.stringify({

            name:
                "Slava",

            msg:
                "HEllo"

        })

})

    .then(() => {


    });

