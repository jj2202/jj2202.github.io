document.querySelectorAll('.sidebar-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); 
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - 60, // Adjusting for any fixed header
            behavior: 'smooth'
        });

        document.querySelectorAll('.sidebar-link').forEach(link => link.classList.remove('active'));
        this.classList.add('active');
    });
});

let currentProjectType = 'finished'; // Track which project type is currently displayed


function showProjects(type) {
    const finishedProjects = document.getElementById('projects-finished');
    const currentProjects = document.getElementById('projects-currently');
    const finishedSidebar = document.getElementById('sidebar-finished');
    const currentSidebar = document.getElementById('sidebar-current');

    currentProjectType = type; // Update the current project type

    if (type === 'finished') {
        finishedProjects.style.display = 'block';
        currentProjects.style.display = 'none';

        if (window.innerWidth > 768) {
            finishedSidebar.style.display = 'block';
            currentSidebar.style.display = 'none';
        } else {
            finishedSidebar.style.display = 'none';
            currentSidebar.style.display = 'none';
        }
    } else {
        finishedProjects.style.display = 'none';
        currentProjects.style.display = 'block';

        if (window.innerWidth > 768) {
            finishedSidebar.style.display = 'none';
            currentSidebar.style.display = 'block';
        } else {
            finishedSidebar.style.display = 'none';
            currentSidebar.style.display = 'none';
        }
    }

    document.querySelectorAll('.sidebar-link').forEach(link => link.classList.remove('active'));
}


window.addEventListener('resize', () => {
    const finishedSidebar = document.getElementById('sidebar-finished');
    const currentSidebar = document.getElementById('sidebar-current');

    if (window.innerWidth > 768) {
        if (currentProjectType === 'finished') {
            finishedSidebar.style.display = 'block';
            currentSidebar.style.display = 'none';
        } else {
            finishedSidebar.style.display = 'none';
            currentSidebar.style.display = 'block';
        }
    } else {
        finishedSidebar.style.display = 'none';
        currentSidebar.style.display = 'none';
    }
});

let currentExperienceType = 'finished'; // Track which experience type is currently displayed

function showExperience(type) {
    const finishedExperience = document.getElementById('experience-finished');
    const currentExperience = document.getElementById('experience-currently');
    const finishedSidebar = document.getElementById('experience-sidebar-finished');
    const currentSidebar = document.getElementById('experience-sidebar-current');

    currentExperienceType = type; // Update the current experience type

    if (type === 'finished') {
        finishedExperience.style.display = 'block';
        currentExperience.style.display = 'none';

        if (window.innerWidth > 768) {
            finishedSidebar.style.display = 'block';
            currentSidebar.style.display = 'none';
        } else {
            finishedSidebar.style.display = 'none';
            currentSidebar.style.display = 'none';
        }
    } else {
        finishedExperience.style.display = 'none';
        currentExperience.style.display = 'block';

        if (window.innerWidth > 768) {
            finishedSidebar.style.display = 'none';
            currentSidebar.style.display = 'block';
        } else {
            finishedSidebar.style.display = 'none';
            currentSidebar.style.display = 'none';
        }
    }
    document.querySelectorAll('.sidebar-link').forEach(link => link.classList.remove('active'));
}

window.addEventListener('resize', () => {
    const finishedSidebar = document.getElementById('experience-sidebar-finished');
    const currentSidebar = document.getElementById('experience-sidebar-current');

    if (window.innerWidth > 768) {
        if (currentExperienceType === 'finished') {
            finishedSidebar.style.display = 'block';
            currentSidebar.style.display = 'none';
        } else {
            finishedSidebar.style.display = 'none';
            currentSidebar.style.display = 'block';
        }
    } else {
        finishedSidebar.style.display = 'none';
        currentSidebar.style.display = 'none';
    }
});


let slideIndex = 0;
let slideInterval;

function showSlides() {
    const slides = document.getElementsByClassName("slideshow-slide");
    
    // Hide all slides initially
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";

    slideInterval = setTimeout(showSlides, 3000);
}

showSlides();

