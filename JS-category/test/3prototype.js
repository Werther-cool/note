
{
  function Person(){
    name:'小明'
  }
  var friend = new Person();

  // Person.prototype = {
  //   constructor: Person,
  //   name : "Nicholas",
  //   age : 29,
  //   job : "Software Engineer",
  //   sayName : function () {
  //   alert(this.name);
  //   }
  // };
  Person.prototype.sayName = function () {
    // console.log(111,this.name);
    
  } 
  friend.sayName(); //error 
  // console.log("friend:",friend);
  
}

{
  function Super(){
    this.property = true;
   } 
   Super.prototype.getSuperValue = function(){
    return this.property;
   };
   function Sub(){
    this.subproperty = false;
   }
   //继承了 Super
   Sub.prototype = new Super();
   Sub.prototype.getSubValue = function (){
    return this.subproperty;
   };
   var instance = new Sub();
  //  console.log(1,instance.getSuperValue()); //true 
  //  console.log(2,Sub.prototype.isPrototypeOf(instance), Sub.prototype);
  //  console.log(3,Sub.isPrototypeOf(instance));

}
{
  function Father() {
    this.name = "your father";
    saySex = 'xy'
  }
  Father.prototype.name = 'your grandfather';
  Father.prototype.sayName = function () {
    console.log(this.name);
    
  }

  var sun = new Father();
  sun.sayName()
  Father.prototype.sayName()
}

{
  Function.prototype.__proto__ === Object.prototype
  Object.prototype.__proto__ === null
}