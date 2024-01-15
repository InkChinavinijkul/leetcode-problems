// target in this case is 0
// can probably use caching in a similar way to two sums
// target - num1 - num2 and cache it
// double cache? doesn't sound great

// initially used hash to store duplicate targets
// since we sort anyway can just check for duplicate numbers
// as to not waste memory space

// effectively went along with one of the solution's approach
// no need to do target = -nums[i] since 0 work just fine
function threeSum(nums: number[]): number[][] {
	const result: number[][] = []
	nums.sort((a, b) => a - b)
	for (let i = 0; i < nums.length; i++) {
		// did
		const target = -nums[i]
		if (i > 0 && nums[i] === nums[i - 1]) continue

		// two pointer
		let left = i + 1
		let right = nums.length - 1
		while (left < right) {
			// check for duplicates
			if (nums[right] + nums[left] === target) {
				// quite wasteful to change target back to negative
				result.push([-target, nums[left], nums[right]])

				// skip duplicates
				while (nums[left] === nums[left + 1]) left++
				while (nums[right] === nums[right - 1]) right--

				// incremenet again to move on to new value
				left++
				right--
			} else if (nums[right] + nums[left] > target) {
				// larger than target
				right--
			} else {
				// smaller than target
				left++
			}
		}
	}
	return result
}
