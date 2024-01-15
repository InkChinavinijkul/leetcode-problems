// pretty rough first implemention but
// it's a nice practice with Binary Search

// basically solution from inayat_ali
function searchInsert(nums: number[], target: number): number {
	let left = 0
	let right = nums.length - 1
	// // oh i can just declare this in the loop
	// let mid = Math.floor((right - left) / 2)

	// unnecessary check
	// if(target > nums[right]) return nums.length
	// if(target < nums[left]) return left

	// for the 2nd example, [1, 3, 5, 6] t = 2
	// you'll eventually reach left = 0, right = 0, mid = 0
	// nums[0] === 1 < 2 therefore left = mid + 1 === 1
	// notice how if nums[0] > 2 then the loop exits where left === 0
	// ex. 3. [1, 3, 5, 6] t = 7
	// reach left = 3, right = 3, mid = 3
	// same deal, nums[3] < 7 so left = mid + 1 === 4
	while (left <= right) {
		// mid FROM left, otherwise mid will eventually = 0
		// you can just do right + left to get the midpoint
		// mathematically you get left + right/2 - left/2
		// === left/2 + right/2
		const mid = Math.floor((right + left) / 2)
		console.log(left, right, mid)
		if (nums[mid] === target) return mid
		if (nums[mid] < target) {
			left = mid + 1
		} else {
			// supposedly mid - 1 doesn't matter here
			right = mid - 1
		}
	}
	console.log(left, right)

	// if(nums[mid] < target) return mid+1

	return left
}

// function searchInsert(nums: number[], target: number): number {
//     const mid = Math.floor((nums.length - 1)/2)
//     if(nums[mid] === target) return
//     if(nums[mid] < target) return searchInsert(nums.slice(mid + 1), target)
//     return searchInsert(nums.slice(0, mid), target)

//     // let left = 0
//     // let right = nums.length - 1
//     // let mid = (right - left) / 2
//     // while (left < right) {
//     //     mid = (right - left) / 2
//     //     if (nums[mid] === target) return mid
//     //     if (nums[right] === target) return right
//     //     if (nums[left] === target) return left
//     //     if (nums[mid] < target) {
//     //         left = mid + 1
//     //     } else {
//     //         // if (nums[mid] > target) right = mid
//     //         right = mid - 1
//     //     }
//     // }

//     // return mid
// };
