/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  let slow = head,
    fast = head

  while (fast && fast.next !== null) {
    slow = slow.next
    fast = fast.next.next
    if (slow === fast) {
      slow = head
      while (slow !== fast) {
        slow = slow.next
        fast = fast.next
      }
      return slow
    }
  }

  return null
}
