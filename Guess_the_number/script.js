function start() {
    randNum = Math.floor(Math.random() * 100) + 1;
    attempt = 1;
    console.log("Random Number : ", randNum);
    input = prompt("Enter a Number between 1 to 100");

    while (input != randNum) {
        if (isNaN(input))
            input = prompt("Please Enter a Vaid Number");
        else if (input < randNum)
            input = prompt("Too small Try Higher Number");
        else
            input = prompt("Too Big Try Lower Number");
        attempt++;
    }
    console.log(" Congratulation You Successfully guessed the Number in attempt : ", attempt)
}