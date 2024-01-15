function majorityElement(nums: number[]): number {
	// don't look this solution is just for fun
	// and because i want to try "hashing"'
	if (nums.length <= 1) return nums[0]
	const hash = {}
	let maxEl = 0
	let maxElAmount = 0 // i hate this now
	for (const n of nums) {
		hash.hasOwnProperty(n) ? hash[n]++ : (hash[n] = 0)
	}

	for (const stuff in hash) {
		// 498 < 233 so switch happens
		if (hash[stuff] > maxElAmount) {
			maxEl = +stuff
			maxElAmount = hash[stuff]
		}
	}
	return maxEl
}
