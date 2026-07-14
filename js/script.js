// Wait until the page is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    console.log("Portfolio website loaded successfully.");

    // Contact form validation
    const form = document.querySelector("form");

    if (form) {
        form.addEventListener("submit", function (event) {
            const name = document.getElementById("name");
            const email = document.getElementById("email");
            const message = document.getElementById("message");

            if (
                name.value.trim() === "" ||
                email.value.trim() === "" ||
                message.value.trim() === ""
            ) {
                alert("Please fill in all required fields.");
                event.preventDefault();
                return;
            }

            alert("Thank you! Your message has been submitted.");
        });
    }

    // Smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });
});