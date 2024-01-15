const romanKey = {
	I: 1,
	V: 5,
	X: 10,
	L: 50,
	C: 100,
	D: 500,
	M: 1000,
}

// following the hint
// i didn't want to type out this condition again
// (s.charAt(i - 1) === "I" || s.charAt(i - 1) === "X" ||s.charAt(i - 1) === "C")
// probably a better way of doing this though
const pairs = {
	I: ["V", "X"],
	X: ["L", "C"],
	C: ["D", "M"],
}
const preceding = Object.keys(pairs)

function romanToInt(s: string): number {
	let result = 0

	let i = s.length - 1
	while (i >= 0) {
		const currChar = s.charAt(i)
		result += romanKey[currChar]

		// acutally want to use i-1 for this
		if (i - 1 >= 0) {
			const nextChar = s.charAt(i - 1)
			const proceding = pairs[nextChar]
			if (preceding.includes(s.charAt(i - 1)) && proceding.includes(currChar)) {
				result -= romanKey[nextChar]
				i--
			}
		}
		i--
	}
	return result
}
