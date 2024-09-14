document.addEventListener("DOMContentLoaded", function () {
    var resumeForm = document.getElementById('resumeForm');
    var resumeOutput = document.getElementById('resumeOutput');
    var outputProfilePic = document.getElementById('outputProfilePic');
    var outputName = document.getElementById('outputName');
    var outputEmail = document.getElementById('outputEmail');
    var outputPhone = document.getElementById('outputPhone');
    var outputLocation = document.getElementById('outputLocation');
    var outputEducation = document.getElementById('outputEducation');
    var outputSkills = document.getElementById('outputSkills');
    var outputExperience = document.getElementById('outputExperience');
    resumeForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent page refresh on form submission
        // Get form data
        var formData = new FormData(resumeForm);
        var name = formData.get('name');
        var email = formData.get('email');
        var phone = formData.get('phone');
        var location = formData.get('location');
        var education = formData.get('education');
        var skills = formData.get('skills');
        var experience = formData.get('experience');
        // Populate resume fields
        outputName.innerText = name;
        outputEmail.innerText = email;
        outputPhone.innerText = phone;
        outputLocation.innerText = location;
        outputEducation.querySelector('.resume-section-content').innerHTML = "<p>".concat(education, "</p>");
        outputSkills.querySelector('.resume-section-content').innerHTML = skills.split(',').map(function (skill) { return "<span>".concat(skill.trim(), "</span>"); }).join(' ');
        outputExperience.querySelector('.resume-section-content').innerHTML = "<p>".concat(experience, "</p>");
        // Handle Profile Picture Upload
        var profilePicFile = formData.get('profilePic');
        if (profilePicFile) {
            var reader = new FileReader();
            reader.onload = function (e) {
                outputProfilePic.src = e.target.result;
            };
            reader.readAsDataURL(profilePicFile);
        }
        else {
            outputProfilePic.src = 'default-profile.png'; // Placeholder image if none is uploaded
        }
        // Display the resume
        resumeOutput.style.display = 'block';
    });
});
