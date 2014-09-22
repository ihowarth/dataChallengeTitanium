var rootMember = DataSetCreator.createDataSet([
	0,
	2,
	[
		0,
		2
	],
	0,
	[
		0,
		[
			2
		],
		0
	],
	0	
]);

var level = 1;


(function init() {
	addEventListeners();
	
	$.mainWin.open();	
})();


function addEventListeners() {
	$.mainWin.addEventListener( "click" , function() {
		printSocialGraph( rootMember );
	});
};


/* Challenge 1
 * Print level 1 friends first. Then print level 2 friends....and so on
 * 
 * Challenge 2
 * Add a second parameter to the function to specify which level to print and only print
 */  
function printSocialGraph( member , levelToPrint ) {
	console.log( JSON.stringify( member ) );
};













/* Challenge 3
 * Return the name and the level where you find the friend
 */
function searchFriendByEmail( email ) {
	
};


/* Challenge 4
 * Return an array of extended friends between the 2nd and 4th level, 
 * using the given name as the search parameter
 */
function searchForExtendedFriends( name ) {
	
};


/* Challenge 5
 * Delete a friend from the given member object
 */
function deleteFriendByEmail( email ) {
	for ( var i = 0; i < rootMember.listOfFriends; i++ ) {
		if ( rootMember.listOfFriends[i].email == email ) {
			rootMember.listOfFriends.slice( i , 1 );
		}
	} 
};
