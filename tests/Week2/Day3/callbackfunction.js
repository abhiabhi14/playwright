//Callback Function - A function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.
//order food, food gets prepared, food is served

//callback function- call one function inside another function


//order food,food tobe ready,eat the food
//3 function -> how many function need called
//call back -> call one function another function
//main function -> order food()-> 2,3

//callback or function name

function orderFood(callback){
    console.log("Food order")
    //food preparation time
    setTimeout(()=>{
        callback()
        //callback -> eatFood
    },4000)
}

function foodReady(callback){
    console.log("food is ready")
    callback() //calling eatfood
}

function eatFood(){
    console.log("eating food")
}

orderFood(eatFood)



