// Example 1:
// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.
// Example 2:
//
// Input: s = "   fly me   to   the moon  "
// Output: 4
// Explanation: The last word is "moon" with length 4.
// Example 3:
//
// Input: s = "luffy is still joyboy"
// Output: 6
//     Explanation: The last word is "joyboy" with length 6.,]

// yechim
// let s = "    ASSALOMU ALAYKUM HURMATLI        BO'LAJAK DASTURCHILAR    "
//trim methodi chetdagi keraksiz probellarni olib tashlaydi\
//splkite methodi stringni massiv kurinishiga utqazib beradi ichidagi qiymati stringni orqsidagi
// probelga nisbatan massiv qiolib beradui
// const a = s.trim().split(' ')
// a.map((item, i) => {
//     if (i + 1 == a.length) {
//         console.log(`Oxirgi so'z uzunligi `,item.length)
//     }
// })


//Why do people say Javascript is a Dynamiz Language
//Nima uchun odamlar Javascriptni Dynamiz tili deb aytishadi
// var x = 0;
// x++;
// x = "Text1";
// x = true;

// Closures function
// function inc() {
//   var x = 0;
//   x++;
//   console.log(x);
// }

// function inc2() {
//   var y = 0;
//   function increment() {
//     y++;
//     console.log(y);
//   }

//   return {
//     increment,
//   };
// }

// inc();
// inc();

// var t = inc2();

// t.increment();
// t.increment();


// Block scope
// {
//     let a = 45
//     console.log(a);
// }

// console.log(a);

// for (let i = 0; i < a; i++) {

// }
// console.log(i);


// let var const
// var d = 1;
// let t = 3

// function a() {
//     console.log(d);
//     console.log(t);
// }


// let arr = [1, 2, 3, 34, 234, 124, 1, 3, 4, 5, 2, 12, 3, 2, 1, 34]
// let str = ["salom", "sal", "hello", "guruh", "qachon", "nimaga", "salom", "sal", "hello", "guruh", "qachon", "nimaga"]
// //result 1,2,3,4,5,12,34,124,234
// //
// let sortArr = str.sort()
// let newAr = []
// for (let i = 0; i < sortArr.length; i++) {
//     if (sortArr[i] === sortArr[i + 1]) {
//     } else {
//         newAr.push(sortArr[i])
//     }
// }
// console.log(newAr)


/**
 * @param {string} s
 * @return {number}
 */
// const romanToInt = function (s) {
//     const MapToConvertRomanToInt = {
//         I: 1,
//         V: 5,
//         X: 10,
//         L: 50,
//         C: 100,
//         D: 500,
//         M: 1000
//     };
//
//     let output = 0;
//     for (let i = 0; i < s.length; i++) {
//         const currentValue = MapToConvertRomanToInt[s[i]];
//         const nextValue = MapToConvertRomanToInt[s[i + 1]];
//         if (nextValue && currentValue < nextValue) {
//             output -= currentValue;
//         } else {
//             output += currentValue;
//             console.log("output 2", output)
//         }
//     }
//
//     return output;
// };
// console.log(romanToInt("XIV"))


/**
 * @param {number[]} digits
 * @return {number[]}
 */
// let plusOne = function (digits) {
//     const num = BigInt(digits.join('')) + 1n;
//     const numToString = num.toString();

//     let arr = [];

//     for (let i = 0; i < numToString.length; i++) {
//         const num = parseInt(numToString[i]);
//         arr.push(num);
//     }
//     return arr;
// };

// plusOne([1, 2, 4])


/**
 * @param {string} s
 * @return {boolean}
 */
let isValid = function(s) {
   console.log(s.includes("{}"))
};

isValid("(){)}")



