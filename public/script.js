// ============================================
// InitCloud Landing Page — JavaScript
// ============================================

document.addEventListener('DOMContentLoaded', () => {

  // --- Navbar scroll effect ---
  const navbar = document.getElementById('navbar');

  const handleNavScroll = () => {
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleNavScroll, { passive: true });

  // --- Mobile menu toggle ---
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const navLinks = document.getElementById('nav-links');

  mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    mobileMenuBtn.classList.toggle('active');
  });

  // Close mobile menu on link click
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      mobileMenuBtn.classList.remove('active');
    });
  });

  // --- Smooth scroll for anchor links ---
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const navHeight = navbar.offsetHeight;
        const targetPosition = targetEl.getBoundingClientRect().top + window.scrollY - navHeight - 20;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // --- Scroll Reveal Animation ---
  const revealElements = document.querySelectorAll(
    '.service-card, .step-card, .provider-card, .stat-card, .why-list li, .cta-card'
  );

  revealElements.forEach(el => el.classList.add('reveal'));

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach((el, index) => {
    el.style.transitionDelay = `${index % 3 * 100}ms`;
    revealObserver.observe(el);
  });

  // --- Stagger animation for service cards ---
  const serviceCards = document.querySelectorAll('.service-card');
  const serviceObserver = new IntersectionObserver((entries) => {
    if (entries.some(e => e.isIntersecting)) {
      serviceCards.forEach((card, i) => {
        setTimeout(() => {
          card.classList.add('visible');
        }, i * 100);
      });
      serviceObserver.disconnect();
    }
  }, { threshold: 0.1 });

  if (serviceCards.length > 0) {
    serviceObserver.observe(serviceCards[0]);
  }

});
