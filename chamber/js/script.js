// DOM Elements
const membersContainer = document.getElementById('members-container');
const gridViewBtn = document.getElementById('grid-view');
const listViewBtn = document.getElementById('list-view');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const currentYear = document.getElementById('current-year');
const lastModified = document.getElementById('last-modified');

// Members data will be loaded from JSON file
let members = [];

// Load members from JSON file
async function loadMembers() {
    try {
        const response = await fetch('data/members.json');
        members = await response.json();
        // After loading members, initialize the view
        const preferredView = localStorage.getItem('preferredView') || 'grid';
        displayMembers(preferredView);
    } catch (error) {
        console.error('Error loading members:', error);
        // Fallback to an empty array if loading fails
        members = [];
    }
}

// Get membership level text
function getMembershipLevel(level) {
    const levels = {
        1: { text: 'Member', class: 'level-1' },
        2: { text: 'Silver', class: 'level-2' },
        3: { text: 'Gold', class: 'level-3' }
    };
    return levels[level] || { text: 'Member', class: 'level-1' };
}

// Display members in the container
function displayMembers(view = 'grid') {
    membersContainer.innerHTML = '';
    membersContainer.className = view === 'grid' ? 'grid-view' : 'list-view';
    
    members.forEach(member => {
        const level = getMembershipLevel(member.membershipLevel);
        
        const memberCard = document.createElement('div');
        memberCard.className = 'member-card';
        
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        const initials = `${member.name.charAt(0)}${member.name.split(' ').length > 1 ? member.name.split(' ')[1].charAt(0) : ''}`;
        
        memberCard.innerHTML = `
            <div class="member-image" style="background-color: #${randomColor};">
                <img src="${member.image}" alt="${member.name}" onerror="this.style.display='none'; this.parentNode.innerHTML='${initials}'; this.parentNode.style.display='flex'; this.parentNode.style.alignItems='center'; this.parentNode.style.justifyContent='center'; this.parentNode.style.color='white';">
                <span style="display: none;">${initials}</span>
            </div>
            <div class="member-info">
                <h3>${member.name}</h3>
                <div class="member-meta">
                    <p><i>📍</i> ${member.address}</p>
                    <p><i>📞</i> ${member.phone}</p>
                    <p><i>🌐</i> <a href="${member.website}" target="_blank" rel="noopener">${member.website.replace('https://', '')}</a></p>
                    <p><i>📧</i> ${member.email}</p>
                </div>
                <div class="member-level ${level.class}">${level.text} Member</div>
                <p class="member-description">${member.description}</p>
            </div>
        `;
        
        membersContainer.appendChild(memberCard);
    });
}

// Toggle between grid and list view
function toggleView(view) {
    if (view === 'grid') {
        gridViewBtn.classList.add('active');
        listViewBtn.classList.remove('active');
        displayMembers('grid');
        localStorage.setItem('preferredView', 'grid');
    } else {
        listViewBtn.classList.add('active');
        gridViewBtn.classList.remove('active');
        displayMembers('list');
        localStorage.setItem('preferredView', 'list');
    }
}

// Toggle mobile menu
function toggleMenu() {
    navMenu.classList.toggle('show');
}

// Set current year in footer
function setCurrentYear() {
    const year = new Date().getFullYear();
    currentYear.textContent = year;
}

// Set last modified date
function setLastModified() {
    const lastModifiedDate = new Date(document.lastModified);
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    };
    lastModified.textContent = lastModifiedDate.toLocaleDateString('en-US', options);
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Load members data
    loadMembers();
    
    // Set current year and last modified date
    setCurrentYear();
    setLastModified();
    
    // Add event listeners
    gridViewBtn.addEventListener('click', () => toggleView('grid'));
    listViewBtn.addEventListener('click', () => toggleView('list'));
    hamburger.addEventListener('click', toggleMenu);
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('nav') && !e.target.closest('#hamburger')) {
            navMenu.classList.remove('show');
        }
    });
});
