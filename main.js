var inquirer = require('inquirer')
var game = require('./game')
var question = [
{ 
	type:'input',
	name:'ch',
	message:'Guess a charater and press Enter',
	filter: function(val) {
	 return  val.charAt(0).toLowerCase()
	}
}
]

chosenWord = game.getword()
len = chosenWord.length
guessWord = chosenWord

String.prototype.replaceAt=function(index, character) {
    return this.substr(0, index) + character + this.substr(index+character.length);
    }

for ( var i=0;i<chosenWord.length;i++)
{
  chosenWord.replaceAt(i,'_')
  console.log(chosenWord)
}
console.log(guessWord,chosenWord)
inquirer.prompt(question).then(function (answers) {

});
