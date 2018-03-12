//Prototype Hero
var Hero = {

    //Initializing Hero
    initHero: function (name, health, strength) {
        this.name = name;
        this.health = health;
        this.strength = strength;
        this.xp = 0;
    }
};


//Set new category of Hero called "Player"
var Player = Object.create(Hero);

//Add initPlayer function to Player
Player.initPlayer = function (name, health, strength) {
    this.initHero(name, health, strength);
    this.xp = 0;
};
//Add description function to Player
Player.describe = function () {
    var description = this.name + " has " + this.health + " HP, " + this.strength + " SP and " + this.xp + " XP.";
    return description;
};


//Set new category of Hero called "Enemy"
var Enemy = Object.create(Hero);

//Add initEnemy function to Enemy
Enemy.initEnemy = function (name, health, strength, breed, value) {
    this.initHero(name, health, strength);
    this.breed = breed;
    this.value = value;
};



// --- //


//Create Player 1
var player1 = Object.create(Player);
player1.initPlayer("Kestrel", 110, 30);

//Create Player 2
var player2 = Object.create(Player);
player2.initPlayer("Ardan", 250, 10);

console.log("Welcome to the game! Here are our heroes :")
console.log(player1.describe());
console.log(player2.describe());

//Create Enemy 1
var monster = Object.create(Enemy);
monster.initEnemy("Baron", 100, 40, "Mecha", 10);

console.log("A monster show up: It's a " + monster.breed + " called " + monster.name + "!");
