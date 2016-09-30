exports.words=["cat","elephant","lion","donkey","monkey","ostrich","goat","cow","panther","bear","fox"]

exports.getword=function()
	{
	return (exports.words[Math.floor((Math.random() * 10) + 1)]);
	
	}
