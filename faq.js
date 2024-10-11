document.querySelectorAll('.faq-item h3').forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const parent = question.parentElement;
        parent.classList.toggle('active');
        if (answer.style.display === 'block') {
            answer.style.display = 'none';
        } else {
            answer.style.display = 'block';
        }
    });
});

$('#menu-btn').click(function() {
    $('nav .navigation ul').addClass('active');
});

$('#menu-close').click(function() {
    $('nav .navigation ul').removeClass('active');
});

//for subsribed email store in local storage
document.getElementById("subscribe-btn").addEventListener("click", function(event) {
event.preventDefault(); // Prevent default anchor action

var subEmail = document.getElementById("sub-email").value.trim(); // Get the email input value

// Simple email validation
if (subEmail !== "" && subEmail.indexOf("@") !== -1 && subEmail.indexOf(".") !== -1) {
    // Get existing emails from local storage or initialize an empty array
    var emails = JSON.parse(localStorage.getItem("subscribers")) || [];
    
    // Add the new email if it's not already in the list
    if (!emails.includes(subEmail)) {
        emails.push(subEmail); // Add email to the array
        localStorage.setItem("subscribers", JSON.stringify(emails)); // Save updated array
        alert("Thank you for subscribing!"); // Show confirmation
        document.getElementById("sub-email").value = ""; // Clear the input field
    } else {
        alert("This email is already subscribed."); // Alert if email is already present
    }
} else {
    alert("Please enter a valid email address."); // Show error message
}
});

document.addEventListener("DOMContentLoaded", function() {
// Define the animations based on the classes
const animations = [
    { class: 'fade-in', animation: 'animate__fadeIn' },
    { class: 'slide-in-left', animation: 'animate__slideInLeft' },
    { class: 'zoomIn', animation: 'animate__zoomIn' },
];

// Create an Intersection Observer instance
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animations.forEach(anim => {
                if (entry.target.classList.contains(anim.class)) {
                    entry.target.classList.add(anim.animation);
                    observer.unobserve(entry.target); // Stop observing after animation
                }
            });
        }
    });
}, {
    threshold: 0.1 // Trigger the animation when 10% of the section is visible
});

// Observe all sections with the class 'section-to-animate'
const sections = document.querySelectorAll('.section-to-animate');
sections.forEach(section => {
    observer.observe(section);
});
});