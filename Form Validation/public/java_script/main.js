// let formValidation = {
  
//   username,
//   email,
//   phone,
//   password,
//   form
  
// };
// console.log(formValidation);
function checkErrorsBlock(){
  
  let errors = document.querySelectorAll('.username-error, .email-error, .phone-error, .password-error');

  for(let i = 0; i < errors.length; i++){
  
    errors[i].style.display = 'none';
  
  }
  
}
checkErrorsBlock();

let username = document.querySelector('#username');
let email = document.querySelector('#email');
let phone = document.querySelector('#phone');
let password = document.querySelector('#password');
let form = document.querySelector('.form-validation');

let isMouseHover = false;
form.addEventListener('mouseover',function(){
  
  isMouseHover = true;
  username.addEventListener('keyup',usernameValidation,false);
  email.addEventListener('keyup',emailValidation,false);
  phone.addEventListener('keyup',phoneValidation,false);
  password.addEventListener('keyup',passwordValidation,false);
  
},false);
form.addEventListener('mouseleave',function(){
  
  isMouseHover = false;
  username.removeEventListener('keyup',usernameValidation,true);
  email.removeEventListener('keyup',emailValidation,true);
  phone.removeEventListener('keyup',phoneValidation,true);
  password.removeEventListener('keyup',usernameValidation,true);
  
  let errors = document.querySelectorAll('.username-error, .email-error, .phone-error, .password-error');
  
  for(let i = 0; i < errors.length; i++){
    errors[i].style.display = 'none';
  }
  
},false);
function usernameValidation(){
  
  let minLength = 3;
  let username = document.querySelector('#username');
  let pregPattern = /^[a-zA-Z0-9]+(\+|\-|\_|\&|\%|\$|\@|\!|\.|\=)?[a-zA-Z0-9]+(\+|\-|\_|\&|\%|\$|\@|\!|\.|\=)?[a-zA-Z0-9]+(\+|\-|\_|\&|\%|\$|\@|\!|\.|\=)?$/g;
  
  const regex = new RegExp(pregPattern);
  
  let usernameError = document.querySelector('.username-error');
  let btn = document.querySelector('#submit');
    
  if(username.value == '' || username.value.length < minLength){
    
    usernameError.style.display = 'block';
    usernameError.innerHTML = 'Username cannot be empty and cannot be less than 3 characters length';
    btn.setAttribute('disabled','true');
      
  }else if(username.value.length > minLength || username.value.length == 3){
      
    if(username.value.match(regex)){
  
      usernameError.style.display = 'none';
      btn.removeAttribute('disabled');
        
    }else if(regex.test(username.value) == false){
        
      usernameError.style.display = 'block';
      usernameError.innerHTML = 'Username is not correct, please try again exclude not necessary characters';
      btn.setAttribute('disabled','true');
        
    }
      
  }
}
usernameValidation();

function emailValidation(){
  
  let minLength = 3;
  let emailError = document.querySelector('.email-error');
  let btn = document.querySelector('#submit');
  let pregPattern = /^[a-zA-Z0-9]+(\-|\_)?[a-zA-Z0-9]+(\-|\_)?[a-zA-Z0-9]+(@)?[a-z0-9]+(.)?[a-z]{2,3}?(.)?[a-z]{2,3}?$/g;
  let email = document.querySelector('#email');
  
  const regex = new RegExp(pregPattern);
  
  if(email.value == '' || email.value.length < minLength){
    
    emailError.style.display = 'block';
    emailError.innerHTML = 'Email cannot be empty and cannot be less than 3 characters length';
    btn.setAttribute('disabled','true');
    
  }else if(email.value.length > minLength || email.value.length == 3){
      
    if(email.value.match(regex)){
  
      emailError.style.display = 'none';
      btn.removeAttribute('disabled');
        
    }else if(regex.test(email.value) == false){
        
      emailError.style.display = 'block';
      emailError.innerHTML = 'Email is not correct, please try again with .com, or gov.com, or gov.us as an example including @';
      btn.setAttribute('disabled','true');
        
    }
      
  }
  
}
emailValidation();

function phoneValidation(){
  
  let minLength = 10;
  let maxLength = 12;
  let phoneError = document.querySelector('.phone-error');
  let btn = document.querySelector('#submit');
  let pregPattern = /^(8|\+)?[0-9]{10,12}$/g;
  let phone = document.querySelector('#phone');
  
  const regex = new RegExp(pregPattern);
  
  if(phone.value == '' || phone.value.length < minLength){
    
    phoneError.style.display = 'block';
    phoneError.innerHTML = 'Phone cannot be empty and cannot be less than 10 characters length with or without 8 or +7';
    btn.setAttribute('disabled','true');
    
  }else if(phone.value.length > minLength && phone.value.length <= maxLength){
      
    if(phone.value.match(regex)){
  
      phoneError.style.display = 'none';
      btn.removeAttribute('disabled');
        
    }else if(regex.test(phone.value) == false && phone.value.length > 12){
        
      phoneError.style.display = 'block';
      phoneError.innerHTML = 'Phone is not correct, are you sure that you have 8, +7 or just 912 123 2304?';
      btn.setAttribute('disabled','true');
        
    }
      
  }
  
}
phoneValidation();

function passwordValidation(){
  
  let minLength = 8;
  let passwordError = document.querySelector('.password-error');
  let btn = document.querySelector('#submit');
  let password = document.querySelector('#password');
  
  
  if(password.value == '' || password.value.length <= minLength){
    
    passwordError.style.display = 'block';
    passwordError.innerHTML = 'Password cannot be empty and cannot be less than 8 characters';
    btn.setAttribute('disabled','true');
    
  }
  
}
passwordValidation();
