async function getMessages() {
    const response = await fetch("https://kool.krister.ee/chat/TA23A");
    const messages = await response.json();
    return messages.slice(messages.length - 30);
  }
  
  const chatContainer = document.querySelector(".chat-container");
  async function populateMessages() {
    const messages = await getMessages();
    populateMembers(messages)
    chatContainer.innerHTML = "";
    for (const msg of messages) {
      chatContainer.innerHTML =
        chatContainer.innerHTML +
        '<p class="message user-a">' +
        msg.name +
        ": " +
        msg.message +
        "</p>";
    }
    window.scrollTo(0, document.body.scrollHeight);
  }
  populateMessages();
  setInterval(populateMessages, 2000);
  
  async function populateMembers(messages) {
    const names = messages.map((message) => message.name);
    const uniqueNames = [...new Set(names)];
    const membersContainer = document.querySelector(".menu-container");
    membersContainer.innerHTML = "";
    for (const name of uniqueNames){
        membersContainer.innerHTML += `<p>${name}</p>`;
    }
  }
  
  async function sendMessage() {
    const name = document.querySelector("#name").value;
    const message = document.querySelector("#message").value;
    const body = { name: name, message: message };
    await fetch("https://kool.krister.ee/chat/TA23A", {
      method: "POST",
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" }
    });
  }
  
  document.querySelector("#send").onclick = sendMessage;
  