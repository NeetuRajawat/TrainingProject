
    function productDigit(){
        var num = document.getElementById("numId");
            if(num!= null){
                if(Math.sign(num) == -1 || num >32767){
                    document.write("Invalid Input");
                }else{
                    let product = 1;
                    while (num != 0)
                    {
                        product = product * (num % 10);
                        num = Math.floor(num / 10);
                    }
                        document.write(product);
                    }
             }else{
                 document.write("Please fill integer value");
            }
            }
    
    