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


(function init() {
	addEventListeners();
	
	$.mainWin.open();	
})();


function addEventListeners() {
	$.printLevelsButton.addEventListener( "click" , function() {
	    if ( $.searchNamesTextField.value != "" ) {
	       printSocialGraph( rootMember );
	       
	    } else {
	       alert( "Please enter a level to print" ); 
	    }
	});
	
	
	$.searchFriendByEmailButton.addEventListener( "click" , function() {
        if ( APP.validateEmail( $.searchEmailTextField.value ) ) {
            searchFriendByEmail( rootMember , $.searchEmailTextField.value.toLowerCase() );    
            
        } else {
            alert( "Please enter a real e-mail address" );
        }
    });
    
    
    $.searchExtendedFriendsByName.addEventListener( "click" , function() {
        if ( $.searchNamesTextField.value != "" ) {
            searchForExtendedFriends( rootMember , $.searchNamesTextField.value.toLowerCase() );    
            
        } else {
            alert( "Please enter a name" );
        }
    });
    
    
    $.deleteFriendByEmailButton.addEventListener( "click" , function() {
        if ( APP.validateEmail( $.deleteEmailTextField.value ) ) {
            deleteFriendByEmail( rootMember , $.deleteEmailTextField.value.toLowerCase() );    
            
        } else {
            alert( "Please enter a real e-mail address" );
        }
    });
};


/* Challenge 1
 * Print level 1 friends first. Then print level 2 friends....and so on
 * 
 * Challenge 2
 * Add a second parameter to the function to specify which level to print and only print
 */  
function printSocialGraph( member ) {
    // Selected level to print, 0 means print all levels in order
    var levelToPrint = $.selectLevelTextField.value;
    
	console.log( JSON.stringify( member ) );
};













/* Challenge 3
 * Return the name and the level where you find the friend
 */
function searchFriendByEmail( member , email ) {
    
};



/* Challenge 4
 * Return an array of extended friends between the 2nd and 4th level, 
 * using the given name as the search parameter
 */
function searchForExtendedFriends( member , name ) {
	
};





/* Challenge 5
 * Delete a friend from the given member object
 */
function deleteFriendByEmail( member , email ) {
    console.log( "\\\\\ BEFORE DELETE /////" );
    console.log( JSON.stringify( member ));
    
    // Loop through all the first level friends of the rootMember
    if ( member.listOfFriends.length > 0 ) {
    	for ( var i = 0; i < member.listOfFriends.length; i++ ) {
    	    // If the email addresses match, delete it from the array
    		if ( member.listOfFriends[i].email.toLowerCase() == email ) {
    			member.listOfFriends.splice( i , 1 );
    			
    			alert( "Friend deleted, please check console to confirm" );
    			
    			console.log( "\\\\\ AFTER DELETE /////" );
    			console.log( JSON.stringify( member ));
    			
    			// Break out after we find a match, as emails are unique
    			break;
    		}
    		
    		// If you reach the end of the list without finding a matching friend, alert the user
    		if ( (i + 1) == member.listOfFriends.length ) {
    		    alert( "No friends found with that email address" );
    		}
    	}
    	
    // If there are no friends, alert the user   
    } else {
        alert( "This user has no friends :(" );
    }
};