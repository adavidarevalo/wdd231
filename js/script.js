// Course data array
const courses = [
    { code: 'WDD 130', name: 'Web Fundamentals', credits: 3, completed: true },
    { code: 'WDD 131', name: 'Dynamic Web Fundamentals', credits: 3, completed: true },
    { code: 'WDD 230', name: 'Web Frontend Development', credits: 3, completed: false },
    { code: 'WDD 231', name: 'Professional Web Development', credits: 3, completed: false },
    { code: 'CSE 121B', name: 'Programming with JavaScript', credits: 3, completed: true },
    { code: 'CSE 111', name: 'Programming with Functions', credits: 3, completed: false },
    { code: 'WDD 330', name: 'Web Frontend Development II', credits: 3, completed: false },
    { code: 'WDD 430', name: 'Web Full-Stack Development', credits: 3, completed: false },
];

// DOM Elements
const courseList = document.getElementById('course-list');
const totalCreditsElement = document.getElementById('total-credits');
const filterButtons = document.querySelectorAll('.filter-btn');
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    // Display current year in footer
    document.getElementById('copyright').textContent = `© ${new Date().getFullYear()} • David Arevalo • Utah, USA`;
    
    // Display last modified date
    document.getElementById('lastModified').textContent = `Last Modification: ${document.lastModified}`;
    
    // Load all courses by default
    displayCourses(courses);
    updateTotalCredits(courses);
    
    // Add event listeners for filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            
            // Get the filter value
            const filter = button.dataset.filter;
            
            // Filter courses
            let filteredCourses = [];
            if (filter === 'all') {
                filteredCourses = [...courses];
            } else {
                filteredCourses = courses.filter(course => course.code.startsWith(filter));
            }
            
            // Display filtered courses
            displayCourses(filteredCourses);
            updateTotalCredits(filteredCourses);
        });
    });
    
    // Mobile menu toggle
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }
});

// Function to display courses
function displayCourses(coursesToDisplay) {
    // Clear the course list
    courseList.innerHTML = '';
    
    if (coursesToDisplay.length === 0) {
        courseList.innerHTML = '<p>No courses found matching the selected filter.</p>';
        return;
    }
    
    // Create and append course cards
    coursesToDisplay.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.className = `course-card ${course.completed ? 'completed' : ''}`;
        
        const completionBadge = course.completed 
            ? '<span class="badge">✓ Completed</span>'
            : '';
        
        courseCard.innerHTML = `
            <h3>${course.code}</h3>
            <p>${course.name}</p>
            <p><strong>Credits:</strong> ${course.credits}</p>
            ${completionBadge}
        `;
        
        courseList.appendChild(courseCard);
    });
}

// Function to update total credits
function updateTotalCredits(coursesToCalculate) {
    const totalCredits = coursesToCalculate.reduce((total, course) => {
        return total + course.credits;
    }, 0);
    
    totalCreditsElement.textContent = totalCredits;
}

// Close mobile menu when clicking on a nav link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        menuToggle.classList.remove('active');
    });
});
