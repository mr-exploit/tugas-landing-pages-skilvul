// Tambahkan kode JavaScript kalian di file ini

function handleGetFormData(){
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const city = document.getElementById("city").value;
    const zipCode = document.getElementById("zip-code").value;
    const status = document.getElementById("status").checked;

   const dataForm = {
        name,
        city,
        email,
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
    if (objek.name && objek.city && objek.email && objek.zipCode == null || !checkboxIsChecked() || !isNumber(objek.zipCode)) {
        return false;
    } else{
        return true;
    }
};

function submit(){
    const warning = document.getElementById('warning');

    if(!validateFormData(handleGetFormData())){
        warning.innerHTML = "Periksa form anda sekali lagi";
    } else{
        warning.innerHTML = ""
    }
}

addEventListener("submit", submit());