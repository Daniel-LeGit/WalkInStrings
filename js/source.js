let writeOutput = function(text)
{
    document.write(`<h1>${text}</h1>`);
}

writeOutput("Done!!!");

for(let i=0; i<3; i++)
{
    writeOutput(i);
}

const j=3;




let Dog = {
    name: "Spike",
    numLegs: 4,
    sayNumLegs: function() {
        return `This dog has ${Dog.numLegs} legs`;
    }
};

writeOutput(Dog.sayNumLegs());





// Construtor of Cats with properties for each cat
function Cat(nameCat, colorCat) 
{
    this.name = nameCat;
    this.color = colorCat;
    this.numLegs = 4;
    this.sayNumLegs = function() {
        return `This cat has ${this.numLegs} legs`;
    }
}

let bubsy = new Cat("Bubsy", "Orange");
writeOutput(bubsy.name);
writeOutput(bubsy.sayNumLegs());


if (bubsy instanceof Cat)
{
    writeOutput(`${bubsy.name} is a cat`);
} else 
{
    writeOutput(`${bubsy.name} is not a cat`);
}





// Add a new property to Cat that is the same for all cats
Cat.prototype.drinks = "Milk";
writeOutput(`${bubsy.name} drinks ${bubsy.drinks}`);


// Add a function to Cat for all cats
Cat.prototype.jump = function() {
    return "I'm jumping on you"
}

writeOutput(bubsy.jump());


// Could change prototype in one go
Cat.prototype = {
    constructor: Cat,
    drinks: "Milk",
    jump: function()
    {
        return "I'm jumping on you"
    },
    sleep: function()
    {
        return "ZZZZZZZZZZZZZZZZZZZZZZZZZZZ"
    }
};


// Function - returns true if cat is a Cat
function IsACat(cat)
{
    return cat.constructor === Cat;
}



// Create an upper class
function Mammal()
{
}

Mammal.prototype = {
   constructor:Mammal,
   eat: function() {
       return "nham nham";
   },
   speak: function() {
       return "I am speechless...";
   }
};


Cat.prototype=Object.create(Mammal.prototype);
Cat.prototype.constructor=Cat;
Dog.prototype=Object.create(Mammal.prototype);
Dog.prototype.constructor=Dog;

// To create a BigCat that inherits from Cat
function BigCat(name, color)
{
    this.name = name,
    this.color = color
}
BigCat.prototype = Object.create(Cat.prototype);
BigCat.prototype.constructor = BigCat;

let Lion=new BigCat("Simba", "Orange and Brown");
let Tom=new Cat("Tom", "Brown");

// Replace Mammal default speak function for each animal
BigCat.prototype.speak = function() { return "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"; }
Cat.prototype.speak = function() { return "miau"; }

writeOutput(Lion.name);
writeOutput(Lion.speak());

writeOutput(Tom.name);
writeOutput(Tom.speak());


/////////


function Bird() {
    this.energy = 999;
}

Bird.prototype = {
    eat: function() {
        return "nham nham";
    },
    speak: function() {
        return "piu piu";
    },
    fly: function() {
        return "I can flyyyyyyyyyyyyyy";
    }
}

function Eagle() {
    this.energy = 900;
}

Eagle.prototype = Object.create(Bird.prototype);
Eagle.prototype.constructor = Eagle;

function Penguin() {
    this.energy = 90;
}

Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;
Penguin.prototype.fly = function() {
    return "I'm a penguin, can't fly!"
}

let penguin = new Penguin();
writeOutput(penguin.fly());

let eagle = new Eagle();

let birds = [eagle, penguin];

// show all the birds
for (let i=0; i<birds.length; i++){
    writeOutput(birds[i].fly());
}




///////////////////////////


// does the same, but using Class to replace:
//function Bird(name) {
//    this.name = name;
//    this.energy = 999;
//}
//
//Bird.prototype = {
//    eat: function() {
//        return "nham nham";
//    },
//    speak: function() {
//        return "piu piu";
//    },
//    fly: function() {
//        return "I can flyyyyyyyyyyyyyy";
//    }
//}
//
//function Penguin() {
//    this.energy = 90;
//}
//
//Penguin.prototype = Object.create(Bird.prototype);
//Penguin.prototype.constructor = Penguin;
//Penguin.prototype.fly = function() {
//    return "I'm a penguin, can't fly!"
//}




