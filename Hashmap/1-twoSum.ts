function twoSum(nums: number[], target: number): number[] {
	const hash = {}
	for (let i = 0; i < nums.length; i++) {
		const curr = nums[i]
		if (hash.hasOwnProperty(curr)) return [hash[curr], i]
		hash[target - curr] = i
	}
	return []
}
