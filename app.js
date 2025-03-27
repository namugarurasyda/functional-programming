
        let acc_balance = 10000
        let acc_number = 210081

        function deposit(amount){
            acc_balance = acc_balance + amount
            console.log(` amount ${amount} has been deposited in your account and your newbalance is ${acc_balance} on this ${acc_number} account number `)

        }

        let withdraw = (amount)=>{
            if (acc_balance > amount) {
            acc_balance-= amount
            console.log(`Amount ${amount} has been deducted in your account number ${acc_number} and the updated balance is ${acc_balance}`)
            }
            else {
              console.log("there is an error, insufficient balance")
            }
        }