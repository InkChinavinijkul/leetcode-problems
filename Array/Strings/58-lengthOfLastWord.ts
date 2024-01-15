// trivial way with js built in methods

// function lengthOfLastWord(s: string): number {
//     const newString = s.trim().split(" ")
//     return newString[newString.length-1].length

//     // 1 liner, not nice to look at but 1 liner
//     // return s.trim().split(" ")[s.trim().split(" ").length - 1].length
// };

// practical way
// this way was actually really cool as you realize you just had to count from right
function lengthOfLastWord(s: string): number {
	// let result = 0

	// manual trimming
	// actually we don't even need to trim
	// let left = 0
	// let right = s.length - 1
	// let newString = ""
	// while(s.charAt(left) === " ") {left++}
	// while(s.charAt(right) === " " ) {right++}
	// newString = s.substring(left, right+1)

	// cleaner way simply using count
	// let count = 0

	let right = s.length - 1
	while (s.charAt(right) === " ") {
		right--
	}
	let firstSpace = right
	while (firstSpace >= 0 && s.charAt(firstSpace) !== " ") {
		firstSpace--
		// count++
	}

	// need to add 1 back in here b/c right is the index of the final character of the final word
	// ex. "Hello World ", s.length === 12, right === 10, s.subString(0, right) === "Hello Worl" not correct
	if (firstSpace < 0) return right + 1
	return right - firstSpace

	// it's slower though for some reason
	// return count
}
