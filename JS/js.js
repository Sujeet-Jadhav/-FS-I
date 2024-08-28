//dynamic typed language

//External JS file :
//async to load js file simultaneously in web page (non-blocking) independent on DOM
//eg <script src="script.js" async></script>
//defer to load js file one by one in order in web page (others are blocked like HTML & CSS & JS ) dependent on DOM
//eg <script src="script.js" defer></script>

//In eventListener :
//DOMContentLoader - function will load after the DOM is loaded in browser

//primitive - boolean,undefined,string,null,number
//user defined - function,object

// Comments Types used in Industry
/*  * Document Comments
    ! Warning Comments
    ? Question Comments
    TODO: To Do Comments
*/

//variables - let,var,const
//var variables are initalized with undefined whereas let and const variables are not initialized
//var is globally scoped while let and const are block scoped
// var a = 10;
// {
//     var a = 20;
//     console.log(a); // 20
// }
// console.log(a); // 20

//var can be updated and redeclared within its scope
// var b = "hello";
// var b = 100; // redeclared

//let can be updated but not redeclared
// let a = 10;
// let a = 11; // can not redeclare

// let b = 10;
// {
//     let b = 20;
//     console.log(b); // 20
// }
// console.log(b); // 10

//const must be initialized during declaration
//const can neither be updated nor redeclared
const Pi = 3.14; //Pi value can't be changed

// //Lexical Scope - properties of parent to child
// function grandFather() {
//   var name = "Shree";
//   function father() {
//     console.log(name);
//     function son() {
//       console.log(name);
//     }
//     son();
//   }
//   father();
// }
// grandFather();

// // Recountructing
// let [first,second,third,...others] = [1,2,3,4,5,6,7];
// console.log(first,second,third,others);

//Naming Conventions : (start with $ , _  or letter but not with number)
//camelcase - firstName, pascalcase - FirstName, snakecase - first_name

// var num = 10000000000n; //bigint
// var num; //undefined
// var num = null; //object
// var num = 10; //number
// var num = "Hello"; //string
// var type = typeof num; //return datatype
// console.log(type);

//taking input from user
// var i = prompt("Enter a number:");
// console.log(i);

//operators : +,-,%,*,/,**,++,--
//assignment operators : +=,-+,%=,/=,*=,**=
//comparison operators :  <,>,<=,>=
//equals(==), not equals(!=), strict equal(===), strict not equal(!==)
//logical operators : &&, ||, !
//ternary operator( expression ? True : False )
// var x = 11;
// console.log("Value of X is", (x==10 ? "Ten" : "Not Ten") );

//Primitive data types - NNSSBBU
//null number symbol string boolean bigint undefined
// let a = null;
// let b = 123;
// let c = Symbol("I am doing JavaScript");
// let s = "Study Hard";
// let e = true;
// let d = BigInt(123456789);
// let g = undefined; // by default if not initialized
// console.log(a,b,c,s,e,d,g);

// // Object - key value pairs having primitive data types and functions
// // Creating object using object literal
// const item = {
//   Name: "JavaScript",
//   Time: 24,
//   Value: 1.5,
//   hello() {
//     console.log("Hello function in object");
//   },
// };
// console.log(item.Name);
// console.log(item["Time"]);
// let v = "Value";
// console.log(item[v]);
// item.hello();

// // Create object using new keyword
// let obj = new Object();
// obj.Name = "JavaScript";
// obj.Time = 24;
// obj.Value = 1.5;
// obj.hello = function () {
//   console.log("Hello function in object");
// };
// console.log(obj);

// // Create object using constructor function
// let constr = function (name, time, value) {
//   this.Name = name;
//   this.Time = time;
//   this.Value = value;
//   this.hello = function () {
//     console.log("Hello function in object");
//   };
// };

// obj = new constr("JavaScript", 24, 1.5);
// console.log(obj);

// // Primitive DataType
// let num = 10;
// // Pass By Value
// let num1 = num;
// num = 20;
// console.log(num);
// console.log(num1);

// // Reference DataType
// let obj = {num:10};
// // Pass By Reference
// let obj1 = obj;
// obj.num=20;
// console.log(obj);
// console.log(obj1);

