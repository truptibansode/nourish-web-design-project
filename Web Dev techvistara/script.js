const textToType = "Revitalize,\n Replenish,\n Nourish"; // Change this string as needed
const typewriterElement = document.getElementById('typewriter');

function typeWriter(text, index) {
    if (index < text.length) {
        if (text.charAt(index) === '\n') {
            typewriterElement.innerHTML += '<br>';
        } else {
            typewriterElement.innerHTML += text.charAt(index);
        }
        index++;
        setTimeout(() => typeWriter(text, index), 100); // Adjust the typing speed (milliseconds)
    }
}

document.addEventListener('DOMContentLoaded', () => {
    typeWriter(textToType, 0);
});

// SCROLL ANIMATE


// Function to handle the fade-in effect
function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}

// Set up the Intersection Observer
const observer = new IntersectionObserver(handleIntersection, {
    root: null,
    rootMargin: '0px',
    threshold: 2,
});

// Target the sections you want to apply the effect
const sectionsToFadeIn = document.querySelectorAll('.fade-in');

// Observe each section
sectionsToFadeIn.forEach(section => {
    observer.observe(section);
});
