/////////////////////////////
// CODING CHALLENGE


/*
--- Let's build a fun quiz game in the console! ---
1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)
2. Create a couple of questions using the constructor
3. Store them all inside an array
4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).
5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.
6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).
7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/

/*
--- Expert level ---
8. After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result)
9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.
10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).
11. Display the score in the console. Use yet another method for this.
*/

var gamePlay = false;

var Question = function(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
}

var q1 = new Question('How many years older than Sam is Dean?', ['5 years', '10 years', '4 years'], 3);
var q2 = new Question('What happened to Bobby\'s wife?', ['Bit by vampire', 'Possesed by demon', 'Killed by shifter'], 2);
var q3 = new Question('Saving people, hunting things. ________', ['Easy as pie.', 'The burden we carry.', 'The family business'], 3);

questions = [q1, q2, q3];
var begin = window.prompt('Type any letter to begin quiz');
if (begin !== null) {
    gamePlay = true;
}

function quiz () {
    while (gamePlay) {
        var qnum = Math.floor(Math.random() * 3);
        console.log(questions[qnum].question);
        for(var i = 0; i < questions.length; i++) {
            var n = i +1;
            console.log(`${n}: ${questions[qnum].answers[i]}`)           
        }
        guess = window.prompt('Type \'exit\' to end quiz. Enter your guess to continue.');
        if (guess == 'exit') {
            gamePlay = false;
        } else {
            questions[qnum].check(guess);
        }
        
    }
}


Question.prototype.check = function(ans) {
    if (ans == this.correct){
        console.log('Correct!');
        return true;
    } else {
        console.log('Womp, womp');
        return false;    
    }
};

quiz();




