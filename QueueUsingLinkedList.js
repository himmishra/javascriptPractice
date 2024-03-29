class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class Queue {
    constructor(){
      this.first = null;
      this.last = null;
      this.length = 0;
    }
    peek() {
      return this.first;
    }
    enqueue(value){
      let newNode = new Node(value);
      if(this.length===0){
        this.first = newNode;
        this.last = newNode;
      }
      this.last.next = newNode;
      this.last = newNode;
      this.length++;
      return this;
  
      
    }
    dequeue(){
      if(this.length===0){
        return null;
      }
      if(this.first === this.last){
        this.last = null;
      }
      let holdingPointer = this.first;
      this.first= this.first.next;
      this.length--;
      return this;
    }
    //isEmpty;
  }
  
  const myQueue = new Queue();
  myQueue.peek();
  myQueue.enqueue('Samir');
  myQueue.enqueue('Pavel');
  myQueue.enqueue('Matt');
  myQueue.enqueue('Joy');
  myQueue.dequeue();
  myQueue.dequeue();
  myQueue.dequeue();
  myQueue.dequeue();
  
  //Joy
  //Matt
  //Pavel
  //Samir
  
  