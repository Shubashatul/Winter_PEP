// simualte cont and let for a banking system application by declaring the following functions to createAccount() to create account
//  withdraw() to withdraw money deposite() to deposite money
// Banking System Simulation

// Array to store all accounts
// Array to store accounts
const accounts = [];

// Function to create a new account
function createAccount(name, balance = 0) {
    const account = {
        name: name,
        balance: balance,
        accountNumber: accounts.length + 1 // Generate account number
    };
    accounts.push(account);
    console.log(`Account created for ${name} with balance $${balance}.`);
    return account;
}

// Function to deposit money
function deposit(accountNumber, amount) {
    const account = accounts.find(acc => acc.accountNumber === accountNumber);
    if (account) {
        account.balance += amount;
        console.log(`$${amount} deposited. New balance: $${account.balance}.`);
    } else {
        console.log("Account not found.");
    }
}

// Function to withdraw money
function withdraw(accountNumber, amount) {
    const account = accounts.find(acc => acc.accountNumber === accountNumber);
    if (account) {
        if (amount <= account.balance) {
            account.balance -= amount;
            console.log(`$${amount} withdrawn. New balance: $${account.balance}.`);
        } else {
            console.log("Not enough money in the account.");
        }
    } else {
        console.log("Account not found.");
    }
}

// Example usage
const account1 = createAccount("John", 500); // Create John's account
const account2 = createAccount("Jane", 300); // Create Jane's account

deposit(account1.accountNumber, 200); // Deposit into John's account
withdraw(account1.accountNumber, 100); // Withdraw from John's account

withdraw(account2.accountNumber, 400); // Try to withdraw more than Jane's balance
withdraw(999, 50); // Try to withdraw from a non-existent account
