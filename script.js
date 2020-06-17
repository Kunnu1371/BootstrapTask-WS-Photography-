function validate(){
    var name = document.myform.name.value;
    var phone = document.myform.phone.value;
    var email = document.myform.email.value;
    var duration = document.myform.duration.value;
    if(name==null || name==""){
        alert("Name Can't be empty.");
        return false;
    }
    else if(phone.length!=10){
        alert("Please enter a valid phone no.");
        return false;
    }
    else if(email==null || email==""){
        alert("Please enter email.");
        return false;
    }
    else if(duration==null || duration==""){
        alert("Please enter desired month and year of Session.");
        return false;
    }
}
f = () =>{
  alert("Please click on session enquiry to fill the form.")
}