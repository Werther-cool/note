let a = 1;
function fn() {
  return function () {
    a++;
    console.log(a);
  }
}

// var f1 = fn();
// f1();
// f1();
// var f2 = fn();
// f2();
// f2();
let a = 1;
function fn() {
  return function () {
    a++;
    console.log(a);
  }
}


function name(params) {
  let a = 100
  var f1 = fn();
  var f2 = fn();
    
  f1()
  f1()
  f2();
  f2();
  
}
name()