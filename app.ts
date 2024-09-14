document.addEventListener("DOMContentLoaded", () => {
    const resumeForm = document.getElementById('resumeForm') as HTMLFormElement;
    const resumeOutput = document.getElementById('resumeOutput') as HTMLElement;
    const outputProfilePic = document.getElementById('outputProfilePic') as HTMLImageElement;
    const outputName = document.getElementById('outputName') as HTMLElement;
    const outputEmail = document.getElementById('outputEmail') as HTMLElement;
    const outputPhone = document.getElementById('outputPhone') as HTMLElement;
    const outputLocation = document.getElementById('outputLocation') as HTMLElement;
    const outputEducation = document.getElementById('outputEducation') as HTMLElement;
    const outputSkills = document.getElementById('outputSkills') as HTMLElement;
    const outputExperience = document.getElementById('outputExperience') as HTMLElement;

    resumeForm.addEventListener('submit', (event) => {
        event.preventDefault();  // Prevent page refresh on form submission

        // Get form data
        const formData = new FormData(resumeForm);
        const name = formData.get('name') as string;
        const email = formData.get('email') as string;
        const phone = formData.get('phone') as string;
        const location = formData.get('location') as string;
        const education = formData.get('education') as string;
        const skills = formData.get('skills') as string;
        const experience = formData.get('experience') as string;

        // Populate resume fields
        outputName.innerText = name;
        outputEmail.innerText = email;
        outputPhone.innerText = phone;
        outputLocation.innerText = location;
        outputEducation.querySelector('.resume-section-content').innerHTML = `<p>${education}</p>`;
        outputSkills.querySelector('.resume-section-content').innerHTML = skills.split(',').map(skill => `<span>${skill.trim()}</span>`).join(' ');
        outputExperience.querySelector('.resume-section-content').innerHTML = `<p>${experience}</p>`;

        // Handle Profile Picture Upload
        const profilePicFile = formData.get('profilePic') as File;
        if (profilePicFile) {
            const reader = new FileReader();
            reader.onload = function(e) {
                outputProfilePic.src = e.target!.result as string;
            }
            reader.readAsDataURL(profilePicFile);
        } else {
            outputProfilePic.src = 'default-profile.png';  // Placeholder image if none is uploaded
        }

        // Display the resume
        resumeOutput.style.display = 'block';
    });
});
