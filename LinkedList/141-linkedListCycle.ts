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
// tortoise and hare with help from Nick White
function hasCycle(head: ListNode | null): boolean {
	if (!head?.next) return false
	let tortoise = head
	let hare = head.next
	while (tortoise !== hare) {
		if (!hare?.next?.next) return false
		tortoise = tortoise.next
		hare = hare.next.next
	}
	return true
}
