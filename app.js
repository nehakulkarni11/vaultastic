const input = document.getElementById("password"); //getting the input field
const strength = document.getElementById("strength"); //getting the strength field's value
const suggest = document.getElementById("suggest"); //getting the strength field's value
const box = document.getElementById("feedback-box");

input.addEventListener("input", (event) => determine(event)); //when input field changes, determine function will run


function determine(event) {
    let score = 0; //inital score inside in order to get resetted
    const scoreObj = {
        lowercase: 0,
        uppercase: 0,
        numeric: 0,
        special_symbol: 0
    };
    const text = event.target.value;

    for (let i = 0; i < text.length; i++) {
        const asciiVal = text.charCodeAt(i); //taking ascii value of text's index
        if (asciiVal >= 65 && asciiVal <= 90) {
            scoreObj.uppercase = 1;
        } else if (asciiVal >= 97 && asciiVal <= 122) {
            scoreObj.lowercase = 1;
        } else if (asciiVal >= 48 && asciiVal <= 57) {
            scoreObj.numeric = 1;
        } else if ((asciiVal >= 33 && asciiVal <= 47) || (asciiVal >= 91 && asciiVal <= 96) || (asciiVal >= 123 && asciiVal <= 126)) {
            scoreObj.special_symbol = 1;
        }

    }
    let length = text.length;
    if (length >= 16) {
        score += 15;
    } else if (length >= 12) {
        score += 10;
    } else if (length >= 8) {
        score += 5;
    }
    // } else if (length < 8) {
    //     score += 0;
    // }


    if (scoreObj.lowercase) {
        score = score + 10;
    }
    if (scoreObj.uppercase) {
        score = score + 10;
    }
    if (scoreObj.numeric) {
        score = score + 10;
    }
    if (scoreObj.special_symbol) {
        score = score + 10;
    }

    let feedback = "";
    if (!scoreObj.lowercase) {
        feedback += "<li>Add atleast one lowercase character to increase the strength of your password.</li>";
    }
    if (!scoreObj.uppercase) {
        feedback += "<li>Add atleast one uppercase character to increase the strength of your password</li>";
    }
    if (!scoreObj.numeric) {
        feedback += "<li>Adding atleast one numeric value is advised to increase the strength of your password</li>";
    }
    if (!scoreObj.special_symbol) {
        feedback += "<li>Adding atleast one special symbol like #$%* is advised to increase the strength of your password</li>";
    }
    if (length < 8) {
        feedback += "<li>Length more than 8 characters is MANDATORY!</li>"
    }
    else if (length < 12) {
        feedback += "<li>Length more than 15 characters if preferred for a more secure password!</li>"
    }

    let ability;
    if (score <= 40 && score > 0) {
        ability = "Weak";
        strength.className = "weak";
        box.style.boxShadow = "0 1rem 1rem 0 #b91c1c";

    } else if (score <= 45 && score > 40) {
        ability = "Medium";
        strength.className = "medium";
        box.style.boxShadow = "0 1rem 1rem 0 #ea580c";
    } else if (score <= 50 && score > 45) {
        ability = "Strong";
        strength.className = "strong";
        box.style.boxShadow = "0 1rem 1rem 0 #eab308";
    } else {
        ability = "Very Strong";
        strength.className = "very_strong";
        box.style.boxShadow = "0 1rem 1rem 0 #65a30d";
    } console.log(score);

    if (!feedback) {
        feedback = "All variation of characters are covered! Try increasing the length to assure more security."
    }

    if (text.trim() === "") {
        strength.innerText = "Strength";
        suggest.innerHTML = "Suggestions";
        strength.className = "";
        box.style.boxShadow = "0 1rem 1rem 0 rgb(55, 79, 86)";

    } else {
        suggest.innerHTML = feedback;
        strength.innerText = ability;
    }
}