class NewBird {
    constructor(name) {
        this.name = name;
        this.energy = 999;
    }
    eat() {
        return "nham nham";
    }
    speak() {
        return "piu piu";
    }
    fly() {
        return "I can flyyyyyyyyyyyyyy";
    }
}


class NewPenguin extends NewBird {
    constructor(name) {
        super(name);
        this.energy=90;
    }
    fly() {
        return "I'm a penguin, can't fly!";
    }
}


let tweety=new NewBird("PiuPiu");
let peng = new NewPenguin("HappyFeet");

let birdslist = [tweety, peng]; 

for (let i=0; i<birdslist.length; i++) 
{
    writeOutput(birdslist[i].name);
    writeOutput(birdslist[i].fly());        
}





///////////////////////////////////


let convertToF = function (celsius) 
{
    let fahrenheit = celsius * 9/5 + 32;
    return fahrenheit;
} 


let characters = function (str) 
{
    for (let i = 0; i < str.length; i++) {
        document.write(str[i]);
    }
}

characters("abcde");


let reverseCharacters = function (str) 
{

    for (let i = str.length-1; i >= 0; i--) {
        document.write(str[i]);
    }
}

reverseCharacters("abcde");


let factorial = function (n)
{
    let fact = 1;
    for (let i = 2; i <= n; i++) {
        fact *= i;
    }
    return fact;
}

writeOutput(factorial(5));



let theLongestWord = function (str)
{
    // Break up the string into words
    // Count the number of characters in each word
    // Save the biggest word
    let words = str.split(' ');
    let word = "";
    for (let i = 0; i < words.length; i++)
    {
        if (words[i].length > word.length) 
        {
            word = words[i];
        }
    }
    return word;
}

writeOutput(theLongestWord("The quick brown fox jumped over the lazy dog"));





// TPC


writeOutput("<br><br>");
writeOutput("HOMEWORK!!!!!!!!!");
writeOutput("=================");




class Mammals {
    constructor(name) {
        this.name=name;
    }    
    eat() {
        return "nham nham";
    }
}


class aDog extends Mammals {
    constructor(name){
        super(name);
    }
    speak() {
        return "woof woof";
    }
}

class aCat extends Mammals {
    constructor(name){
        super(name);
    }
    speak() {
        return "miau";
    }
}

class aBigCat extends Mammals {
    constructor(name){
        super(name);
    }
    speak() {
        return "grrrrrrrrrrrrrrrrrrrrrr";
    }
}

let myDog=new aDog("Snoopy");
let myCat=new aCat("Garfield");
let myBigCat=new aBigCat("Bubsy");

myBigCat.speak = function() {
    return "grrrmiaaau";
}




let animalslist = [myDog, myCat, myBigCat]; 

for (let i=0; i<animalslist.length; i++) 
{
    writeOutput(animalslist[i].name);
    writeOutput(animalslist[i].eat());        
    writeOutput(animalslist[i].speak());        
}





writeOutput("<br><br>");


let truncateString = function (str, num) 
{
    let string = "";
    if (str.length < num) {
        string = str;
    } else {
        for (let i = 0; i < num; i++)
        {
            string+=str[i];
        }       
    }
    return string;
}

writeOutput(truncateString("this is a sleepy day", 90));
writeOutput(truncateString("this is a sleepy day", 9));



let titleCase = function (str)
{
    let sentence = "";
    let tit = 1;
    for (let i = 0; i < str.length; i++)
    {
        if (tit == 1) {
            sentence += str[i].toUpperCase();
        } else {
            sentence += str[i];
        }

        tit = 0;
        if (str[i] == ' ')
        {
            tit = 1;
        }
    }
    return sentence;
}

writeOutput(titleCase("this is a sleepy day"));




