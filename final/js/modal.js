// Modal functionality
export function initModal() {
    const body = document.body;
    
    // Remove existing modal if it exists
    const existingModal = document.getElementById('photoModal');
    if (existingModal) {
        existingModal.remove();
    }
    
    // Create modal HTML
    const modalHTML = `
        <div id="photoModal" class="modal" role="dialog" aria-labelledby="modalTitle">
            <div class="modal-content">
                <div class="modal-header">
                    <h2 id="modalTitle"></h2>
                    <button class="modal-close" aria-label="Close modal">&times;</button>
                </div>
                <div class="modal-body">
                    <img id="modalImage" src="" alt="">
                    <div class="modal-details">
                        <p id="modalDescription"></p>
                        <div id="modalInfo"></div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Insert modal into DOM
    body.insertAdjacentHTML('beforeend', modalHTML);
    
    const modal = document.getElementById('photoModal');
    const closeBtn = modal.querySelector('.modal-close');
    
    // Close modal function
    function closeModal() {
        modal.classList.remove('show');
        body.style.overflow = '';
    }
    
    // Event listeners
    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
    
    // Close on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('show')) {
            closeModal();
        }
    });
    
    return {
        show: function(itemData) {
            if (!itemData) {
                console.error('No item data provided to modal');
                return;
            }

            const modalTitle = document.getElementById('modalTitle');
            const modalImage = document.getElementById('modalImage');
            const modalDescription = document.getElementById('modalDescription');
            const modalInfo = document.getElementById('modalInfo');
            
            if (!modalTitle || !modalImage || !modalDescription || !modalInfo) {
                console.error('Modal elements not found');
                return;
            }
            
            modalTitle.textContent = itemData.title || 'Untitled';
            modalImage.src = itemData.image || '';
            modalImage.alt = itemData.description || '';
            modalDescription.textContent = itemData.description || '';
            
            // Create detailed info HTML
            const infoHTML = [];
            if (itemData.date) infoHTML.push(`<p><strong>Date:</strong> ${itemData.date}</p>`);
            if (itemData.location) infoHTML.push(`<p><strong>Location:</strong> ${itemData.location}</p>`);
            if (itemData.client) infoHTML.push(`<p><strong>Client:</strong> ${itemData.client}</p>`);
            if (itemData.equipment) infoHTML.push(`<p><strong>Equipment:</strong> ${itemData.equipment}</p>`);
            
            modalInfo.innerHTML = infoHTML.join('');
            
            modal.classList.add('show');
            body.style.overflow = 'hidden';

            // Focus the close button for accessibility
            const closeBtn = modal.querySelector('.modal-close');
            if (closeBtn) {
                closeBtn.focus();
            }
        }
    };
}

// Local storage functionality
export const storage = {
    saveToLocalStorage: function(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
            return true;
        } catch (e) {
            console.error('Error saving to localStorage:', e);
            return false;
        }
    },
    
    getFromLocalStorage: function(key) {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : null;
        } catch (e) {
            console.error('Error reading from localStorage:', e);
            return null;
        }
    },
    
    removeFromLocalStorage: function(key) {
        try {
            localStorage.removeItem(key);
            return true;
        } catch (e) {
            console.error('Error removing from localStorage:', e);
            return false;
        }
    }
};