// // Spread Operator (...)
// var obj2 = item; // will have same reference to single object
// console.log(obj2);
// var obj2 = { ...item }; // clone of object (... spread opeartor) to avoid reference
// console.log(obj2);

// function sum(...arg) {
//   return arg.map((ele) => {
//     return ele + ele;
//   });
// }

// console.log(sum(1, 2, 3, 4, 5));

// const obj3 = Object.assign({},item); // clone of object
// console.log(obj3);

// for(let key in item){
//     console.log(key,item[key]);
// }

// copy one object into another
// const obj4 ={};
// for(let key of Object.keys(item)){
//     console.log(key,item[key]);
//     obj4[key]=item[key];
// }
// console.log(obj4);

//create a variable of type string and try to add a number to it
// let str = "Add ";
// let a = 1;
// str = str + a;
// console.log(str);

// //change value of const object
// const i = {
//     id:"1",
//     value:2
// }
// i.value=5;
// console.log(i)

// //add new key in const object
// i.order=0;
// console.log(i);

// const product = {
//     item:"Flower",
//     price:40,
//     discount:20,
//     code:"F40"
// }

// // Factory Function
// function items(name,time,value) {
//     return {
//         Name: name,
//         Time: time,
//         Value: value
//     }
// }

// function prod(item,price,discount,code){
//     return{
//         item:item,
//         price:price,
//         discount:discount,
//         code:code
//     }
// }

// let product1=prod("Apple",100,10,"A1");
// console.log(product1);

// let i =items("JavaScript",24,1.5);
// console.log(i);
// console.log(i.constructor);//defines that object is made of which constructor

// //Constructor Function
// function Course(title,duration){
//     this.title=title,
//     this.duration=duration,
//     this.enroll = function(){
//         console.log("You are sucessfully enrolled");
//     }
// }

// const c = new Course('JavaScript',4);
// console.log(c);
// c.enroll();
// console.log(c.constructor);//defines that object is made of which constructor

// function Prod(item,price,discount,code){
//     this.item=item;
//     this.price=price;
//     this.discount=discount;
//     this.code=code;
//     this.total = function(){
//         return price-price*discount/100;
//     }
// }

// let product2=new Prod("Pencil",10,5,"HB");
// console.log(product2);

// item.Course = "JavaScript"; //Creating variable in object
// console.log(item);

// delete item.Name; //Delete variable in object
// console.log(item);

//let str = promt("Message"); - taking input from user as string
//alert("Message"); - display output to user

//Conditional statement : if , if else, else if, switch
// let age = 10;
// if(age>20)
//     console.log("Greater");
// else if(age==20)
//     console.log("Equal");
// else
//     console.log("Smaller");

// let fruit = "mango";
// switch(fruit){
//     case "apple" : console.log(`Red ${fruit}`);
//     break;
//     case "mango" : console.log(`Yellow ${fruit}`);
//     break;
//     default: console.log("NA");
// }

//loops - for, for in, for of, while, do while
// for(let i=0;i<5;i++)
//     console.log("hello")

// let obj = {
//     a:1,
//     b:2,
//     c:3,
//     d:4
// }

// for(let i in obj)
//     console.log(i,obj[i]);

// for(let i of "JavaScript")
//     console.log(i);

// let array = ["Abhi","Om","Hrishi","Sawpnil"];

// for(let i in array)
//     console.log(i,array[i]); // used most for key value pair

// for(let j of array)
//     console.log(j);

// let i=5;
// while(i>0){
//      console.log(i);
//      i--;
// }

// let j = 5;
// do{
//     console.log(j);
//     j++;
// }while(j<5);

//printing object values using for loop
// let student = {
//     Om:20,
//     Sham:30,
//     Rahul:10,
//     Aniket:25
// }

// for(let i = 0; i<Object.keys(student).length; i++)
//     console.log(Object.keys(student)[i],student[Object.keys(student)[i]]);

/*function is a block of JavaScript code, that can be executed when "called" for.
For example, a function can be called when an event occurs, like when the user clicks a button.
*/

