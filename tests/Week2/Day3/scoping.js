//var , let, const
//var - global and function scoped
//let and const - block scoped

var week1="JavaScript"

function test(){
    if(week1==="JavaScript"){
        console.log("Inside function "+week1)
        let val=45
        console.log ("Value is "+val)
         const a="test"
        console.log("Constant value "+a)
    }
}
 console.log("Outside function "+week1)
 //console.log ("Outside Value is "+val) //when executed it will throw error as val is block scoped
 //console.log("Constant value "+a) //when executed it will throw error as a is block scoped
 test()