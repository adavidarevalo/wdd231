# Chamber of Commerce Website

A modern, responsive website for a Chamber of Commerce organization built with HTML, CSS, and JavaScript.

## Features

### ✅ Completed Requirements

1. **Page Audit** - No errors reported
2. **Web Design Principles** - Adheres to proximity, alignment, and repetition principles
3. **Lighthouse Test** - Optimized for 95+ scores in Accessibility, Best Practices, and SEO
4. **Color Contrast** - AA level compliance achieved
5. **File and Folder Naming** - Follows proper naming conventions
6. **Navigation & Wayfinding** - Responsive navigation with proper wayfinding
7. **Page Weight** - Optimized to under 500 kB on initial load
8. **Form Field Requirements** - All required fields with proper attributes
9. **Title Pattern** - Pattern validation for organizational title (7+ alpha characters, hyphens, spaces)
10. **Email Placeholder** - Example email address in placeholder
11. **Membership Level** - Dropdown selection for membership levels
12. **Modal** - HTML modals for each membership level with benefits
13. **Date Timestamp** - Hidden field with form load timestamp
14. **Thank You Page** - Displays submitted information with site design consistency
15. **Animation/Transition** - Smooth animations on membership cards (not hover-activated)

## Pages

- **Home** (`index.html`) - Main landing page with hero section, events, weather, and member spotlights
- **Discover** (`discover.html`) - Community information, demographics, attractions, and visit counter
- **Directory** (`directory.html`) - Business directory with grid/list view toggle
- **Join** (`join.html`) - Membership application form with modals
- **Thank You** (`thankyou.html`) - Confirmation page after form submission

## Technologies Used

- HTML5 with semantic markup
- CSS3 with custom properties and responsive design
- Vanilla JavaScript (ES6+)
- Local Storage for visit tracking
- OpenWeatherMap API for weather data
- Google Fonts (Roboto)

## File Structure

```
chamber/
├── css/
│   ├── styles.css      # Main styles
│   ├── home.css        # Home page styles
│   └── discover.css    # Discover page styles
├── js/
│   ├── script.js       # Shared functionality
│   ├── home.js         # Home page logic
│   ├── join.js         # Join form logic
│   ├── thankyou.js     # Thank you page logic
│   └── discover.js     # Discover page logic
├── data/
│   └── members.json    # Business directory data
├── images/
│   ├── hero-large.jpg  # Hero image
│   ├── hero-small.jpg  # Small hero image
│   └── favicon.ico     # Site favicon
├── index.html          # Home page
├── discover.html       # Discover page
├── directory.html      # Directory page
├── join.html          # Join page
├── thankyou.html      # Thank you page
└── README.md          # This file
```

## Accessibility Features

- Semantic HTML structure
- Proper heading hierarchy
- Alt text for images
- ARIA labels where needed
- Keyboard navigation support
- High color contrast ratios
- Screen reader friendly

## Performance Optimizations

- Optimized images
- Minified CSS and JavaScript
- Efficient DOM manipulation
- Lazy loading for images
- Responsive design for all devices

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Setup Instructions

1. Clone or download the project
2. Open `index.html` in a web browser
3. For local development, use a local server:
   ```bash
   python3 -m http.server 8000
   ```
4. Navigate to `http://localhost:8000`

## API Keys Required

- OpenWeatherMap API key (for weather functionality)
  - Add your API key in `js/home.js` line 8

## Author

David Arevalo - WDD 231 Project
