let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide) => {
        slide.style.display = 'none';
    });
    slides[index].style.display = 'block';
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

setInterval(nextSlide, 3000);

showSlide(currentSlide);


//contact form

document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value.trim();

    let isValid = true;

    if (name === '') {
        document.getElementById('name-error').textContent = 'Name is required';
        document.getElementById('name-error').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('name-error').style.display = 'none';
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '') {
        document.getElementById('email-error').textContent = 'Email is required';
        document.getElementById('email-error').style.display = 'block';
        isValid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById('email-error').textContent = 'Invalid email format';
        document.getElementById('email-error').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('email-error').style.display = 'none';
    }

    if (subject === '') {
        document.getElementById('subject-error').textContent = 'Subject is required';
        document.getElementById('subject-error').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('subject-error').style.display = 'none';
    }

    if (message === '') {
        document.getElementById('message-error').textContent = 'Message is required';
        document.getElementById('message-error').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('message-error').style.display = 'none';
    }

    if (isValid) {
        alert('Form submitted successfully!');
        document.getElementById('contact-form').reset();
    }
});