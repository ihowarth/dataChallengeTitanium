// Default data structure
var rootMember = DataSetCreator.createDataSet([
	0,
	2,
	[
		0,
		[
			2,
			[
			    1
			]
		],
		0
	]
]);


// Used to print what level you are in, in the socialGraphLoop 
var currentLevel = 1;

// Used to reduce the amount the random generator can use, so it can't go forever
var dataSetCreatorRandomAmount = 4;


/**
 * Initialization stuff - done only once
 * 
 * init
 * addEventListeners
 */
(function init() {
	addEventListeners();
	
	$.mainWin.open();	
})();


function addEventListeners() {
    $.createNewDataButton.addEventListener( "click" , function() {
        // Reset the random amount each time, so it can be created properly again
        dataSetCreatorRandomAmount = 4;
        
        // Place the new random data Array structure into a variable so I can print it before I use it to create new data
        var newRandomDataArray = createRandomDataArray(); 
        
        console.log( "New random data structure: " + JSON.stringify( newRandomDataArray ));
        
        rootMember = DataSetCreator.createDataSet( newRandomDataArray );
    });
    
    
    $.printAllLevelsButton.addEventListener( "click" , function() {
	   console.log( JSON.stringify( rootMember ) ); 
	});
	
	
	$.printSelectedLevelButton.addEventListener( "click" , function() {
	    // Reset the current level
        currentLevel = 1;
           
	    if ( $.printSelectedLevelTextField.value != "" && typeof parseInt($.printSelectedLevelTextField.value) === "number" ) {
	       printSocialGraph( rootMember , $.printSelectedLevelTextField.value );
	       
	    } else {
	       alert( "Please enter a level to print, level 0 doesn't exist'" ); 
	    }
	});
		
	
	$.searchFriendByEmailButton.addEventListener( "click" , function() {
	    // Reset the current level
	    currentLevel = 1;
	    
        if ( APP.validateEmail( $.searchFriendByEmailTextField.value ) ) {
            searchFriendByEmail( rootMember , $.searchFriendByEmailTextField.value.toLowerCase() );    
            
        } else {
            alert( "Please enter a real e-mail address" );
        }
    });
    
    
    $.searchExtendedFriendsByNameButton.addEventListener( "click" , function() {
        // Reset the current level
        currentLevel = 1;
        
        if ( $.searchExtendedFriendsByNameTextField.value != "" ) {
            searchForExtendedFriends( rootMember , $.searchExtendedFriendsByNameTextField.value.toLowerCase() );    
            
        } else {
            alert( "Please enter a name" );
        }
    });
    
    
    $.deleteFriendByEmailButton.addEventListener( "click" , function() {
        if ( APP.validateEmail( $.deleteFriendByEmailTextField.value ) ) {
            deleteFriendByEmail( rootMember , $.deleteFriendByEmailTextField.value.toLowerCase() );    
            
        } else {
            alert( "Please enter a real e-mail address" );
        }
    });
};



/**
 * Main Functions
 * 
 * createRandomDataArray()
 * getNextLevelFriends( currentArray , levelsToPrint , searchParams )
 * beginLooping( friendsArray , levelParams , searchParams )
 * printSocialGraph( member , level )
 * searchFriendByEmail( member , email )
 * searchForExtendedFriends( member , name )
 * deleteFriendByEmail( member , email )
 */


// Creates a new random data Array to pass to the DataSetCreator
function createRandomDataArray() {
    var randomStructureArray  = [];
    var amountOfFriends = Math.floor(( Math.random() * dataSetCreatorRandomAmount) + 2);
    
    for ( var i = 0; i < amountOfFriends; i++ ) {
        // 25% chance to create a deeper level array, 75% chance to just create friends
        var randomAmount = Math.floor( Math.random() * 4 );
        
        if ( randomAmount == 3 ) {
            // I am so GDLK with recursion
            randomStructureArray.push( createRandomDataArray() );
            
        } else {
            randomStructureArray.push( randomAmount );
        }
    }
    
    // Eventually reduce this number so it HAS to end at some point :D
    dataSetCreatorRandomAmount--;
    
    return randomStructureArray;
};


