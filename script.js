// script.js - For Portfolio Interactivity

document.addEventListener('DOMContentLoaded', function() {
  // Simple lightbox for gallery images
  const galleryItems = document.querySelectorAll('.gallery-item');
  galleryItems.forEach(item => {
    item.addEventListener('click', function() {
      // Basic lightbox: create overlay and show image
      const overlay = document.createElement('div');
      overlay.style.position = 'fixed';
      overlay.style.top = '0';
      overlay.style.left = '0';
      overlay.style.width = '100%';
      overlay.style.height = '100%';
      overlay.style.background = 'rgba(0,0,0,0.8)';
      overlay.style.display = 'flex';
      overlay.style.alignItems = 'center';
      overlay.style.justifyContent = 'center';
      overlay.style.zIndex = '1000';
      overlay.style.cursor = 'pointer';
      
      const img = document.createElement('img');
      img.src = this.src;
      img.style.maxWidth = '90%';
      img.style.maxHeight = '90%';
      overlay.appendChild(img);
      
      document.body.appendChild(overlay);
      overlay.addEventListener('click', () => overlay.remove());
    });
  });
  
  // Form submission
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Message sent! (Simulated)');
    });
  }
  
  console.log('Portfolio script loaded.');
});