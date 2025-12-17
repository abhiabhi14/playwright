// var - reassign value and redeclare

//reassign value - same variable, but new value assigned not declared again
var username='abhi'
username=true //string changed to boolean
username=123 //boolean changed to number
 username='abhi1'//new value assigned
console.log(username)
console.log(typeof username) 
//on hover u will see datatype as string which is initially given, but assigned new value will get updated while compiling(interpreter)
//typical use case: changed in expected result or variation in output

//redeclaration - same variable, but new value can be declared - which is a disadvantage, so it should not be used
var count=10
var count=true
console.log(count)

//After 2015 - ES6 - let and const
//let - reassign value allowed, redeclare not allowed
let batchcount=12
batchcount=15 // 12 changed to 15
batchcount='full' // 15 changed to full
//batchcount=1223456765434567876543n 
// let batchcount=16 - redeclare not allowed
console.log(batchcount)

//const - reassign value not allowed, redeclare not allowed
const pi=3.14
//pi=3.55
//console.log(pi) // will throw error only during run time(while running), no compile time error(while writing code)

/*ClassRoom 2:
var num-> 45
//re-assignment
//re-declaration
let empname -> "testing"
//re-assignment
//re-declaration
const final=34
//re-assignment
//re-declaration*/

var num=45
num='abc'//re-assignment
console.log(num)
var num=47//redeclare
console.log(num)

let empname="testing"
empname='test'//re-assignment
console.log(empname)
//let empname='testa'//re-declare not allowed

const final=34
//final=35//re-assignment not allowed
console.log(final)
//const final=36//re-declare not allowed
console.log(final)