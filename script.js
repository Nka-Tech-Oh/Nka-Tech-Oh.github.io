document.addEventListener("DOMContentLoaded", function() {
    const contactSection = document.querySelector("#contact");
    const contactButton = document.createElement("button");
    contactButton.innerText = "Send me an email";
    contactButton.addEventListener("click", function() {
        window.location.href = "mailto:rittahm@gmail.com";
    });
    contactSection.appendChild(contactButton);
});
