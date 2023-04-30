function generateButtons() {
    const numButtons = document.getElementById("numButtons").value;
    const buttonContainer = document.getElementById("buttonContainer");

    const winningButtonIndex = Math.floor(Math.random() * numButtons) + 1;

    for (let i = 1; i <= numButtons; i++) {
        const newButton = document.createElement("button");
        newButton.innerText = "Button " + i;
        newButton.classList.add("button");
        buttonContainer.appendChild(newButton);

        const status = (i === winningButtonIndex) ? "winner" : "loser";
        newButton.addEventListener('click', createButtonClickHandler(status));
    }

    document.getElementById("numButtons").style.display = "none";
    document.getElementById("buttonId").style.display = "none";
}

function createButtonClickHandler(status) {
    return function() {
        let message;
        if (status === "winner") {
            message = "Winner!";
        } else {
            message = "Loser!";
        }
        messageContainer.innerText = message;
    };
}


