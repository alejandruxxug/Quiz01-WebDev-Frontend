"use strict"
let form = document.getElementById('form');
let result = document.getElementById('result');
let restartButton = document.getElementById('restart');
let resultText = document.getElementById('result-text');
let message = '';
let group = document.getElementById('group');
let code = document.getElementById('code');

let reportValidity = personName => {
    if (personName.length < 3) {
        resultText.classList.remove('success');
        resultText.classList.add('error');
        message = 'Name must be at least 3 characters long';
        return false;
    } else {
        resultText.classList.remove('error');
        resultText.classList.add('success');
        return true;
    }
}

const buildMessage = (name, mood) => {
    console.log(name, mood);
    console.log(document.getElementById('name').value);
    if (mood === 'Happy') {
        message = `Hello ${name}! You are ${mood}. Always be happy!❤️`;
    } else if (mood === 'Serious') {
        message = `Hello ${name}! You are ${mood}. Dont me such a bummer, be happy!🙂`;
    } else if (mood === 'Sad') {
        message = `Hello ${name}! You are ${mood}. Smile and be happy!😊`;
    }
}

const renderMessage = (message) => {
    resultText.innerHTML = message;
}

const resetMessage = () => {
    message = 'Nothing to show yet';
    resultText.classList.remove('success');
    resultText.classList.remove('error');
    return message;
}

function init() {
    code.innerHTML = '1020224094';
    group.innerHTML = 'Group A SC-01';
}

init();

form.addEventListener('submit', (e) => {

    let personName = document.getElementById('name').value;
    let mood = document.getElementById('mood').value;

    e.preventDefault();  

    if (reportValidity(personName)) { 
        buildMessage(personName, mood);  
    }

    renderMessage(message);
});

restartButton.addEventListener('click', () => {
    resetMessage();
    renderMessage(message);
});