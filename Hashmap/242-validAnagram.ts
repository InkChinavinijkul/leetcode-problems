// simply have to count the numbers of letters available

// strings are not guaranteed to be the same length
// we can get something like "anagram" and "na garam"
// and that technically would be an anagram
// so we can't just iterate through both

// regardless, easy way to tackle this problem is by
// using 2 hashes on both strings and simply checking if
// each letter appears the same amount of time
function isAnagram(s: string, t: string): boolean {
	// just in case
	if (s.length !== t.length) return false
	const sHash = {}
	const tHash = {}
	for (let i = 0; i < s.length; i++) {
		const sChar = s[i]
		const tChar = t[i]
		if (sHash.hasOwnProperty(sChar)) {
			sHash[sChar]++
		} else {
			sHash[sChar] = 1
		}
		if (tHash.hasOwnProperty(tChar)) {
			tHash[tChar]++
		} else {
			tHash[tChar] = 1
		}
	}

	for (const letter in sHash) {
		if (sHash[letter] !== tHash[letter]) return false
	}

	return true
}

// // easier solution using js sort
// // unsurprisngly slower as this is something along the lines of
// // O(2(n * n(2 + log n)) + n)
// // ie. O(nlog n)
// function isAnagram(s: string, t: string) : boolean {
//     if(s.length !== t.length) return false
//     const wordS = s.split('').sort().join('')
//     const wordT = t.split('').sort().join('')
//     for(let i = 0; i < s.length; i++) {
//         if(wordS[i] !== wordT[i]) return false
//     }
//     return true
// }
