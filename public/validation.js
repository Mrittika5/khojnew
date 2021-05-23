
const password = document.getElementById("password")
const  confirm_password = document.getElementById("confirm_password");
const email=document.getElementById("email")

function validatePassword(){
  if(password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Passwords Don't Match");
  } else {
    confirm_password.setCustomValidity('');
  }
}
function validateEmail () {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if( re.test(email.value)){
        email.setCustomValidity('');
      } else {
        email.setCustomValidity('Please Enter a Valid Email Address');
      }

}


password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;
