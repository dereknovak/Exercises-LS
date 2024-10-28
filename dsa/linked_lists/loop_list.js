/* 

11:08 // 11:33 (with hint)

PROBLEM
I: The head of a LL
O: A boolean, representing whether a loop exists within the LL

RULES
- Loop
    - The LL will continue to follow an indefinite loop at any specific spot repeatedly
- LL is not sorted

DATA STRUCTURE
- Use the LL
    - Have a slow/fast variable
    - If the fast variable eventually meets the slow variable, there is a loop

[3, 2, 0, -4]
s          f


ALGORITHM
1. Move through LL with slow and fast variable
2. If variables meet, there is a loop
    - Initialize slow to head
    - Initialize fast to head next
    - Initialize i to 0

    - Loop (while fast)
        - If slow value === fast value, return true
        - Reassign fast to next node
        - If i is odd, reassign slow to next node
        - Increment i
3. If null is reach, return false
*/

function hasCycle(head) {
  let slow = head;
  let fast = head.next;
  let i = 0;

  while (fast) {
    if (slow.val === fast.val) return true;
    fast = fast.next;
    if (isEven(i)) slow = slow.next;
    i++;
  }

  return false;
}

const isEven = i => i % 2 === 0;

function ListNode(val) {
  this.val = val;
  this.next = null;
}

function createLinkedList(arr, cyclePos) {
  let head = new ListNode(0);
  let current = head;
  let cycleNode = null;

  arr.forEach((val, index) => {
    current.next = new ListNode(val);
    current = current.next;
    if (index === cyclePos) {
      cycleNode = current;
    }
  });

  if (cycleNode) {
    current.next = cycleNode;
  }

  return head.next;
}

let list1 = createLinkedList([3, 2, 0, -4], 1);
let list2 = createLinkedList([1, 2], 0);
let list3 = createLinkedList([1], -1);
let list4 = createLinkedList([10, 20, 30, 40, 50, 60], 3);
let list5 = createLinkedList([5, 15, 25, 35, 45], -1);

console.log(hasCycle(list1)); // true
console.log(hasCycle(list2)); // true
console.log(hasCycle(list3)); // false
console.log(hasCycle(list4)); // true
console.log(hasCycle(list5)); // false