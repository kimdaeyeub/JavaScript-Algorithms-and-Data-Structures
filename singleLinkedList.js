class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SingleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  // 리스트를 따라가는 일종의 예시 코드
  // traverse() {
  //   let current = this.head;
  //   // 연결리스트에 데이터가 더이상 존재하지 않게되면 next가 null값이 됨.
  //   while (current) {
  //     console.log(current.val);
  //     current = current.next;
  //   }
  // }

  pop() {
    // 연결 리스트가 비었다면 pop메서드를 실행할 수 없다.
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    // current와 newTail은 시작지점은 같지만 current를 먼저이동시킴으로써 current에 해당하는 값의 다음 값이 존재할때만 newTail이 current값을 저장하고, current에는 다음의 값이 저장된다.
    // 따라서 3개의 값이 저장되어있다면 (current,newTail)의 값은 다음과 같이 변화한다.
    // (0,0)=>(1,0)=>(2,1)=>(3,2) 끝!!
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
}

const list = new SingleLinkedList();
list.push("Hello");
list.push("Hi");
list.push("Bye");
list.pop();
list.pop();
list.pop();
list.pop();
console.log(list);
