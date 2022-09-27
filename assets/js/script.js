let buttonsubmit = document.getElementById("button-button");
if(buttonsubmit){
    buttonsubmit.addEventListener('click', validateForm, false);
}

function validateForm(){

    let inputName = document.getElementById("fname");
    let inputDate = document.getElementById("fdate");
    let inputAddress = document.getElementById("faddress");
    let inputEmail = document.getElementById("femail"); 
    let inputDescription = document.getElementById("fdescription");

    if (inputName.value == null || inputName.value == "") {
        inputName.classList.add("invalid")
        alert("Name must be filled out")
        return false
    }

    if  (inputDate.value == null || inputDate.value == "") {
        inputDate.classList.add("invalid")
        alert("Date must be filled out")   
        return false    
    }

    if (inputAddress.value == null || inputAddress.value == "") {
        inputAddress.classList.add("invalid")
        alert("Address must be filled out")   
        return false    
    }

    if (inputEmail.value == null || inputEmail.value == "") {
        inputEmail.classList.add("invalid")
        alert("Email must be filled out")   
        return false    
    }

    if (inputDescription.value == null || inputDescription.value == "") {
        inputDescription.classList.add("invalid")
        alert("Description must be filled out")   
        return false    
    }    
        
}