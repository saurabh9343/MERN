//============================ Condictional Statement Questions=============================================//
// Questions 1   Find Big in 2 number 

// let num1=10;
// let num2=20;

// if(num1>num2){
// console.log("Num 1 is Greater", num1)
// }else{
//     console.log("Num 2 is greater" , num2)
// }

//=================================================
// Questions 2  Find big in 3 Number

// let num1=10;
// let num2=20;
// let num3=30;

// if(num1>num1 && num1>num3){
// console.log(num1," Is Greater")
// }else if(num2>num1 && num2>num3){
// console.log(num2,"Is Greater")
// }else{
//     console.log(num3,"Is Great")
// }

//==================================================
//Questions 3  CHeck Number is Positive Nagitive or Zero

// let number =-9;

// if(number>0){
// console.log(number, "Positive Number")
// }else if(number<0){
// console.log(number, "Negitive Number")
// }else{
//     console.log(number, " Zero")
// }

//===========================================================
// Questions 4 Check NUmber is Div... by 5

// let numbe=10;

// if(numbe%5==0){
// console.log(numbe,"Number is divide by 5")
// }else{
//     console.log(numbe,"Not Div by 5")
// }

//==========================================================
//Questions 5 Check number is div by 5 and 11 both

// let number=1;

// if(number%5==0 && number%11==0){
// console.log(number,"Is Div by 5 and 11 both")
// }else if(number%5==0){
// console.log(number,"Is div by 5 only")
// }else if(number%11==0){
// console.log( number,"Is div by 11 only")
// }else{
//     console.log(number,"Not Div by 5 and 11")
// }

//==========================================================
//Questions 6 check charactor is alphavate and vovle

// let charactor="A";

// if(charactor=="a"||charactor=="A"||
//    charactor=="e" || charactor=="E"||
//    charactor=="i"||charactor=="I"||
//    charactor=="o"||charactor=="O"||
//    charactor=="u"||charactor=="U"
// ){
// console.log(charactor," Is Vovle")
// }else{
//     console.log(charactor, " Is Consonate")
// }

//=====================================================
// Questions 7  check Your can give the bot

// let age =19;

// if(age>=18){
// console.log("Valid")
// }else{
//     console.log("Not Valid")
// }

//=====================================================
//Questions 8 

// let day =8;

// switch (day){
//     case 0:
//     console.log("Sunday")
//     break;

//     case 1 : 
//     console.log("Monday")
//     break;

//     case 2 :
//     console.log("Tuesday")
//     break;

//     case 3 : 
//     console.log("Wednesday")
//     break;

//     case 4 : 
//     console.log("Thusday")
//     break;

//     case 5:
//     console.log("Friday")
//     break;

//     case 6:
//     console.log("saturday")
//     break;

//     default : 
//     console.log("Currect The Number")

// }

//======================================================

//Questions 9 What Fruit 

// let fruit = "apple";
// switch (fruit) {
//     case "apple":
//         console.log("This is an apple");
//         break;
//     case "banana":
//         console.log("This is a banana");
//         break;
//     default:
//         console.log("Unknown fruit");
// }

//=========================================================

//Questions 10 Check the week day

// let day = "Monday";
// if (day === "Monday") {
//     console.log("Start of the week");
// } else if (day === "saturday") {
//     console.log("End of the week");
// } else {
//     console.log("Midweek");
// }

//========================================================
// Questions 11 check number is even or odd

// let x = 10;
// if (x % 2 === 0) {
//   console.log("Even");
// } else {
//   console.log("Odd");
// }

//======================================================
// Questions 12 Check Leep year or not

// let year =100;

// if((year%4 ==0 && year %100 !==0)|| (year%400 ==0)){
// console.log(year ,"Leep year")
// }else{
//     console.log(year, "Not leep Year")
// }

//=======================================================
//Questions 13  ternari operator

// let age =54;

// let ans= (age<18 ) ? "Your are child" : (age>=18 && age <=40) ? "Yor are Young" : "You are Old"
// console.log(ans)

//============================================================================================================
// Questiosn 15 Billibg Questions

// let unit =55;
// let result =0;

// if(unit>0 && unit<=50){
// result=unit*8
// }else{
//     result=unit*10
// }
// console.log(result)

//==============================================Loop In javascript ================================================
//Questons 1 Print the name in 5 time

// let namee ="My Name is Saurabh";

// for(let i =0; i<5 ; i++){
// console.log(namee)
// };

//=========================================
// Questions 2 Print even number between 2 to 50

// for(let i =0; i < 51; i++){
//  if(i%2==0){
//   console.log(i ,"Even")
//  }
// }

//==============================================
//Questions 3 Print any table 

// var demo=5;

// for(let i=1 ; i<11 ; i++){
// console.log(`${i}*${demo}=${i*demo}`)
// }

//==============================================
//Questions 4  Reverse table 

// let numbe=3;
// for(let i =10; i>0 ; i--){
// console.log(i*numbe)
// }

//==============================================
//Questions 5 sum of any table;

// let number =2;
// let totle=0;

// for(let i=1; i<11; i++){
//  ans =i*number
//  totle=totle+ans
// // console.log(ans)
// }
// console.log(totle)

//==========================================================
//Quesions 6 pritn totle disit present in a number

// let numbe=55546;
// let count=0;

// for(let i =numbe; numbe>0; i--){
//  numbe=Math.floor(numbe/10);
//  count++
// }
// console.log(count);

//same while loop

// while(numbe>0){
// numbe = Math.floor(numbe/10);
// count++
// }
// console.log(count)

//============================================================
//Questions 7 write to print the factorial of any number

// let number=5;
// let facto=1;

// while(number>0){
// facto=facto * number
// number--
// }
// console.log(facto);

//Same for loop
// for(let i=1; i<=number; i++){
// facto=facto*i
// }
// console.log(facto)

//================================================================
//Questinons 8 write a programe to find out the sum of disit presetn in the number

// let number =12345;
// let sum=0;

// while(number>0){
// disit=number%10
// number=Math.floor(number/10);
// sum=sum+disit
// }
// console.log(sum);

//==============================================================
// Questions 9 Write a programe to reverce any number

// let num1=12345;
// let reverce=0;

// while(num1>0){
// disit =num1%10;
// num1=Math.floor(num1/10)
// reverce=reverce*10+disit
// }
// console.log(reverce)

//===============================================================
//Questions 10 write a programe to find out totle value squre presetn a number'

// let number=123;
// let ans=0;

// while(number>0){
// disit =number%10;
// number=Math.floor(number/10);
// squre=disit*disit;
// ans=ans+squre
// }
// console.log(ans);

//==================================================================Array Questions ============================================//

// Questions 1 print array value

//let array=["saurabh","Kushwah","Ravi","Pream","Nidhi","My-gf"];

// for(let i=0; i<array.length; i++){
//  console.log(array[i])
// } 

//by For of loop 









