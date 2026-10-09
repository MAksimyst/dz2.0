// 1
let a1 = Number(prompt("Enter start number:"));
let b1 = Number(prompt("Enter end number:"));
let c1 = 0;

for (let i1 = a1; i1 <= b1; i1++) {
    c1 = c1 + i1;
}

alert("Sum = " + c1);


// 2
let a2 = Number(prompt("Enter first number:"));
let b2 = Number(prompt("Enter second number:"));

while (b2 != 0) {
    let c2 = a2 % b2;
    a2 = b2;
    b2 = c2;
}

alert("GCD = " + a2);


// 3
let a3 = Number(prompt("Enter number:"));
let b3 = "";

for (let i3 = 1; i3 <= a3; i3++) {
    if (a3 % i3 == 0) {
        b3 = b3 + i3 + " ";
    }
}

alert("Divisors: " + b3);


// 4
let a4 = Number(prompt("Enter number:"));
let b4 = 0;

if (a4 == 0) {
    b4 = 1;
} else {
    while (a4 != 0) {
        a4 = Math.floor(a4 / 10);
        b4++;
    }
}

alert("Digits = " + b4);


// 5
let a5 = 0;
let b5 = 0;
let c5 = 0;
let d5 = 0;
let e5 = 0;

for (let i5 = 1; i5 <= 10; i5++) {
    let f5 = Number(prompt("Enter number " + i5 + ":"));

    if (f5 > 0) {
        a5++;
    } else if (f5 < 0) {
        b5++;
    } else {
        c5++;
    }

    if (f5 % 2 == 0) {
        d5++;
    } else {
        e5++;
    }
}

alert(
    "Positive: " + a5 +
    "\nNegative: " + b5 +
    "\nZero: " + c5 +
    "\nEven: " + d5 +
    "\nOdd: " + e5
);


// 6
let a6;
let b6;
let c6;
let d6;

do {
    a6 = Number(prompt("Enter first number:"));
    b6 = Number(prompt("Enter second number:"));
    c6 = prompt("Enter +, -, * or /:");

    if (c6 == "+") {
        d6 = a6 + b6;
    } else if (c6 == "-") {
        d6 = a6 - b6;
    } else if (c6 == "*") {
        d6 = a6 * b6;
    } else if (c6 == "/") {
        d6 = a6 / b6;
    } else {
        d6 = "Wrong sign";
    }

    alert("Result = " + d6);

    c6 = prompt("Continue? yes/no");

} while (c6 == "yes");


// 7
let a7 = prompt("Enter number:");
let b7 = Number(prompt("How many digits to shift?"));

b7 = b7 % a7.length;

let c7 = a7.slice(b7) + a7.slice(0, b7);

alert("Result = " + c7);


// 8
let a8 = 1;
let b8;

do {
    if (a8 == 1) {
        alert("Monday");
    } else if (a8 == 2) {
        alert("Tuesday");
    } else if (a8 == 3) {
        alert("Wednesday");
    } else if (a8 == 4) {
        alert("Thursday");
    } else if (a8 == 5) {
        alert("Friday");
    } else if (a8 == 6) {
        alert("Saturday");
    } else {
        alert("Sunday");
    }

    b8 = prompt("Do you want to see the next day? OK/NO");

    a8++;

    if (a8 > 7) {
        a8 = 1;
    }

} while (b8 == "OK");


// 9
for (let a9 = 2; a9 <= 9; a9++) {

    for (let b9 = 1; b9 <= 10; b9++) {
        console.log(a9 + " * " + b9 + " = " + a9 * b9);
    }

    console.log("");
}