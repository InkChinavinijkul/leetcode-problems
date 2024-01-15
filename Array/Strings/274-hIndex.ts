// find the max value, h that "appears" h amounts of time in the array
// "appears" here simply refers to if these "appearances" has a value
// that's equal to or greater than h

// hMax = 0, hCount = 0
// if hCount === hMax, then hMax is valid
// if currVal > hMax (and is valid) then hMax = currVal

// i've misunderstood, h-index is actually limited to citations.length
// where the conditions apply
// ex. [11, 15], h === 2 because the researcher has published
// at least 2 papers that has been cited at least 2 times
// it is not 1 even though there were at least 2 papers that each
// has been cited at least once, it is not the maximum amount

// probably have to sort the array first, then do 1 pass where i cache the results
// function hIndex(citations: number[]): number {
//     let hMax = 0

//     // starting from 0 deals with the case of [0] and [100]
//     for (let h = 0; h <= citations.length; h++) {
//         let hCount = 0
//         for (let j = 0; j < citations.length; j++) {
//             if (citations[j] >= h) hCount++
//             if (hCount >= h && h > hMax) hMax = h
//         }
//     }

//     return hMax
// };

// you actually can just sort the array then check for all values such that citations[index] >= index
// remember that h-index is limited to citations.length
// 1. array has to be sorted in non-increasing order because...
// 2. each paper that's cited >= index passes the h-index condition
// ex. didn't explain it too well but example : [15, 11, 9, 8, 5]
// h-index = 5 because researcher has at least 5 papers that's cited at least 5 times
// ex2.  [15, 11, 9, 8, 4]
// h-index = 4 because researcher has at least 4 papers that's cited at least 4 times
function hIndex(citations: number[]): number {
	// sort sorts IN PLACE so we can just do this
	// not recommended however
	citations.sort((a, b) => b - a)
	let hIndex = 0

	// corrected
	// if(citations[0] === 0) then hIndex doesn't get incremented and returns 0
	// if(citations[0] !== 0 && length === 1) then hIndex++ and ends loop then returns 1
	// otherwise hIndex gets incremented each time the condition passes so it matches correct value
	while (hIndex < citations.length && citations[hIndex] > hIndex) hIndex++

	return hIndex
}
