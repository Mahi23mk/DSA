// LRU Cache
// get(key): Return the value if it exists, else -1. Move the accessed node to head (most recently used).
// put(key, value):
// If key exists → update value + move to head.
// If new:
// Add to head.
// If size exceeds capacity, remove tail (least recently used).

class Node{
    constructor(key, value){
        this.key = key
        this.value = value
        this.prev = null;
        this.next = null;
    }
}

class LRUCache{
    constructor(capacity){
        this.capacity  = capacity;
        this.map = new Map();
        this.head = new Node(null, null);
        this.tail = new Node(null, null);
        this.head.next = this.tail
        this.tail.prev = this.head
    }

    #remove(node){
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }

    #insertAtHead(node){
        node.next = this.head.next;
        node.prev = this.head;
        this.head.next.prev = node;
        this.head.next = node;
    }

    get(key) {
        if(!this.map.has(key)) return -1;
        const node = this.map.get(key);
        this.#remove(node);
        this.#insertAtHead(node);
        return node.value;
    }

    set(key, val){
        if(!this.map.has(key)){
            // if capacity exceed remove last node, create new node and set it to head
            if(this.map.size >= this.capacity){
               const lru =  this.tail.prev;
               this.#remove(lru);    
               this.map.delete(lru.key)
            }     
            const node = new Node(key, val)
            this.#insertAtHead(node);
            this.map.set(key, node);
        }else{
            // remove that node and place it in front
            const node = this.map.get(key)
            node.val = val;
            this.#remove(node);
            this.#insertAtHead(node);
        }   
    }
}

const lru = new LRUCache(2);
lru.set(1,2)
lru.set(2,3)
console.log(lru.get(1));
lru.set(3,3);
console.log(lru.get(2));

