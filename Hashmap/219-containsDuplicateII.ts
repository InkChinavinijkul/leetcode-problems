// oh wow all you had to do was just
// initialize the hash by looping across the first
// k elements then just add the next one and remove
// the last
// so it turns out set would probably be better
// despite the n log n runtime for set.has?
function containsNearbyDuplicate(nums: number[], k: number): boolean {
	if (k === 0) return false
	const hash = {}
	// initialize hash
	for (let i = 0; i < k && i < nums.length; i++) {
		const num = nums[i]
		if (hash.hasOwnProperty(num)) return true
		// doesn't really matter which value we use here
		hash[num] = i
	}

	// keep track of leftmost index (first element)
	let left = 0
	for (let i = k; i < nums.length; i++) {
		const num = nums[i]
		if (hash.hasOwnProperty(num)) return true

		// assuming object actually the first one
		// that comes in
		// doesn't really matter because if the value's
		// a duplicate then we've found our answer
		const leftmost = nums[left]
		delete hash[leftmost]
		hash[num] = num
		left++
	}

	return false
}
