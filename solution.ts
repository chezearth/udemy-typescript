type BankAccount = { money: number, deposit: (v: number) => void };


let bankAccount: BankAccount = {
  money: 2000,
  deposit(value: number): void {
    this.money += value;
  }
};

let myself: { name: string, bankAccount: BankAccount, hobbies: string[] } = {
  name: 'Charles',
  bankAccount: bankAccount,
  hobbies: ['sport', 'coding']
};

myself.bankAccount.deposit(3000);

console.log(myself);
