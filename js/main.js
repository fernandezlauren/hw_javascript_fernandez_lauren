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
