const fs = require('fs');
const csv = require('fast-csv');
const sourceFilePath = './source/teachable-export.csv';
const destinationFilePath = `./destination/new-${new Date().getTime()}.csv`;

/**
 * Takes a full name and parses into first and last names by joining names that are longer than 2 words into last name
 * @param {String} fullName
 * @returns {Array} Returns the string splitted by spaces
 */
function nameToFirstAndLast(fullName) {
	let splitNames = fullName.split(" ");
	if (splitNames.length === 1) return splitNames.concat([""]);
	if (splitNames.length == 2) return splitNames;
	//first and rest
	return [splitNames[0], splitNames.slice(1).join(" ")];
}

/**
 * Goes through rows. Takes name, converts to fName & lName and returns [fName, lName, email]
 * @param {Array} data
 * @returns {Array} Returns 2D array with fName, lName, & email fields
 */
function parseNameEmail(data) {
	data.splice(0, 1);
	let columnTitles = ['First Name', 'Last Name', 'Email Address'];
	let firstLastEmail = [columnTitles];
	for (let row of data) {
		let nameAndEmailArr = row.slice(1, 3); // [name, email]
		let correctedNameArr = nameToFirstAndLast(nameAndEmailArr[0]); // [name] -> [first, last]
		let finalNamesEmail = correctedNameArr.concat(nameAndEmailArr[1]); // [first, last, email]
		firstLastEmail.push(finalNamesEmail);
	}
	return firstLastEmail;
}

/**
 * Reads source file and writes destination file after parsing. Only keeps fName, lName, email
 * @param {String} source 
 * @param {String} destination 
 */
function readAndWrite(source, destination) {
	const rows = [];
	const writeStream = fs.createWriteStream(destination);
	fs.createReadStream(source)
		.pipe(csv())
		.on('data', function (data) {
			rows.push(data);
		})
		.on('end', function (data) {
			const parsedData = parseNameEmail(rows);
			csv.write(parsedData,
				{ headers: true })
				.pipe(writeStream);
		});
}

readAndWrite(sourceFilePath, destinationFilePath);