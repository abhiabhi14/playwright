//[] - array
//let info=["tetsleaf,2026,null"]
//index value starts from 0

// for of - assign old variable value to new variable

let newname=["riya","mon","abhi", true, 2024]

console.log(newname[1])
console.log(newname.length)

//add new value to array
newname[3]="sri"
console.log(newname)

//to add using push
newname.push("sai")
console.log(newname)
// remove using pop - removes last value
newname.pop()
console.log(newname)

//add using index which is not next index
newname[6]="mithra" //js - dyanamic typing - no error
console.log(newname)

console.log(newname.length) // index 0 to 6, length 7

console.log(newname[5]) //undefined

//unshift and shift
//unshift - add value at beginning index 0
newname.unshift("mentor")
console.log(newname)

//shift - remove value at beginning index 0
newname.shift()
console.log(newname)

//case for underfined
let a=[]
console.log(a.shift())

newname.sort()
console.log(newname)

//for of loop
for(let empName of newname){
    console.log(empName)
}
//for each 
newname.forEach((empName)=>{
    console.log(empName)
})