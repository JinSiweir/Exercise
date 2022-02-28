import LinkedList from "../linked-list/LinkedList.js";

/**
 * 队列(Queue)
 * 先进先出 FIFO (first in, first out) 链表实现
 */

export default class Queue {
  constructor() {
    this.LinkedList = new LinkedList();
  }
  isEmpty() {
    return !this.LinkedList.head;
  }
  /**
   * 返回队列头节点
   * @returns
   */
  peek() {
    if (!this.LinkedList.head) {
      return null;
    }
    return this.LinkedList.head.value;
  }
  /**
   * 排队
   * @param {*} value
   */
  enqueue(value) {
    this.LinkedList.append(value);
  }
  /**
   *出队
   */
  dequeue() {
    const removeHead = this.LinkedList.deleteHead();
    return removeHead ? removeHead.value : null;
  }

  /**
   * 转换为字符串
   * @param [callback]
   * @return {string}
   */
  toString(callback) {
    // Return string representation of the queue's linked list.
    return this.linkedList.toString(callback);
  }
}
