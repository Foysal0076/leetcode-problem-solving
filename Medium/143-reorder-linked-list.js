/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  // Divide the list
  let slow = head
  let fast = head.next
  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
  }

  //reverse the second half
  let second = slow.next
  let prev = null

  // break the link of divided array
  slow.next = null

  while (second) {
    let next = second.next
    second.next = prev
    prev = second
    second = next
  }

  //merge the list
  let first = head
  second = prev
  while (second) {
    let temp1 = first.next,
      temp2 = second.next
    first.next = second
    second.next = temp1
    first = temp1
    second = temp2
  }
}
