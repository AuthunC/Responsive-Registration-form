// const y=document.forms["form"];
// let text=" "
// for(let i=0;i<y.length;i++){
//     text =  text + y.elements[i].value + "<br>";
// }
// document.getElementById("demo").innerHTML=text;

function validateForm(){
    let x=document.forms["forms"]["fnames"].value;
    if (x == ""){
        alert("Fill all the required fields");
        return false;
    }
}
