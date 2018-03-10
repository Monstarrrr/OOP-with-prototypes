var credit = 0;
var debit = 0;

var Account = {
    owner: "Alex",
    balance: 0,
    credit: function (amount) {
        this.balance += amount;

    },
    debit: function (amount) {
        this.balance -= amount;

    },
    describe: function () {
        var description = "The balance of " + this.owner + " is " + this.balance + ".";
        return description;
    }

}

// -0- //

for (i = 0; i <= 3; i++) {
    var credit = Number(prompt("Add money"));
    Account.credit(credit);
    console.log(Account.describe());
    var debit = Number(prompt("Send money"));
    Account.debit(debit);
    console.log(Account.describe());
}
