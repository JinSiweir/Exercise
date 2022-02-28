import LinkedListNode from "./LinkedListNode.js";

export default class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  /**
   * 向前添加
   * @param {*} value
   * @return {} LinkedList
   */
  prepend(value) {
    const newNode = new LinkedListNode(value, this.head);
    this.head = newNode;

    if (!this.tail) {
      this.tail = newNode;
    }
    return this;
  }
  /**
   * 向后追加
   * @param {*} value
   * @return {} LinkedList
   */
  append(value) {
    const newNode = new LinkedListNode(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return this;
    }

    this.tail.next = newNode;
    this.tail = newNode;
    return this;
  }

  /**
   * 删除节点
   * @param {*} value
   * @returns deletedNode
   */
  delete(value) {
    if (!this.head) {
      return null;
    }
    let deletedNode = null;
    //删除头节点
    while (this.head && this.head.value === value) {
      deletedNode = this.head;
      this.head = this.head.next;
    }

    let currentNode = this.head;
    if (currentNode !== null) {
      while (currentNode.next) {
        if (currentNode.next.value === value) {
          deletedNode = currentNode.next;
          currentNode.next = currentNode.next.next;
        } else {
          currentNode = currentNode.next;
        }
      }
    }
    // 删除尾节点
    if (this.tail.value === value) {
      this.tail = currentNode;
    }
    return deletedNode;
  }
  /**
   * 删除末尾节点
   * @returns deleteNode
   */
  deleteTail() {
    const deletedTail = this.tail;
    if (this.head === this.tail) {
      //只有一个节点情况
      this.head = null;
      this.tail = null;
      return deletedTail;
    }

    let currentNode = this.head;
    while (currentNode.next) {
      if (!currentNode.next.next) {
        currentNode.next = null;
      } else {
        currentNode = currentNode.next;
      }
    }
    this.tail = currentNode;
    return deletedTail;
  }
  /**
   * 删除头节点
   * @returns
   */
  deleteHead() {
    if (!this.head) {
      return null;
    }
    const deletedHead = this.head;

    if (this.head.next) {
      this.head = this.head.next;
    } else {
      this.head = null;
      this.tail = null;
    }

    return deletedHead;
  }

  /**
   * 查找节点 {查找值,查找的回调函数}
   * @param {Object} findParams
   * @param {*} findParams.value
   * @param {function} [findParams.callback]
   * @return {LinkedListNode}
   */
  find({ value = undefined, callback = undefined }) {
    if (!this.head) {
      return null;
    }
    let currentNode = this.head;

    while (currentNode) {
      if (callback && callback(currentNode.value)) {
        return currentNode;
      }

      if (value !== undefined && currentNode.value === value) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
    return null;
  }
  /**
   * 数组转换链表
   * @param {*[]} values
   * @returns {LinkedList}
   */
  fromArray(values) {
    if (!values instanceof Array) {
      return values;
    }
    values.forEach((value) => {
      this.append(value);
    });
    return this;
  }
  /**
   * 链表转换为数组
   * @returns Array
   */
  toArray() {
    const nodes = [];
    let currentNode = this.head;
    while (currentNode) {
      nodes.push(currentNode);
      currentNode = currentNode.next;
    }
    return nodes;
  }
  /**
   * 转换为字符串
   * @param {} callback
   * @returns
   */
  toString(callback) {
    return this.toArray().map((node) => node.toString(callback).toString());
  }
  /**
   * 反转链表
   * @returns
   */
  reverse() {
    let currNode = this.head;
    let prevNode = null;
    let nextNode = null;
    while (currNode) {
      nextNode = currNode.next;
      currNode.next = prevNode;
      prevNode = currNode;
      currNode = nextNode;
    }
    this.tail = this.head;
    this.head = prevNode;
    return this;
  }
}

const list = new LinkedList();

list.append("a");
list.append("b");
list.append("c");
list.append("d");
list.append("e");
list.reverse();
const li = list.toArray();
console.log(li);
