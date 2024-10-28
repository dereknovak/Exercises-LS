/* 

10:25 // 10:34

PROBLEM
I: The head of a linked list
I: A number, representing a 'key' that should be counted
O: A number, representing the amount of times the key appears in the linked list

RULES
- List can have any number of nodes
- List can be empty, return 0
- List can have repeating numbers

EXAMPLE
(list6, 1) === 3
[1, 2, 3, 1, 1]

DATA STRUCTURE
- Linked list
    - Utilize val for current value
    - Utilize next to go to next node

[1, 2, 1, 2, 1, 3, 1] // 1
curr = 6
result = 4

ALGORITHM
1. Navigate through LL, incrementing result each time key is found
    - Initialize curr to the head of LL
    - Initialize result to 0
    - While current node exists in LL (not null)
        - If current value is equal to key
            - Increment result by 1
        - Reassign current to next node
2. Return result
*/

function countKeyOccurrences(head, key) {
  let curr = head;
  let result = 0;

  while (curr) {
    if (curr.val === key) result++;
    curr = curr.next;
  }

  return result;
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

let list1 = createLinkedList([1, 2, 1, 2, 1, 3, 1]);
let list2 = createLinkedList([4, 4, 4, 4]);
let list3 = createLinkedList([1, 2, 3, 4, 5]);
let list4 = createLinkedList([5, 5, 1, 2, 3, 5, 5]);
let list5 = createLinkedList([]);
let list6 = createLinkedList([1, 2, 3, 1, 1]);

console.log(countKeyOccurrences(list1, 1) === 4);
console.log(countKeyOccurrences(list2, 4) === 4);
console.log(countKeyOccurrences(list3, 1) === 1);
console.log(countKeyOccurrences(list4, 5) === 4);
console.log(countKeyOccurrences(list5, 1) === 0);
console.log(countKeyOccurrences(list6, 1) === 3);

// All test cases should log true.