
//Makes the content text box
var textField = document.getElementById("Main");

//Nodes
var para = document.createElement("P");
var button = document.createElement("Button");

// Your character 
let yourCharacter = {
    name: "Madeline",
    health: 50,
    attack: 10,
    defense: 5,
    specialMove: "Blast!",
    xp: 0,
};

// Monsters 
function MakeMonster(name, health, attack, defense) {
    this.name = name;
    this.health = health;
    this.attack = attack;
    this.defense = defense
};

//New Monsters
var medusa = new MakeMonster("Medusa", 20, 8, 7);
console.log(medusa);

//Attacking
function attack() {
    document.getElementById("buttons").style.visibility = "hidden";
    if (yourCharacter.attack > medusa.defense) {
        medusa.health = medusa.health - (yourCharacter.attack - medusa.defense);
        yourCharacter.attack++;
        medusa.defense--;
        yourCharacter.xp++;

        var say = document.createTextNode("WHAM!!! You got a hit!");
        para.appendChild(say);
        document.getElementById("game").appendChild(para);
    }
    else {
        yourCharacter.health = yourCharacter.health - (medusa.attack - yourCharacter.defense);
        yourCharacter.defense--;
        medusa.attack++;
        textField.innerHTML = "WHAM!!! You got hit!";
    }
}
//Defending
function defend() {
    document.getElementById("buttons").style.visibility = "hidden";
    yourCharacter.defense > medusa.attack ? textField.innerHTML = "You Win!" : textField.innerHTML = "You Lose!"
}