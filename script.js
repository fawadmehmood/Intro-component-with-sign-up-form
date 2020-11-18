const inputBar = document.querySelectorAll(".input_f")



/* Hide error message*/
function hideErrorMessage(elem){

    if(elem.value === '')
          {
            elem.nextElementSibling.classList.add("visible");
            elem.parentElement.classList.add("active");

          }
          else if (elem.value !== '' && elem.getAttribute("type") === "email") {
                 validateEmail(elem.value, elem);         
        }  
   else{
      if(elem.nextElementSibling.classList.contains("visible") && elem.parentElement.classList.contains("active")){
        elem.nextElementSibling.classList.remove("visible");
        elem.parentElement.classList.remove("active");

    }
}
}



/* check validation on button click */
function checkValidation(){
Array.from(inputBar).forEach(element => {
    if(element.value === '')
    {
          element.nextElementSibling.classList.add("visible");
          element.parentElement.classList.add("active");
    }
   else if (element.value !== '' && element.getAttribute("type") === "email") {
             validateEmail(element.value, element);
    }

});
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
}
else{
    curElement.nextElementSibling.classList.remove("visible");
    curElement.parentElement.classList.remove("active");
}
   }