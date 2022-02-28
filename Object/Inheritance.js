let fuc = function () {
  this.abc = function () {
    this.ir = "s";
    console.log(this);
  };
};
