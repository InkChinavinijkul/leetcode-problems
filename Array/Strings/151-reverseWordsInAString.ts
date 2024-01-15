// i'll use trim() because we already know how to make that
// it seems like i should've just gone from the BACK instead
// as i would just have to make one pass and store the words
// in reverse order on the fly... tha

// more optimized solution
function reverseWords(s: string): string {
	const newString = s.trim()

	let wordStart = newString.length - 1
	let wordEnd = newString.length
	let result = ""

	for (let i = newString.length - 1; i >= 0; i--) {
		// if wordStart < wordEnd then it's a word
		if (newString[i] !== " ") {
			// if (wordEnd <= wordStart) wordStart = wordEnd
			// wordStart--
			wordStart = i
		}
		if (newString[i] === " " || i === 0) {
			// nevermind it's even more edge cases anyway
			if (wordStart < wordEnd) {
				// triple ifs yuck!
				if (i === 0) {
					result += newString.substring(wordStart, wordEnd)
				} else {
					result += `${newString.substring(wordStart, wordEnd)} `
				}
			}
			// gotta add back spaces and check for end of string
			wordEnd = i
		}
	}

	return result
}

// if the string is mutable then you'd probably have something like this
// also conceptually without using trim()

// // trimming the string
// let left = 0, right = s.length-1
// * find first and last non-spaced of string *

// // assuming right is the index of the last character of the string
// // ie. right = trimmed.length - 1
// let start = 0
// let end = right - left

// let leftWordStart = 0, leftWordEnd = 1
// let rightWordStart = right-1, rightWordEnd = right
// * do stuff *
// // ok how do you switch it in place lol
