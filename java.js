function generateButtons() {
    const numButtons = document.getElementById("numButtons").value;
    const buttonContainer = document.getElementById("buttonContainer");
    
    // We save a random number between 1 and numButtons in a variable
    const winningButtonIndex = Math.floor(Math.random() * numButtons) + 1;

    // Generate new buttons
    for (let i = 1; i <= numButtons; i++) {
        const newButton = document.createElement("button");
        newButton.innerText = "Button " + i;
        newButton.classList.add("button");
        buttonContainer.appendChild(newButton);
       
        // Set the status of the buttons (winner or loser) using the variable winningButtonIndex
        if (i === winningButtonIndex) {
            newButton.dataset.status = "winner";
          } else {
            newButton.dataset.status = "loser";
          }

           // Define a function that at click of the new button will show its status
           newButton.addEventListener('click', handleButtonClick);
           
    }

    // We get rid of the input box and the generator button
    document.getElementById("numButtons").style.display = "none";
    document.getElementById("buttonId").style.display = "none";
}

function handleButtonClick() {
    const buttonStatus = this.dataset.status;
    let message;
    if (buttonStatus === "winner") {
        message = "Winner!";
    } else {
        message = "Loser!";
    }
    messageContainer.innerText = message;
}

