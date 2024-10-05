// console.log(a);
// var a = 10;
// function foo() {
// console.log(a);
// var a = 20;
// }
// foo();
// console.log(a);


/* 1. line no 1 :  Output : undefined 
 Reason : The variable a is declared (due to hoisting), but it has not been assigned a value yet at the time of the first console.log(a).

 line no 4: output : undefined

 reason: The variable a is declared within the function foo() due to hoisting, but it has not been assigned a value yet at the time of console.log(a). Therefore, the output is undefined..

 line no 8 : output :10

 reason :The variable a declared globally on line 2 has been assigned the value 10. The function foo() has its own local a that does not affect the global a. So, when console.log(a) is called on line 8, it accesses the global a, which is still 10.

*/


// for (var i = 0; i < 5; i++) {
//     setTimeout(function() {
//       console.log(i);
//     }, 1000);
//   }



/* Reason : Variables declared with var have function scope, not block scope. This means that the variable i is shared across all iterations of the loop, not unique to each iteration. 

to clear this error just change the var to let*/


// console.log('Start');
// setTimeout(() => {
// console.log('Middle');
// }, 0);
// console.log('End')

/* Reason :"JavaScript is synchronous, executing code line by line. In this code, we can change its behavior to allow asynchronous execution using the setTimeout function. As a result, the 'Middle' message is printed only after 'End' because the setTimeout schedules the callback to run after the synchronous code has finished executing.*/


// let arr = [1, 2, 3];
// arr[10] = 5;
// console.log(arr.length);
// console.log(arr)

/* Reason: The length is 11 because you assigned a value at index 10, and JavaScript counts from index 0 to 10 (which is 11 total).

in the Array The output shows [1, 2, 3, <7 empty items>, 5] because there are empty spots for indices 3 to 9 since you didn't assign any values there.*/


// let a = { foo: 'bar' };
// let b = { foo: 'bar' };
// console.log(a == b);
// console.log(a === b);

// /*compare to different obj */

// function areObjectsEqual(obj1, obj2) {
//     return JSON.stringify(obj1) === JSON.stringify(obj2);
// }

// console.log(areObjectsEqual(a, b));

/* Reason : 1. The == operator checks if the two variables reference the same object. Here, a and b are two different objects in memory, so they are not the same.

2.The === operator also checks for strict equality, meaning both the value and the reference must be the same. Since a and b are different objects, the result is false.*/


// console.log([] + []);  
// console.log([] + {});    
// console.log({} + []); 

/*Reason for the first : When you add two empty arrays together, JavaScript converts them to strings. Since both arrays are empty, the result is an empty string.

Reason for the second:  The empty array is converted to an empty string (""), and the empty object is converted to the string "[object Object]". When you concatenate them, you get "" + "[object Object]", which results in "[object Object]"

Reason for the Third : Here, the empty object {} is converted to "[object Object]", and the empty array [] is converted to "". So, it effectively evaluates as "[object Object]" + "", which remains "[object Object]"

*/


// foo(); 
// var foo = function() {
//     console.log('Function expression');
// };

// /* Reason : You get an error because foo is not yet a function when you try to call it; it is undefined at that point.*/


// const person = {
//     name: 'Alice',
//     age: 25,
//     address: {
//     city: 'Wonderland'
//     }
//     };
//     const { name, address: { city }, country = 'Unknown' } = person;
//     console.log(name, city, country);

/*The output is Alice Wonderland Unknown because the code successfully extracts name and city, and country defaults to 'Unknown' since it's not present in person*/


// const promise = new Promise((resolve, reject) => {
//     console.log('Promise started');
//     resolve('Success');
// });
// promise.then(res => {
//     console.log(res);
// });
// console.log('Promise created');


/*  The output is Promise started, Promise created, and Success because the promise constructor logs "Promise started" immediately, then registers the resolve callback, continues executing and logs "Promise created", and finally executes the then callback, logging "Success" after the current execution context is complete*/


(function() {
    var x = 10;
    (function() {
    console.log(x);
    var x = 20;
    console.log(x);
    })();
    })();

/*The output is undefined followed by 20 because the inner variable x is hoisted, meaning it is declared at the top of the inner function but not yet assigned a value when it is first logged. Therefore, the first console.log(x) outputs undefined, 

and after assigning 20 to x, the second console.log(x) outputs 20

*/