function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    if (!head) return null
    let dummyNode = new ListNode(-1, null)
    let current = dummyNode
    while (head != null) {
        if (head.val !== val){
            current.next = new ListNode(head.val, null)
            current = current.next
        }
        head = head.next

    }

    return dummyNode.next

}