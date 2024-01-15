// better performing due to the lack of a second loop
// pretty hard to read and confusing to understand, however
function summaryRanges(nums: number[]): string[] {
	const result: string[] = []
	if (!nums.length) return result
	let startOfRange = nums[0]
	let prev = nums[0]

	// quite ugly and not needed?
	if (nums.length <= 1) return [`${prev}`]
	// initially was this, initial code didn't handle the last
	// value properly
	// for(let i = 1 ; i < nums.length ; i++) {
	for (let i = 1; i <= nums.length; i++) {
		// this is pretty bad
		const curr = i === nums.length ? undefined : nums[i]

		// initially was this, but it didn't work
		// because of edge cases
		// const curr =nums[i]

		// this also is pretty bad
		// initially was this, but didn't work. the second condition
		// takes into account the "edge case" (just last value in this case)
		// which our logic didn't cover
		// if(curr - prev !== 1) {
		if (curr - prev !== 1 || i === nums.length) {
			if (prev === startOfRange) {
				result.push(`${startOfRange}`)
			} else {
				result.push(`${startOfRange}->${prev}`)
			}
			startOfRange = curr
		}
		prev = curr
	}

	return result
}

// // O(n) TC and O(n) SC way
// // keep an array of ranges then just loop through that
// // if you can keep track of the range that way
// // might as well just print it lol
// function summaryRanges(nums: number[]): string[] {
//     const result : string[] = []
//     const ranges : number[][] = []
//     if(!nums.length) return result

//     let prev = nums[0]
//     ranges[0] = [prev]
//     if(nums.length <= 1) return [`${prev}`]

//     for(let i = 1 ; i < nums.length ; i++) {
//         const curr = nums[i]
//         if(curr - prev === 1) {
//             ranges[ranges.length - 1].push(curr)
//             } else {
//                 ranges.push([curr])
//             }
//             prev = curr

//     }

//     for(const range of ranges){
//         if(range.length > 1) {
//             result.push(`${range[0]}->${range[range.length - 1]}`)
//         } else {
//             result.push(`${range[0]}`)
//         }
//     }

//     return result
// }
