"use strict";

var _createClass = (function() {
  function defineProperties(target, props) {
    // console.log("target:",target);
    // console.log("props:",props);
    
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    // console.log("Constructor:",Constructor);
    // console.log("protoProps:",protoProps);
    // console.log("staticProps:",staticProps);
    
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
})();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Foo = (function() {
  function Foo() {
    _classCallCheck(this, Foo);
  }

  _createClass(Foo, null, [
    {
      key: "classMethod",
      value: function classMethod() {
        return  console.log("hello") ;
      }
    }
  ]);

  return Foo;
})();

var Name 
(function () {
   Name = function Name() {
    
  }
  var sayname = function () {
    console.log('sayname,= =');
    
  }
  
  Object.defineProperty(Name,'sayname',{
    configurable: true,
    enumerable: false,
    writable:true,
    value:sayname
  })
  
  
})();

console.log(Name);
Name.sayname()

return;
(function(){

  var name = "";
 
  Person = function(value){
  name = value;
  };
 
  Person.prototype.getName = function(){
  return name;
  };
 
  Person.prototype.setName = function (value){ 
    name = value;
  };
 })();
//  var person1 = new Person("Nicholas");

//  var person1 = new Person("Nicholas");
//  console.log(person1.getName()); //"Nicholas"
//  person1.setName("Greg");
//  console.log(person1.getName()); //"Greg"
//  var person2 = new Person("Michael");
//  console.log(person1.getName()); //"Michael"
//  console.log(person2.getName()); //"Michael" 

