function removeElement(nums: number[], val: number): number {
	// this is my solution (less elegant but it's mine)
	// logged out nums in both cases, same fing solution
	// dunno what's wrong with the answer here but oh well?
	// what the f

	// if(nums.length <= 1) return nums.length // lol
	// let skipIndex = 0
	// let k = 0
	// for (let i = 0; i < nums.length ; i++) {
	//     // let currVal = nums[i]
	//     // nums[i] = nums[i-skipIndex]// do nothing
	//     // if(nums[i] === val) {
	//     //     skipIndex++
	//     //     k++
	//     // }
	//     console.log(nums)
	//     // console.log(i, skipIndex, k, nums)
	//     if(nums[i] === val) {
	//         skipIndex++
	//         k++
	//     } else {
	//         nums[i-skipIndex] = nums[i]
	//     }

	// }
	// return k

	// took a solution from else just to pass this
	let count = 0
	// Loop through all the elements of the array
	for (let i = 0; i < nums.length; i++) {
		// If the element is not val
		// logging doubled the run time lol
		// also maybe phone internet?
		// console.log(nums)
		if (nums[i] !== val) {
			nums[count++] = nums[i]
		}
	}
	return count
}
