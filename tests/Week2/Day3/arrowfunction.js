//2.Arrow function - compact alternative to a traditional function expression
// does not have its own 'this' context
// cannot be used as constructor
// cannot use 'arguments' object

//syntax
// const variable=(input)=>{function body}
//arrow function ()=>

    //use block only if console.log or return statement is more than one
    let arrow=(compName)=>{
        return "Company Name is "+ compName
    }
     console.log(arrow("SOTI"))

    const add=(a,b)=>(a+b)
    console.log(add(5,6))

    const data=(stdName,stdID)=>stdName +" "+ stdID
    console.log(data("Tom",101))