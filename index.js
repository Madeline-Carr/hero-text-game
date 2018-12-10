
//Makes the content text box
let textField = document.getElementById("Main");

//Nodes
let para = document.createElement("P");
let button = document.createElement("Button");

// Your character 
let yourCharacter = {
    name: "Madeline",
    xp: 0,
    winPhrase: "I won!!!",
    health: 50,
    attack: 10,
    defense: 5,
    specialMoveName: "Blast!",
    specialMove: function () {
        let special = true;
        this.attack = this.attack + 10;
    },
    attack: function (monster) {
        document.getElementById("buttons").style.display = "none";
        if (yourCharacter.attack > monster.defense) {
            monster.health = monster.health - (yourCharacter.attack - monster.defense);
            yourCharacter.attack++;
            monster.defense--;
            yourCharacter.xp++;

            let say = document.createTextNode("WHAM!!! You got a hit!");
            para.appendChild(say);
            document.getElementById("game").appendChild(para);
            pickLocation(oldBuckingham);
        }
        else {
            yourCharacter.health = yourCharacter.health - (monster.attack - yourCharacter.defense);
            yourCharacter.defense--;
            monster.attack++;
            textField.innerHTML = "WHAM!!! You got hit!";
            pickLocation(oldBuckingham);
        }
        special = false;
    },
    defend: function (monster) {
        document.getElementById("buttons").style.visibility = "hidden";
        yourCharacter.defense > monster.attack ? textField.innerHTML = "You Win!" : textField.innerHTML = "You Lose!";
        special = false;
    },
};

/*
*********************** 
Monsters 
*********************** 
*/
function MakeMonster(name, health, attack, defense) {
    this.name = name;
    this.health = health;
    this.attack = attack;
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

/*
*********************** 
Functions 
*********************** 
*/

function pickLocation(location) {
    //Asks where you want to go.
    let say = document.createTextNode("Where do you want to go?");
    para.appendChild(say);
    document.getElementById("game").appendChild(para);

    //Makes a button with an option. 
    let placeOne = document.createTextNode(location.name);
    button.appendChild(placeOne);
    document.getElementById("game").appendChild(button);

}

