// i still like my very simple and very clear solution though

function removeDuplicates(nums: number[]): number {
	let count = 0
	let lastVal = undefined
	let dupeCounter = 0
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] === lastVal) {
			dupeCounter++
		} else {
			dupeCounter = 0
		}

		if (dupeCounter < 2) {
			nums[count++] = nums[i]
		}
		lastVal = nums[i]
	}

	return count
}
