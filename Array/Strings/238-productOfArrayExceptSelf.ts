// definitely cache results
// i thought i'd be using a hash map but apparently you'd only need
// prefix and postfix array. thank you neetcode

// function productExceptSelf(nums: number[]): number[] {
//     const answer = new Array(nums.length)
//     const prefix = new Array(nums.length)
//     const postfix = new Array(nums.length)
//     for (let i = 0; i < prefix.length; i++) {
//         if (i === 0) {
//             prefix[i] = nums[i]
//             continue
//         }
//         prefix[i] = nums[i]*prefix[i-1]
//     }
//     console.log(prefix)

//     // reset runningProduct - pretty ugly though
//     for (let i = postfix.length-1; i >= 0; i--) {
//         if (i === postfix.length-1) {
//             postfix[i] = nums[i]
//             continue
//         }
//         postfix[i] = nums[i] * postfix[i+1]
//     }
//     console.log(postfix)

//     // calculate answer
//     for (let i = 0; i < nums.length ; i++) {
//         let product = 1
//         if(i - 1 >= 0) product *= prefix[i-1]
//         if(i + 1 < nums.length) product *= postfix[i+1]
//         answer[i] = product
//     }

//     return answer
// };

// O(1) extra space requires you to not have the prefix postfix array
// this probably means you'd have to find the prefix postfix neighbors manually
// resulting in an O(n^2) time complexity?

// apparently you can use the answer array to store the values itself? or something along those lines
// let's try it

// i guess this is as fast as it gets? minus the memory usage
function productExceptSelf(nums: number[]): number[] {
	// (gpt/lookup) fill array with 1
	const answer = new Array(nums.length)

	// (gpt/lookup) leftProduct = 1
	for (let i = 0; i < answer.length; i++) {
		// unnecessary if
		// do answer[i] *= leftProduct
		// leftProduct *= nums[i]
		if (i === 0) {
			answer[i] = nums[i]
			continue
		}
		answer[i] = nums[i] * answer[i - 1]
	}
	// ex. [1, 2, 3, 4]
	// answer = [1, 1, 2, 6], leftProduct === 24
	// final leftProduct never gets inserted into nums.length - 1 element

	// (gpt/lookup) can just change this to runningProduct = 1
	let runningProduct = nums[nums.length - 1]
	for (let i = answer.length - 1; i >= 0; i--) {
		// quite a bit of unnecessary ifs
		// can just do
		// answer[i] *= runningProduct
		// rightProduct *= nums[i]

		if (i === answer.length - 1 && i >= 0) {
			answer[i] = answer[i - 1]
			continue
		}
		if (i === 0) answer[i] = runningProduct
		if (i - 1 >= 0) {
			answer[i] = answer[i - 1] * runningProduct
			runningProduct *= nums[i]
		}
	}
	// when i === answer.length - 1, answer = [1, 2, 6, 6], rightProduct = 4
	// answer[answer.lenght - 1] = 6 * 1 (6 is the element, 1 is rightProduct at the time)
	// answer = [24, 12, 8, 6], rightProduct === 24

	return answer
}
