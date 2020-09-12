// Create the below linked list:
// myLinkedList = {
//   head: {
//     value: 10
//     next: {
//       value: 5
//       next: {
//         value: 16
//         next: null
//       }
//     }
//   }
// };

class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        };
        this.tail = this.head;
        this.length = 1;
    }
    append(value) {
        //Code here
        const newNode = {
            value: value,
            next: null
        }
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(value) {
        const newNode = {
            value: value,
            next: this.head
        }

        this.head = newNode;
        this.length++;
        return this
    }

    printList() {
        let array = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }

        return array;
    }

    insert(index, value) {
        if (index === 0) {
            this.prepend(value);
        }

        if(index > this.length){
            this.append(value);
        }

        const newNode = {
            value: value,
            next: null
        }
        let currentNode = this.head;
        let i = 0;

        while (currentNode !== null) {
            if (i === index - 1) {
                newNode.next = currentNode.next;
                currentNode.next = newNode;
                this.length++;
            }
            currentNode = currentNode.next;
            i++;
        }
    }

    remove(index){
      if (index > this.length){
        return this.printList();
      }

      let currentNode = this.head;
      let counter =0;
      if(index === 0){
        this.head = currentNode.next;
        this.length--;
        return this.printList();
      }

      while(counter !== index){
        if(counter === index-1){
          currentNode.next = currentNode.next.next;
        }
        currentNode = currentNode.next;
        counter++;
      }
        this.length--;
      return this.printList();
    }

    reverse(){
        if(!this.head.next){
            return this.head;
        }

        let first = this.head; //1
        this.tail = this.head;
        let second = first.next; //10
        //1 --> 10 --> 16 --> 88
        while(second){
            let temp = second.next; //16
            second.next = first; //10 --> 1
            first = second;
            second = temp;
        }

        this.head.next = null;
        this.head = first;
        return this.printList();
    }
}


let myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(2, 99);
// myLinkedList.remove(20);
myLinkedList.printList();
myLinkedList.reverse()



