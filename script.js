// Get references to the form and disply area
var form = document.getElementById('resumeForm');
var resumeContainer = document.getElementById('resume');
var shareableLinkContainer = document.getElementById('shareable-link-container');
var shareableLinkElement = document.getElementById('shareable-link');
var downloadPdfButton = document.getElementById('download-pdf');
// Handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault();
    // Collect input values
    var username = document.getElementById('username').value;
    var fullName = document.getElementById('fullName').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var address = document.getElementById('address').value;
    var skills = document.getElementById('skills').value;
    var experience = document.getElementById('experience').value;
    var education = document.getElementById('education').value;
    // Save form data in localStorage with the username as the key
    var resumeData = {
        username: username,
        fullName: fullName,
        email: email,
        phone: phone,
        address: address,
        education: education,
        experience: experience,
        skills: skills
    };
    localStorage.setItem(username, JSON.stringify(resumeData)); // Saving the data locally
    //Generate the resume content dynamically
    var resumeHTML = "\n   \n    <h3>Personal Information</h3>\n    <p><b>Name:</b><span contenteditable\"true\">".concat(fullName, "</span></p>\n    <p><b>Email:</b><span contenteditable\"true\">").concat(email, "</span></p>\n    <p><b>Phone:</b><span contenteditable\"true\">").concat(phone, "</span></p>\n    <p><b>Address:</b><span contenteditable\"true\">").concat(address, "</span></p>\n     \n    <h3>Education</3>\n    <p contenteditable\"true\">").concat(education, "</p>\n  \n    <h3>Experience</3>\n    <p contenteditable\"true\">").concat(experience, "</p> \n\n    <h3>Skills</3>\n    <p contenteditable\"true\">").concat(skills, "</p> \n    ");
    //display the generated resume
    resumeContainer.innerHTML = resumeHTML;
    // Generate a shareable URL with the username only
    var shareableURL = "".concat(window.location.origin, "?username=").concat(encodeURIComponent(username));
    // Display the shareable link
    shareableLinkContainer.style.display = 'block';
    shareableLinkElement.href = shareableURL;
    shareableLinkElement.textContent = shareableURL;
});
// Handle PDF download
downloadPdfButton.addEventListener('click', function () {
    window.print(); // This will open the print dialog and allow the user to save as PDF
});
// Prefill the form based on the username in the URL
window.addEventListener('DOMContentLoaded', function () {
    var urlParams = new URLSearchParams(window.location.search);
    var username = urlParams.get('username');
    if (username) {
        // Autofill form if data is found in localStorage
        var savedResumeData = localStorage.getItem(username);
        if (savedResumeData) {
            var resumeData = JSON.parse(savedResumeData);
            document.getElementById('username').value = username;
            document.getElementById('name').value = resumeData.name;
            document.getElementById('email').value = resumeData.email;
            document.getElementById('phone').value = resumeData.phone;
            document.getElementById('education').value = resumeData.education;
            document.getElementById('experience').value = resumeData.experience;
            document.getElementById('skills').value = resumeData.skills;
        }
    }
});
