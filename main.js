const form = document.getElementById('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const mobile = document.getElementById('mobile');
const stateoforigin = document.getElementById('stataoforigin');
const dateofbirth = document.getElementById('dateofbirth');
const nationality = document.getElementById('nationality');

form.addEventListener('register', (e) =>{
    e.preventDefault();

    checkinputs();
});

function checkinputs() {
    //get the values from the inputs
    const fnameValue = fname.value.trim();
    const lnameValue = lname.value.trim();
    const emailValue = email.value.trim();
    const mobileValue = mobile.value.trim();
    const stateoforiginValue = stateoforigin.value.trim();
    const dateofbirthValue = dateofbirth.value.trim();
    const nationalityValue = nationality.value.trim();

    if(fnameValue === ' ') {
        //show error
        //add error class
        setErrorFor(fname, 'Fname cannot be blank');
    } 
    else {
        //add success class
        setSuccessFor(fname);
    }
}


function setErrorFor(input,message) {
    const formControl = input.parentElement; // .form-control
    const small = formControl.querySelector('small');

    //add error message inside small
    small.innerText = message;

    //add error class
    formControl.className = 'form-control error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}