// Tambahkan kode JavaScript kalian di file ini

function handleGetFormData(){
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const city = document.getElementById("city").value;
    const zipCode = document.getElementById("zip-code").value;
    const status = document.getElementById("status").checked;

   const dataForm = {
        name,
        email,
        city,
        zipCode,
        status
    };
    return dataForm;
}

function isNumber(string){
    if(isNaN(string)){
        return false;
    } else{
        return true;
    }
}

function checkboxIsChecked(){
    const check = document.getElementById("status").checked;
    if(check){
        return true;
    } else{
        return false
    }
}

function validateFormData(objek) {
    if (objek.name && objek.city && objek.email && objek.zipCode == null || checkboxIsChecked() == false || isNumber(objek.zipCode) == false) {
        return false;
    } else {
        return true;
    }
};

function submit(event){
   
   const warning = document.querySelector("#warning");

    if(validateFormData(handleGetFormData()) == false){
        warning.innerText = "Periksa form anda sekali lagi"; 
        warning.style.color = "red"; 

        event.preventDefault();
    } else if(validateFormData(handleGetFormData()) == true){
        warning.innerText = "";
    }
    
}

const form =  document.querySelector("#contact");
form.addEventListener("submit", submit);