// function total(a,b,c){
//     console.log("Total =",a+b+c);
//     return a+b+c;
// }

// let sum = total(1,2,3);
// console.log("Sum =",sum);

// //arrow function
// let add = (p,q) => {
//     console.log("Addition =",p+q);
// }

// add(10,11);

//Strings (object) immutable
//can access from index but can not change value for example
let fr = "Friend";
fr[0] = "d";
console.log(fr[0]);
console.log(fr);
// let str = "String in JS";
// let str1 = 'This is String\'s';
// let str2 =  `Hello ${str}`; //template literal
//Inserting variables directly in template literal is called as String Interpotaion
//Escaspe Sequence Characters \',\",\n,\t,\r(carriage return)
// var f = 'Fruit\'s';
// console.log(f);

//String built-in functions doesn't change original string it just return it
// var l = str2.length;
// console.log(str[0]);
// console.log(str1.indexOf("is"));//return index of first occurrence string
// console.log(str1.indexOf("is",4));
// console.log(str.lastIndexOf("in"));//return index of first occurrence string from ending
// console.log(str.lastIndexOf("in",5));
// console.log(str1.slice(5,7));//return string inbetween start and end index
// var s=str.replace('i','s');//replace first occurrence string
// console.log(s);
// var s=str1.replace('is','are');
// s=s.replace('is','are');
// s=s.replace('are','is');
// console.log(s);
// console.log(str.toLowerCase());
// console.log(str.toUpperCase());
// console.log(str.concat(" -> \"",str1,"\" is an example of string"));
// var name = "    Java Stript     ";
// console.log(name);
// console.log(name.startsWith(" ",2));
// console.log(name.endsWith(" ",5));
// console.log(name.trim());//remove spaces in string from starting and ending
// console.log(name.includes("Java"));//return true if string present (only for primitive data types)
// // find() - used to find objects in array
// let a = [{no:10,value:'ten'},{no:20,value:'twenty'},{no:30,value:'thirty'}]
// console.log(a.find(function(ele){ //callback function
//     return ele.no < 20;
// }));

// console.log(a.find( ele => ele.value === 'twenty'));//arrow function

//converting string first letter to capital and rest small
// let str = "pUnE";
// str=str.toLowerCase();
// for(let i in str)
// {
//     if(i==0){
//         str=str.replace(str[i],str[i].toUpperCase());
//     }
//     // console.log(i,str[i]);
// }
// console.log(str);

// Converstion functions (Type Conversion)
// var n = "123";
// console.log(Number(n));
// console.log(Number.parseInt(n));
// console.log(typeof(Number("321")));
// console.log(typeof(+'789'));
// var n = 456;
// console.log(n.toString());
// console.log(typeof(String(n)));//explicit
// console.log(typeof(123+''));//implicit
// console.log(Boolean(0));
// console.log(Boolean(n));

//Arrays (object) - variable which can store more than one value of any data type (mutable)
// Ways to construct array
// Using array literal
// const arr = [10,null,11.5,"Hello",undefined,a=()=>{console.log("Function")}]
//if we try to access out of bound array elements we get undefined
// console.log(arr[10]);
// arr[0]=20;
// console.log(arr);

// Using Array (Constructor) with new keyword
// const num = new Array(1,2,3,4,5);
// console.log(num);

// //Methods of array
// console.log("Lenght "+arr.length);
// console.log(arr.toString());//converting array to string
// let j = arr.join("_");//convert array to string using separators
// console.log(j,"\nType->"+typeof(j));
// console.log(j.split('_'));//convert string to array of string using separators
// let r =arr.pop(); // remove last element and return it (original array modified)
// console.log("Poped",r,arr);
// r =arr.shift(); // remove first element and return it (original array modified)
// console.log("Shifted",r,arr);
// r = arr.push("new element"); // modifiy original array by adding element at end position and return new lenght
// console.log("Pushed with new lenght",r,arr);
// r = arr.unshift(101.23,[1]); // modifiy original array by adding element at starting position and return new lenght
// console.log("Unshifted with new lenght",r,arr);
// delete arr[2];// delete element from original array without shifting element (space remain unallocated but not decrease)
// console.log(arr);
// let arr1 = [3, 2, 6, 4, 5, 1];
// let arr2 = arr1.concat(arr,"new");//return conatenated elements
// console.log(arr2)
// arr2.sort(); // sort original array according to string
// console.log(arr2);
// //can pass function to sort function for user-define sorting
// let comp1 = (a,b)=>{
//     return a-b;
// }
// arr2.sort(comp1);// (ascending)
// console.log(arr2);
// let comp2 = (a,b)=>{
//     return b-a;
// }
// arr2.sort(comp2);// (descending)
// console.log(arr2);
// arr1.reverse();// reverse original array
// console.log(arr1);

