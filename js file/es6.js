// rest perameters in js  

//   function abc(...numbers){
//     for(let i of numbers){
//     console.log(i)
//     }
//    }

//    abc(1,2,3,4,5,6)

//===========================================
// spree operator in js

// let colors = ["red", "blue", "green"];
// let [, , secondColor] = colors;

// console.log(secondColor); // Output: blue

// https://www.vectorlogo.zone/logos/facebook/facebook-ar21.svg

// let x

// console.log(x)
//  x=10

// const sym = Symbol();
// console.log(sym);

//=========================================================

// function add()=>{
// console.log(arguments[0]+arguments[1])
// };

//  let adr = ()=>{
// console.log("hiii")
//  }

// //add(10,20)
// adr()

//=======================================================

// const user={
//     name :"saurabh",
//     class : 12,
//     siguup : true ,

// }

// function student(name,age,classes){
//     //console.log(name,age,classes)
//   this.FirstName = name,
//   this.age =age;
//   this.classes =classes
//  // return this
// }
// console.log( new student("saurabh",10,12))
// console.log(new student("raj",12,2))


// class Animal {
//     constructor(name, species) {
//         this.name = name;
//         this.species = species;
//     }

//     // Method of the class
//     speak() {
//         console.log(`${this.name} says hello!`);
//     }
// }

// Animal()

//=======================================================

//=============================== Class IN Js====================================//

// class student{
//   constructor(id,name ,age){
//    this.id =id;
//    this.name =name;
//    this.age=age;
//   }
//   AllValue =function(){
//     return `"id =" ${id}  "name ="${name} "age =" ${age}`
//   }
// }

// let s1=new student("1","sk",20)
// console.log(s1)

//=====================================================

//questions2

// class bankAccount{
//     constructor(Diposeter,Ac_Menber,Type_of_Account,Balance_Ammount_inAccount ){
//      this.Diposeter=Diposeter;
//      this.Ac_Menber=Ac_Menber;
//      this.Type_of_Account=Type_of_Account;
//      this.Balance_Ammount_inAccount=``
//     Member =function(){
//         return `${Diposeter} ${Type_of_Account}${Balance_Ammount_inAccount}${Ac_Menber}`
//     }
// }}

// let bank1=new bankAccount("SK","5","Saving","1000",)
// console.log(bank1)

//============================================================================
// Questios in Javascript class OOP

// class student{
//     Name ;
//     Age ;
//     Fess;
//     display(a,b,c){
//         this.Name=this.Name
//         this.Age=this.Age
//         this.Fess=this.Fess
//         console.log(a,b,c)
//     }
// }

// let s1= new student();
// s1.display("sk",10,12);
//====================================================================
//Questions ProtType

// class Books{
//     Display(a,b,c){
//     if(c>300){
//         console.log( ` "title"= ${a},"Auther"=${b},"Pages"=${c} ,"BookType"= "Thick"`)
//     }else{
//         console.log( ` "title"= ${a},"Auther"=${b},"Pages"=${c},"BookType"= "Thin"`) 
//     }
//     }
// }
// let book1=new Books();
// book1.Display("English","hello",700)

//=====================================================================


// class Books{
//      constructor(Title,Auther,Pages){
//     this.Title =Title;
//     this.Auther =Auther;
//     this.Pages=Pages;
//     this.BookType=""
//       console.log(`Title = ${this.Title}`)
//       console.log(`Auther = ${this.Auther}`)
//       console.log(`Pages = ${this.Pages}`)
//       if(this.Pages>300){
//          console.log(`BookType = Thik`)
//          }else{
//          console.log(`BookType = Thin`)
//          }
//      }

   // Display(){
   //    console.log(`Title = ${this.Title}`)
   //    console.log(`Auther = ${this.Auther}`)
   //    console.log(`Pages = ${this.Pages}`)
   // }
   // This(){
     
   // }

// }
// new Books("English","hello",400)
//book1.Display()
//book1.This()
//=======================================================
class Tra{
   display(Base,Height){
    this.Base=Base;
    this.Height=Height;
    console.log(`"Base=" ${this.Base}, "Height =" ${this.Height}`)
   }
   Area(){
      console.log(1/2*this.Base*this.Height)
   }
}


let A1= new Tra();
A1.display(20,40);
A1.Area()







