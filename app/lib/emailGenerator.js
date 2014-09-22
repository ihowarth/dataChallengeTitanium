var afterAtOptions = [
	"gmail",
	"yahoo",
	"blueyonder",
	"aol",
	"me",
	"randomCompany",
	"mail",
	"outlook",
	"hotmail",
	"msn"
];

var afterDotOptions = [
	"com",
	"net",
	"org",
	"info",
	"biz",
	"co.uk",
	"com.mx",
	"fr",
	"de",
	"ca"
];


function generateNewEmail( name ) {
	var beforeAt = name + "_" + Math.floor( Math.random() * 9999 );
	var afterAt  = afterAtOptions[ Math.floor( Math.random() * afterAtOptions.length )];
	var afterDot = afterDotOptions[ Math.floor( Math.random() * afterDotOptions.length )];
	
	return beforeAt + "@" + afterAt + "." + afterDot;
};

exports.generateNewEmail = generateNewEmail;