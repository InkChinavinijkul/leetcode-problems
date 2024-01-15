// go through both s and t at the same time and update hash along the way
// if letter in s exist but is not the same as the current one in t
// then return false immediately
// ex. s = "paper", t = "title"
// idea is p would be mapped to t, ie. {..., "p": "t"}
// if we come across "p" again and the current letter in string t
// is not t, then return false

// using js ma
// never used map before but apparently
// map can probably be thought of an ordered object (not entirely)
// important thing to note is
function isIsomorphic(s: string, t: string): boolean {
	const sMap = new Map<string, string>()
	const tMap = new Map<string, string>()

	for (let i = 0; i < s.length; i++) {
		const sChar = s[i]
		const tChar = t[i]
		// have to check if the map itself has the current value

		// without checking if char is in the map, we get
		// undefined !== someChar which always gives us true
		if (sMap.has(sChar) && sMap.get(sChar) !== tChar) return false
		if (tMap.has(tChar) && tMap.get(tChar) !== sChar) return false
		sMap.set(sChar, tChar)
		tMap.set(tChar, sChar)
	}
	return true
}

// // attempt using 2 hash maps BUT NO js Map
// // what the fuck why does this work
// // setting values of keys in both hash to index
// // probably refers the character to the first index it appears
// // and if that doesn't match then you return false
// function isIsomorphic(s: string, t: string): boolean {
//     const sHash = {}
//     const tHash = {}
//     for (let i = 0; i < s.length; i++) {
//         // can just || this
//         if(sHash.hasOwnProperty(s[i]) && sHash[s[i]] !== tHash[t[i]]) return false
//         if(tHash.hasOwnProperty(t[i]) && sHash[s[i]] !== tHash[t[i]]) return false
//         sHash[s[i]] = i
//         tHash[t[i]] = i
//     }
//     return true
// };
