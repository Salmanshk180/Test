//1. Multiply function

// function multiply(x,y){
//     return x * y;
// }
// const answer = multiply(3,6)
// console.log(answer);

// 2. Conver Object to array

// let obj = {id:1,name:"Siddharth",age:"23",role:"full stack developer"};
// function convert(obj){
//     return Object.entries(obj)
// }
// const a = convert(obj);
// console.log(a);

// 3. Larget and Smallest number

// var max = 0;
// var maxIndex = 0;
// var min = Infinity;
// var minIndex = 0;
// function swap(arr) {
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//       maxIndex = i;
//     }
//   }
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] < min) {
//       min = arr[i];
//       minIndex = i;
//     }
//   }
//   arr[maxIndex] = min;
//   arr[minIndex] = max;
//   console.log(max, maxIndex);
//   console.log(min, minIndex);
//   console.log(arr);
// }

// swap([43, 56, 23, 1, 66, 106, 89, 68, 2]);

// 4. find the username

// var username = ["virat","rohit","sachin","mahi","abd","shikhar","shami","gill","jadeja","kuldeep","chahal","ashwin","ishan","arshdeep","siraj"];

// function findName(name) {
//   for (var i = 0; i < username.length; i++) {
//         if(username[i] == name){
//             console.log(`index of ${name}:` + i);
//             break;
//         }
//         else{
//             console.log(username[i]);
//         }
//   }
// }

// findName("kuldeep")

// 5. Employee Data

// let employeeData = {};
// function createEmployeeDatabase() {
//   return {
//     addEmployee: function (employeeId, employeeInfo) {
//       employeeData[employeeId] = employeeInfo;
//     },
//     deleteEmployee: function (employeeId) {
//       if (employeeId in employeeData) {
//         delete employeeData[employeeId];
//         console.log("Employee deleted:" + employeeId);
//       }
//       return console.log("Employee not found");
//     },
//     updateEmployee: function (employeeId, newEmployeeInfo) {
//       if (employeeId in employeeData) {
//         employeeData[employeeId] = newEmployeeInfo;
//         return console.log("Employee updated" + employeeId);
//       }
//       return console.log("Employee not found");
//     },
//     getAllEmployees: function () {
//       return employeeData;
//     },
//   };
// }

// const employeeDatabase = createEmployeeDatabase();

// const employeeId1 = "1";
// const employeeInfo1 = {
//   firstname: "salman",
//   lastname: "shaikh",
//   mobilenumber: 8128375125,
//   email: "salman@gmail.com",
//   salary: 20000,
//   address: {
//     roomno: "c1",
//     buildingNumber: 306,
//     area: "udhna",
//     pincode: 394210,
//     city: "surat",
//     state: "gujarat",
//   },
// };
// const employeeId2 = "2";
// const employeeInfo2 = {
//   firstname: "mayur",
//   lastname: "patel",
//   mobilenumber: 8128375125,
//   email: "salman@gmail.com",
//   salary: 20000,
//   address: {
//     roomno: "c1",
//     buildingNumber: 306,
//     area: "udhna",
//     pincode: 394210,
//     city: "surat",
//     state: "gujarat",
//   },
// };

//  employeeDatabase.addEmployee(employeeId1, employeeInfo1);
//  employeeDatabase.addEmployee(employeeId2, employeeInfo2);

// console.log("Before:", employeeDatabase.getAllEmployees());
//   employeeDatabase.deleteEmployee(employeeId1);
//  console.log("After deletion:", employeeDatabase.getAllEmployees());

// const updatedEmployeeInfo = { name: "mayur", email: "mayur@gmail.com" };
// employeeDatabase.updateEmployee("2", updatedEmployeeInfo);
//  console.log("After update:", employeeDatabase.getAllEmployees());

// 6. odd or even

// function oddOrEven(value){
//     return value%2===0?"Even":"Odd";
// }
// const a = oddOrEven(16);
// console.log(a);

// 7. middle character

// function middleCharacter(str) {
//   var length = str.length;
//   var splitStr = str.split("");
//   if (length % 2 === 0) {
//     return str[length / 2];
//   }
//   if (length % 2 !== 0) {
//     return str.substr(length/2,2);
//   }
// }

// const a = middleCharacter("vivek");
// console.log(a);

// 8. FizzBuzz

// function fizzBuzz(){
//     for (var i = 1; i <=100; i++) {
//         if(i%3==0){
//             if(i%5==0){
//                 console.log("FizzBuzz");
//             }
//             else{
//                console.log("Fizz");
//             }
//         }
//         else if(i%5==0){
//             console.log("Buzz");
//         }
//         else{
//             console.log(i);
//         }
//     }
// }

// fizzBuzz();

// 9. convert in camelCase

// const obj = { first_one: "first", second_two: "second", third_three: "third" };
// const arr = Object.keys(obj);
// function snakeToCamelArray(arr) {
//     return arr.map((str, index) => {
//       const words = str.split('_');
//       const camelCaseString = words.map((word, innerIndex) => {
//         if (innerIndex !== 0) {
//           return word.charAt(0).toUpperCase() + word.slice(1);
//         }
//         return word;
//       }).join('');

//       return camelCaseString;
//     });
//   }
//   const camelCaseArray = snakeToCamelArray(arr);
//   console.log(camelCaseArray);
// 10. privare counter

// function counter() {
//   let count = 0;
//   return {
//     increment: function () {
//       count++;
//     },
//     fetch: function () {
//       return count;
//     },
//   };
// }
// const c = counter();
// c.increment();
// c.increment();
// console.log(c.fetch());
