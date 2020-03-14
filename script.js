// Progression 1 
// Check username
// create a function called as checkUserName()
// username should not be empty
// username should be a minimum of 8 characters and above 
// username should be less than 15 characters
// No space is allowed in username
// username should not contain special characters
// the function should return true if all the conditions above are validated.
// return false if the validation fails


function checkUserName() {
    var name = document.getElementById("usertext").value;
    if ((name != " ") && (name.length >= 8) && (name.length < 15) && (noSpaceAndNoSpcl(name)))
        return true;
    else
        return false;
}

function noSpaceAndNoSpcl(name) {
    for (var index = 0; index < name.length; index++) {
        if ((name[index] == " ") || (name[index] == ".") || (name[index] == "_") || (name[index] == "'") || (name[index] == "+") || (name[index] == "-") || (name[index] == ","))
            return false;
    }
    return true;
}










// Progression 2 
// Check mail
// create a function called as checkEmail()
// only @ , . , _ [at,dot,underscore] is allowed
// It can be alphanumeric in nature
// return true if it passses all validation and false otherwise


function checkEmail(email) {
    var email = document.getElementById("emailtext").value;
    var alpha = /^[0-9a-zA-z]+$/;
    if (email.match(alpha) || spcl(email))
        return true;

    else
        return false;
}

function spcl(emai) {
    for (var index = 0; index < emai.length; index++) {
        if ((emai[index] != "@") || (emai[index] != ",") || (emai[index] != "_") || (emai[index] != "."))
            return false;
    }
    return true;
}






// Progression 3
// Check password
// create a function called as checkPassword()
// should be alphanumeric in nature
// password must contain atleast one Uppercase, one number and special characters[!@#$%^&*()_]
// return true else return false

function checkPassword() {
    var passwordtext = document.getElementById("passwordtext").value;
    var pattern = /^[!@#$%^&*()_]/;
    var pattern1 = /^[0-9a-zA-z]+$/;
    if (passwordtext.match(pattern) && (passwordtext.match(pattern1)))
        return true;
    else
        return false;
}


var button_onClick = document.getElementById('submit');
button_onClick.addEventListener('click', validate)

function validate() {
    checkUserName();
    checkEmail();
    checkPassword();
}