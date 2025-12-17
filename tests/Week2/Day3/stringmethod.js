//replace - replace specifified value with another value in a string

const { parse } = require("path");

// can be a word or letter
let text = "Please visit Microsoft!";
let newText = text.replace("Microsoft", "W3Schools");
console.log(newText); // Please visit W3Schools!

let value="Java Script"
let newvalue=value.replace("a","A")
console.log(newvalue) //JAva Script - only first occurrence is replaced

// replace all occurrences using regular expression with g flag
let newvalue1=value.replaceAll("a","A")
console.log(newvalue1) //JAvA Script - all occurrences are replaced

//retain num
let data="Welcome @ 2026"
let newdata=data.replaceAll(/[^0-9]/g,"")//values mentioned after ^ cap symbol will be retained
console.log(newdata) //2026

let newdata1=data.replaceAll(/[^a-zA-Z @]/g,"")//values mentioned after ^ cap symbol will be retained
console.log(newdata1)

//sub string - extract parts of a string between two specified indices
//print values based on index - accepts start and end index - positive values only
let str="Hello World"
let sub=str.substring(0,5) // 0 to 4 index
console.log(sub) // Hello
str.substring(2) // from index 2 to end
console.log(str.substring(2)) // llo World
console.log(str.substring(7,10)) //orl 
console.log(str.substring(2,15))//- if end index exceeds length, it will consider upto length

// slice - extract parts of a string between two specified indices
// can accept negative values also, +ve also
let string="Automation"
console.log(string.slice(0,4)) //Auto
console.log(string.slice(-4)) //tion - negative index starts from end - 10-4=6 index
console.log(string.slice(2,-3)) //tomat - starts from index 2 to length-3   
console.log(string.slice(-7,-2)) //omati - starts from length-7 to length-2

//parseInt() - convert string to integer
let price="8908"
let num=parseInt(price)
console.log(typeof num +num)