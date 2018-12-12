
//Makes the content text box
let textField = document.getElementById("Main");

//Nodes
let para = document.createElement("P");
let div = document.createElement("Div");

// Your character 
let yourCharacter = {
    name: "John",
    xp: 0,
    winPhrase: "I won!!!",
    health: 50,
    attackPoints: 10,
    defense: 5,
    specialMoveName: "Blast!",
    specialMove: function () {
        let special = true;
        this.attackPoints = this.attackPoints + 10;
    },
    attack: function (monster) {
        document.getElementById("buttons").style.display = "none";
        if (yourCharacter.attackPoints > monster.defense) {
            monster.health = monster.health - (yourCharacter.attackPoints - monster.defense);
            yourCharacter.attackPoints++;
            monster.defense--;
            yourCharacter.xp++;

            let say = document.createTextNode("WHAM!!! You got a hit!");
            para.appendChild(say);
            document.getElementById("game").appendChild(para);
            gameOptions.pickLocation(oldBuckingham, otterDale);
        }
        else {
            yourCharacter.health = yourCharacter.health - (monster.attackPoints - yourCharacter.defense);
            yourCharacter.defense--;
            monster.attackPoints++;
            textField.innerHTML = "WHAM!!! You got hit!";
            gameOptions.pickLocation(oldBuckingham, otterDale);
        }
        special = false;
    },
    defend: function (monster) {
        document.getElementById("buttons").style.visibility = "hidden";
        yourCharacter.defense > monster.attackPoints ? textField.innerHTML = "You Win!" : textField.innerHTML = "You Lose!";
        special = false;
    },
};

/*
*********************** 
Monsters 
*********************** 
*/
function MakeMonster(name, health, attackPoints, defense) {
    this.name = name;
    this.health = health;
    this.attackPoints = attackPoints;
    this.defense = defense;
};

//Monster List
let ghost = new MakeMonster("Ghost", 5, 2, 2);
let demon = new MakeMonster("Demon", 10, 5, 5);
let werewolf = new MakeMonster("Werewolf", 15, 7, 6);
let vampire = new MakeMonster("Vampire", 20, 8, 7);
let medusa = new MakeMonster("Medusa", 30, 12, 15);
let dragon = new MakeMonster("Dragon", 50, 20, 20);
let anubis = new MakeMonster("Anubis", 100, 25, 25);

/*
*********************** 
Locations 
*********************** 
*/
function MakeLocation(name, weather, info) {
    this.name = name;
    this.weather = weather;
    this.info = info;
    this.arrival = function () {
        console.log("Hello! Welcome to " + this.name + " it is very " + this.weather + " here, I hope you don't mind! " + this.info);
    }
}

//Location List
let oldBuckingham = new MakeLocation("Old Buckingham", "cold", "Everything is always cold here...");
let otterDale = new MakeLocation("Otterdale", "hot", "Has anyone seen the mayor???");
let padstow = new MakeLocation("Padstow", "rainy", "I don't know what to say!");
let bellmare = new MakeLocation("Bellmare", "foggy", "We have 500 cows here!");
let deathfall = new MakeLocation("Deathfall", "very, hot", "Everything is lava so good luck!");
console.log(otterDale);
/*
*********************** 
Game Options 
*********************** 
*/
let gameOptions = {
    level: 1,
    whatName: function () {
        yourCharacter.name = prompt("What is your name?");
        console.log(yourCharacter);
    },

    pickLocation: function (location, locationTwo) {
        //Asks where you want to go.
        let say = document.createTextNode("Where do you want to go?");
        para.appendChild(say);
        document.getElementById("game").appendChild(para);

        //Make a div to hold buttons.
        document.getElementById("game").appendChild(div);
        div.id = "newdiv";

        //Makes a button with an option1. 
        let button = document.createElement("Button");
        let placeOne = document.createTextNode(location.name);
        button.appendChild(placeOne);
        document.getElementById("newdiv").appendChild(button);
        //This does work
        button.onclick = function () {
            console.log("Testing");
        };

        //Makes a button with an option2. 
        console.log(otterDale):
        let buttonTwo = document.createElement("Button");
        let placeTwo = document.createTextNode(locationTwo.name);
        buttonTwo.appendChild(placeTwo);
        document.getElementById("newdiv").appendChild(buttonTwo);
        buttonTwo.onclick = locationTwo.arrival;
    }
};

//This will be moved but it is here for now. 
gameOptions.whatName();