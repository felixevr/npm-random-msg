const messages = [
	"Oscar",
	"Diego",
	"Laura",
	"Carmen",
	"Luis",
	"Miguel",
	"Marina"
];

const randomMsg = () => {
	const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
};
module.exports = { randomMsg }; // esto exporta toda la función 