// //splice(position,noOfElementsRemove,elements...) - used to add new items to an original array
// let del = arr1.splice(2, 2, 1, 1, "11"); // returns deleted array elements
// console.log("Deleted element:" + del);
// console.log("Updated array: " + arr1);
//slice() - return slices out a piece from an array
// console.log(arr1.slice(3, 5));

//Array Looping function - forEach, from, map
//forEach(value,index,array) - calls an function
// let arr = [1, 4, "hello", 3, 2];

// arr.forEach((element, index, array) => {
//   console.log(element, index, array);
//   if(element==="hello"){
//     // break; // not allowed (Jump target cannot cross function boundary)
//   }
// });

// //from - used to create an array from any String object (DOM - HTML collection)
// let str = "JavaScript";
// console.log(Array.from(str));
// console.log(Array.from(a));

//map() - creates a new array by performing some operation on each array element
// let b = ["h","e","l","l","o"];

// let c = b.map((val,i,arr)=>{
//     console.log(val,i,arr);
//     return val; // can return elements with operations
// });
// console.log("New array",c);

// //filter() - filters an array with values that passes a test creating a new array
// let even = arr.filter((no,index,arr)=>{
//     if(no%2===0)
//         return no;
//     // console.log(no,index,arr);
//     // return no+index>=3;
// });
// console.log("New array",even);

// // every() - test whether all elements in array pass the test
// console.log(a.every((no)=>{
//     return no>0;
// }));

// // some() - test whether atleast one element in array pass the test
// console.log(a.some( no => no>5));

// // reduce() - reduce an array to a single value
// syntax: arr.reduce(callback(accumulator, currentValue, currentIndex, array), initialValue)
// Parameters:
// callback: The main is the callback function that executes for each element, excluding the first, if no initialValue is specified.
// The callback function undertakes the following four arguments:
// accumulator: It accumulates the return values of the callback function, returned in the last calling of the function.
// currentValue: It is the value of the current element, which is being processing.
// currentIndex: It is an optional argument that holds the index value of the current element which is being processed. If we provide the initial value, indexing will begin from 0. Else from 1.
// array: It is also optional, which carries the elements on which the reduce() will work.
// initialValue: It is the first argument value used in the first invocation of the callback function.
// let arr = [1, 2, 3, 4, 5];
// let d = arr.reduce((accu, current, i, arr) => {
//   console.log(accu, current, i, arr);
//   return accu + current;
// }, 2);
// console.log("Addition:" + d);

//genrate random number
// let n = Math.floor(Math.random()*101);
// console.log(n);

// //console Functions
// let obj = {
//     name:"JavaScript",
//     version:13,
//     type:"Scripting"
// }
// let arr = [10,null,11.5,"Hello",undefined]
// console.clear();
// console.time("T");//staring time process
// console.log("Console Functions");
// console.log(console);//console function
// console.error("This is an error");//used to write error message
// console.warn("This is an Warning");//used to write warning message
// console.assert(5<2);//return failed error when the condition is false
// console.table(arr);//print object in tabular format
// console.info("Main message using info");
// console.log("Main message using log");
// console.timeEnd("T");//ending time process

// De-Sctructuring - used to unpack values from arrays or properties from objects into distinct variables
// let rating = 4.1;
// let product = {
//   brand: "Cello",
//   itemName: "Ball Pen",
//   price: 200,
//   // rating: 3.4, (is same as)
//   // rating: rating (is same as)
//   rating,
//   discription: () => {
//     return "Cello Black ball pen with 0.7mm thickness";
//   },
// };
// console.log(product);
// // let price = product.price; (is same as)
// let { price } = product;
// console.log(price);

