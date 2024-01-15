// with help from solution
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
	let index1 = m - 1
	let index2 = n - 1

	for (let k = m + n - 1; k >= 0 && index2 >= 0; k--) {
		// basically just copied off the solution lel
		// the idea is since the loop already checks for index2
		// this condition then should check for index1
		if (index1 >= 0 && nums1[index1] > nums2[index2]) {
			nums1[k] = nums1[index1]
			index1--
		} else {
			nums1[k] = nums2[index2]
			index2--
		}
	}
}

// function merge(nums1, m, nums2, n){
//   if (!n) return
//   let j = 0
//   let i = 0
//   for(let k = 0; k < m + n ; k++) {
//     //   const in1 = m-i-1 > 0 ? m-i-1 : 0
//     //   const in2 = n-j-1 > 0 ? n-j-1 : 0

//      if(!m || i >= m || nums1[m-i-1] <= nums2[n-j-1]) {
//           nums1[m+n-k-1] = nums2[n-j-1]
//         //   if(in2) j++
//         j++
//       } else  {
//           nums1[m+n-k-1] = nums1[m-i-1]
//         //   if(in1) i++
//         i++
//       }

//     //   if(!m || in2 && nums1[in1] <= nums2[in2]) {
//     //       nums1[m+n-k-1] = nums2[in2]
//     //     //   if(in2) j++
//     //     j++
//     //   } else {
//     //       nums1[m+n-k-1] = nums1[in1]
//     //     //   if(in1) i++
//     //     i++
//     //   }
//         // console.log(i, j)
//   }
// }
