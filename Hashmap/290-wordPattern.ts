// similar idea as last problem
// except you'd want to map out words in string first

// can also hash index instead
// as we've found out in the previous example
function wordPattern(pattern: string, s: string): boolean {
	const words = s.trim().split(" ")
	if (pattern.length !== words.length) return false
	const pHash = new Map<string, string>()
	const wHash = new Map<string, string>()

	for (let i = 0; i < words.length; i++) {
		const pChar = pattern[i]
		const word = words[i]

		if (pHash.has(pChar) && pHash.get(pChar) !== word) return false
		if (wHash.has(word) && wHash.get(word) !== pChar) return false
		pHash.set(pChar, word)
		wHash.set(word, pChar)
	}
	return true
}
