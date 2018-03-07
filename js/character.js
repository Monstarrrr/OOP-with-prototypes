var Char = {
    name: "Kestrel",
    health: 100,
    strength: 10,
    xp: 0,
    describe: function () {
        var description = this.name + " has " + this.health + " HP, " + this.strength + " SP and " + this.xp + " XP.";

        return description;
    }
}
console.log(Char.describe());
