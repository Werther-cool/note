function Name() {
  this.sayName = function(params) {
    console.log(111);
    
  }
}
var x = new Name();
Name.prototype.sayName  = function () {
  console.log(222);
  
}
// x.sayName();

Name.sayName()


var a = function () {
  console.log(1123);
  
}