
class stack{
    constructor(){
        this.node = []
    }

    push(value){
        this.node.push(value);
        return this;
    }

    pop(){
        return this.node.pop();
    }

    peek(){
        if(this.node.length === 0){
            return null;
        }
        return this.node[this.node.length-1];
    }
}