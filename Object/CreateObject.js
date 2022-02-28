//Object
const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1,
  },
  draw: function (paams) {
    console.log("draw");
  },
};
//工厂模式
function createCircle(name, color) {
  return {
    name: name,
    color: color,
  };
}

const circleOne = createCircle("bouble", "yello");

//构造函数
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("radius", radius);
  };
}

const circleTwo = new Circle(2);
console.log(Circle.prototype);
//Class

class box {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  get() {
    return this.x;
  }
  set() {}
}

class Girl {
  constructor(Name, Age, Height, body_weight) {
    this.HerName = Name;
    this.Age = Age;
    this.Height = Height;
    this.body_weight = body_weight;
  }
}
const PleasantGirl = new Girl();

console.log(PleasantGirl);
