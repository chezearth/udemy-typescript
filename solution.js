var bankAccount = {
    money: 2000,
    deposit: function (value) {
        this.money += value;
    }
};
var myself = {
    name: 'Charles',
    bankAccount: bankAccount,
    hobbies: ['sport', 'coding']
};
myself.bankAccount.deposit(3000);
console.log(myself);
