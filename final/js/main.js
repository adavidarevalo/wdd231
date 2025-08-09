import { initPortfolio, portfolioItems } from './portfolio.js';
import { initModal, storage } from './modal.js';

// DOM Elements
const navToggle = document.querySelector('.nav__toggle');
const navMenu = document.querySelector('.nav__menu');

// Initialize modal
const modal = initModal();

// Handle portfolio item clicks
document.addEventListener('click', (e) => {
    const portfolioItem = e.target.closest('.portfolio-item');
    if (portfolioItem) {
        const itemId = parseInt(portfolioItem.dataset.id);
        const item = portfolioItems.find(i => i.id === itemId);
        if (item) {
            modal.show(item);
            
            // Save to local storage
            const recentlyViewed = storage.getFromLocalStorage('recentlyViewed') || [];
            recentlyViewed.unshift(item);
            if (recentlyViewed.length > 5) recentlyViewed.pop();
            storage.saveToLocalStorage('recentlyViewed', recentlyViewed);
        }
    }
});

// Toggle mobile menu
navToggle?.addEventListener('click', () => {
    navMenu?.classList.toggle('active');
    
    const hamburger = navToggle.querySelector('.hamburger');
    hamburger?.classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navToggle?.contains(e.target) && !navMenu?.contains(e.target)) {
        navMenu?.classList.remove('active');
        navToggle?.querySelector('.hamburger')?.classList.remove('active');
    }
});

// Initialize the portfolio functionality
initPortfolio();

// Handle Book Session button click
const bookSessionBtn = document.querySelector('.btn--primary');
bookSessionBtn?.addEventListener('click', () => {
    window.location.href = 'contact.html';
});

// Add smooth scrolling to all internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (!href) return;
        
        const target = document.querySelector(href);
        target?.scrollIntoView({
            behavior: 'smooth'
        });
    });
});
