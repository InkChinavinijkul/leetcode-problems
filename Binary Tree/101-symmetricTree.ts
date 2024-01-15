/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

// "cheat" solution
// maybe it's not entirely cheat because you do need
// to check both sides at the same time which you can't do
// with the original function
function checkBranch(left: TreeNode | null, right: TreeNode | null): boolean {
	if (!left && !right) return true
	if (!left || !right) return false
	if (left.val !== right.val) return false

	// traverse mirror-ly
	return (
		checkBranch(left.left, right.right) && checkBranch(left.right, right.left)
	)
}

function isSymmetric(root: TreeNode | null): boolean {
	return checkBranch(root.left, root.right)
}
