
// var text = "mom and dad and baby";
// var pattern = /mom( and dad( and baby)?)? /gi

// var matches = pattern.exec(text);

// // console.log( matches.index );
// console.log( matches);

var text = 'cat,bat,eat'
var re = /.at/g
// console.log(1,re,re.lastIndex);

// var matches = re.exec(text);
// var matches = text.match(re);
var matches = text.replace(/.at/g,"word ($1)");
console.log(matches);


// console.log(2,re,re.lastIndex);
// console.log(3,RegExp.$1);

// var text = 'this has been a short summer ingasd abcing aingcd';
// // var partter = /(..)or(.)/g;
// // var partter = /(\b(?=ing)\w+\b)/g;
// var partter = /\b(?=ing)\w+\b/g;
// // var partter = /(\b\w+(?=ing\b))/g;
// console.log("test",partter.test(text));
// console.log("match",text.match(partter));
// var m = text.match(partter);
// console.log('str',m.toString());

// // var partter  = /(?<Word>\w+)/
// if (partter.test(text)) {
//   console.log("RegExp",RegExp);
   
//   console.log(RegExp.$1);
//   console.log(RegExp.$2);

// }









