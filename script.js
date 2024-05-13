const form=document.querySelector("#form");

form.addEventListener("submit",function(e){
e.preventDefault();
checkForm();
})


function checkForm(){
    
    const userName=document.querySelector("#userName").value;
    const email=document.querySelector("#email").value;
    const password=document.querySelector("#password").value;
    const confirmPassword=document.querySelector("#confirmPassword").value;
    
    const userNameError=document.querySelector("#userNameError");
    const emailError=document.querySelector("#emailError");
    const passwordError=document.querySelector("#passwordError");
    const confirmPasswordError=document.querySelector("#confirmPasswordError");

userNameError.textContent= !userName ? "please enter a userName" : "";
emailError.textContent=!email ? "Please enter an email" : "" ;
passwordError.textContent=!password ? "Please enter password" : "" ;
confirmPasswordError.textContent=password !== confirmPassword ? "Password is not matched" : "" ;

if(userName && email && password && confirmPassword && password===confirmPassword){
    console.log("signUp")
    alert("signUp Successful");
    form.reset();
}
}