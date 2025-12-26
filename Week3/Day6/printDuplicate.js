let num=[22,15,16,17,20,17,22]
//for loop - nested for loop
//1st for loop - take value i=22,15..
//2nd for loop - compare with other values
//if cond (i==j)
//print duplicate value

for(let i=0;i<num.length;i++){
    for (let j=i+1;j<num.length;j++){
        if(num[i]===num[j]){
            console.log("duplicate value is "+num[i])
        }       

    }
}