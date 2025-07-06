// DOM Elements
const membersContainer = document.getElementById('members-container');
const gridViewBtn = document.getElementById('grid-view');
const listViewBtn = document.getElementById('list-view');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const currentYear = document.getElementById('current-year');
const lastModified = document.getElementById('last-modified');

// Member data
const members = [
    {
      "id": 1,
      "name": "Tech Solutions Inc.",
      "address": "123 Tech Street, Tech City, TC 12345",
      "phone": "(555) 123-4567",
      "website": "https://techsolutions.com",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaHRyJZbS-1oIIOwxfO5sBWWRh-iweFC_PWw&s",
      "membershipLevel": 3,
      "category": "Technology",
      "email": "info@techsolutions.com",
      "description": "Providing innovative technology solutions for businesses of all sizes."
    },
    {
      "id": 2,
      "name": "Green Thumb Landscaping",
      "address": "456 Garden Ave, Green Valley, GV 23456",
      "phone": "(555) 234-5678",
      "website": "https://greenthumb.com",
      "image": "https://irp.cdn-website.com/89ab8989/dms3rep/multi/green-thumb-logo.svg",
      "membershipLevel": 2,
      "category": "Landscaping",
      "email": "contact@greenthumb.com",
      "description": "Professional landscaping services for residential and commercial properties."
    },
    {
      "id": 3,
      "name": "Summit Financial Advisors",
      "address": "789 Finance Blvd, Money City, MC 34567",
      "phone": "(555) 345-6789",
      "website": "https://summitfinancial.com",
      "image": "https://summitfinancial.com/wp-content/uploads/2021/07/Summit-logo_square.png",
      "membershipLevel": 3,
      "category": "Financial Services",
      "email": "advisors@summitfinancial.com",
      "description": "Helping you plan for a secure financial future."
    },
    {
      "id": 4,
      "name": "Paws & Claws Pet Care",
      "address": "101 Pet Lane, Animal Town, AT 45678",
      "phone": "(555) 456-7890",
      "website": "https://pawsandclaws.com",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfmuEW13iA6vdwHf-SKfrsFk6F1ZZvpDXT_A&s",
      "membershipLevel": 1,
      "category": "Pet Services",
      "email": "info@pawsandclaws.com",
      "description": "Comprehensive pet care services including grooming, boarding, and training."
    },
    {
      "id": 5,
      "name": "Urban Eats Restaurant",
      "address": "202 Food Street, Culinary City, CC 56789",
      "phone": "(555) 567-8901",
      "website": "https://urbaneats.com",
      "image": "https://houstonfoodfinder.com/wp-content/uploads/2018/01/urban_eats_exterior_courtesy_urban_eats.jpg",
      "membershipLevel": 2,
      "category": "Restaurant",
      "email": "dine@urbaneats.com",
      "description": "A modern restaurant serving locally-sourced, seasonal cuisine."
    },
    {
      "id": 6,
      "name": "Elite Fitness Center",
      "address": "303 Health Way, Fitness City, FC 67890",
      "phone": "(555) 678-9012",
      "website": "https://elitefitness.com",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc-R796JEmVTqS4AAtCIywYhXzxdeWFmdorg&s",
      "membershipLevel": 3,
      "category": "Fitness",
      "email": "join@elitefitness.com",
      "description": "State-of-the-art fitness facility with personalized training programs."
    },
    {
      "id": 7,
      "name": "Bright Minds Tutoring",
      "address": "404 Education Ave, Learning City, LC 78901",
      "phone": "(555) 789-0123",
      "website": "https://brightminds.com",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVqR-3abqSWlWXU2pdFeOjUHIKZunPAtOQZQ&s",
      "membershipLevel": 1,
      "category": "Education",
      "email": "learn@brightminds.com",
      "description": "Personalized tutoring services for students of all ages and subjects."
    }
  ]
  

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
    // Set preferred view from localStorage or default to grid
    const preferredView = localStorage.getItem('preferredView') || 'grid';
    toggleView(preferredView);
    
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
