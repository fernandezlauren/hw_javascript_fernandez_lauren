var iceCream = ["Chocolate", "Vanilla", "Rocky Road"];
iceCream.push("Strawberry");

var pres1 = {
  firstName:"Donald",
  lastName:"Trump",
  termLength:4,
  party:"Republican",
  yearsOfPresidency:1
};

var pres2 = {
  firstName:"Barack",
  lastName:"Obama",
  termLength:4,
  party:"Democratic",
  yearsOfPresidency:8
};

var pres3 = {
  firstName:"George W.",
  lastName:"Bush",
  termLength:4,
  party:"Republican",
  yearsOfPresidency:8
};

var pres4 = {
  firstName:"Bill",
  lastName:"Clinton",
  termLength:4,
  party:"Democratic",
  yearsOfPresidency:8
};

var pres5 = {
  firstName:"George H. W.",
  lastName:"Bush",
  termLength:4,
  party:"Republican",
  yearsOfPresidency:4
};

var presidents = [pres1, pres2, pres3, pres4, pres5];

console.log(presidents[2]["firstName"] + " " + presidents[2]["lastName"]);

function howdy() {
    console.log("Lauren Fernandez says hi!");
}

howdy();

var numba = function(string) {
    var length = string.length;
    if (length < 7) console.log("What a short little word!");
    else if (length > 7) console.log("I’m sorry, but that’s too many to count.");
    else console.log("7, what a perfect choice!");
};

numba("7");
numba("seventy");
numba("university");

function inception(display, favMovie) {
    display(favMovie);
}

function display(movie) {
    console.log(movie + " is a fantastic movie.");
}

inception(display, "Inception");
