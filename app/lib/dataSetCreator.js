// member = MemberPrototype.createNewMember( name , email , listOfFriends)
// name   = NameDatabase.getRandomName();
// email  = EmailGenerator.generateNewEmail( name );
function createDataSet( dataSetParams ) {
	
	/* Params structure ( rootMember.listOfFriends = )
     * 
     * 
     * each variable is a friend, the number of the variable is how many friends the friend has
     * { number , number , number }
     * 
     * e.g.
     * { 1 , 0 , 4 }
     * 
     * This would mean the root has 3 friends:
     * Friend 1 has 1 friends
     * Friend 2 and 0 friends
     * Friend 3 has 4 friends
     * 
     * 
     * 
     * More complex
     * 
     * each object is still a friend, so the root has 2 friends, but now friend 1 has 3 friends, who also have friends
     * { { number , number , number } , number }
     * 
     * e.g.
     * { { 5 , 0 , 2 } , 8 }
     * 
     * This would mean that the root has 2 friends:
     * Friend 1 has 3 friends
     * Friend 2 has 8 friends ( there are no deeper numbers, which means all 8 friends have 0 friends )
     * 
     * Friend 1's first friend has 5 friends
     * Friend 1's second friend has 0 friends
     * Friend 1's third friend has 2 friends
     * 
     * 
     * 
     * We need to go deeper
     * 
     * we can get as deep as we like with this structure, for example
     * {{ number , number , number } , number , { number , {{ number } , { number , number }} }}
     * 
     * e.g.
     * { { 4 , 2 , 1 } , 0 , { 4 , { 12  , { 999 , 6 }}} }
     * 
     * Okay, here we go -
     * 
     * This would mean that the root friend has 3 friends:
     * Friend 1 has 3 friends
     * Friend 2 has 0 friends
     * Friend 3 has 2 friends
     * 
     * Friend 1's first friend has 4 friends
     * Friend 1's second friend has 2 friends
     * Friend 1's third friend has 1 friend
     * 
     * Friend 3's first friend has 4 friends
     * Friend 3's second friend has 2 friends
     * 
     * Friend 3's second friend's first friend has 12 friends
     * Friend 3's second friend's second friend has 2 friends
     *
     * Friends 3's second friend's second friend's first friend has 999 friends
     * Friends 3's second friend's second friend's second friend has 6 friends
     */
	
	var name = NameDatabase.getRandomName();
	
	var member = MemberPrototype.createNewMember(
		name,
		EmailGenerator.generateNewEmail( name ),
	    []
	);
	
	console.log( member );
};

exports.createDataSet = createDataSet;