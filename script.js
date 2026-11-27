
// Display the current year in the footer

document.getElementById("year").textContent = new Date().getFullYear();
    new Date().getFullYear();



// ===== TYPING ANIMATION =====

const roles = [
    "Beginner Web Developer",
    "Frontend Developer",
    "Creative Coder"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

const roleElement = document.querySelector(".hero-content h2");

function typeEffect() {
    if (!roleElement) return;

    const currentRole = roles[roleIndex];

    if (deleting) {
        charIndex--;
    } else {
        charIndex++;
    }

    roleElement.textContent = currentRole.substring(0, charIndex);

    let speed = deleting ? 50 : 100;

    if (!deleting && charIndex === currentRole.length) {
        deleting = true;
        speed = 1500;
    } else if (deleting && charIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        speed = 500;
    }

    setTimeout(typeEffect, speed);
}

if (roleElement) {
    typeEffect();
}
console.log("MY PORTFOLIO JAVASCRIPT IS WORKING!");
// Scroll reveal animation
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

sections.forEach((section) => {
    section.classList.add("hidden");
    observer.observe(section);
});

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});

topBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// ===== CONTACT FORM SUBMISSION =====

const contactForm = document.querySelector(".contact-form");
const formStatus = document.getElementById("form-status");

contactForm.addEventListener("submit", async function(event) {
    event.preventDefault();

    const formData = new FormData(contactForm);

    formStatus.textContent = "Sending message...";

    try {
        const response = await fetch(contactForm.action, {
            method: "POST",
            body: formData,
            headers: {
                "Accept": "application/json"
            }
        });

        if (response.ok) {
            formStatus.textContent = "Message sent successfully! 🎉";
            contactForm.reset();
        } else {
            formStatus.textContent = "Something went wrong. Please try again.";
        }
    } catch (error) {
        formStatus.textContent = "Network error. Please try again.";
    }
});


