var em = document.getElementById("login");
var pas = document.getElementById("password");
let er = document.getElementById("err");
let regexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; //email validator//
var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/; //phone validator//

//password validator//
var regex = new Array();
regex.push("[A-Z]"); //Uppercase Alphabet.
regex.push("[a-z]"); //Lowercase Alphabet.
regex.push("[0-9]"); //Digit.
regex.push("[$@$!%*#?&]"); //Special Character.


// ---------------------------------------------------------Login Form------------------------------------------------//

function validate() {

    if (em.value.trim() == "" || pas.value.trim() == "") {
        em.style.border = em.value.trim() == "" ? "2px solid red" : '';
        pas.style.border = pas.value.trim() == "" ? "2px solid red" : '';
        alert(em.value.trim() == "" ? "Enter email" : "Enter Password");

        return false;
    }

    else if (regexp.test(em.value)) {
        er.innerHTML = "VALID!";
        er.style.color = "green";
        return true;
    }
    
    else {
        er.innerHTML = "INVALID E-MAIL!!";
        er.style.color = "red";
        em.style.border = "2px solid red";
        return false;
    }

}

// ---------------------------------------------------------Sign Up Form------------------------------------------------//

var f1 = document.getElementById("fn");
var l1 = document.getElementById("ln");
var e1 = document.getElementById("email");
var city = document.getElementById("city");
var ph = document.getElementById("phone");
var pass1 = document.getElementById("pass1");
var pass2 = document.getElementById("pass2");
var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

function validate2() {
    if (f1.value.trim() == "" || l1.value.trim() == "" || e1.value.trim() == "" || pass1.value == "" || pass2.value == "" || ph.value.trim() == "" || city.value.trim() == "" || pass1.value < 8 || document.getElementById("password_strength").innerHTML == "weak") {
        f1.style.border = f1.value.trim() == "" ? "2px solid red" : '';
        l1.style.border = l1.value.trim() == "" ? "2px solid red" : '';
        e1.style.border = e1.value.trim() == "" ? "2px solid red" : '';
        pass1.style.border = pass1.value.trim() == "" ? "2px solid red" : '';
        pass2.style.border = pass2.value.trim() == "" ? "2px solid red" : '';
        ph.style.border = ph.value.trim() == "" ? "2px solid red" : '';
        city.style.border = city.value.trim() == "" ? "2px solid red" : '';
        alert("Fields not filled");
        return false;
    }

    else if (regexp.test(e1.value) === false) {
        alert("Email must be in Format ");
        return false;
    }
    else if (pass1.value != pass2.value) {
        alert("Password doesnot match");
        return false;
    }
    else if (phoneno.test(ph.value) === false) {
        alert("Phone Number must be in Format  eg: xxxxxxxxxx or xxx.xxx.xxxx or xxx xxx xxxx or xxx-xxx-xxxx");
        return false;
    }
    else if (!new RegExp(regex[0]).test(pass1.value) || !new RegExp(regex[1]).test(pass1.value) || !new RegExp(regex[2]).test(pass1.value)) {
        alert("Password must contain atleast one uppercase, one lower case and one number");
        return false;
    }

    else {
        return true;
    }
}

// ---------------------------------------------------------password Strength Meter------------------------------------------------//

function CheckPasswordStrength(password) {
    var password_strength = document.getElementById("password_strength");

    //TextBox left blank.
    if (password.length == 0) {
        password_strength.innerHTML = "";
        return;
    }

    //Regular Expressions.

    var passed = 0;

    //Validate for each Regular Expression.
    for (var i = 0; i < regex.length - 1; i++) {
        if (new RegExp(regex[i]).test(password)) {
            passed++;
        }
    }

    //Validate for length of Password.
    if (passed >= 1 && password.length > 8) {
        passed++;
    }

    //Display status.
    var color = "";
    var strength = "";
    if (password.length > 7) {
        switch (passed) {
            case 0:
            case 1:
                strength = "Weak";
                color = "orange";
                break;
            case 2:
                strength = "Good";
                color = "yellow";
                break;
            case 3:
            case 4:
                strength = "Strong";
                color = "green";
                break;
            case 5:
                strength = "Very Strong";
                color = "darkgreen";
                break;
        }
    }
    else {
        strength = "Minimum 8 characters needed";
        color = "red";
    }
    password_strength.innerHTML = strength;
    password_strength.style.color = color;
}


