// linlklist fast and slow pointer
// this is use to find the middle element of the linklist

class Linklist {
  constructor(node = null) {
    this.head = node;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const newNode = new Node(34);
const newNod1 = new Node(44);
const newNod2 = new Node(54);
const newNod3 = new Node(64);
const newNod4 = new Node(74);

const LinkListHead = new Linklist(newNode);

console.log(LinkListHead);

console.log(LinkListHead.head);

LinkListHead.head.next = newNod1;

newNod1.next = newNod2;
newNod2.next = newNod3;

console.log(LinkListHead);

function MiddleElement(LinkListHead) {
  let slow = LinkListHead.head;
  let fast = LinkListHead.head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow.value;
}

console.log(MiddleElement(LinkListHead));

function reverseLinklist(LinkListHead) {
  let prev = null;
  let curr = LinkListHead.head;
  while (curr != null) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }

  LinkListHead.head = prev;
  return LinkListHead;
}

console.log(reverseLinklist(LinkListHead));
