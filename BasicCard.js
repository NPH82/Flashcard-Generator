var inquirer = require('inquirer');

function BasicCard(front, back) {
	this.front = front;
	this.back = back;
};

inquirer.prompt([
	{
		name: 'front',
		message: 'Enter statement for front of flashcard.'
	}, {
		name: 'back',
		message: 'Enter answer for back of flashcard.'
	}
]).then(function(answers) {
	var flashcard = new BasicCard(answers.front, answers.back);

	console.log(flashcard);
});

module.exports = BasicCard;