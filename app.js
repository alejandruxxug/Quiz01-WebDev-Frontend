form = document.getElementById('form');
result = document.getElementById('result');
restartButton = document.getElementById('restart');
resultText = document.getElementById('result-text');


reportValidity = (Name) => {
    if (name.value.length < 3) {
        resultText.classList.add('error');
        resultText.innerHTML = 'Name must be at least 3 characters long';
    } else {
        resultText.innerHTML.classList.add('success');
    }
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
    name = document.getElementById('name').value;
    mood = document.getElementById('mood').value;
    e.preventDefault();  
    reportValidity();
    renderMessage(buildMessage(name, mood));
});

restartButton.addEventListener('click', () => {
    resetMessage();
    renderMessage(resetMessage());
});



