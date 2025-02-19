// function for validating if 2 passwords match
function validatePassword(p1, p2) {
    if (p1 !== p2 || p1.length < 8) return false;

    let hasNumber = false, hasUpper = false, hasLower = false;
    // ret true if the password has at least 8 characters at least 1 number, 1 uppercase character, and 1 lowercase character
        for (let char of p1) {
            if (char >= '0' && char <= '9') hasNumber = true; 
            if (char >= 'A' && char <= 'Z') hasUpper = true; 
            if (char >= 'a' && char <= 'z') hasLower = true;
        }
        
        return hasNumber && hasUpper && hasLower;
    }

// function for reversing the password
function reversePassword(password){ 
    let reversedPassword = "";
    for(let i = password.length-1; i >= 0; i--){ // loops through the password string in reversed order
        reversedPassword += password[i];
    }
    return reversedPassword;
}

// sample output
// console.log(storePassword("John", "Pass1234", "Pass1234")); // returns {name: "John", newpassword: "4321ssaP"}
// console.log(storePassword("John", "Pass123", "Pass12345")); // returns {name: "John", newpassword: "Pass123"}
console.log(validatePassword("Hello1234", "Hello1234"));
console.log(validatePassword("HELLO1234", "HELLO1234"));