function func(){
  let name=document.getElementById("name").value;
  if(name.length<6){
    alert("User name is less than 6 characters");
  }
let pass=document.getElementById("password").value;
let confirmpass=document.getElementById("confirmPassword").value;
if(pass.length<6){
  alert("password is less than 6 characters");
}
if(pass!=confirmpass){
  alert("Both passwords do not match");
}
}
