var Hero = {
    name: "",
    health: 0,
    strength: 0,
    xp: 0,

    describe: function () {
        var describe = this.name + " has " + this.health + " HP, " + this.strength + " SP and " + this.xp + " XP.";
        return describe;
    }
};

var Hero1 = Object.create(Hero);
Hero1.name = "Kestrel";
Hero1.health = 110;
Hero1.strength = 30;

var Hero2 = Object.create(Hero);
Hero2.name = "Ardan";
Hero2.health = 200;
Hero2.strength = 10;

console.log(Hero1.describe());
console.log(Hero2.describe());
