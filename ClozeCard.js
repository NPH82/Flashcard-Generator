var inquirer = require('inquirer');

//Cloze card creation
function ClozeCard(text, cloze) {
    this.fullText = text;
    this.partial = text.replace(cloze, '...');
    this.cloze = cloze;
};

//throw error if cloze deletion doesn't appear in text.
ClozeCard.prototype.noCloze = function(err) {
    var text = this.fullText;
    var cloze = this.cloze;
    if (!text.includes(cloze)) {
        console.log('ERROR: "' + cloze + '" does not appear in "' + text + '".');
        return;
    }
};

ClozeCard.prototype.cardInfo = function() {
		console.log(this.fullText);
    console.log('Cloze: ' + this.cloze);
    console.log(this.partial);
}

// var count = 1;
// clozeFlashcards = [];

// var addClozeCard = function() {
//     if (count <= 3) {
//         inquirer.prompt([{
//             name: 'text',
//             message: 'Enter message for cloze card ' + count + '.'
//         }, {
//             name: 'cloze',
//             message: 'What do you want to hide?'
//         }]).then(function(answers) {
//             var createClozeFlashcard = new ClozeCard(answers.text, answers.cloze);
//             //need to fix this below
//             createClozeFlashcard.noCloze();
//             clozeFlashcards.push(createClozeFlashcard);
//             count++;
//             addClozeCard();
//         });
//     } else {
//         for (var i = 0; i < clozeFlashcards.length; i++) {
//             clozeFlashcards[i].cardInfo();
//         }
//     }
// };
// addClozeCard();
module.exports = ClozeCard;