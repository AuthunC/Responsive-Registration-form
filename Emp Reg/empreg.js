function validateForm(){
    let x=document.forms["forms"]["fnames"].value;
    if (x == ""){
        alert("Fill all the required fields");
        return false;
    }
}
