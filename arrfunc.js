// function CalculateBMI(weight, height){
//     let BMI = weight/(Math.pow(height,2))
//     return BMI

// }
// console.log(CalculateBMI(20, 2))







let calculateBMI = (weight, height) =>weight/(Math.pow(height,2))
console.log(calculateBMI(20, 2))



function calculatetax(tax_percentage, salary){
            let tax = (tax_percentage/100)* salary
            return tax

        }
        console.log(calculatetax(5, 500000))

         function salaryfunc(time, rate, taxfunction){
         let salary = time * rate
         let taxpaid = taxfunction(30, salary)
         let netsal = salary - taxpaid




         console.log('salary calculate as per time: ' +salary)
         console.log('Tax paid on earned salary: ' +taxpaid)
         console.log('Net salary after taxation earned salary: ' +netsal)

    
    

        }
        salaryfunc(8, 5000, calculatetax)




