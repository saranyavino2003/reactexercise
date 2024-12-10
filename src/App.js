import logo from './logo.svg';
import './App.css';
// import Arrow from './Arrow';
import Task from './Task';

function App() {


    // for(let i=0; i<=10; i++){
    //     console.log("i",i)
    // }

//    for(let i=0; i<=50; i++){
//             if(i%4==0){
//                 console.log(i);
//             }
//         }


// const divided=[]
// for( let i=1; i<=100; i++){
//     if(i%3!=0){
//       divided.push(i); 
        
//     }
// }
// console.log(divided);


// function isPalindrome(str) {
//   str = str.replace(/\s+/g, '').toLowerCase();
//   const reversedStr = str.split('').reverse().join('');
//   return str === reversedStr;
// }
// const inputString = prompt("Enter a string to check if it's a palindrome:");

// if (isPalindrome(inputString)) {
//   console.log(`"${inputString}" is a palindrome!`);
// } else {
//   console.log(`"${inputString}" is not a palindrome.`);     ////////chatgpt
// }



// function isBalanced(str) {
//   let stack = [];
//   for (let i = 0; i < str.length; i++) {
//       let char = str[i];
//       if (char === '(') {
//           stack.push(char);
//       }
//       else if (char === ')') {
//           if (stack.length === 0) {                             //balanced bracket
//               return 0; 
//           }
//           stack.pop();
//       }
//   }
//   return stack.length === 0 ? 1 : 0;
// }
// const inputString = prompt("Enter a string of parentheses to check if they are balanced:");

// const result = isBalanced(inputString);
// console.log(result);                                          ////////chatgpt


// function Palindrome(str) {
// let value = "";
// for (let i = str.length - 1; i >= 0; i--) {
//     value += str[i];
// }
// if (value == str) {
//     return true
// } else {
//     return false;
// }
// }
// let str1 = "amma";
// console.log(Palindrome(str1));

// let a= "saran";
// for( let i=0; i>a.length; i--){
// }
// console.log(a);

// function reverseString(str) {
//     return str.split('').reverse().join('');
//   }
  
//   // Example usage:
//   const input = prompt("Enter a string to reverse:");
//   const reversed = reverseString(input);
//   console.log("Reversed string:", reversed);
// }


// function string(str){
// }
//   let a = "saran";
// for( let i=0; i>a.length; i--){
// }
// const reversed = string();
// console.log("str:", reversed);


// function triangle(rows) {
//   let num = 1; 
//   for (let i=1; i<=rows; i++) {
//       let row = '';
//       for (let j=1; j<=i; j++) {
//           row += num + ' ';
//           num++;  
//       }
//       console.log(row);
//   }
// }
// triangle(6);



// function array(numbers) {
//   let largest = -Infinity;
//   let secondLargest = -Infinity; 
//   for (let i = 0; i < numbers.length; i++) {
//       if (numbers[i] > largest) {
//           secondLargest = largest;
//           largest = numbers[i];
//       } else if (numbers[i] > secondLargest && numbers[i] !== largest) {
//           secondLargest = numbers[i];
//       }
//   }
//   return secondLargest === -Infinity ? 'No second largest number' : secondLargest;
// }
// let n = 5;
// let numbers = [10, 15, 17, 19, 24];
// console.log("Second largest number:", array(numbers));


function String(s) {
  let check = [];
  for (let i=0; i< s.length; i++) {
      check.push(s[i]);
  }
  let reversed = '';  
  while (check.length > 0) {
      reversed += check.pop();
  }
  return reversed;
}
let s = "i am saranya";
console.log(String(s));              //reverseString




  return (
    
     <>
{/* <Arrow/> */}
{/* <Task/> */}
{/* <Task2/> */}


     </>
  
  );
}

export default App;

