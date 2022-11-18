console.log('app.js working');


//classes:
//LinkedList is a representation of the full list
//Node is what creates a new Node using the functions from LinkedList??

//18:30 às 19:20.
//19:44 às 19:57.
//20:27 às 20:34.

//AINDA A FINALIZAR:
//Não entendi o conceito de head/node, ver um vídeo!
//como referencia o "nextNode"?

class LinkedList{
    constructor(){
        this.list = [];
    }
    append(value){
        this.list.push(value);
    }
    prepend(value){
        this.list.unshift(value)
    }
    size(){
        return this.list.length;
    }
    head(){
        return this.list[0];
    }
    tail(){
        return this.list[this.list.length];
    }
    at(index){
        return this.list[index];
    }
    pop(){
        return this.list.pop();
    }
    contains(value){
        return this.list.contains(value);
    }
    find(value){
        return this.list.indexOf(value);
    }
    toString(){
        let string = '';
        for(let node of this.list){
            string += `(${node}) -> `
        }
        string += 'null';
        return string;
    }
    insertAt(value, index){
        return this.list.splice(index,0,value);
    }
    removeAt(){
        return this.list.splice(index,1);
    }
}

class Node{
    constructor(value = null, nextNode = null){
        this.value = value;
        this.nextNode = nextNode;
    }
    value() {
        return this.value;
    }

}