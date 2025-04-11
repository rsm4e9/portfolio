document.addEventListener('DOMContentLoaded', function () {
    // Smooth scrolling for navbar links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    ////////////////////
   ;

    // Circular progress bars
    const circles = document.querySelectorAll('.circle');
    circles.forEach(elem => {
        const dots = parseInt(elem.getAttribute("data-dots"), 10);
        const marked = parseInt(elem.getAttribute("data-percent"), 10);
        const percent = Math.floor(dots * marked / 100);
        let points = "";

        const rotate = 360 / dots;

        for (let i = 0; i < dots; i++) {
            points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
        }
        elem.innerHTML = points;

        const pointsMarked = elem.querySelectorAll('.points');
        for (let i = 0; i < percent; i++) {
            pointsMarked[i].classList.add('marked');
        }
    });
});
////toggle bar////////////
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.addEventListener('click', () => {
    menu.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
});

///////////////////////////////scroll section active link//////
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.addEventListener('scroll', () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector(`header nav a[href*=${id}]`).classList.add('active');
            });
        };
    });
});
///////////// stcky nav bar////////
let header = document.querySelector('header');

window.addEventListener('scroll', () => {
    header.classList.toggle('sticky', window.scrollY > 100);
});
//////// remove toggle icon and navbar when click navbar link (scroll)//////
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('fa-xmark');
        navbar.classList.remove('active');
    });
});

// scrollReveal/////////////////////////
ScrollReveal({ 
    distance: '80px',
    duration: 2000,
    delay: 200
});
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });    
ScrollReveal().reveal('.home-right img, .about-content, .skills, .projects, .certifications, .contact-us', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-content h2', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content p', { origin: 'right' });
//////////typed js/////////////////////////
const typed = new Typed('.multiple-text', {
    strings: [ 'certified on ', 'ServiceNow', 'CSA & CAD'],
    typeSpeed: 100,
    backSpeed: 90,
    loop: true  
})
document.querySelector('.btn').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default anchor behavior
    
    // Replace with your actual resume URL
    const resumeUrl = 'https://drive.google.com/file/d/12FmyCPoRzOAZ4ciFYHZ6Gk33NtSPtHPF/view?usp=sharing';
    
    // Create temporary download link
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'RS Manikanta-Resume_Resume.pdf'; // Customize filename
    
    // Optional: Add loading state
    const originalText = this.innerHTML;
    this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Downloading...';
    
    // Start download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Reset button text after delay
    setTimeout(() => {
      this.innerHTML = originalText;
    }, 2000);
  });

