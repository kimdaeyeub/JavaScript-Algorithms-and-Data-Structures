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

  // 새로운 요소를 추가
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

  // 마지막 요소를 제거
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

  // 첫번째 요소를 제거
  shift() {
    if (!this.head) return undefined;
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }

  // 리스트의 제일 앞에 요소 추가하기
  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  // 해당 index에 속하는 요소를 반환하는 메서드
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }

  // 특정 index에 해당하는 값 수정
  set(index, val) {
    const foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  // 특정 인덱스에 해당 값을 삽입
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return this.push(val);
    if (index === 0) return this.unshift(val);
    const newNode = new Node(val);
    let prev = this.get(index - 1);
    let temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    let prevNode = this.get(index - 1);
    let removed = prevNode.next;
    prevNode.next = removed.next;
    this.length--;
    return removed;
  }
}

const list = new SingleLinkedList();
list.push("Hello");
list.push("Hi");
list.push("Bye");
list.push("KIM");
list.push("DAE");
list.push("안녕");
list.insert(2, "asdasd");
console.log(list);
