/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
// pretty bad way to do it
// also abused js builtin (BigInt)
// would be better to be able to do it without of course
function addTwoNumbers(
	l1: ListNode | null,
	l2: ListNode | null
): ListNode | null {
	const num1 = []
	const num2 = []
	while (l1) {
		num1.unshift(l1.val)
		l1 = l1.next
	}
	while (l2) {
		num2.unshift(l2.val)
		l2 = l2.next
	}
	const sum = "" + (BigInt(num1.join("")) + BigInt(num2.join("")))
	const result = new ListNode(0, null)
	let curr = result
	for (let i = sum.length - 1; i >= 0; i--) {
		curr.next = new ListNode(+sum[i], null)
		curr = curr.next
	}
	return result.next
}
