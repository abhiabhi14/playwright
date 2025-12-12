//string literal
let comp="SOTI"
//string object
let comp1=new String("SOTI Inc")

//find length of string
console.log(comp.length)
console.log(comp1.length)

//print the characters based on index
    console.log("char at method: " +comp.charAt(2))

    // primt index based on character
    let data="playwright"
    console.log(data.indexOf("a"))
   console.log(data.lastIndexOf("t"))

   // to upper and lowecase
let cc="playWRIGHT"
console.log(cc.toLowerCase())
console.log(cc.toUpperCase())

// split
let value ="Testing is in progress"
console.log(value.split(" "))
// use for loop to print values in new lines
let sp=value.split(" ")
for (let i=0;i<sp.length;i++)
console.log(sp[i])

// print string in reverse
let browser="chrome"
let reverse=""
for (let i=browser.length;i>=0;i--){
    reverse=reverse+browser.charAt(i)
    console.log(browser.charAt(i)) // print each letter in reverse order
    //reverse+=browser.charAt(i)
   // console.log(reverse)// if it is within loop, will print each time
}
console.log(reverse) // print entire string in reverse

// revrese string using 
let web="testing"
let rev = web.split("").reverse().join()
console.log(rev)

// concat strings
let first="Tamil"
let last="Nadu"
console.log(first.concat(last))

//strict equality(===) -> compare value and memory(type) address -> no type conversion
console.log("5"===5) //output will be false
console.log(7===7) //output will be true
//loose equality(==) -> try to compare both value to common type and compare 
"5"==5 // string converted to number - output will be true
console.log("5"==5)


    