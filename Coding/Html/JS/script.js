let errorMessage = document.getElementById('error-message');

function validate(event){
    event.preventDefault();
    let nama = document.getElementById('input-name');
    let number = document.getElementById('input-number');
    let email = document.getElementById('input-email');
    let indate = document.getElementById('input-indate');
    let outdate = document.getElementById('input-outdate');
    let passanger = document.getElementById('input-passanger');
    let type = document.getElementById('input-type');
    let method = document.getElementById('input-method');
    let regist = document.getElementById('regist');


    if(nama.value.length < 6){
        errorMessage.innerHTML = "Name Min 6 Characters";
        alert("Name Min 6 Characters");
    }else if(number.value.length < 1 || number.value.length > 13){
        errorMessage.innerHTML = "Please Input valid number";
        alert("Please Input valid number");
    }else if(!email.value.endsWith("@gmail.com")){
        errorMessage.innerHTML = "Email must end with @gmail.com";
        alert("Email must end with @gmail.com");
    }else if(!indate.value){
        errorMessage.innerHTML = "Please Pick Check In Date";
        alert("Please Pick Check In Date");
    }else if(!outdate.value){
        errorMessage.innerHTML = "Please Pick Check Out Date";
        alert("Please Pick Check Out Date");
    }else if(passanger.value.length < 1){
        errorMessage.innerHTML = "Enter Passanger at least 1 person";
        alert("Enter Passanger at least 1 person");
    }else if(type.value == ""){
        errorMessage.innerHTML = "Please Pick Room Type";
        alert("Please Pick Room Type");
    }else if(method.value == ""){
        errorMessage.innerHTML = "Please Pick Payment Method";
        alert("Please Pick Payment Method");
    }else{
        errorMessage.innerHTML = "Success";
        alert("Success");
        regist.submit();
    }
}