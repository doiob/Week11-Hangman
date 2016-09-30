
function(word,guess,c)
{
	idx =  check(word,c)
	if ( idx != -1 )
	{
		guess[idx]=c
	}
	return guess;
	
}
