// ( String name , String email , Array listOfFriends)
function Member( name , email , listOfFriends ) {
	this.name 		   = name;
	this.email 		   = email;
	this.listOfFriends = listOfFriends;
};


function createNewMember( name , email , listOfFriends ) {
	return new Member( name , email , listOfFriends );
};

exports.createNewMember = createNewMember;