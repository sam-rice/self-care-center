//------------------DATA MODEL------------------

var affirmations = {
    name: "affirmations",
    messages: [
        { text: "I forgive myself and set myself free.", id: 1001, type: "affirmation" },
        { text: "I believe I can be all that I want to be.", id: 1002, type: "affirmation" },
        { text: "I am in the process of becoming the best version of myself.", id: 1003, type: "affirmation" },
        { text: "I have the freedom & power to create the life I desire.", id: 1004, type: "affirmation" },
        { text: "I choose to be kind to myself and love myself unconditionally.", id: 1005, type: "affirmation" },
        { text: "My possibilities are endless.", id: 1006, type: "affirmation" },
        { text: "I am worthy of my dreams.", id: 1007, type: "affirmation" },
        { text: "I am enough.", id: 1008, type: "affirmation" },
        { text: "I deserve to be healthy and feel good.", id: 1009, type: "affirmation" },
        { text: "I am full of energy and vitality and my mind is calm and peaceful.", id: 1010, type: "affirmation" },
        { text: "Every day I am getting healthier and stronger.", id: 1011, type: "affirmation" },
        { text: "I honor my body by trusting the signals that it sends me.", id: 1012, type: "affirmation" },
        { text: "I manifest perfect health by making smart choices.", id: 1013, type: "affirmation" }
    ]
};

var mantras = {
    name: "mantras",
    messages: [
        { text: "Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.", id: 1100, type: "mantra" },
        { text: "Don’t let yesterday take up too much of today.", id: 1101, type: "mantra" },
        { text: "Every day is a second chance.", id: 1102, type: "mantra" },
        { text: "Tell the truth and love everyone.", id: 1103, type: "mantra" },
        { text: "I am free from sadness.", id: 1104, type: "mantra" },
        { text: "I am enough.", id: 1105, type: "mantra" },
        { text: "In the beginning it is you, in the middle it is you and in the end it is you.", id: 1106, type: "mantra" },
        { text: "I love myself.", id: 1107, type: "mantra" },
        { text: "I am present now.", id: 1108, type: "mantra" },
        { text: "Inhale the future, exhale the past.", id: 1109, type: "mantra" },
        { text: "This too shall pass.", id: 1110, type: "mantra" },
        { text: "Yesterday is not today.", id: 1111, type: "mantra" },
        { text: "The only constant is change.", id: 1112, type: "mantra" },
        { text: "Onward and upward.", id: 1113, type: "mantra" },
        { text: "I am the sky, the rest is weather.", id: 1114, type: "mantra" }
    ]
};

var affirmationsUsed = [];
var mantrasUsed = [];


//------------------MISC FUNCTIONS------------------

function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
};


//------------------HTML ELEMENT QUERY SELECTORS------------------

var body = document.querySelector("body");

var messageDiv = document.querySelector('.message-div');
var messageButtonContainer = document.querySelector(".button-container");
var messageButton = document.querySelector("#message-button");

var allRadios = document.getElementsByName("message-type");
var affirmationRadio = document.getElementById("radio-affirmation");
var mantraRadio = document.getElementById("radio-mantra");


//------------------EVENT LISTENERS------------------

messageButton.addEventListener("click", messageSequence);

affirmationRadio.addEventListener("click", enableButton);
mantraRadio.addEventListener("click", enableButton);

//------------------EVENT HANDLERS------------------

function messageSequence() {
    setTimeout(getRandomMessage, 6000);
    setTimeout(loadAnimation, 500);
    bellFade();
};

//MESSAGE GENERATION/DATA HANDLING

function getRandomMessage() { 
    var targetObject;

    for (var i = 0; i < allRadios.length; i++) {
        if (allRadios[i].checked) {
            targetObject = eval(allRadios[i].value);
        };
    };

    if (!targetObject.messages.length) {
        displayMessage(`You have read all of our ${targetObject.name}, but we will show you them again.`);
        eval(targetObject.name).messages.push(...eval(targetObject.name + "Used"));

        return eval(targetObject.name + "Used").length = 0;

    } else {
        var randomIndex = getRandomIndex(targetObject.messages);
        var newMessageObject = targetObject.messages[randomIndex];
        var randomMessage = newMessageObject.text;
        
        changeBackground();
        displayMessage(randomMessage);
        storeUsedObject(newMessageObject);
    
        targetObject.messages.splice(randomIndex, 1);
    };
};


function storeUsedObject(object) {
    if (object.type === "affirmation") {
        affirmationsUsed.push(object);
    } else {
        mantrasUsed.push(object);
    };
};

//DOM UPDATING

function displayMessage(message) {
    messageDiv.innerHTML = `
    <p class="message-div-par" id="message-id">${message}</p>
    <button class="clear-button">clear</button>
    <div class="load-container"></div>
    `
    var clearButton = document.querySelector(".clear-button");
    var clearListener = clearButton.addEventListener("click", clearMessage);

    return [clearButton, clearListener];
};


function bellFade() {
    document.querySelector(".bell").classList.add("bell-fade");
};


function loadAnimation() {
    document.querySelector(".load-container").innerHTML = `
    <div class="moon"></div>
    <div class="crescent"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    `
    document.querySelector(".clear-button").classList.add("message-div-transition");
    document.querySelector("#message-id").classList.add("message-div-transition");
};


function changeBackground() {
    for (var i = 0; i < allRadios.length; i++) {
        if (allRadios[i].checked) {
            body.className = `${allRadios[i].value}-background`;
            return pageView = allRadios[i].value;
        };
    };
};


function homeBackground() {
    body.className = "";
}


function clearMessage() {
    document.querySelector(".clear-button").classList.add("clear-transition");
    document.querySelector("#message-id").classList.add("clear-transition");

    setTimeout(displayBell, 2000);
    setTimeout(homeBackground, 2000);
};


function displayBell() {
    messageDiv.innerHTML = `
    <img src="./assets/meditate.svg" class="bell" width="40%" height="40%">
    <div class="load-container"></div>
    `
};


  //------------------ERROR HANDLING------------------

function enableButton() {
    messageButton.removeAttribute("disabled");
    messageButton.classList.add("button-enabled");
};