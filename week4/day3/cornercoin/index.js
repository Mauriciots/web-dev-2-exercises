class Transaction {
  constructor(account) {
    this.account = account;
  }

  commit() {
    this.account.balance += this.value;
  }
}

class Withdrawal extends Transaction {
  constructor(amount, account) {
    super(account);
    this.amount = amount;
  }

  validate() {
    return this.account.balance >= this.amount;
  }

  get value() {
    if (!this.validate(this.amount)) {
      throw new Error("Current account is not enough to commit this withdrawl");
    }
    return -this.amount;
  }
}

class Deposit extends Transaction {
  constructor(amount, account) {
    super(account);
    this.amount = amount;
  }

  get value() {
    return this.amount;
  }
}

class Account {
  #history;
  #balance;

  constructor(userName, balance) {
    this.userName = userName;
    this.#balance = balance;
    this.#history = [balance];
  }

  get balance() {
    return this.#balance;
  }

  set balance(balance) {
    this.#balance = balance;
    this.#history.push(balance);
  }

  get history() {
    return this.#history;
  }
}

// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected
const myChqAccount = new Account("Mauricio", 10000);
const t1 = new Deposit(1780, myChqAccount);
t1.commit();
console.log("Transaction 1:", t1);
const t2 = new Deposit(700, myChqAccount);
t2.commit();
console.log("Transaction 2:", t2);
const t3 = new Withdrawal(950, myChqAccount);
t3.commit();
console.log("Transaction 3:", t3);

const t4 = new Withdrawal(1500, myChqAccount);
console.log("Validate withdrawl", t4.validate());
t4.commit();

console.log("Balance:", myChqAccount.balance);
console.log("History", myChqAccount.history);
