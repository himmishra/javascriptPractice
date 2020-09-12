class Node {
    constructor(value){
      this.value = value;
      this.next = null;
    }
  }
  
  class Stack {
    constructor(){
      this.top = null;
      this.bottom = null;
      this.length = 0;
    }
    peek() {
      return this.top;
    }
    push(value){
      let newNode = new Node(value);
      if(!this.top){
        this.top = newNode;
        this.bottom = newNode;
      }else{
        let holdingPointer = this.top;
        this.top = newNode;
        this.top.next = holdingPointer;
      }
      this.length++;
      return this;
    }
    pop(){
      if (!this.top){
        return null;
      }

      if(this.top === this.bottom){
          this.bottom = null;
      }
      let holdingPointer = this.top;
      this.top = this.top.next;
      this.length--;
      return holdingPointer;
    }
    //isEmpty
  }
  
  const myStack = new Stack();
  myStack.pop();
  // myStack.push('google');
  // myStack.push('Udemy');
  // myStack.push('Discord');
  // // myStack.pop();
  // myStack.peek();
  // myStack;
  
  
  //Discord
  //Udemy
  //google
  