//your JS code here. If required.
const textInput = document.getElementById("text");
const delayInput = document.getElementById("delay");
const button = document.getElementById("btn");
const output = document.getElementById("output");

function wait(delay) {
    return new Promise(resolve => setTimeout(resolve, delay));
}

async function displayMessage() {
    const message = textInput.value;
    const delay = Number(delayInput.value);

    await wait(delay);

    output.textContent = message;
}

button.addEventListener("click", displayMessage);