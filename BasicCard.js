var inquirer = require('inquirer');

function BasicCard(front, back) {
    this.front = front;
    this.back = back;
};

BasicCard.prototype.cardInfo = function() {
    console.log(this.front + this.back);
    console.log("-----------")
};

var count = 1;
		flashcards = [];

var addCard = function() {
    if (count <= 3) {
        console.log("this is running");
        inquirer.prompt([{
            name: 'front',
            message: 'Enter question for front of flashcard ' + count + '.'
        }, {
            name: 'back',
            message: 'Enter the answer for the back of flashcard ' + count + '.'
        }]).then(function(answers) {

            var createCard = new BasicCard(answers.front, answers.back);

            flashcards.push(createCard);

            count++;
            addCard();
        });
    } else {
        for (var i = 0; i < flashcards.length; i++) {
            flashcards[i].cardInfo();
        }
    }
};

addCard();

module.exports = BasicCard;