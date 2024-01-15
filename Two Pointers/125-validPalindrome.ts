// definitely can do this in one pass where you start from i = 0 and i = length-1
// then meet in middle. lowercase it and compare
// console.log("A".charCodeAt(0))   // 65
// console.log("Z".charCodeAt(0))   // 90
// console.log("a".charCodeAt(0))   // 97
// console.log("z".charCodeAt(0))   // 122
// console.log("0".charCodeAt(0))   // 48
// console.log("9".charCodeAt(0))   // 57

function checkAlphaNum(charCode: number) {
	if (
		!(charCode > 47 && charCode < 58) && // numeric (0-9)
		!(charCode > 96 && charCode < 123)
	) {
		// lower alpha (a-z)
		return false
	}
	return true
}

// idea with this code is i just do one pass with "minimal"
// processing of the string (i.e. i don't remove non-alphanum)
// 2 issues with this code
// 1. in the case of ".," while loop inside doesn't break without additional check
// 2. while ".," should probably not be a palindrome, it is treated as "" and as such is one
// so in the end it seems like i still have to process it...
function isPalindrome(s: string): boolean {
	if (s.trim() === "") {
		return true
	}
	const noAlphaNumStr = s.toLowerCase()
	let newString = ""
	for (let k = 0; k < s.length; k++) {
		if (checkAlphaNum(noAlphaNumStr.charCodeAt(k)))
			newString += noAlphaNumStr.charAt(k)
	}

	if (newString === "") return true // this line signifies i've given up
	let result = true
	// using toLowerCase so i don't have to manually convert upper to lower (hassle)

	let i = 0
	let j = s.length - 1

	// 2 issues with this code
	// 1. while loop inside doesn't break if
	while (result && i < j) {
		// if notAlphaNum then increment/decrement
		while (!checkAlphaNum(newString.charCodeAt(i))) {
			i++
			if (i >= j) {
				break
			}
		}

		while (!checkAlphaNum(newString.charCodeAt(j))) {
			j--
			if (i >= j) {
				break
			}
		}

		// if check and false just return false
		if (newString.charCodeAt(i) === newString.charCodeAt(j)) {
			i++
			j--
		} else {
			result = false
		}
	}

	return result
}
