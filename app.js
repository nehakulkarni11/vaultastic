
const input = document.getElementById("password"); //getting the input field
const strength = document.getElementById("strength"); //getting the strength field's value
const suggest = document.getElementById("suggest"); //getting the strength field's value
// input.value = input.innerText; //getting input field's value

input.addEventListener("input", (event) => determine(event));//when input field changes, determine function will run
let score = 0; //inital score inside in order to get resetted

function determine(event) {

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
    if (length >= 18) {
        score = score + 25;
    } if (length >= 15 && length <= 17) {
        score = score + 20;
    } if (length >= 12 && length <= 14) {
        score = score + 15;
    } if (length >= 9 && length <= 11) {
        score = score + 10;
    } if (length >= 8) {
        score = score + 5;
    }

    if (scoreObj.lowercase) {
        score = score + 25;
    } if (scoreObj.uppercase) {
        score = score + 25;
    } if (scoreObj.numeric) {
        score = score + 25;
    } if (scoreObj.special_symbol) {
        score = score + 25;
    }

    let feedback = " ";
    if (!scoreObj.lowercase) {
        feedback = "<li>Add atleast one lowercase character to increase the strength of your password.</li>";
    } if (!scoreObj.uppercase) {
        feedback = "<li>Add atleast one uppercase character to increase the strength of your password</li>";
    } if (!scoreObj.numeric) {
        feedback = "<li>Adding atleast one numeric value is advised to increase the strength of your password</li>";
    } if (!scoreObj.special_symbol) {
        feedback = "<li>Adding atleast one special symbol like #$%* is advised to increase the strength of your password</li>";
    }

    let ability;
    if (score >= 0 && score <= 30) {
        ability = "Weak";
    } else if (score >= 31 && score <= 60) {
        ability = "Medium";
    } else if (score >= 11 && score <= 80) {
        ability = "Strong";
    } else if (score >= 81 && score <= 100) {
        ability = "Very Strong";
    }
    suggest.innerHTML = feedback;
    strength.innerText = ability;


}





























// let asciiVal = char.charCodeAt(input.value); //get asciival from the input.value
// function range(start, end) {
//     if (range(65, 90)) {
//         score = score + 25;
//     }
//     else if (range(97, 122)) {
//         score = score + 25;
//     }
//     else if (range(33, 126)) {
//         score = score + 25;
//     }
//     else if (range(0, 9)) {
//         score = score + 25;
//     }
//     else {
//         alert("Input field empty");
//     }

//     function checkLength() {
//         if (input.value.length >= 8) {
//             score = score + 5;
//         }
//         else if (input.value.length >= 9 && input.value.length <= 11) {
//             score = score + 10;
//         } else if (input.value.length >= 12 && input.value.length <= 14) {
//             score = score + 15;
//         } else if (input.value.length >= 15 && input.value.length <= 17) {
//             score = score + 20;
//         } else if (input.value.length >= 18) {
//             score = score + 25;
//         }
//     }

//     function totalScore() {
//         if (score >= 0 && score <= 30) {
//             strength = "Weak" + score + "This password is too weak and easily guessable. Consider:";
//             suggest = "Increasing the password length significantly ideally to at least 15 characters. Including uppercase and lowercase letters, numbers, and symbols. Avoiding dictionary words, personal information, or keyboard patterns."
//         } else if (score >= 31 && score <= 60) {
//             strength = "Medium" + score + "This password could be stronger. Consider:";
//             suggest = "Increasing the password length to at least 15 characters(if less than 15). Adding more character types (uppercase, lowercase, numbers, symbols)."


//         } else if (score >= 61 && score <= 80) {
//             strength = "Strong" + score + " This password is good, but consider: ";
//             suggest = "For very sensitive accounts, you might suggest increasing the length for even stronger security."
//         } else if (score >= 81 && score <= 100) {
//             strength = "Very Strong" + score + " This password is excellent!";
//             suggest = "Keeping this password for highly sensitive accounts and consider changing it only if absolutely necessary (due to security best practices)."
//         }
//     }


// 



