console.log('app.js working');


//classes:
//LinkedList is a representation of the full list
//Node is what creates a new Node using the functions from LinkedList
//current is the current node, which is called "head"
//nextNode is the next node right after the head.
// the list is "traverse" using an cursor (count) and a current variable
// they hold the current head/node and a count to store
// a index as its position on the list.
// if you set the current equals to the nextNode and count++
// you moved the cursor one step ahead down the list.



class LinkedList{
    constructor(){
        this.head = null;
        this.listSize = 0;
    }
    //append cria um novo node, define como head e passa um next (padrão null)
    append(value){
        this.head = new Node(value,this.head);
        this.listSize++
    }
    prepend(value){
        let node = new Node(value);
        let current;
        //se estiver vazio, node será o head
        if(this.head == null){
            this.head = node;
        } else {
            //define o current como o head (como um cursor)
            current = this.head;
            //avança o cursor enquanto existir um próximo node.
            while(current.nextNode){
                current = current.nextNode
            }
            //quando a lista acaba, define o próximo
            // como o novo node criado, assim, adiciona ao fim da lista.
            current.nextNode = node;
        }
        this.listSize++;
    }
    size(){
        return this.listSize;
    }
    headF(value){
        let head = this.at(0);
        return head;
    }
    tailF(){
        let tail = this.at(this.listSize-1);
        return tail;
    }
    at(index){
        let current = this.head;
        let count = 0;
        while(current){
            if(count==index){
                console.log(current)
            }
            count++;
            current = current.nextNode;
        }
        return null;
    }
    pop(){
        this.removeAt(this.listSize-1)
    }
    contains(value){
        let current= this.head;
        let count =0;
        while(current){
            if(current.value == value){
                return true;
            }
            return false;
        }
    }
    find(value){
        return this.list.indexOf(value);
    }
    toString(){
        //this.head é um node, current define o node atual
        //imprime o valor, move para o próximo node por nextNode
        let current = this.head;
        while(current){
            console.log(current.value);
            current = current.nextNode;
        }
        return;
    }
    insertAt(value, index){
        //Se index for maior que listsize
        if(index > 0 && index > this.listSize){
            return;
        }
        if(index==0){
            this.append(value);
            return;
        }
        const node = new Node(value)
        let current, previous;
        //coloca current como primeiro
        current = this.head;
        //caminha com o "cursor" pela lista
        let count = 0;
        while(count < index){
            previous = current; // node anterior ao index
            count++;
            current = current.nextNode;//node após o index
        }

        node.nextNode = current;//define o nextnode
        previous.nextNode = node;//define nextnode anterior

        this.listSize++;
    }
    removeAt(index){
        if(index>0 && index> this.listSize){
            return;
        }
        let current = this.head;
        let previous;
        let count = 0;

        if(index === 0){
            this.head = current.nextNode;
        }else{
            while(count < index){
                count++;
                previous = current
                current = current.nextNode;
            }
            previous.nextNode = current.nextNode;
        }
        this.listSize--;
    }
}

class Node{
    constructor(value, nextNode = null){
        this.value = value;
        this.nextNode = nextNode;
    }
}


const ll = new LinkedList()
ll.append(100)
ll.append(200)
ll.append(300)
ll.prepend(400)

console.log(ll.toString())