//Interaction - alert, comfirm, prompt
// alert("This is an alert message");
// let val = prompt("Enter a number:",10);//used to take input from user giving default value
// console.log(val,typeof(val));//shows a message and waits for the user (return false/true)

//Window Object - BOM and DOM (represent browser and is a global object)
//DOM (Document Object Model) - represent the HTML page content as document
//BOM (Browser Object Model) - represent additional object provided by browser(host environment) eg. alert,prompt
// console.log(window);
// window.console.log(document);
// document.body.style.background="black";

// // get age from user and redirect to google if valid
// let age = prompt("Enter your age");

// function valid(age){
//     return (age>10)?true:false;
// }

// if(age<0){
//     alert("Enter valid age");
// }
// else if(valid(age)){
//     location.href="https://google.com";
// }
// else{
//     console.error("Not allowed");
// }

//DOM tree refers to HTML page where all the nodes are object there can be 3 main types nodes - text,element,comment
//<html> is an root node and others are child,sub-child,...

//Auto correction
//If an error occurs in HTML is encountered by the browser,it try to correct it
// console.log(document.body);//can be null if js is written before body tag
// console.log(document.firstChild,document.body.firstChild);
// console.log(document.body.lastChild);
// console.log(document.body.childNodes);
// //element.childNodes[0]===element.firstChild
// //element.hasChildNodes() - check whether have child nodes
// //child nodes look like array but are acutally a collection

// //DOM collection (read only)
// //they are iterable using for...of loop
// //they are live element.childNodes variable(refernces) changing automaticlly if element are updated
// console.log(document.documentElement.parentElement);//null
// console.log(document.documentElement.parentNode);//document
// console.log(document.body.firstChild);
// console.log(document.body.firstElementChild);
// console.log(document.lastElementChild);
// console.log(document.previousSibling);
// console.log(document.nextSibling);
// console.log(document.body.children[0].textContent);

//Table DOM
// const tableTag = document.body.children[3];
// console.log(tableTag.tBodies[0].rows[0].cells[0].textContent);

// //Searching or Selecting DOM
// let span = document.getElementById("span");
// let c = document.querySelectorAll(".container") //return all elementsinside an element matching given css selector
// let c1 = document.querySelector("#css")[0];//return first element for css selector
// let h = document.getElementsByTagName("h1");
// let n = document.getElementsByClassName(".card");

// Attribute methods
// console.log(list.id);
// console.log(list.getAttribute("data"));
// console.log(list.setAttribute("data","Valid"));
// console.log(list.getAttribute("data"));
// console.log(list.hasAttribute("data"));
// console.log(list.removeAttribute("data"));
// console.log(list.hasAttribute("data"));
// console.log(list.attributes);
// let s = document.getElementById("span");
// console.log(s.dataset); // get details of custom attributes
// console.log(s.dataset.info);

// // functions to check selectors
// let id = document.getElementById("id1");
// let list = document.getElementById("list");
// console.log(id.matches("#id1")); // return true if matches with selectors
// console.log(id.closest(".details")); // return the nearest parent element
// console.log(list.contains(id)); // return true if match with child selector

// //Creating and removing node element
// const n = document.createElement('div');
// const n1 = document.createTextNode("Hello JS");
// n.appendChild(n1);
// console.log(n);
// document.body.append(n);
// document.body.prepend(n);
// document.body.before(n);
// document.body.after(n);
// para.replaceWith(n);
// n.remove();

//Events
// btn.onclick = function(){
//     alert("Thanks");
// }

// function call(event){
//     console.log(event.type);
//     console.log(event.currentTarget);
//     console.log(event.clientY);
//     console.log(event.clientX);
//     alert("Welcome Back");
// }

// const btn = document.getElementById("button");
// btn.addEventListener('click',function(){
//     alert("Welcome");
// });

// btn.addEventListener('click',call)  \\used to assign multiple handlers to an event

// btn.removeEventListener('click',call);

