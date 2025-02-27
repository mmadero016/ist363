/*1*/ 
let myVar = 5;
console.log("My variable value is " + myVar + " . ");

/*2*/
let favoriteFoods = ["pozole","tacos","pizza","quesadillas"];
console.log(favoriteFoods[1]);
favoriteFoods.push("sushi")
console.log(favoriteFoods)

/*3*/
for (let i = 0; i < favoriteFoods.length; i++) {
    console.log("Favorite Food " + (i + 1) + ": " + favoriteFoods[i]);
}

/*4*/
for (let i = 0; i < favoriteFoods.length; i++) {
    if (i === 1) {continue;} 
    console.log("Favorite Food " + (i + 1) + ": " + favoriteFoods[i]);
}

/*5*/
let book = {
    title: "The Handmaid's Tale",
    author: "Margaret Atwood",
    yearPublished: 1985,
    isAvailable: true
};

if (book == true);
    {console.log("This book is available for checkout.");
}; 

/*6*/
let x = 1;
while (x < 21) {
    console.log(x);
    x++;
}

/*7*/
let randomNumber = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber);

