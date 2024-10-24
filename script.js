document.addEventListener("DOMContentLoaded", function() {
    // Create buttons for navigation
    const aboutButton = document.createElement("button");
    aboutButton.innerText = "Learn About Me";
    aboutButton.addEventListener("click", function() {
        window.location.href = "about.html";
    });

    const projectsButton = document.createElement("button");
    projectsButton.innerText = "View My Projects";
    projectsButton.addEventListener("click", function() {
        window.location.href = "projects.html";
    });

    const contactButton = document.createElement("button");
    contactButton.innerText = "Send me an email";
    contactButton.addEventListener("click", function() {
        window.location.href = "mailto:rittahm@gmail.com";
    });

    // Append buttons to the contact section
    const contactSection = document.querySelector("#contact");
    contactSection.appendChild(aboutButton);
    contactSection.appendChild(projectsButton);
    contactSection.appendChild(contactButton);
});