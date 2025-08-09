// Portfolio data with all images
export const portfolioItems = [
    {
        id: 1,
        title: 'Seaside Wedding',
        category: 'wedding',
        image: 'images/wedding-1.jpg',
        description: 'Beautiful wedding ceremony at sunset',
        date: '2025-06-15',
        location: 'Malibu Beach, CA',
        client: 'Sarah & James',
        equipment: 'Sony A7IV'
    },
    {
        id: 2,
        title: 'Professional Headshot',
        category: 'portrait',
        image: 'images/portrait-1.jpg',
        description: 'Professional studio portrait session',
        date: '2025-07-01',
        location: 'Studio A',
        client: 'John Smith',
        equipment: 'Canon R5'
    },
    {
        id: 3,
        title: 'Corporate Conference',
        category: 'event',
        image: 'images/event-1.jpg',
        description: 'Annual corporate conference coverage',
        date: '2025-07-15',
        location: 'Convention Center',
        client: 'Tech Corp',
        equipment: 'Nikon Z6'
    },
    {
        id: 4,
        title: 'Garden Wedding',
        category: 'wedding',
        image: 'images/wedding-1.jpg',
        description: 'Intimate garden wedding ceremony',
        date: '2025-08-01',
        location: 'Botanical Gardens',
        client: 'Emma & Michael',
        equipment: 'Sony A7IV'
    },
    {
        id: 5,
        title: 'Family Portrait',
        category: 'portrait',
        image: 'images/portrait-1.jpg',
        description: 'Multi-generational family session',
        date: '2025-08-05',
        location: 'City Park',
        client: 'Johnson Family',
        equipment: 'Canon R5'
    },
    {
        id: 6,
        title: 'Product Launch',
        category: 'event',
        image: 'images/event-1.jpg',
        description: 'New product launch event',
        date: '2025-08-10',
        location: 'Downtown Gallery',
        client: 'Innovation Inc',
        equipment: 'Nikon Z6'
    },
    {
        id: 7,
        title: 'Beach Wedding',
        category: 'wedding',
        image: 'images/wedding-1.jpg',
        description: 'Destination beach wedding',
        date: '2025-08-15',
        location: 'Hawaii Beach',
        client: 'Lisa & David',
        equipment: 'Sony A7IV'
    },
    {
        id: 8,
        title: 'Graduate Portraits',
        category: 'portrait',
        image: 'images/portrait-1.jpg',
        description: 'University graduation session',
        date: '2025-08-20',
        location: 'University Campus',
        client: 'Class of 2025',
        equipment: 'Canon R5'
    },
    {
        id: 9,
        title: 'Charity Gala',
        category: 'event',
        image: 'images/event-1.jpg',
        description: 'Annual charity fundraiser',
        date: '2025-08-25',
        location: 'Grand Hotel',
        client: 'Hope Foundation',
        equipment: 'Nikon Z6'
    },
    {
        id: 10,
        title: 'Vineyard Wedding',
        category: 'wedding',
        image: 'images/wedding-1.jpg',
        description: 'Rustic vineyard celebration',
        date: '2025-09-01',
        location: 'Wine Valley',
        client: 'Rachel & Tom',
        equipment: 'Sony A7IV'
    },
    {
        id: 11,
        title: 'Corporate Headshots',
        category: 'portrait',
        image: 'images/portrait-1.jpg',
        description: 'Executive team portraits',
        date: '2025-09-05',
        location: 'Office HQ',
        client: 'Global Corp',
        equipment: 'Canon R5'
    },
    {
        id: 12,
        title: 'Music Festival',
        category: 'event',
        image: 'images/event-1.jpg',
        description: 'Three-day music festival',
        date: '2025-09-10',
        location: 'City Park',
        client: 'Sound Wave Events',
        equipment: 'Nikon Z6'
    },
    {
        id: 13,
        title: 'Mountain Wedding',
        category: 'wedding',
        image: 'images/wedding-1.jpg',
        description: 'Scenic mountain ceremony',
        date: '2025-09-15',
        location: 'Mountain Resort',
        client: 'Kate & Peter',
        equipment: 'Sony A7IV'
    },
    {
        id: 14,
        title: 'Fashion Portraits',
        category: 'portrait',
        image: 'images/portrait-1.jpg',
        description: 'Editorial fashion shoot',
        date: '2025-09-20',
        location: 'Studio B',
        client: 'Style Magazine',
        equipment: 'Canon R5'
    },
    {
        id: 15,
        title: 'Tech Conference',
        category: 'event',
        image: 'images/event-1.jpg',
        description: 'Technology conference coverage',
        date: '2025-09-25',
        location: 'Tech Hub',
        client: 'Future Tech',
        equipment: 'Nikon Z6'
    }
]
// Portfolio filtering functionality
export function initPortfolio() {
    const portfolioGrid = document.querySelector('.portfolio-grid');
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    if (!portfolioGrid) return;

    // Initial load of all items
    renderPortfolioItems('all');

    // Add click event listeners to filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.dataset.category;
            
            // Update active button state
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Filter and render items
            renderPortfolioItems(category);
        });
    });

    // Function to render portfolio items based on category
    function renderPortfolioItems(category) {
        const filteredItems = category === 'all' 
            ? portfolioItems 
            : portfolioItems.filter(item => item.category === category);

        portfolioGrid.innerHTML = filteredItems.map(item => `
            <div class="portfolio-item" data-category="${item.category}" data-id="${item.id}">
                <img src="${item.image}" alt="${item.description}" loading="lazy">
                <div class="portfolio-item__overlay">
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                </div>
            </div>
        `).join('');
    }
}
