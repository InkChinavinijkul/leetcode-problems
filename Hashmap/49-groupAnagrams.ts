// idea 1
// 1. loop once and sort each string O(n * n log n)
// 2. sort the array O(n log n)
// 3. loop again to count similar ones? O(n)
// POST-SUBMIT: We didn't have to sort the array again
// and didn't want to because we need the original words
// and index is one of the easier ways to do it

// idea 2
// 1. create a "hash table", basically just empty array length of strs
// 2. double loop and use anagram checker from previous answer O(n^3) oh yikes
// 3. keep track of grouped indices and skip if already gone through

function groupAnagrams(strs: string[]): string[][] {
	const sorted: string[] = [...strs]
	const hash = {}
	// O(n * nlog n) - technically O(n * (2n + nlog n)) = O(n * n(2 + logn))
	for (let i = 0; i < sorted.length; i++) {
		sorted[i] = sorted[i].split("").sort().join("")
	}

	// group words together
	// doing it in hash is easier but takes up more resource
	// and is longer
	// O(n)
	for (let i = 0; i < sorted.length; i++) {
		const sortedWord = sorted[i]
		const regWord = strs[i]
		if (hash.hasOwnProperty(sortedWord)) {
			hash[sortedWord].push(regWord)
		} else {
			hash[sortedWord] = [regWord]
		}
	}

	return Object.values(hash)
}
