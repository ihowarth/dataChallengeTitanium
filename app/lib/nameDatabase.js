var names = [
	"terese",
	"cherri",
	"shane",
	"eliza",
	"dahlia",
	"gerard",
	"sindy",
	"cleopatra",
	"ricky",
	"demetra",
	"dwight",
	"kristian",
	"juli",
	"carly",
	"melida",
	"serina",
	"sharolyn",
	"jimmy",
	"angila",
	"hyacinth",
	"gary",
	"boyd",
	"maragret",
	"leena",
	"otelia",
	"shirleen",
	"kiersten",
	"nidia",
	"karlyn",
	"ivey",
	"britt",
	"magen",
	"beatriz",
	"dawna",
	"lakenya",
	"evelin",
	"kiera",
	"margart",
	"alishia",
	"asa",
	"lia",
	"teresia",
	"janel",
	"wanda",
	"marvella",
	"danyell",
	"ammie",
	"lucio",
	"mignon",
	"nicolle",
	"elba",
	"alethia",
	"jenae",
	"rudolf",
	"kala",
	"karin",
	"quentin",
	"donny",
	"denis",
	"gene",
	"earnest",
	"kristin",
	"sal",
	"lezlie",
	"shakita",
	"orville",
	"samantha",
	"love",
	"zelda",
	"jazmin",
	"elodia",
	"meggan",
	"amos",
	"obdulia",
	"mark",
	"lashell",
	"cyrstal",
	"sherlyn",
	"drew",
	"lauren",
	"vonda",
	"alvaro",
	"chance",
	"jenny",
	"pansy",
	"pamala",
	"crysta",
	"aldo",
	"annika",
	"gretchen",
	"delicia",
	"jacque",
	"sanford",
	"ozell",
	"isabella",
	"ena",
	"josef",
	"maribeth",
	"raeann",
	"fredda",
];


function getRandomName() {
	return names[ Math.floor( Math.random() * names.length )];
};

exports.getRandomName = getRandomName;