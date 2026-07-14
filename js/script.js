// Wait for the page to load
document.addEventListener("DOMContentLoaded", () => {

    // ===== Theme Toggle =====
    const toggleBtn = document.getElementById("theme-toggle");

    // Apply saved theme
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        if (toggleBtn) {
            toggleBtn.textContent = "☀️";
            toggleBtn.setAttribute("aria-label", "Switch to light mode");
        }
    }

    if (toggleBtn) {
        toggleBtn.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");

            if (document.body.classList.contains("dark-mode")) {
                localStorage.setItem("theme", "dark");
                toggleBtn.textContent = "☀️";
                toggleBtn.setAttribute("aria-label", "Switch to light mode");
            } else {
                localStorage.setItem("theme", "light");
                toggleBtn.textContent = "🌙";
                toggleBtn.setAttribute("aria-label", "Switch to dark mode");
            }
        });
    }

    // ===== Contact Form Validation =====
    const form = document.querySelector("form");

    if (form) {
        form.addEventListener("submit", (event) => {

            const name = document.getElementById("name");
            const email = document.getElementById("email");
            const message = document.getElementById("message");

            if (
                !name.value.trim() ||
                !email.value.trim() ||
                !message.value.trim()
            ) {
                alert("Please complete all fields.");
                event.preventDefault();
                return;
            }

            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailPattern.test(email.value)) {
                alert("Please enter a valid email address.");
                event.preventDefault();
                return;
            }

            alert("Thank you! Your message has been submitted successfully.");
        });
    }

    // ===== Smooth Scrolling =====
    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {
                e.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });
            }

        });

    });

});