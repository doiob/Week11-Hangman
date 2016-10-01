var inquirer = require('inquirer')
var game = require('./game')
var word = require('./word')
var letter = require('./letter')

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
var numOfChances = 5;
guessWord = Buffer.alloc(len)
guessWord.fill('_')
console.log("Theme is Zoo animals")
console.log("\t\t\t\t\t\t" + guessWord.toString('utf8') + "\n")
var i=0;
//5 chances
var count=0
 
function hangman()
{
	var len = chosenWord.length;
		inquirer.prompt(question).then(function (answers) {
		var idx = word.check(chosenWord,answers.ch);
		if(  idx != -1 )
			{
				for(i=0;i<len;i++)
				{
					
					if ( chosenWord[i] === answers.ch )
					{ 
					  guessWord[i] = answers.ch.charCodeAt()
					  console.log("here" + guessWord)
					}
				}
				
			}
		else
		{
			count++;
			console.log("Your guess is wrong")
			if ( count === numOfChances )
			{
				console.log("You lose !!! correct guess is ",chosenWord)
			}
		}
		
		if ( count < numOfChances )
		{
			left = numOfChances - count
			
			console.log("Number of Guesses left "+ left)
			console.log("\t\t\t\t\t\t" + guessWord.toString('utf8'))
			hangman()
    	}
    	if( word.check(guessWord,'_') == -1)
    	{
    		console.log("You win !!")
    		process.exit()
    	}
    	console.log("\n")
    	});
        
}
hangman()