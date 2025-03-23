// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Form Validation for Contact Section
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (name === '' || email === '' || message === '') {
                alert('Please fill out all fields.');
            } else {
                alert('Thank you for contacting us! We will get back to you soon.');
                contactForm.reset();
            }
        });
    }

    // Dynamic Car Rental Button Interaction
    const rentButtons = document.querySelectorAll('.car-card button');
    rentButtons.forEach(button => {
        button.addEventListener('click', function() {
            const carName = this.closest('.car-card').querySelector('h3').textContent;
            alert(`You have selected the ${carName}. Proceed to checkout.`);
        });
    });

    // Smooth Scrolling for Navigation Links
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Dynamic Pricing Plan Selection
    const pricingPlans = document.querySelectorAll('.plan');
    pricingPlans.forEach(plan => {
        plan.addEventListener('click', function() {
            const planName = this.querySelector('h3').textContent;
            alert(`You have selected the ${planName} plan.`);
        });
    });
});
