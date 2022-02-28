let baseSalary = 30000;
let overtime = 10;
let rate = 20;

function getWage(baseSalary, overtime, rate) {
  return baseSalary + overtime * rate;
}

let employee = {
  baseSalary: 30000,
  overtime: 10,
  rate: 20,
  getWage: function () {
    return this.baseSalary + this.overtime * this.rate;
  },
};
console.log(getWage(baseSalary, overtime, rate));
console.log(employee);

/*
有一句名言：“软件领域的任何问题，都可以通过增加一个间接的中间层来解决”。分层架构的核心其实就是抽象的分层，每一层的抽象只需要而且只能关注本层相关的信息，从而简化整个系统的设计。

设计与分析的过程就是不停的进行抽象和封装，并且确定各个系统实体的细节。抽象是指将业务抽象为软件领域的元素（系统、模块或类）；封装则是指定义元素的边界，隐藏实现，开放接口。

抽象，是指从众多的事务中抽取出具有共同的、本质性的特征作为一个整体。是共同特质的集合形式。
封装，是将通过抽象所得到的数据信息和操作进行结合，使其形成一个有机的整体。对内执行操作，对外隐藏细节和数据信息。
两者的区别，在于抽象是一种思维方式，而封装则是一种基于抽象性的操作方法。我们通过抽象所得到数据信息及其功能，以封装的技术将其重新聚合，形成一个新的聚合体，也就是类。或者说，两者是合作者的关系，如果没有抽象，封装就无从谈起，如果没有封装，抽象也将没有意义。
*/

/*
The best functions are thoes with no parameters!
                            ---Uncle Bob-Robert C Martin
*/
