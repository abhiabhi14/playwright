// for - runs for fixed no of times
// for to be used when we know how many times it has to run
// has 3 parts - intialization(where it needs to start), condition(loop runs until that condition is met), increment/update(increment/decrement on each run)
//print numbers 1 to 5

for (let i=1;i<=5;i++){
    console.log(i)
}

// while - condition based
// used when we dont know the no of times it has to run

let count =1
while (count<=5){
    console.log(count)
    i++ // increment count
}

// do while - run at least once even if condition fails
let n=10
do {
    console.log(n)
    n++;
}
while(n<=5)