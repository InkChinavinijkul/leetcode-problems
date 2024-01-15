// prefix so you only have to start from 0 (thankfully not substring)

function longestCommonPrefix(strs: string[]): string {
	if (strs.length === 1) return strs[0]
	let result = ""
	let index = 0
	let common = strs[0].charAt(index)
	if (!common) return result // empty string

	// while(true) is pretty scary here but the condition inside the loop
	// should be guaranteed to run
	while (true) {
		common = strs[0].charAt(index)
		for (let j = 1; j < strs.length; j++) {
			if (!strs[j].charAt(index) || strs[j].charAt(index) !== common)
				return result
		}
		result += common
		index++
	}
}

// first sorting the array is apparently the best way to handle this problem
// actually a fun solution to implement might be one where:
// 1. IF s[i].length is O(1) then...
//      loop through s array to find length of shortest string and its index
// 2. loop through s and BINARY SEARCH each string (O(n + n * log m ))
//      something something find the first index where
//      all matches except one then simply return that substring
//      based on the shortest string
