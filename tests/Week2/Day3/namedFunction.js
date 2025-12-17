/*Function - Function is a reusable block of code that performs a specific task. There are different types of functions in JavaScript:
1. Named function
2. Arrow function
3. callback function*/

//1. Named function - function with a name
function add(){//add- function name
    console.log(5+8)
}
add() // function call

//function with parameters
function sum(a,b){  //a,b- parameters
    console.log(a+b)
}
sum(10,20) //10,20- giving arguments while calling function

//function with return type
function multiply(x,y){ //x,y- parameters
    return x*y  // return keyword to return value from function
}
console.log(multiply(5,6)) // function call within console log to print return value