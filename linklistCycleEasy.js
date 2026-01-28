// Lisnklist cycle , we need to check the linklist is forming the cycle or not
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkList {
  constructor(head = null) {
    this.head = head;
  }
}

const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(1);
const node4 = new Node(2);
const node5 = new Node(1);

const list = new LinkList(node1);
list.head.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

// Reverse the linklist
function reverseLinklist(list) {
  let prev = null;
  let curr = list.head;
  while (curr) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }

  return prev;
}

// Adding the node at the beggining of the linklist
function nodeAtHead(list, value) {
  const newNode = new Node(value);
  newNode.next = list.head;
  list.head = newNode;
  return list.head;
}

// Adding node at the tail of the linklist
function nodeAtTail(list, value) {
  newNode = new Node(value);
  let curr = list.head;
  while (curr.next != null) {
    curr = curr.next;
  }
  curr.next = newNode;
}

// Check the tail element value in the linklist;
function checkthetail(list) {
  let curr = list.head;
  while (curr.next != null) {
    curr = curr.next;
  }
  return curr.value;
}

//find the mid element of the linklist :

// Appraoch one using the extra space
/* 1 -  traverse all the linklist element and store it into the array
 2- Then just find the mid of the element it will take the time complexity of 0(n)
 and space complexoity will be O(n);
3 - The problem od this approach it is taken the extra space
*/

function midOfLinklist(list) {
  let curr = list.head;
  let arr = [];
  let mid = 0;
  while (curr) {
    curr = curr.next;
    arr.push(curr?.value);
  }

  mid = Math.floor((arr.length - 1) / 2);

  return arr[mid];
}

// console.log(midOfLinklist(list));

// second approach is slow and fast pointer for finding the mid element of the linklist

function linkListSlowAndFastPointer(list) {
  console.log(list);
  let slow = list.head;
  let fast = list.head;
  while (fast && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow.value;
}

// console.log(linkListSlowAndFastPointer(list));

//  Reverse of pallindrome do a reeverse of pallindrome

//  Approach -1
// Traverse from the linklist and grab the data from the linklist and save it to the queue.

const linklistpallendrome = (list) => {
  //  remove the element from the linklist and saveit in the stack
  let stack = [];
  let curr = list.head;
  let checkList = list.head;

  while (curr != null) {
    stack.push(curr.value);
    curr = curr.next;
  }
  while (checkList != null) {
    c = stack.pop();

    if (checkList.value != c) {
      return false;
    }
    checkList = checkList?.next;
  }

  return true;
};

console.log(linklistpallendrome(list));
