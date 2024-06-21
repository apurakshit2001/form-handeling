function ShowData(event) {
    event.preventDefault();

    const firstName = document.getElementById("fname").value;
    const lastName = document.getElementById("lname").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const gender = document.querySelector('input[name="gender"]:checked') ?
        document.querySelector('input[name="gender"]:checked').value : '';
    const dob = document.getElementById("dob").value;
    const topic = document.getElementById("topic").value;
    const message = document.getElementById("message").value;

    const formData = {
        firstName,
        lastName,
        email,
        phone,
        gender,
        dob,
        topic,
        message
    };

    localStorage.setItem("formData", JSON.stringify(formData));
    window.location.href = 'form-data.html';
}