// the y-axis doesn't count
// simple way is to check all combination
// most definitely could cache the solution of some kind???

// more practical way
// hint suggests 2 pointer so we'll try that
function maxArea(height: number[]): number {
	let maxArea = 0
	let left = 0
	let right = height.length - 1

	while (left < right) {
		let maxHeight = height[left]
		if (maxHeight > height[right]) maxHeight = height[right]
		const area = maxHeight * (right - left)
		if (area > maxArea) maxArea = area
		// check lowest wall
		// naming convention is a little bit confusing
		// maxPossibleHeight might be better
		if (maxHeight === height[left]) {
			left++
		} else {
			right--
		}
	}

	return maxArea
}

// basic way
// oh i guess it's "not efficient"
// function maxArea(height: number[]): number {
//     let maxArea = 0
//     for(let i = 0; i < height.length; i++) {
//         for(let j = i+1; j < height.length; j++) {
//             let maxHeight = height[i]
//             if(height[i] > height[j]) maxHeight = height[j]
//             const area = maxHeight*(j-i)
//             if(area > maxArea) maxArea = area
//         }
//     }

//     return maxArea
// };
