"use strict";
let resultPassword;
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const digits = "0123456789";
const space = " ";
const minus = "-";
const underline = "_";
const special = "!\"#$%'()*+,./:;=?@\\^`~";
const brackets = "[]{}<>";
let passwordHistory = [];

let characterNames = [uppercase, lowercase, digits, space, minus, underline, special, brackets];

// Generate random string to length
function createString(length, characters) {
	let result = [];
	for (let i = 0; i < length; i++) {
		result.push(characters.charAt(Math.floor(Math.random() * characters.length)));
	}
	return result.join("");
}

// Setup variables and array for generation
function createCharacterList() {
	let characterList = "";
	let includeUppercase = document.getElementById("uppercaseCheckbox");
	let includeLowercase = document.getElementById("lowercaseCheckbox");
	let includeDigits = document.getElementById("digitsCheckbox");
	let includeSpace = document.getElementById("spaceCheckbox");
	let includeMinus = document.getElementById("minusCheckbox");
	let includeUnderline = document.getElementById("underlineCheckbox");
	let includeSpecial = document.getElementById("specialCheckbox");

	let checkboxes = [
		includeUppercase,
		includeLowercase,
		includeDigits,
		includeSpace,
		includeMinus,
		includeUnderline,
		includeSpecial,
	];

	// Adds all characters in checked categories into one string
	for (let i = 0; i < checkboxes.length; i++) {
		if (checkboxes[i].checked) {
			characterList += characterNames[i];
		}
	}
	return characterList;
}

function writePasswordToHTML() {
	// Shows a large generated password
	document.getElementById("pShowPassword").innerHTML = `<mark>${resultPassword}</mark>`;
	//
	let pPasswordHistoryID = document.getElementById("pPasswordHistory");
	let body = "";
	// for (let i = 0; i < passwordHistory.length; i++) {
	// 	body = `${passwordHistory[i]}<br>` + body;
	// }
	for (let i = 0; i < passwordHistory.length; i++) {
		body = `<p>${passwordHistory[i]}</p>` + body;
	}

	pPasswordHistoryID.innerHTML = body;
}

function makePassword() {
	let length = document.getElementById("lengthInput");
	let characters = createCharacterList();
	resultPassword = createString(length.value, characters);
	passwordHistory.push(resultPassword);
	writePasswordToHTML();
	// pShowPasswordId.innerHtml = resultPassword;
}
