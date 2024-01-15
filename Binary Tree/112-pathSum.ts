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

// previous i tried  if(targetSum === 0) return true  before (!root)
// but that failed when root = [] and targetSum = 0 (good example)
// && both doesn't work since the condition we use to check leaf sum
// ie. we go to a null node with the updated targetSum === 0 returning true

// credit to one of the solution for cleaning up unnecessary variable (answer1, answer2)
function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
	if (!root) return false
	// i don't like this condition though
	if (!root.left && !root.right && targetSum - root.val === 0) return true

	return (
		hasPathSum(root.left, targetSum - root.val) ||
		hasPathSum(root.right, targetSum - root.val)
	)
}