// console.dir(n); //Shows element DOM tree

// innerHTML property allows to get the HTML element as a string (only element nodes)
// console.log(id1.innerHTML);

// outerHTML property contains the full HTML innerHTML+element itself
// console.log(id1.outerHTML);

// console.log(document.body.firstChild.data);
// console.log(document.body.firstChild.nodeValue);
// console.log(document.body.textContent);// access to the only text inside element
// let id = document.getElementById("id3");
// id.hidden=false;

// Asynchronous actions are the actions that we initiate earlier and they finish later.
// console.log("Start");
// setTimeout(function () {
//     console.log("Hey I am Function");
// }, 3000);
// console.log("End");

// // Callback functions - passed into another function as an argument
// function hello(message, callback) {
//     console.log(message);
//     callback();
//     console.log("Function");
// }

// function hi() {
//     console.log("HI");
// }

// hello("This is Callback example.", hi);

// // Pyramid of Doom - callback inside callback in the form of nested being deeper and become difficult to manage/understand
// stepl(function (valuel) {
//     step2(function (value2) {
//         step3(function (value3) {
//             step4(function (value4) {
//                 step5(function (value5) {
//                     step6(function (value6) {
//                         step7(function (vatue7) {
//                             console.log(valuel)
//                         });
//                     });
//                 });
//             });
//         });
//     });
// });

// Promises - solution to callback hell
// resolve and reject are two callbacks provided by javascript
// resolve(value) - if the job is finished successfully
// reject(value) - if the job fails
// let promise1 = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         console.log("Promise resolve");
//         resolve(55);
//     }, 2000);
// })
// console.log(promise1);

// // Properties of promises
// // state - initially pending then changes to either "fulfilled" when resolve() is called or "rejected" when reject is called.
// // result - initially undefiened then changes to value if resolve() is called or error when rejecte() is  called
// let promise2 = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         console.log("Promise reject");
//         // resolve("Done");
//         reject(new Error("Error occured"));
//     }, 3000);
// })
// console.log(promise1);

// // Consumers in promises - (then & catch) can receive the final result of a promise through then() and catch
// promise1.then((value) => {
//     console.log(value);
// });

// // promise2.then((value) => {
// //     console.log(value);
// // });

// promise2.catch((reason) => {
//     console.log(reason + " Something went wrong in promise2");
// });

// // Classes - template for creating objects (special functions)
// class Product{
//     constructor(name,price,code){
//         this.name=name;
//         this.price=price;
//         this.code=code;
//     }
// }

// let pen = new Product('Pen',20,"P1");
// console.log(pen);

// //Class Expression
// let Product1 = class Product{
//     constructor(name,price,code){
//         this.name=name;
//         this.price=price;
//         this.code=code;
//     }
// }

// let Product2 = class{
//     constructor(name,price,code){
//         this.name=name;
//         this.price=price;
//         this.code=code;
//     }
// }

// let chair = new Product1("Chair",200,"C11");
// console.log(chair);

// console.log(Product1.name);//Class name
// console.log(Product2.name);//Class name

// //Getter and Setter

// let Product3 = class{
//     constructor(name,price,code){
//         this.name=name;
//         this.price=price;
//         this.code=code;
//     }

//     get getPrice(){
//         return this.price;
//     }

//     set setPrice(price){
//         this.price=price;
//     }

//     getCode(){ //function
//         return this.code;
//     }
// }

// let table = new Product3("Table",5000,"DT");
// console.log(table);
// console.log(table.getPrice);
// table.setPrice=6000;// no parentheses
// console.log(table);
// console.log(table.getCode());

// //Extending Class
// class Subject{
//     constructor(name){
//         this.name=name;
//     }

//     getName(){
//         return this.name;
//     }
// }

// class Student extends Subject{
//     constructor(name,sid,sname){
//         super(name);//call's parent constructor
//         this.sid=sid;
//         this.sname=sname;
//     }

//     getName(){
//         return this.sname;
//     }
// }

// let sub = new Subject("JS");
// let stu = new Student(sub,1,"Sham");

// console.log(sub.getName());
// console.log(stu.getName());
