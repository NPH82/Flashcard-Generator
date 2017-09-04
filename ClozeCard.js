var inquirer = require('inquirer');

//Cloze card creation
function ClozeCard(text, cloze) {
	this.fullText = text;
	this.partial = text.split(cloze);
	this.cloze = cloze;
};

//throw error if cloze deletion doesn't appear in text.
ClozeCard.prototype.noCloze = function (err) {
	if(!cloze) {
		console.log(err);
	}
}

inquirer.prompt([
	{
		name: 'text',
		message: 'Enter message for cloze card.'
	}, {
		name: 'cloze',
		message: 'What do you want to hide?'
	}
	]).then(function(answers) {
		var clozeFlashcard = new ClozeCard(answers.text, answers.cloze);
		clozeFlashcard.cloze.replace(cloze, ' ');
		console.log(clozeFlashcard);
		console.log(clozeFlashcard.partial.join());
	});

module.exports = ClozeCard;