document.addEventListener('DOMContentLoaded', () => {
  // Select all FAQ items
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const header = item.querySelector('.faq-item__header');
    
    header.addEventListener('click', () => {
      // Check if the clicked item is currently active
      const isActive = item.classList.contains('is-active');

      // 1. Close all items first (Accordion behavior)
      faqItems.forEach(otherItem => {
        otherItem.classList.remove('is-active');
        const otherToggle = otherItem.querySelector('.faq-item__toggle');
        if (otherToggle) {
          otherToggle.innerHTML = '&plus;'; // Reset icon to Plus
        }
      });

      // 2. If the clicked item was NOT active, open it
      if (!isActive) {
        item.classList.add('is-active');
        const toggle = item.querySelector('.faq-item__toggle');
        if (toggle) {
          toggle.innerHTML = '&minus;'; // Set icon to Minus
        }
      }
    });
  });
});