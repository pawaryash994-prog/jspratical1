// Q.1

class BankAccount {

    constructor(accountno, accountholder, balance) {
        this.accountno = accountno;
        this.accountholder = accountholder;
        this.balance = balance;
    }

    deposit(amount) {

        this.balance += amount;

        console.log("deposite", amount)
        console.log("balance", this.balance)

    }

    withdraw(amount) {

        if (amount <= this.balance) {
            this.balance -= amount;
            console.log("withdraw", amount)
            console.log("balance", this.balance)
        } else {

            console.log("insufficient balance")
        }
    }
}

let account = new BankAccount(101, "yash", 5000);

account.deposit(1000);
account.withdraw(2000);



// Q.2 

let number = [10, 20, 30, 40];

let [a, b, c, d] = number;

console.log(c);
console.log(b);

//  Q.3


let Emp = {
    name1: "tom",
    id: 101,
    salary: 40000
}

let { name1, id, salary } = Emp;

console.log(name1);
console.log(salary);

// Q.4


function findmax(...number) {
    console.log(Math.max(...number));

}

findmax(10, 20, 30, 40, 50)

// Q.5

function greet(name = "guest") {

    console.log("hello," + name);

}

greet("yash")
greet();

// Q.6

function add1(a, b = 10) {
    console.log(a + b);
}

add1(10, 5)
add1(20);


// Q.7

try {
    console.log(myvariable);

} catch (error) {
    console.log("Error" + error.message)

}

// Q.8

function checkage1(age) {

    if (age <= 18) {
        throw new Error("age must be 18 above")
    }

    console.log("eligible")

}
checkage1(40)

// Q.9


function checkage2(age) {

    if (age <= 18) {
        throw new Error("age must be 18 above")
    }

    return "eligible"
}

try {
    console.log(checkage2(15));

} catch (err) {
    console.log("error" + err.message);

}


// Q.10

function divide1(a, b) {

    if (b == 0) {
        throw new Error("cannot divide by zero")
    }

    return a / b;
}

try {
    console.log(divide1(10, 0));

} catch (err) {
    console.log("error" + err.message);

}


// Q.11

class invalidSalaryError extends Error {

    constructor(message) {
        super(message);
        this.name = "invalidSalaryError";
    }
}

function checksalary(salary) {

    if (salary < 0) {
        throw new invalidSalaryError("salary cannot br negative")
    }
    console.log("vaild salary");

}

try {
    checkSalary(-5000)
} catch (error) {
    console.log(error.name + ":" + error.message);

}



//  Q.12

class invalidUsernameError extends Error {

    constructor(message) {
        super(message);
        this.name = "invalidUsernamError";
    }
}

function validUsernameError(username) {

    if (validUsernameError.length < 5) {
        throw new invalidUsernameError("username contain only 5 character")

    }
    
}
    console.log("valid username");


try {
    validUsername("yash")
} catch (error) {
    console.log(error.name + ":" + error.message);

}


//  Q.13

function first() {
    throw new error("enter in first function")
}

function second() {
    first();
}

function third() {
    try {
        second();
    } catch (err) {
        console.log(err.message);

    }
}
third();

// Q.14

function validage() {
    if (age < 18) {
        throw new error("age most be 1")
    }

}

function register(age) {

    try {
        validage(age)
        console.log("user successfully");

    } catch (err) {
        console.log(err.message);

    }
}

register(15);
register(22);

// Q15

import { add ,subtract ,multiplay ,divide } from "./calculator.js";

console.log(add(15,5));

console.log(subtract(15,5));

console.log(multiplay(15,5));

console.log(divide(15,5));

// Q.17


let mypromise = new Promise((resolve,reject)=>{
    resolve("task complete")
});

mypromise.then((message)=>{
    console.log("message")
})


// Q.18

let mypromise1 = new Promise((resolve,reject)=>{
    reject("task failed")
});

mypromise.catch((error)=>{
    console.log(error);
})


// Q.19

function  waitTwoSecond(){
    return new promise((resolve)=>{
        setTimeout(resolve,2000)
    })
}

async function completeTask(){
    await waitTwoSecond();

    console.log("task completed");
    
}
completeTask();

// Q.20

function getuser(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((Response)=>{
        return Response.json
    })

    .then((data)=>{
        console.log(data);
        
    })

    .catch((err)=>{
        console.log(err);
        
    })
}

getuser();