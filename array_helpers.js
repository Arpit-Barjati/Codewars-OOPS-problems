// This kata is designed to test your ability to extend the functionality of built-in classes. In this case, we want you to extend the built-in Array class with the following methods: square(), cube(), average(), sum(), even() and odd().

// Explanation:

// square() must return a copy of the array, containing all values squared
// cube() must return a copy of the array, containing all values cubed
// average() must return the average of all array values; on an empty array must return NaN (note: the empty array is not tested in Ruby!)
// sum() must return the sum of all array values
// even() must return an array of all even numbers
// odd() must return an array of all odd numbers
// Note: the original array must not be changed in any case!

// Array.prototype.square = function(){
//     let result = [];
//     for(let i=0;i<this.length;i++){
//       result.push(this[i] ** 2);
//     }
//     return result;
// }

// Array.prototype.cube = function(){
//     let result = [];
//     for(let i=0;i<this.length;i++){
//       result.push(this[i] ** 3);
//     }
//     return result;
// }

// Array.prototype.even = function(){
//     let result = [];
//     for(let i=0;i<this.length;i++){
//         if(this[i]%2==0){
//             result.push(this[i]);
//         }
//     }
//     return result;
// }

// Array.prototype.odd = function(){
//     let result = [];
//     for(let i=0;i<this.length;i++){
//         if(this[i]%2==1){
//             result.push(this[i]);
//         }
//     }
//     return result;
// }

// Array.prototype.sum = function(){
//     let sum = 0;
//     for(let i=0;i<this.length;i++){
//         sum += this[i];
//     }
//     return sum;
// }

// Array.prototype.average = function(){
//     return this.sum()/this.length;
// }
  
 
  
  

Array.prototype.square = function () {
    return this.map(function(n) { return n*n; });
}
Array.prototype.cube = function () {
    return this.map(function(n) { return n*n*n; });
}
Array.prototype.average = function () {
    return this.sum() / this.length;
}
Array.prototype.sum = function () {
    return this.reduce(function(a, b) { return a + b; }, 0);
}
Array.prototype.even = function () {
    return this.filter(function(item) { return item%2===0; });
}
Array.prototype.odd = function () {
    return this.filter(item => item%2!==0 );
}

const arr = [1,2,3,4,5];
console.log(arr.square());
console.log(arr.cube());
console.log(arr.average());
console.log(arr.sum());
console.log(arr.even());
console.log(arr.odd());