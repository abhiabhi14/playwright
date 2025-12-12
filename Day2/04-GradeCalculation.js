let marks=50
function gradeCalculation(){

    switch (true){
    
        case (marks> 85&& marks<=100):
            console.log("Grade A") 
            break
        case (marks>60&& marks<=85):
            console.log("Grade B")
            break   
              case (marks>50&& marks<=60):
            console.log("Grade B")
            break  
            default:
                console.log("Grade C")
                break
    }
}
gradeCalculation()