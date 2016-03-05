var a = 1;
// a is a integer
var b = 0.5
// b is a float
var c = "webdxd";
// c is a string
console.log("This is my firs javascript file");
console.log(a);
console.log(b);
console.log(c);
var d = "1"
console.log(d);

var arr = [1,"learn",3,5,"true"];
console.log(arr);
console.log(arr[0]);
var myQuote = "I" + arr[1];
console.log(myQuote);

// a = 8;
// console.log(a);

a = a + b;
//add a to b and put the result to a
console.log(a);

var bool = true;
bool = !true;
var isTrue = !bool;
console.log(isTrue);

arr = [isTrue,a,b,c];
console.log(arr);

a = 11;
b = 2;
b = a%b;
console.log(b);

var book = {
	title:"Harry Potter",
	price: 29,
	description: "A boy who knows magic",
	section:["section 1","section 2","section 3"]
}

var book2 = {
	title:"Lord of Ring",
	price:45,
	description:"A storing about ring"
}

var book3 = {
	title:"Lord of Ring 2",
	price:45,
	description:"A storing about ring"
}

var bookCollection = [book2,book3];
var bookStore = [book,bookCollection];
console.log(bookStore); 

book.title = "Harry Potter"
book2.title = "Lord of Ring"
book3.title = "Lord of Ring 2"
console.log(bookStore [0].section[0]);
book.price+=2
//increment by a number

book.price++;
//increment by 1

book.price--;
//decrement by 1
console.log(book);
console.log("Title:"+book.title);
console.log("Price:"+book.price);
console.log("Description:"+book.description);



