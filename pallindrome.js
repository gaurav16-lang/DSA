//  find the number given is pallindrome or not

const number = 324;
const number2 = 723;
const number3 = 7;

const number4 = 890098;

// const Ispallindrome = (number) =>{
//     let reverse  = 0;
//     let temp = number;

//     while(temp!==0){
//         reverse = reverse*10+ temp%10;
//         temp = Math.floor(temp /10);
//     }

//     console.log(reverse)
//     if(reverse === number){
//         return 1
//     }else{
//         return -1;
//     }
// }
// console.log(Ispallindrome(number));
// console.log(Ispallindrome(number2));
// console.log(Ispallindrome(number3));
// console.log(Ispallindrome(number4));

//  test1  = 321
//  test2  = 123321
//  test3 = 1

//

let reverse = 0;
let temp = 121;
while (temp != 0) {
  reverse = reverse * 10 + (temp % 10);
  temp = Math.floor(temp / 10);
}

console.log(reverse);
