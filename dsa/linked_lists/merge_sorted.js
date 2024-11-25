/* 

9:48 // 10:17
- Solution was a bit more complex than provided one
- Fixed it to match the provided solution, took about 10 minutes to figure it out
- I used additional curr1 and curr2, which were not needed.
    - Could've called the parameters `list1` and `list2` rather than `head` so they could be reused

PROBLEM
I: The head of 1 singly LL
I: The head of a second singly LL
O: The head of a new LL, with both LL combined and sorted

RULES
- When combined, the LL nodes should maintain ascending order
- Must use original nodes
- There could be duplicate values
- Both singly lists are sorted
- Lengths of LL could be different
- If a list is null, return the other list
- If both lists are null, return null

DATA STRUCTURE
- 2 Linked Lists
    - Check values of current nodes
    - Start with a dummy
    - For each iteration (while list1 and list2 are not null)
        - Compare the values
        - Link next value to the smallest of the 2
            - Increment that LL
    - prev will start with dummy
    - curr1 and curr2 are respective to LL
- If curr2 is null || curr1 is >= curr2
    - Link prev.next to curr1 node
    - Move curr1 to curr1.next
- Otherwise
    - Link pre.next to curr2 node
    - Move curr2 to curr2.next
- Every iteration, prev goes to prev.next

list1 = [1, 3, 5]
                  c
list2 = [2, 4, 6]
                  c

dummy -> 1 -> 2 -> 3 -> 4 -> 5 -> 6
                                  p

ALGORITHM
1. Setup
    - Create a new dummy node
    - Initialize prev to dummy
    - Initialize curr1 to head1
    - Initialize curr2 to head2
2. Build new LL using 2 LL in ascending order
    - Loop through LL (while curr1 is not null and curr2 is not null)
        - If curr2 is null || curr1 and curr1 is <= curr2
            - Link prev.next to curr1 node
            - Move curr1 to curr1.next
        - Otherwise
            - Link pre.next to curr2 node
            - Move curr2 to curr2.next
        - Every iteration, prev goes to prev.next
3. Return the node after dummy
*/

function mergeSortedLists(head1, head2) {
  const dummy = new ListNode();
  let prev = dummy;

  let curr1 = head1;
  let curr2 = head2;

  while (curr1 && curr2) {
    if (curr1.val < curr2.val) {
      prev.next = curr1;
      curr1 = curr1.next;
    } else {
      prev.next = curr2;
      curr2 = curr2.next;
    }

    prev = prev.next;
  }

  prev.next = curr1 ?? curr2;
  return dummy.next;
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
  let current = head;
  let listStr = '';
  while (current !== null) {
    listStr += current.val + ' -> ';
    current = current.next;
  }
  listStr += 'null';
  console.log(listStr);
}

// TEST CASES

// Happy Path
let list1 = createLinkedList([1, 3, 5]);
let list2 = createLinkedList([2, 4, 6]);
printLinkedList(mergeSortedLists(list1, list2)); // Expected: 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null

let list3 = createLinkedList([1, 2, 3]);
let list4 = createLinkedList([1, 2, 3]);
printLinkedList(mergeSortedLists(list3, list4)); // Expected: 1 -> 1 -> 2 -> 2 -> 3 -> 3 -> null

// Different Lengths
let list5 = createLinkedList([1, 3]);
let list6 = createLinkedList([2, 4, 6]);
printLinkedList(mergeSortedLists(list5, list6)); // Expected: 1 -> 2 -> 3 -> 4 -> 6 -> null

// One list is null
let list7 = createLinkedList([]);
let list8 = createLinkedList([2, 4, 6]);
printLinkedList(mergeSortedLists(list7, list8)); // Expected: 2 -> 4 -> 6 -> null

// Both lists null
let list9 = createLinkedList([]);
let list10 = createLinkedList([]);
printLinkedList(mergeSortedLists(list9, list10)); // Expected: null