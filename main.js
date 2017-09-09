var inquirer = require('inquirer');
var fs = require('file-system');
var basicCard = require('./BasicCard.js');
var clozeCard = require('./ClozeCard.js');

var flashCards = [];


var createCard = function() {
    inquirer.prompt([{
        type: 'list',
        message: 'What type of flashcard do you want to create?',
        choices: ['Basic Card', "Cloze Card"],
        name: "cardType"
    }]).then(function(choice) {
        var cardType = choice.cardType;
        console.log(cardType);

        if (cardType === 'Basic Card') {
            inquirer.prompt([{
                type: 'input',
                message: 'Enter question for front of flashcard.',
                name: 'front'
            }, {
                type: 'input',
                message: 'Enter the answer for the back of flashcard.',
                name: 'back'
            }]).then(function(basicCardInfo) {

                var flashcardObject = {
                    type: 'basicCard',
                    front: basicCardInfo.front,
                    back: basicCardInfo.back
                };
                flashCards.push(flashcardObject);
                fs.appendFile('flashCards.js', JSON.stringify(flashCards, null, 2), function(err) {
                	if(err) {
                		console.log(err);
                	}
                });
            });
        } else {
            inquirer.prompt([{
                type: 'input',
                message: 'Enter message for cloze card.',
                name: 'text'
            }, {
                type: 'input',
                message: 'What do you want to cloze?',
                name: 'cloze'
            }]).then(function(clozeCardInfo) {

                var flashcardObject = {
                    type: 'clozeCard',
                    text: clozeCardInfo.text,
                    partial: clozeCardInfo.text.replace(clozeCardInfo.cloze, '...'),
                    cloze: clozeCardInfo.cloze
                };

                if (!flashcardObject.text.includes(flashcardObject.cloze)) {
                	console.log('ERROR: "' + flashcardObject.cloze + '" does not appear in "' + flashcardObject.text + '".');
                } else {
                    flashCards.push(flashcardObject);
                    fs.appendFile('flashCards.js', JSON.stringify(flashCards, null, 2), function(err) {
                    	if(err) {
                    		console.log(err);
                    	}
                    });
                }

            })
        }
    });
}
createCard();