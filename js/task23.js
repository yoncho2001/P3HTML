//Linked list

class ListNode {
    constructor(value) 
    {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() 
    {
        this.head = null;
        this.tail = null;
        this._length = 0;
    }

    get first() {
        return this.head ? this.head.value : undefined;
    }

    get last() {
        return this.tail ? this.tail.value : undefined;
    }

    get length() {
        return this._length;
    }

    append(...elements) {
        for (let i = 0; i < elements.length; i++) {
            let node = new ListNode(elements[i]);

            if (!this.head) {
                this.head = node;
                this.tail = node;
            }
            else {
                this.tail.next = node;
                this.tail = node;
            }

            this._length++;
        }

        return this;
    }

    prepend(...elements) {
        for (let i = elements.length - 1; i >= 0; i--) {
            let node = new ListNode(elements[i]);

            if (!this.head) {
                this.head = node;
                this.tail = node;
            }
            else {
                node.next = this.head;
                this.head = node;
            }

            this._length++;
        }

        return this;
    }

    insert(index, ...elements) {
        if (index < 0 || index > this._length) {
            throw new Error('Index out of bounds');
        }

        if (index === 0) {
            this.prepend(...elements);
        }
        else if (index === this._length) {
            this.append(...elements);
        }
        else {
            let current = this.head;

            for (let i = 0; i < index - 1; i++) {
                current = current.next;
            }

            elements.reverse().forEach(element => {
                let node = new ListNode(element);
                node.next = current.next;
                current.next = node;
                this._length++;
            });
        }

        return this;
    }

    at(index, newValue = null) {
        if (index < 0 || index > this._length) {
            throw new Error('Index out of bounds');
        }

        let current = this.head;

        for (let i = 0; i < index ; i++) {
            current = current.next;
        }

        if (newValue == null) {
            return current.value;
        }
        else{
            current.value = newValue;
        }
    }

    removeAt(index) {
        if (index < 0 || index >= this._length) {
            throw new Error('Index out of bounds');
        }

        var removedElement;
        var current = this.head;
        var previous;
        var i = 0;

        if (index === 0) {
            this._head = current.next;
        }
        else {
            while (i++ < index) {
                previous = current;
                current = current.next;
            }

            previous.next = current.next;
        }

        this._length--;

        return current.value;
    }

    *[Symbol.iterator]() {
        let current = this.head;

        while (current) {
            yield current.value;
            current = current.next;
        }
    }

    print() {
        let current = this.head;

        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }
}


const list = new LinkedList();
const removed = list.append(1, 2, 3, 4, 5).removeAt(1);
console.log(removed); 
list.print();
