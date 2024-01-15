// 1
// same as 2???
// function rotate(nums: number[], k: number): void {
//     let temp = nums[k%nums.length]
//     for(let i = 0 ; i < nums.length; i++) {
//         nums[i] = temp
//         nums[(i+k)%nums.length]
//         nums[(i+k)%nums.length] = nums[i]
//     }
// };

// 2?
// switch on the fly
// run this ONLY nums.length - k times
// function rotate(nums: number[], k: number): void {
//     // for(let i = 0 ; i < nums.length - k -1; i++) {
//     //     console.log(nums)
//     //     let temp = nums[i]
//     //     nums[i+k] = nums[(i+k)%nums.length]
//     //     nums[(i+k)%nums.length] = temp
//     // }
//     // if(nums.length <= 1) return
//     // for(let i = 0 ; i < k ; i ++) {
//     //     console.log(nums)
//     //     let switchNext = nums[(i+k)%nums.length]
//     //     nums[(i+k)%nums.length] = nums[(i+k+1)%nums.length]
//     //     nums[(i+k+1)%nums.length] = switchNext
//     //     console.log(nums)
//     //     let temp = nums[i]
//     //     nums[i] = nums[(i+k)%nums.length]
//     //     nums[(i+k)%nums.length] = temp
//     // }
//     // for (let i = 0; i < nums.length; i++) {
//     //     // switch first with k
//     //     let currVal = nums[i]
//     //     nums[i] = nums[(i + k + 1) % nums.length]
//     //     nums[(i + k + 1) % nums.length] = nums[(i + k) % nums.length]
//     //     nums[(i + k) % nums.length] = currVal

//     //     // switch k + 1
//     // }
//     let i = 0
//     let switchIndex = 0
//     while (i < k*2) {
//         // console.log(nums)
//         let temp = nums[switchIndex]
//         nums[switchIndex] = nums[(switchIndex+k)%nums.length]
//         nums[(switchIndex+k)%nums.length] = temp
//         switchIndex = (switchIndex+k+1)%nums.length
//         console.log(nums)
//         i++
//     }
// };

// 3
// new array
// uh i can't just assign nums to result
// so i just reassign the whole thing...
// function rotate(nums: number[], k: number): void {
//     const result = new Array(nums.length)
//     for(let i = 0 ; i < nums.length; i++) {
//         result[(i+k)%nums.length] =  nums[i]
//     }
// for(let i = 0 ; i < nums.length; i++) {
//     nums[i] = result[i]
// }
// };

// 4
// slice then append
// function rotate(nums: number[], k: number): void {
//     // with slice
//     const sliced1 = nums.slice(0, (nums.length - k)%k)
//     const sliced2 = nums.slice((nums.length - k)%k, nums.length)
//     const result = sliced2.concat(sliced1)

//     // can't do nums = result ;(
//     for(let i = 0 ; i < nums.length; i++) {
//         nums[i] = result[i]
//     }
// };

// reverse as per hint
// 0.5 if k = 0 don't do anything
// 1. reverse 0 -> length - k (basically go to length - k, ex. len=7 k=1 you switch 0 and 6)
// 2. reverse length - k + 1 -> length
// 3. then reverse 1 -> length
// no idea why this works but that's pretty cool
// ok so i need to do some wrapping but this is head scratching lol
function rotate(nums: number[], k: number): void {
	if (k === 0) return
	const length = nums.length

	// reverse 0 -> length
	// +1 is okay here because of the initial condition
	// for(let i = 0; i < nums.length - k + 1 ; i++) {
	//     let temp = nums[i]
	//     nums[i] = nums[nums.length - k] // bug here
	//     nums[nums.length - k] = temp
	// }
	// console.log(nums)
	// reverse 0 -> length - k
	for (let i = 0; i < (length - k) / 2; i++) {
		// console.log(length -k)
		let temp = nums[i]
		// console.log(temp)
		nums[i] = nums[length - k - i]
		nums[length - k - i] = temp
		// console.log(nums)
	}
	// console.log(nums)

	// reverse length - k + 1 -> length
	// for(let i = length - k + 1; i < (length)/2 ; i++) {
	//     let temp = nums[i]
	//     nums[i] = nums[length - k] // bug here
	//     nums[length - k] = temp
	// }
	// whoops
	console.log(k / 2)
	for (let i = 1; i <= k / 2; i++) {
		// let temp = nums[length - k + i]
		let temp = nums[length - i]
		console.log(length - k + i)

		console.log(temp)
		nums[length - i] = nums[length - k + i]
		nums[length - k + i] = temp
		console.log(nums)
	}
	console.log(nums)

	// reverse again from 1 -> length
	for (let i = 1; i < length / 2; i++) {
		let temp = nums[i]
		nums[i] = nums[length - i]
		nums[length - i] = temp
	}
	console.log(nums)
}
