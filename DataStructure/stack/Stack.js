import LinkedList from "../linked-list/LinkedList.js";

/**
 * 栈(Stack)
 * 后进先出 LIFO (last in, first out) 链表实现 栈顶为head元素
 */

export default class Stack {
  constructor() {
    this.linkedList = new LinkedList();
  }
  isEmpty() {
    return !this.linkedList.head;
  }
  /**
   * 返回栈顶元素
   * @returns
   */
  peek() {
    if (this.isEmpty) {
      return null;
    }
    return this.linkedList.head.value;
  }
  /**
   * 入栈
   * @param {} value
   */
  push(value) {
    this.linkedList.prepend(value);
  }
  /**
   * 出栈
   */
  pop() {
    const removedHead = this.linkedList.deleteHead();
    return removedHead ? removedHead.value : null;
  }

  /**
   * @return {*[]}
   */
  toArray() {
    return this.linkedList
      .toArray()
      .map((linkedListNode) => linkedListNode.value);
  }

  /**
   * @param {function} [callback]
   * @return {string}
   */
  toString(callback) {
    return this.linkedList.toString(callback);
  }
}

let stack = new Stack();

stack.push("1");
stack.push("2");
stack.push("3");
stack.push("4");
stack.push("5");
stack.pop();
stack.pop();
stack.pop();
