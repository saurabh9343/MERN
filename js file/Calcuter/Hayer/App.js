
//Print current by Hod functions
// const arr=[10,20,23,24,25,26];

// arr.map((value)=>{
// console.log(value)
// });

//Converd number into string 

// const arr=[10,20,23,24,25,26];

// const newarr=arr.map((value)=>{
//  return value.toString();
// });

// console.log(newarr)

// const arr1 = [1, 2, 3, 4];
// const stringArr = arr1.map(num => num.toString());

// console.log(stringArr);

//Squire of Each Value 

// const arr=[10,20,23,24,25,26];

//  let newarr=arr.map((value)=>{
//  return value **2
// });
// console.log(newarr)

//4 Uper case All string

// const arr=["apple","banana"];

// let Nerstrg=arr.map((value)=>{
//     return  value.toUpperCase();
// });
// console.log(Nerstrg);

//5Extend find word

// const arr=["Hello","Word"]

// 6  To append all strinf "s"


// const arr=["Banana","Payaya", "Apple"];

// arr.map((value)=>{
//  console.log(`${value}s`)
// })


// 7  Find to length to all string;


// const arr=["Hello","Word","KyaHUaa"];

// let newarr=arr.map(( value)=>{
//   return value.length;
// })

// console.log(newarr)

// 8 Capilitazion First word Any string

// const arr=["i","am","sk"];

// let newarr = arr.map((value)=>{
//  return value.charAt(0).toUpperCase() +value.slice(1)
// })
// console.log(newarr)

//Change amount douler

//10 const amount =[100,200,300];

// amount.map((value)=>{
//  console.log(`$${value}.00`)
// })

//====================================================================

// 11 add a index property of each value

// let arr=["Abhiraj",20,"Indore"];

// let newarr ={};
// newarr.name="Abhiraj";
// newarr.age=20;
// newarr.city="Indore"
// console.log(newarr);
//=================================================================

//12 convert array of object to an aarray a specific property

// let person=[{name : "saurabh"},
//             { name : "Abhishek"},
//             { name : "Raj"}
//            ]

// let newarr=person.map((Value)=>{
//   return Value.name ;
// })

// console.log(newarr);

//===============================================================
// //13 
// let person=[{name : "saurabh"},
//                 { name : "Abhishek"},
//                 { name : "Raj"}
//                ]
//  let newarr=person.map((value)=>{
//     return value.name.length 
// })

// console.log(newarr);

//===========================================================

// 14 incrice 10% all aray element 

// let aray = [100,200,300];

// let newarr =aray.map((value)=>{
//     return value+value*10/100
// })
// console.log(newarr)

//===========================================================

// 15 add an index perprty to each object

// let fruits =["Apple","Banana","Cherry"];

// let newarr=fruits.map((value,index)=>{
// return {
//     index : index+1,
//     name : value
    
// }
// })
// console.log(newarr)

//==============================================================
//16 transform an array of number to an array of objects with squier and cube

// let object =[2,3,4]

// let newarr =object.map((value)=>{
// return{
//     squire : value**2,
//     cube   : value**3
// }
// })

// console.log(newarr);


//======================================================================

 //17 convert an array of dates to readable string 

//  let date =["Sun jan 01 20024", " Mon Jan 02 2024"]
 
//  let newarr=date.map((value)=> value+ "")

//  console.log(newarr)

//====================================================================

// 18 convert an aray of words into their ascll values 

// let aray =["hello","Letter","React","Word ","Saurabh"];

// let newarr=aray.map((value)=>{
//  return value.charCodeAt()
// })

// console.log(newarr)

// function myDisplayer() {
//     console.log("Hello")  
//   }
  
//   function myCalculator(num1, num2) {
//     let sum = num1 + num2;
//     return sum;
//   }
  
//   let result = myCalculator(5, 5);
//   myDisplayer(result);

//=========================================================================

//19   object access by for in lop

// let obj ={
//     name : "sk",
//     age : "11",
//     city : "indore"
// }

// // for(let i in obj){
// //  console.log(i +"="+ obj[i])
// // }

// let newong={name : a , age : b ,city :c}=obj;
// console.log(a)
// console.log(b)
// console.log(c)

//====================================================================
// 20  
// function callbackFunction(){
//     console.log('I am  a callback function');
// }

// // higher order function
// function higherOrderFunction(func){
//     console.log('I am higher order function')
//     func()
// }

// higherOrderFunction(callbackFunction);

//======================================================
// const arr = [1, 2, 3, 4, 5];
// const output = arr.filter((num) => num % 2)
// console.log(output)

//====================================================
// const users = [
//     {firstName: 'John', lastName: 'Doe', age: 25},
//     {firstName: 'Jane', lastName: 'Doe', age: 30},
//     {firstName: 'Jack', lastName: 'Doe', age: 35},
//     {firstName: 'Jill', lastName: 'Doe', age: 40},
//     {firstName: 'Joe', lastName: 'Doe', age: 45},
// ]

// // Find the users with age greater than 30
// const output = users.filter(({age}) => age%2==0)
// console.log(output); 

//==================================================
//height value in array

let array=[2,3,4,5,6,9,6,5,7];
let min =array.reduce((acu,valu)=>{
  return valu > acu ? valu : acu;
})
console.log(min);
