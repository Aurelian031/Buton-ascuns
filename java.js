function generateButtons() {
    const numButtons = document.getElementById("numButtons").value;
    const buttonContainer = document.getElementById("buttonContainer");

    // Remove any existing buttons
    
    // Generate new buttons
    for (let i = 1; i <= numButtons; i++) {
        const newButton = document.createElement("button");
        newButton.innerText = "Button " + i;
        
        buttonContainer.appendChild(newButton);
    }
    
    document.getElementById("numButtons").style.display = "none";
    document.getElementById("buttonId").style.display = "none";
}
