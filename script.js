let DoTheThing = function () {

    //Computer picks a number


    /* Loops have 3 part: CONTROL VARIABLE; CONTROL BOOLEAN EXPRESSION; CONTROL INCREMENT/DECREMENT/UPDATE

        CONTROL VARIABLE - controls when the loop executes

        CONTROL BOOLEAN EXPRESSION - boolean expression using the control variable which should at some point evaluate to false

        CONTROL UPDATE - assigning a new value to the control variable INSIDE the loop so that the boolean expression eventually evaluates to false
     */
    let restart = "YES";
    while (restart === "YES"){
        let computerNumber = Math.floor((Math.random()* 10) + 1);
        alert(computerNumber);

        //Alert to get players guess

        let playersGuess = parseInt(prompt("Guess a number between 1 and 10."), 10);
        while(playersGuess !== computerNumber ){

            if(playersGuess > computerNumber) {
            playersGuess = parseInt(prompt("Too High, Guess Again"), 10);
            }else
            playersGuess = parseInt(prompt("Too Low, Guess Again"), 10);
        }
        alert("YOU GUESSED IT!!!!");

        restart = prompt("Would you like to play again? Type 'Yes' or 'No' (case sensitive)");
    }



    //Compare players guess to computers number
    //if higher - Alert too high and then get players new guess - repeat
    //if lower - Alert too low and then get players new guess - repeat
    //if equal - Alert you win then ask to restart
        //if yes - repeat from beginning
        //if no - set computer on fire and escape


};

let DoTheOtherThing = function () {

    //same program with a do-while loop

    let restart;


    do{
        let computerNumber = Math.floor((Math.random()*10) +1);
        let playersGuess;

        do{
             playersGuess = parseInt(prompt("Guess a number between 1 and 10."), 10);

            if(playersGuess > computerNumber) {
                playersGuess = parseInt(prompt("Too High, Guess Again"), 10);
            }else
                playersGuess = parseInt(prompt("Too Low, Guess Again"), 10);

        }while(playersGuess !== computerNumber);

        alert("YOU GUESSED IT!!!!");
        restart = prompt("Would you like to play again? Type 'Yes' or 'No' (case sensitive)");

    }while(restart === "Yes");

};

