// Loops through the levels with the set Params
function getNextLevelFriends( currentArray , levelsToPrint , searchParams ) {
    // Print put the level, so it's easy to read on the console
    console.log( "\\\\\\\\ LEVEL " + currentLevel + " ////" );
    
    // Set up the start and end level of print-outs ( it's awesome and dynamic ;) )
    var startLevel = levelsToPrint.startLevel;
    var endLevel   = levelsToPrint.endLevel || startLevel;
    
    
    // If there are search params copy the deets for later use
    var searchType = "";
    var searchKey  = "";
    
    if ( searchParams ) {
        searchType = searchParams.type;
        searchKey  = searchParams.searchKey;
    }
    
    
    // Create an Array to populate with deeper friends and return
    var nextArray = [];
    
    
    // Loop through the array of friends
    for ( var i = 0; i < currentArray.length; i++ ) {
        // If there are friends in the next level, loop through and add them to a queue
        if ( currentArray[i].listOfFriends.length > 0 ) {
            for ( var key in currentArray[i].listOfFriends ) {
                nextArray.push( currentArray[i].listOfFriends[key] );    
            }
        }
        
        // Only print the guys of the levels chosen, or if they choose to print all
        if (( currentLevel >= startLevel && currentLevel <= endLevel ) || ( startLevel == 0 && endLevel == 0 )) {
            // Make sure to only print the people with the searched name, if there is a search
            if ( !searchParams || (searchType == "name" && currentArray[i].name == searchKey) ) {
                console.log( "Name: " + currentArray[i].name + "  Email: " + currentArray[i].email );
            
            // Search for the email in a different way because we need to discontinue the search once found with a 'return'
            } else if ( searchType == "email" && currentArray[i].email == searchKey ) {
                console.log( "Name: " + currentArray[i].name + "  Email: " + currentArray[i].email + " found at level " + currentLevel );
                return [];
            } 
        }
    }   
    
    
    // Stop looping after you print all the guys of the correct level
    if ( currentLevel == endLevel ) {
        return []; 
    }    
    
    // Set up the counter to correctly print out
    currentLevel++;
    
    // Return the Array for recursion purposes :D
    return nextArray;
};


// Begins the looping and allows more code reuse and the ability to pass the rootMember 
// to the starting functions instead of the listOfFriends
function beginLooping( friendsArray , levelParams , searchParams ) {
    // Send an Array f current level friends and get returned an Array with deeper level friends
    var queue = getNextLevelFriends( friendsArray , levelParams , searchParams );
   
    // Recurse to keep checkign deeper levels, if there are any
    if ( queue.length > 0 ) {
        beginLooping( queue , levelParams , searchParams );
            
    } else {
        console.log( "\\\\\\\\ No more levels or manual break to stop searching ////" );
    } 
};



/* Challenge 1
 * Print level 1 friends first. Then print level 2 friends....and so on
 * 
 * Challenge 2
 * Add a second parameter to the function to specify which level to print and only print
 */ 
function printSocialGraph( member , level ) {
    beginLooping( member.listOfFriends , { startLevel : level } );
};


/* Challenge 3
 * Return the name and the level where you find the friend
 */
function searchFriendByEmail( member , email ) {
    beginLooping( member.listOfFriends , {
                                             startLevel : 0 
                                         }, 
                                         {   type      : "email", 
                                             searchKey : email
                                         });
};


/* Challenge 4
 * Return an array of extended friends between the 2nd and 4th level, 
 * using the given name as the search parameter
 */
function searchForExtendedFriends( member , name ) {
	beginLooping( member.listOfFriends , {
	                                         startLevel : 2, 
	                                         endLevel   : 4
	                                     }, 
	                                     {   type      : "name", 
	                                         searchKey : name
	                                     });
};


/* Challenge 5
 * Delete a friend from the given member object
 */
function deleteFriendByEmail( member , email ) {
    console.log( "\\\\\ BEFORE DELETE /////" );
    console.log( JSON.stringify( rootMember ));
    
    // Loop through all the first level friends of the rootMember
    if ( member.listOfFriends.length > 0 ) {
    	for ( var i = 0; i < member.listOfFriends.length; i++ ) {
    	    // If the email addresses match, delete it from the array
    		if ( member.listOfFriends[i].email.toLowerCase() == email ) {
    			member.listOfFriends.splice( i , 1 );
    			
    			// Apply it to the real object
    			rootMember = member;
    			
    			alert( "Friend deleted, please check console to confirm" );
    			
    			console.log( "\\\\\ AFTER DELETE /////" );
    			console.log( JSON.stringify( rootMember ));
    			
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