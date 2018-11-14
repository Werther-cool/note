
// var text = "mom and dad and baby";
// var pattern = /mom( and dad( and baby)?)? /gi

// var matches = pattern.exec(text);

// // console.log( matches.index );
// console.log( matches);

// var text = 'cat,bat,eat'
// var re = /.at/g
// console.log(1,re,re.lastIndex);

// var matches = re.exec(text);
// console.log(matches);
// console.log(2,re,re.lastIndex);
// console.log(3,RegExp.$1);

var text = 'this has been a short summer';
// var partter = /(..)or(.)/g;
var partter  = /(?<Word>\w+)/
if (partter.test(text)) {
  console.log(RegExp.$1);
  console.log(RegExp.$2);

}









