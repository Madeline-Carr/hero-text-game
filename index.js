
//Makes the content text box
let textField = document.getElementById("Main");

//Nodes
let para = document.createElement("P");
let div = document.createElement("Div");
/*
let makeBreak = function () {
    let linebreak = document.createElement("br");
    document.getElementById("game").appendChild(linebreak);
};
*/
document.getElementById('attack').addEventListener('click', function () {
    yourCharacter.attack(vampire);
});
document.getElementById('defend').addEventListener('click', function () {
    yourCharacter.defend(vampire);
});
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
    var self = this;
    this.arrival = function () {
        let pickLocationText = document.createTextNode("Hello! Welcome to " + self.name + " it is very " + self.weather + " here, I hope you don't mind! " + self.info);
        para.appendChild(pickLocationText);
        document.getElementById("game").appendChild(para);

    }
}

//Location List
let oldBuckingham = new MakeLocation("Old Buckingham", "cold", "Everything is always cold here...");
let otterDale = new MakeLocation("Otterdale", "hot", "Has anyone seen the mayor???");
let padstow = new MakeLocation("Padstow", "rainy", "I don't know what to say!");
let bellmare = new MakeLocation("Bellmare", "foggy", "We have 500 cows here!");
let deathfall = new MakeLocation("Deathfall", "very, hot", "Everything is lava so good luck!");
/*
*********************** 
Game Options 
*********************** 
*/
let gameOptions = {
    level: 1,
    whatName: function () {
        /* THIS WILL ASK THE NAME BUT NOT MAKE A TEXT BOX FOR AN ANSWER
        let question = document.createElement("P");
        let whatYourName = document.createTextNode("What is your Name?");
        question.appendChild(whatYourName);
        document.getElementById("game").appendChild(question);
         */
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
        button.id = "one";
        document.getElementById("newdiv").appendChild(button);
        document.getElementById("one").addEventListener("click", oldBuckingham.arrival);

        //Makes a button with an option2. 
        let buttonTwo = document.createElement("Button");
        let placeTwo = document.createTextNode(locationTwo.name);
        buttonTwo.appendChild(placeTwo);
        buttonTwo.id = "two";
        document.getElementById("newdiv").appendChild(buttonTwo);
        document.getElementById("two").addEventListener("click", otterDale.arrival);
    }
};

//This will be moved but it is here for now. 
gameOptions.whatName();