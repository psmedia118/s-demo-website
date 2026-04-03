// Navigation JavaScript
document.addEventListener('DOMContentLoaded', function() {
    'use strict';
    
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const mobileOverlay = document.querySelector('.mobile-menu-overlay');
    const closeBtn = document.querySelector('.mobile-menu-close');
    const body = document.body;
    
    if (hamburger && mobileOverlay) {
        // Open mobile menu
        hamburger.addEventListener('click', function(e) {
            e.stopPropagation();
            mobileOverlay.classList.add('active');
            body.style.overflow = 'hidden';
        });
        
        // Close mobile menu function
        function closeMobileMenu() {
            mobileOverlay.classList.remove('active');
            body.style.overflow = '';
        }
        
        // Close button
        if (closeBtn) {
            closeBtn.addEventListener('click', closeMobileMenu);
        }
        
        // Close when clicking outside
        mobileOverlay.addEventListener('click', function(e) {
            if (e.target === mobileOverlay) {
                closeMobileMenu();
            }
        });
        
        // Close on escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && mobileOverlay.classList.contains('active')) {
                closeMobileMenu();
            }
        });
        
        // Close when clicking a link
        const mobileLinks = document.querySelectorAll('.mobile-menu a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', closeMobileMenu);
        });
    }
    
    // Active link highlighting based on current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.desktop-menu a, .mobile-menu a');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage) {
            link.classList.add('active');
        } else if (currentPage === 'index.html' && linkPage === 'index.html') {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});
