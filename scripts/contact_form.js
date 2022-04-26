const btn = document.getElementById("submit-btn");
const isEmpty = str => !str.trim().length;
const enqName = document.getElementById("enquiry-name");
const email = document.getElementById("enquiry-email");
const loc = document.getElementById("enquiry-location");
const message = document.getElementById("enquiry-message");
const validationText = document.getElementById("validation-text");
let success = 0;
let emailSuccess = false;

btn.addEventListener("click", active);

const validateEmail = (email) => {
    return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

function active() {
    if (isEmpty(enqName.value)) {
        enqName.style.border = ".5px solid #FF0000";
    } else {
        success++;
        enqName.style.border = ".5px solid #008000";
    }

    if (!(isEmpty(email.value))) {
        if (validateEmail(email.value)) {
            success++;
            email.style.border = ".5px solid #008000";
            emailSuccess = true;
        } else {
            emailSuccess = false;
            validationText.innerHTML = "Please enter a valid email";
            email.style.border = ".5px solid #FF0000";
        }
    } else {
        email.style.border = ".5px solid #FF0000";
        emailSuccess = false;
    }

    if (isEmpty(loc.value)) {
        loc.style.border = ".5px solid #FF0000";
    } else {
        success++;
        loc.style.border = ".5px solid #008000";
    }

    if (isEmpty(message.value)) {
        message.style.border = ".5px solid #FF0000";
    } else {
        success++;
        message.style.border = ".5px solid #008000";
    }

    if (success == 4) {
        btn.removeEventListener("click", active);
        setTimeout(() => {

            var params = {
                from_name: enqName.value,
                email: email.value,
                location: loc.value,
                message: message.value
            }

            emailjs.send('service_qf1bhdi', 'template_fevtz86', params)
                .then(function(response){
                    console.log('Success!', response.status, response.text);
                }, function(error){
                    console.log('Failed!', error);
                })

            enqName.disabled = true;
            email.disabled = true;
            loc.disabled = true;
            message.disabled = true;

            enqName.value = '';
            email.value = '';
            loc.value = '';
            message.value = '';

            btn.innerHTML = "&check;";

            validationText.innerHTML = "";

        }, 300);
    } else {
        success = 0;
        if (!(emailSuccess)) {
            validationText.innerHTML = "Please fill out all forms";
        }
    }
}
