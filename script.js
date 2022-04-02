const form= document.getElementById('form')
const username=document.getElementById('username')
const email=document.getElementById('email')
const password=document.getElementById('password')
const repassword=document.getElementById('repassword')

function error(input,message){
    input.className='form-control is-invalid'
    const errorDiv=input.nextElementSibling;
    errorDiv.innerText=message;
    errorDiv.className='invalid-feedback';
};

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

function success(input){
    input.className='form-control is-valid'
}
function checkRequired(inputs){
    inputs.forEach(function(input){
        if(input.value.trim()===''){
            error(input,`${input.id} is required `)
        }
        else{
            success(input)
        }
    })
}
function checkEmail(input){
    if(!validateEmail(input.value)){
        error(input,'Enter a valid email format')
    }
    else{
        success(input)
    }
}
function checkPassword(_password,_repassword){
    if(_password.value!==_repassword.value){
        error(_repassword,'Passwords do not match',_repassword.value='')
    }
   
}
function checkLenght(input,min,max){
    if(input.value.length<min){
        error(input,`${input.id} must have at least ${min} characters`)
    }
    else if(input.value.length>max){
        error(input,`${input.id} must contain no more than ${max} characters`)
    }
    else{
        success(input)
    }
}

/*function checkPassword(_password,_repassword){

    if (_password.value.trim()=='') {
        error(_password,'Password field cannot be empty!')
    }
    else{
        if(_password.value===_repassword.value){
           success(_password)
       }
       else{error(_password,'Passwords do not match'),_password.value='';}
         
    }
    if(_repassword.value.trim()==''){
        error(_repassword,'Password field cannot be empty!')
    }
    else{
        if(_password.value===_repassword.value){
            success(_repassword)
        }
        else{error(_repassword,'Passwords do not match'),_repassword.value='';}
    }
}*/

form.addEventListener('submit',function(e){
    e.preventDefault();
   /* BAD CODE
   
    if (username.value.trim()=='') {
        error(username,'Username field cannot be empty!');
    }
    else{
        success(username)
    }
    if(email.value.trim()==''){
        error(email,'Email field cannot be empty!');
    }
    else if(!validateEmail(email.value)){
        error(email,'Enter a valid email format')
    }
    else{
        success(email)
    }
    if (password.value.trim()=='') {
        error(password,'Password field cannot be empty!')
    }
    else{
        if(password.value===repassword.value){
           success(password)
       }
       else{error(password,'Passwords do not match'),password.value='';}
         
    }
    if(repassword.value.trim()==''){
        error(repassword,'Password field cannot be empty!')
    }
    else{
        if(password.value===repassword.value){
            success(repassword)
        }
        else{error(repassword,'Passwords do not match'),repassword.value='';}
    }*/
    
        checkRequired([username,email,password,repassword]);
        checkEmail(email)
        checkPassword(password,repassword);
        checkLenght(username,8,18);
        checkLenght(password,8,18);
})