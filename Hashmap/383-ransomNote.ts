function canConstruct(ransomNote: string, magazine: string): boolean {
	const hash = {}
	for (const letter of magazine) {
		if (hash.hasOwnProperty(letter)) {
			hash[letter]++
		} else {
			hash[letter] = 1
		}
	}
	for (const letter of ransomNote) {
		if (!hash.hasOwnProperty(letter) || hash[letter] <= 0) return false
		hash[letter]--
	}
	return true
}
