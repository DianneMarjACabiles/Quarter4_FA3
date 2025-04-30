function generateShape() {
    let input = document.getElementById("userInput").value;
    let number = parseInt(input);

    if (isNaN(number)) {
        document.getElementById("result").textContent = "Please enter a valid number.";
        document.getElementById("shapeOutput").textContent = '';
        return;
    }

    document.getElementById("result").textContent = "Number inputted: " + number;

    let output = '';

    for (let i = number; i >= 1; i--) {
        let row = '';
        let count = number % 2 === 1 ? number : i; 
        for (let j = 0; j < count; j++) {
            row += i + ' ';
        }
        output += row.trim() + '\n';
    }

    document.getElementById("shapeOutput").textContent = output;
}

const contacts = [];

function addContact() {
    const input = document.getElementById("nameInput").value.trim();
    if (input === "") return;

    if (contacts.length >= 7) {
        contacts.shift(); 
    }
    contacts.push(input);
    document.getElementById("nameInput").value = "";
    newContacts();
}

function removeContact() {
    contacts.shift(); 
    newContacts();
}

function newContacts() {
    document.getElementById("contactsOutput").textContent = contacts.join(", ");
}
