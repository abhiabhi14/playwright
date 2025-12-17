//switch - used when multiple cases
// break prevents from execution continuing to next case
// will not check all cases/conditions - will directly go to that condition

let browser='Chrome'
switch(browser){
    
    case 'Chrome':
    console.log("Browser is Chrome")
    break // used to exit from execution when logic is reached
    //...
   // ...
    case 'Edge':
    console.log("Browser is Edge")
    break

    default:
    console.log("No browser")
    break
}


// switch case based on key and var
// key >variable name=browser
//value>case value='Chrome'