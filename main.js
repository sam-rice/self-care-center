//------------------DATA MODEL------------------

var affirmations = [
    "I forgive myself and set myself free.",
    "I believe I can be all that I want to be.",
    "I am in the process of becoming the best version of myself.",
    "I have the freedom & power to create the life I desire.",
    "I choose to be kind to myself and love myself unconditionally.",
    "My possibilities are endless.",
    "I am worthy of my dreams.",
    "I am enough.",
    "I deserve to be healthy and feel good.",
    "I am full of energy and vitality and my mind is calm and peaceful.",
    "Every day I am getting healthier and stronger.",
    "I honor my body by trusting the signals that it sends me.",
    "I manifest perfect health by making smart choices.",
];

var mantras = [
    "Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.",
    "Don’t let yesterday take up too much of today.",
    "Every day is a second chance.",
    "Tell the truth and love everyone.",
    "I am free from sadness.",
    "I am enough.",
    "In the beginning it is you, in the middle it is you and in the end it is you.",
    "I love myself.",
    "I am present now.",
    "Inhale the future, exhale the past.",
    "This too shall pass.",
    "Yesterday is not today.",
    "The only constant is change.",
    "Onward and upward.",
    "I am the sky, the rest is weather."
];

//------------------HTML ELEMENT QUERY SELECTORS------------------

var messageDiv = document.querySelector('.message-div');
var messageButtonContainer = document.querySelector(".button-container");

var messageButton = document.querySelector("#message-button");


var allRadios = document.getElementsByName("message-type");


var affirmationRadio = document.getElementById("radio-affirmation");
var mantraRadio = document.getElementById("radio-mantra");


//------------------EVENT LISTENERS------------------

messageButton.addEventListener("click", getRandomMessage);

affirmationRadio.addEventListener("click", enableButton);
mantraRadio.addEventListener("click", enableButton);

//------------------EVENT HANDLERS------------------

function getRandomMessage() { 
    var targetArray;
    for (var i = 0; i < allRadios.length; i++) {
        if (allRadios[i].checked) {
            targetArray = eval(allRadios[i].value);
        };
    };

    var randomMessage = targetArray[getRandomIndex(targetArray)];
    displayMessage(randomMessage);
};

function displayMessage(message) {
    messageDiv.innerHTML = `

    <p>${message}</p>
    <button class="clear-button">clear</button>
    `
    return (document.querySelector(".clear-button")).addEventListener("click", clearMessage)
};

function clearMessage() {
    messageDiv.innerHTML = `
    <img src="./assets/meditate.svg" width="40%" height="40%">
    `
};

function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
};

  //------------------ERROR HANDLING------------------

function enableButton() {
    messageButton.removeAttribute("disabled");
    messageButton.classList.add("button-enabled");
};
