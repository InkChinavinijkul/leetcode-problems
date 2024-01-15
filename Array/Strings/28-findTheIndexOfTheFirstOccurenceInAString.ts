// loop through haystack, check for edge condition
// then compare characters of needle starting at current index in haystack

// a lot of problems make use of starting from the end
// so i thought it might be fun to try it out
// function strStr(haystack: string, needle: string): number {
//     let result = -1

//     for(let i = haystack.length - needle.length ; i >= 0; i--) {
//         for(let j = 0 ; j < needle.length ; j++) {
//             if(haystack[i+j] !== needle[j]) {
//                 break
//             }
//             // if we were looking for last occurence then we would've just returned
//             if(j === needle.length - 1 && haystack[i+j] === needle[j]) result = i

//         }
//     }

//     return result
// };

// left to right
function strStr(haystack: string, needle: string): number {
	// ex. "sadbutsad".length === 9, "sad".length === 3, "sadbutsad"[6] === "s"
	for (let i = 0; i <= haystack.length - needle.length; i++) {
		for (let j = 0; j < needle.length; j++) {
			if (haystack[i + j] !== needle[j]) {
				break
			}
			// if we were looking for last occurence then we would've just returned
			if (j === needle.length - 1 && haystack[i + j] === needle[j]) return i
		}
	}

	return -1
}
