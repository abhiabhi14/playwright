const { run } = require("node:test")

let browsername='Chrome'
function launchBrowser(){
if (browsername==='Chrome'){
    console.log("Browser is Chrome")
}
else if (browsername==='Firefox'){
    console.log("Browser is Firefox")   
}
   
}
launchBrowser()

let testtype='Regression'
function runtests(){
    switch (testtype){
        case 'Smoke':
        console.log("Running Smoke tests")
        break       
        case 'Regression':
        console.log("Running Regression tests")
        break   
        default:
            console.log("Running Smoke tests")
    break
    }

}
runtests()