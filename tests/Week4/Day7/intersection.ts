//let statusCode:number&String - will not work directly

//value of an intersection type must satisfy all constituent types
type a={
    empName:String
    empCode:number
}

type b={
    adminName:string
    adminCode:boolean
}
type c=a&b

let details:c={

empName:"Kumar",
empCode:1234,
adminName:"Monik",
adminCode:true
}

console.log(details)

//value? - optional value or parameter
//function(a:string,b?:number)

