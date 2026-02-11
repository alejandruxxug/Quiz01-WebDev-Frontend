"use strict";

let form = document.getElementById('form');
let result = document.getElementById('result');
let restartButton = document.getElementById('restart');
let resultText = document.getElementById('result-text');

let reportValidity = (personName) => {
    if (personName.value.length < 3) {
        resultText.classList.add('error');
        message = 'Name must be at least 3 characters long';
    } else {
        message = 'Name is valid';
    }
    return message;
}

buildMessage = (name, mood) => {
    console.log(name, mood);
    console.log(document.getElementById('name').value);
    if (mood === 'Happy') {
        message = `Hello ${name}! You are ${mood}. Always be happy!`;
    } else if (mood === 'Serious') {
        message = `Hello ${name}! You are ${mood}. Dont me such a bummer, be happy!`;
    } else if (mood === 'Sad') {
        message = `Hello ${name}! You are ${mood}. Smile and be happy!`;
    }
    return message;
}

renderMessage = (message) => {
    resultText.innerHTML = message;
}

resetMessage = () => {
    message = 'Nothing to show yet';
    return message;
}


form.addEventListener('submit', (e) => {
    personName = document.getElementById('name').value;
    mood = document.getElementById('mood').value;
    e.preventDefault();  
    reportValidity(personName);
    message = buildMessage(personName, mood);
    renderMessage(message);
});

restartButton.addEventListener('click', () => {
    resetMessage();
    renderMessage(resetMessage());
});



