const inputBar = document.querySelectorAll(".input_f");
const form =  document.querySelector(".form");



/* Hide error message*/
function hideErrorMessage(elem){

    if(elem.value === '')
          {
            elem.nextElementSibling.classList.add("visible");
            elem.parentElement.classList.add("active");

          }
          else if (elem.value !== '' && elem.getAttribute("type") === "email") {
                return validateEmail(elem.value, elem);         
        }  
     else if(elem.nextElementSibling.classList.contains("visible") && elem.parentElement.classList.contains("active")){
        elem.nextElementSibling.classList.remove("visible");
        elem.parentElement.classList.remove("active");

    }
}



/* check validation on button click */
function checkValidation(event){
    event.preventDefault();
    let emptyCheck = 0;
    const numOfInputs = inputBar.length;
    let isEmailValid;

 Array.from(inputBar).forEach(element => {
    if(element.value === ''){
          element.nextElementSibling.classList.add("visible");
          element.parentElement.classList.add("active");
    }
  else if (element.value !== '' && element.getAttribute("type") === "email") {
    isEmailValid = validateEmail(element.value, element);
  }
});

inputBar.forEach(input => {
    if (input.value !== '') {
        emptyCheck++;
    }
})

//if all inputs are filled and email is valid form is submiting.
if (emptyCheck === numOfInputs && isEmailValid) { 
    console.log("form submitted");
    form.submit();
}
}



function checkEmail(email) {
    const regexEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regexEmail.test(email);
   }


/* validate email address */
   function validateEmail(emailVal, curElement){
    if(!checkEmail(emailVal)){
        curElement.nextElementSibling.innerHTML = "Please enter valid email address";
        curElement.nextElementSibling.classList.add("visible");
        curElement.parentElement.classList.add("active");
        return false;
}
else{
    curElement.nextElementSibling.classList.remove("visible");
    curElement.parentElement.classList.remove("active");
    return true;
}
   }