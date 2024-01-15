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

// function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
//     const head = new ListNode(-1, null)
//     // variable to traverse through head
//     let curr = head

//     while(list1 && list2) {
//         // list = list.next ---> traverse through the list itself?
//         // no need for a copy?
//         if(list1.val < list2.val) {
//             curr.next = list1
//             list1 = list1.next
//         } else {
//             curr.next = list2
//             list2 = list2.next
//         }
//         // advance to next node in head
//         curr =  curr.next
//     }
//     // reached the end of either list so just set next
//     // to the rest of the remaining list
//     curr.next = list1 || list2

//     return head.next
// };

// recursion attempt
const head = new ListNode()
function mergeTwoLists(
	list1: ListNode | null,
	list2: ListNode | null
): ListNode | null {
	// return other remaining list
	if (!list1) return list2
	if (!list2) return list1

	if (list1.val < list2.val) {
		return mergeTwoLists(list1.next, list2)
	} else {
		return mergeTwoLists(list1, list2.next)
	}
}
