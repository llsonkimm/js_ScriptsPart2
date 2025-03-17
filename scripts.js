// pass action as a function value
// function repeat(n, action){
//     for(let i = 0; i < n; i++){
//         action(i);
//     }
// }
// repeat(3, console.log);
// // creating a function value on the spot
// let labels = [];
// repeat (5, i=>{
//     labels.push('Unit ${i + 1}');
// });
// console.log(labels);

// we can have functions that create new functions
// function greaterThan(n){
//     return m => m > n;
// }
// let greaterThan10 = greaterThan(10);
// console.log(greaterThan10(11));



// functions that change other functions
// function noisy(f){
//     return(...args) => {
//         console.log("Calling with ", args);
//         let result = f(...args);
//         console.log("called with ", args, ", returned", result);
//         return result;
//     };
// }
// noisy(Math.min)(3,2,1);

// // functions that provide new types of control flow
// function unless(test, then){
//     if(!test) then();
// }
// function repeat(times, action) {
//     for (let i = 0; i < times; i++) {
//         action(i);
//     }
// }

// repeat(3, n => {
//     unless(n % 2 == 1, () => {
//         console.log(n, "is Even");
//     });
// });


// built-in array method, forEach, that provides something like a for/of loop
// ["A", "B"].forEach(l => console.log(l));

// JS Higher-Order Functions

// Filtering arrays
//  function filter(array, test){
//      let passed = [];
//      for (let element of array){
//          if (test(element)){
//              passed.push(element);
//          }
//      }
//      return passed;
//  }
 
//  console.log(filter(SCRIPTS, script => script.living));
 
 
//  Transforming with map

// function map(array, transform){
//     let mapped = [];
//     for(let element of array){
//         mapped.push(transform(element));
//     }
//     return mapped;
// }
// let rtlScripts = SCRIPTS.filters(s => s.direction == "rtl");
// console.log(map(rtlScripts, s => s.name));
 
 
 
 
//  higher-order operation pattern  called reduce (sometimes also called fold) that builds a value by repeatedly taking a single element from the array and combining it with the current value.

// function reduce(array, combine, start){
//     let current = start;
//     for (let element of array){
//         current = combine(current, element);
//     }
//     return current;
// }
// console.log(reduce([1,2,3,4], (a,b) => a + b, 0));
 
 
//  To use reduce (twice) to find the script with the most characters
// function characterCount(script){
//     return script.ranges.reduce((count, [from, to]) => {
//         return count + (to - from);
//     }, 0);
// }
//  console.log(SCRIPTS.reduce((a, b) => {
//      return characterCount(a) < characterCount(b) ? b : a;
//  }));

//  COMPOSABILITY

// (finding the biggest script) without higher-order functions

// let biggest = null;
// for (let script of SCRIPTS){
//     if (biggest == null || 
//     characterCount(biggest) < characterCount(script)) {
//         biggest = script;
//     }
// }
// console.log(biggest);


// code that finds the average year of origin for living and dead scripts in the dataset.

// function average(array){
//    return array.reduce((a, b) => a + b) / array.length;
// }

// console.log(Math.round(average(
//    SCRIPTS.filter(s => s.living).map(s => s.year))));
   
// console.log(Math.round(average(
//    SCRIPTS.filter(s => s.living).map(s => s.year))));

/* Use the reduce method in combination with the concat method to “flatten” an array of arrays into a single array that has all the elements of the original arrays.*/

// let arrays =[[1,2,3], [4,5], [6]];
// let flattened = arrays.reduce((accumulator, currentArray) => accumulator.concat(currentArray ), []);
// console.log(flattened);

// higher-order function loop that provides something like a for loop statement

// function loop(value, test, update, body){
//     for(let currentValue = value; test(currentValue); currentValue = update(currentValue)) {
//         body(currentValue);
//     }
// }
// loop(3, n => n > 0, n => n - 1, console.log);

/*Arrays also have an every method analogous to the some method. This method returns true when the given function returns true for every element in the array */

function everyLoop(array, test){
    for(let element of array) {
        if(!test(element)){
            return false;
        }
    }
    return true;
}

function everySome(array, test){
    return !array.some(element => !test(element));
}

console.log(everyLoop([1, 3, 5], n => n < 10)); 
console.log(everyLoop([2, 4, 16], n => n < 10));
console.log(everyLoop([], n => n < 10));