const api_URL = "https://api.chucknorris.io/jokes/random";

async function getJoke() {
  const response = await fetch(api_URL);
  const data = await response.json();
  return data.value; 
}

async function generateJoke() {
    const joke = await getJoke();
    const blueDiv = document.querySelector('.blue');
    blueDiv.innerHTML = "";
    const p = document.createElement('p');
    p.innerHTML = joke;
    blueDiv.appendChild(p);
}

function moveCursor(event) {
  const cursor = document.getElementById("custom-cursor");
  cursor.style.left = `${event.clientX - 15}px`;
  cursor.style.top = `${event.clientY - 20}px`;
}

document.addEventListener("mousemove", moveCursor);


generateJoke();

const button = document.querySelector('button');
button.addEventListener('click', generateJoke);
