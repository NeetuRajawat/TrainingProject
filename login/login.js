
function checkValidation(){
    let password = document.getElementById("passwordTxt").value;
    var errors = []
  
    if (password.length < 8) {
     errors.push("Password must be at least 8 characters")
    }
    if (password.search(/[A-Z]/) < 0) {
      errors.push("Password must contain at least one uppercase letter.")
    }
    if (password.search(/[0-9]/) < 0) {
      errors.push("Password must contain at least one digit.")
    }
    
      
    if (errors.length > 0) {
      document.write(errors.join("<br>"));
      return false;
    }
    return true;
  }