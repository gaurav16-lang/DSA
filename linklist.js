class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkList {
  constructor(node = null) {
    this.head = node;
  }
}

const newNode = new Node(32);

const linklist = new LinkList(newNode);

const newNode2 = new Node(78);

newNode2.next = linklist.head;

linklist.head = newNode2;

const newNode3 = new Node(100);

linklist.head.next.next = newNode3;
console.log(linklist);

// find the last element of the linklist

let curr = linklist.head;

let prev = -1;
while (curr.next != null) {
  prev = curr;
  curr = curr.next;
  if (curr.value == 32) {
    prev.next = curr.next;
    break;
  }
}

curr.next = newNode3;

console.log(linklist);

// delete element from the linklist

//prev
