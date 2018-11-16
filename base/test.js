var book = {
  _year : 2004,
  edition : 1
}

Object.defineProperty(book,"year",{
  get: function () {
    this._year;
  },
  set: function (val) {
    if(val > 2004){
      this._year = val;
      this.edition += val - 2004
    }
    
  }
})  

book.year = 2003;
console.log(book);

var des =  Object.getOwnPropertyDescriptor(book,"_year");
console.log("des",des);

