 class Minheap {
    #heap
    constructor(){
        this.#heap = [];
    }
    getParentindex(i) {
        return Math.floor((i-1)/2)
    }

    getLeftChildIndex(i){
        return i*2 + 1
    }
    getRightChildIndex(i){
        return i*2 + 2
    }
    swap(i, j){
        [this.#heap[i], this.#heap[j]] = [this.#heap[j], this.#heap[i]]
    }
    heapifyUp(){
        let ind = this.#heap.length-1;
      
       while(ind>0){
        let parInd = this.getParentindex(ind);

        if(this.#heap[parInd] < this.#heap[ind]){
            return;
        }else{
            this.swap(ind, parInd);
            ind = parInd    
        }
       }
    }
    
    insert(value){
        this.#heap.push(value);
        this.heapifyUp();
    }
    heapifyDown(){
        let ind = 0;
        const length = this.#heap.length;
        while(this.getLeftChildIndex(ind) < length){
            let smallest = ind;
            let leftInd = this.getLeftChildIndex(ind)
            let rightInd = this.getRightChildIndex(ind)
            if(leftInd < length && this.#heap[smallest] > this.#heap[leftInd]){
                smallest = leftInd;
            }
            if(rightInd < length && this.#heap[smallest] > this.#heap[rightInd]){
                smallest = rightInd;
            }

            if(smallest !== ind){
                this.swap(ind, smallest);
                ind = smallest;
            }else{
                return;
            }
        }
    }
    extractMin(){
        if(this.#heap.length === 0) return null;
        if(this.#heap.length === 1) return this.#heap.pop();
        
        const min = this.#heap[0];
        this.#heap[0] = this.#heap.pop();
        this.heapifyDown();
        return min;
    }
    size(){
        return this.#heap.length;
    }
    peek(){
        return this.#heap.length > 0 ? this.#heap[0] : null;
    }
}