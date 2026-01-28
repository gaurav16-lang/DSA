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

const node1 = new Node(10);
const node2 = new Node(20);
const node3 = new Node(30);
const node4 = new Node(40);
const list = new LinkList(node1);
list.head.next = node2;
node2.next = node3;
node3.next = node4;

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
  console.log("listttt>>>>>>>>>.", list);
  while (curr) {
    curr = curr.next;
    console.log("vcurrrrr", curr?.value);
    arr.push(curr?.value);
  }

  mid = Math.floor(arr.length / 2);

  console.log("arrr", arr);
  return arr[mid];
}

console.log(midOfLinklist(list));

// second approach is slow and fast pointer
