function calSalary(){
    let sal = document.getElementById("salaryId").value;
    let shift = document.getElementById("shiftId").value;
    if(sal > 8000){
         document.write("Salary too large");
    }else{
        if(sal < 0){
            document.write("Salary too small");
        }else if(shift < 0){
            document.write("Shift too small");
        }else{
        let shiftPercent = (shift)*2;
        let shiftPay = (sal/100)*shiftPercent;
        let salary = (sal/100)*50;
        
        let saving = salary+shiftPay;
            document.write(saving);
            }
        }
    }
    
        
    