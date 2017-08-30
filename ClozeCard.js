module.exports = ClozeCard;

var ClozeCard = function(text, cloze) {
	this.text = text;
	this.cloze = cloze;
};

var cloze = (text.cloze);

var partial = (text.partial);

var fullText = (text.fullText);

//throw error if cloze deletion doesn't appear in text.

//use prototypes