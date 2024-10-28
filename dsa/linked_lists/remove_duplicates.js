/* 

10:38 // 10:56

PROBLEM
I: The head of a LL
O: The head of the same LL, with duplicate nodes removed

RULES
- All duplicates should be removed
- LL is a singly sorted list
- Because it's sorted, I can just look for the next value that is not the same as current

EXAMPLE
[1, 2, 3, 3, 4]
1 -> 2 -> 3 -> 4 -> null

DATA STRUCTURE
- Use a linked list
    - Check current value
    - Find the next value that is different using next
        - A loop

[1, 1, 2, 3, 3] null
1 -> 2
curr = 2
next = 2
LOOP (while next is not null)

ALGORITHM
1. Reassign nodes to non repeating next nodes
    - Initialize curr to head
    - Initialize next to current next value
    - Use loop (while current is not null)
        - If current value is null or not equal to next value
            - Reassign current next node to next
            - Reassign current node to next
        - Otherwise
            - Reassign next to its next node
2. Return the head of the list
*/

function deleteDuplicates(head) {
  let curr = head;
  let next = curr.next;

  while (curr) {
    if (!next || curr.val !== next.val) {
      curr.next = next;
      curr = next;
    } else {
      next = next.next;
    }
  }

  return head;
}

function ListNode(val) {
  this.val = val;
  this.next = null;
}

function createLinkedList(arr) {
  let head = new ListNode(0);
  let current = head;
  arr.forEach(val => {
    current.next = new ListNode(val);
    current = current.next;
  });
  return head.next;
}

function printLinkedList(head) {
  let currentNode = head;
  let listStr = '';
  while (currentNode !== null) {
      listStr += currentNode.val + ' -> ';
      currentNode = currentNode.next;
  }
  listStr += 'null'; // Indicate the end of the list
  console.log(listStr);
}

let list1 = createLinkedList([1, 1, 2]);
let list2 = createLinkedList([1, 1, 2, 3, 3]);
let list3 = createLinkedList([1, 2, 3, 3, 4]);
let list4 = createLinkedList([2, 2, 2, 2, 3, 3]);
let list5 = createLinkedList([5]);

printLinkedList(deleteDuplicates(list1)); // Expected: "1 -> 2 -> null"
printLinkedList(deleteDuplicates(list2)); // Expected: "1 -> 2 -> 3 -> null"
printLinkedList(deleteDuplicates(list3)); // Expected: "1 -> 2 -> 3 -> 4 -> null"
printLinkedList(deleteDuplicates(list4)); // Expected: "2 -> 3 -> null"
printLinkedList(deleteDuplicates(list5)); // Expected: "5 -> null"