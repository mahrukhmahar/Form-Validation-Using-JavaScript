//CITY COUNTRY LOGIC
function checking(){
alert("Opening");
}

document.getElementById('country').addEventListener('change',function(){
   var selectedcountry=this.value;
   var citydropdown=document.getElementById('city');
   citydropdown.innerHTML="";

   if (selectedcountry === 'pak') {
    citydropdown.innerHTML = `
        <option value="hyd">Hyderabad</option>
        <option value="jamshoro">Jamshoro</option>
        <option value="lahore">Lahore</option>
        <option value="islamabad">Islamabad</option>
        <option value="karachi">Karachi</option>
    ;`}
   else if(selectedcountry==="india"){
    citydropdown.innerHTML = `
    <option value="delhi">Delhi</option>
    <option value="mumbai">Mumbai</option>
    <option value="chennai">Chennai</option>
    <option value="kolkata">Kolkata</option>
`      ;
   }
   else if (selectedcountry === 'bangladesh') {
    citydropdown.innerHTML =`
        <option value="dhaka">Dhaka</option>
        <option value="chittagong">Chittagong</option>
        <option value="sylhet">Sylhet</option>
        `;
} else if (selectedcountry === 'china') {
    citydropdown.innerHTML = `
        <option value="beijing">Beijing</option>
        <option value="shanghai">Shanghai</option>
        <option value="guangzhou">Guangzhou</option>
    `;
}

else if (selectedcountry === 'srilanka') {
    citydropdown.innerHTML = `
        <option value="colombo">Colombo</option>
        <option value="kandy">Kandy</option>
        <option value="galle">Galle</option>
    `;
}
});


//validation check

function validateForm(){
    var fname=document.getElementById("Fname").value;
    var lname=document.getElementById("Lname").value;
    var Uemail=document.getElementById("email").value;
    var password=document.getElementById("password").value;
    var cpassword=document.getElementById("Cpassword").value;

    var isValid = true;
    if(!checkFname()&& !checkLname()){
        console.log("Passwords don't match. Returning false...");
        alert("Please fix the errors");
        isValid=false;
      }
     if(!confirmp()) {
        alert("Password doesn't Match")
        isValid=false;
     }
   

    if(fname.length==0){
          
     document.getElementById("FnameC").innerHTML="<br>This field is required";
     isValid=false;
        }else{
            document.getElementById("FnameC").innerHTML=""
        }
      

        if(lname.length==0){
document.getElementById("LnameC").innerHTML="<br>This field is required";
isValid=false;

        }else{
            document.getElementById("LnameC").innerHTML=""
        }

        if(Uemail.length==0){
            document.getElementById("emailC").innerHTML="<br>This field is required";
            isValid=false;

        }else{
            document.getElementById("emailC").innerHTML=""
    }
  
    //genderCheck
    var genderSelected = false;
    var genders = document.getElementsByName("gender");
    for (var i = 0; i < genders.length; i++) {
        if (genders[i].checked) {
            genderSelected = true;
            break;
        }
    }
    if (!genderSelected) {
        document.getElementById("genderC").textContent = "Please select a gender";
        isValid = false;
    } else {
        document.getElementById("genderC").textContent = "";
    }



    if(password.length<6){
            document.getElementById("PasswordC").innerHTML="<br>password must be at least 6 character ";
            isValid=false;

        }else{
            document.getElementById("PasswordC").innerHTML=""
    }

    if(cpassword.length==0){
            document.getElementById("confirmC").innerHTML="<br>confirm password ";
            isValid=false;

        }else{
            document.getElementById("confirmC").innerHTML=""
    }  
    
    if(isValid){
    alert("Form Submitted Successfully");
    return isValid;
    }
    
}


// firstname lastname can not be numbers
function checkFname(){
    var fname=document.getElementById("Fname").value;
  
    

    if(containsNumber(fname)){
        document.getElementById("FnameC").innerHTML="<br>First Name Should not contain numbers";
        return false;
    }
    else{
        document.getElementById("FnameC").innerHTML="";
        return true;
    }

   

}
//lastname
function checkLname(){
    var lname=document.getElementById("Lname").value;
if(containsNumber(lname)){
    document.getElementById("LnameC").innerHTML="<br>last Name Should not contain numbers";
    return false;
}
else{
    document.getElementById("LnameC").innerHTML="";
    return true;
}
}

function containsNumber(input) {
    return /\d/.test(input);
}

//password should be equal to confirm password

function confirmp(){

    var password=document.getElementById("password").value;
    var cpassword=document.getElementById("Cpassword").value;
     if(password!==cpassword){
        document.getElementById("confirmC").innerHTML="<br>Password doesn't Match";
        return false;

     }else{
        document.getElementById("confirmC").innerText="";
        return true;
     }
}

function validateEmail(email) {
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var check=emailPattern.test(String(email).toLowerCase());
    if(!check){
        document.getElementById("emailC").innerHTML="<br>Input valid Email e.g. mahrukh@gmail.com";

    }
    else{
        document.getElementById("emailC").innerHTML="";
    }

  }

