let generatedPassword;
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const digits = "0123456789";
const minus = "-";
const underline = "_";
const special = "!\"#$%'()*+,./:;=?@\\^`~";
const brackets = "[]{}<>";
console.log("Hello");
document.write("Fuck");

// Create Random Int in range (inclusive)
function getRandomIntInclusive(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1) + min);
}

// Create Random Float in range (inclusive)
function getRandomFloatInclusive(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.random() * (max - min + 1) + min;
}

// Generate random string to length
function makeName(length) {
	let result = [];
	let characters = "abcdefghijklmnopqrstuvwxyz";
	for (var i = 0; i < length; i++) {
		result.push(characters.charAt(Math.floor(Math.random() * characters.length)));
	}
	result[0] = result[0].toUpperCase();
	return result.join("");
}
