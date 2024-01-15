// non-decreasing means the next number can stay the same
// oh i get it lol

// well because it's sorted you can probably just use
// 1 variable to keep track of the index
// 1 variable as a flag for when to fill next index

function removeDuplicates(nums: number[]): number {
	// if (nums.length <= 1) return nums.length

	let count = 0
	// should probably use -101 here but i wanted it to cover everything
	let lastVal = undefined
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] !== lastVal) {
			nums[count++] = nums[i]
		}
		lastVal = nums[i]
	}

	return count
}
