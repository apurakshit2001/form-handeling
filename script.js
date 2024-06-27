// Global variable declare করলাম। 
let firstName, lastName, email, phone, gender, dob, topic, message;

function ShowData(event) {
    // সাধারণত, যখন একটি ফর্ম submit করা হয় , Browser , Local server - এ ফর্ম ডেটা পাঠায় এবং page reload করে।
    event.preventDefault(); // Prevent form from submitting, এই প্রক্রিয়া টি থামানোর জন্য ..

    // Retrieve form data
    firstName = document.getElementById("fname").value;
    lastName = document.getElementById("lname").value;
    email = document.getElementById("email").value;
    phone = document.getElementById("phone").value;
    gender = document.querySelector('input[name="gender"]:checked') ?
        document.querySelector('input[name="gender"]:checked').value : '';
    dob = document.getElementById("dob").value;
    topic = document.getElementById("topic").value;
    country = document.getElementById("country").value;
    message = document.getElementById("message").value;

    // Validate all fields
    if (!validateForm()) {
        return; // Stop if validation fails
    }

    // Store data and redirect
    sendFormData();
    window.location.href = 'form-data.html'; // Redirect to another page
}

function validateForm() {
    if (!firstName) {
        alert("First Name is required");
        return false;
    }
    if (!lastName) {
        alert("Last Name is required");
        return false;
    }
    if (!validateEmail(email)) {
        alert("Email is not valid");
        return false;
    }
    if (!gender) {
        alert("Gender is required");
        return false;
    }
    if (!dob) {
        alert("Date of Birth is required");
        return false;
    }
    if (!topic) {
        alert("Topic is required");
        return false;
    } 
    if (!country) {
        alert("Country is required");
        return false;
    }
    if (!message) {
        alert("Message is required");
        return false;
    }
    if (!validatePhone(phone)) {
        alert("Phone number is not valid");
        console.log("2");
        return false;
    }
    return true; // All fields are valid
}

function validateEmail(email) {
    let flagAt = false;
    let atIndex = 0;
    let flagDot = false;
    let dotPos = -1;

    for (let i = 0; i < email.length; i++) {
        if (email[i] === '@') {
            flagAt = true;
            atIndex = i;
        }
        if (email[i] === '.') {
            flagDot = true;
            dotPos = i;
        }
    }

    const domainLength = email.length - dotPos;
    const dotAtDistance = dotPos - atIndex;

    return flagAt && flagDot && domainLength > 2 && dotAtDistance > 4 && atIndex > 3;
}

function validatePhone(phone) {
    if (phone.trim().length == 10) {
        console.log("1");
        return true;
    }
}

function sendFormData() {
    const formData = {
        firstName,
        lastName,
        email,
        phone,
        gender,
        dob,
        country,
        topic,
        message
    };

    // Store data in local storage
    localStorage.setItem("formData", JSON.stringify(formData));
}
