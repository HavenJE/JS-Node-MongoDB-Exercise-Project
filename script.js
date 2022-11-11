
let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterHealth;
let inventory = ["stick"];

const button1 = document.querySelector('.button1');
const button2 = document.querySelector('.button2');
const button3 = document.querySelector('.button3');

const text = document.querySelector('.text');
const upText = document.querySelector('.upText');

const healthText = document.querySelector('.healthText');
const goldText = document.querySelector('.goldText');

const monsterStats = document.querySelector('.monsterStats');
const monsterNameText = document.querySelector('.monsterNameText');
const monsterHealthText = document.querySelector('.monsterHealthText');

const locations = [{}]; 

// initialize buttons - connecting them to functions 
button1.onclick = goStore;
button2.onclick = checkExercise;
button3.onclick = fightObesity;

// setting functions 
function update(location) {

}

function mainPage() {
    button1.innerText = ("Welcome to our store - Please browse the product catalogue");
    button2.innerText = ("Exercise catalogue - What body part would you like to train?");
    button3.innerText = ("Welcome to our Obesity fight - Check our weight loss strategies here:");
    button1.onclick = buyProduct;
    button2.onclick = startWorkOut;
    button3.onclick = mainPage;
    text.innerText = "Back to \"main page\"!" 
}

function goStore() {
    // console.log("Going to store");
    button1.innerText = ("Welcome to our store - Please browse the product catalogue");
    button2.innerText = ("Exercise catalogue - What body part would you like to train?");
    button3.innerText = ("Welcome to our Obesity fight - Check our weight loss strategies here:");
    button1.onclick = buyProduct;
    button2.onclick = startWorkOut;
    button3.onclick = mainPage;
    text.innerText = "Back to \"main page\"!" 

}

function checkExercise() {
    console.log("Check exercises!");
}

function fightObesity() {
    console.log("How to stag fit!");
}

function buyProduct() {

}

function startWorkOut() {

}

