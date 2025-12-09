document.addEventListener('DOMContentLoaded', function() {
 
  const phoneReversed = '987654321084+';  // Odwrócone: +48123456789
  const emailReversed = 'moc.elpmaxe@tkatnok';  // Odwrócone: kontakt@example.com
  
  // Odkoduj dane
  const phone = phoneReversed.split('').reverse().join('');
  const email = emailReversed.split('').reverse().join('');
  
  // Ustaw telefon we wszystkich miejscach
  document.querySelectorAll('[data-phone]').forEach(el => {
    if (el.tagName === 'A') {
      el.href = 'tel:' + phone;
    }
    el.textContent = phone;
  });
  
  // Ustaw email we wszystkich miejscach
  document.querySelectorAll('[data-email]').forEach(el => {
    if (el.tagName === 'A') {
      el.href = 'mailto:' + email;
    }
    el.textContent = email;
  });
  
  // ========== MOBILE MENU ==========
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

  // Close mobile menu when clicking a link
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
    });
  });

  // ========== FOOTER YEAR ==========
  document.getElementById('footer-year').textContent = new Date().getFullYear();
});