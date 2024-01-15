const romanKey = {
	I: 1,
	V: 5,
	X: 10,
	L: 50,
	C: 100,
	D: 500,
	M: 1000,
}
const romanNum = Object.keys(romanKey)

// go through keys and if num - romanKey[i] < 0 then find the next valid one
// make conditions for the precedings

// convert largest romNum that fits to string
// if first digit is 5, do num - romKey
//  if num - romKey

function intToRoman(num: number): string {
	let result = ""
	let numCopy = num
	while (numCopy >= 0) {}
	return result
}
