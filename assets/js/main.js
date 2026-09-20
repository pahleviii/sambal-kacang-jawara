document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const currentPage = body.dataset.page || 'index';

  document.querySelectorAll('.navbar a, .mobile-menu-panel a').forEach((link) => {
    const href = link.getAttribute('href') || '';
    const pageName = href.split('/').pop().replace('.html', '') || 'index';
    if (pageName === currentPage) {
      link.classList.add('active');
    }
  });

  const mobileMenuBtn = document.querySelector('[data-menu-toggle]');
  const mobilePanel = document.querySelector('.mobile-menu-panel');
  if (mobileMenuBtn && mobilePanel) {
    mobileMenuBtn.addEventListener('click', () => {
      const isOpen = mobilePanel.classList.toggle('active');
      mobileMenuBtn.setAttribute('aria-expanded', String(isOpen));
    });
  }

  const revealElements = document.querySelectorAll('.hero-panel, .story-copy, .story-image, .product-card, .review-card, .page-hero-card, .info-tile, .process-step, .article-card, .featured-article, .side-article, .contact-panel, .form-panel, .map-card');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealElements.forEach((element) => {
    element.classList.add('reveal');
    observer.observe(element);
  });

  const parallaxTargets = document.querySelectorAll('.hero-visual, .media-frame, .story-image');
  let ticking = false;

  function updateParallax() {
    const viewportMiddle = window.innerHeight * 0.5;
    parallaxTargets.forEach((element) => {
      const rect = element.getBoundingClientRect();
      const speed = Number(element.dataset.speed || 0.12);
      const offset = (rect.top - viewportMiddle) * speed;
      element.style.setProperty('--parallax-shift', `${offset}px`);
    });
    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(updateParallax);
      ticking = true;
    }
  }, { passive: true });

  updateParallax();

  const waConfig = {
    phone: '6281234567890',
    defaultMessage: 'Halo Jawara, saya ingin pesan sambal kacang.'
  };

  document.querySelectorAll('[data-wa]').forEach((button) => {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      const message = button.dataset.wa || waConfig.defaultMessage;
      const encoded = encodeURIComponent(message);
      window.open(`https://wa.me/${waConfig.phone}?text=${encoded}`, '_blank', 'noopener,noreferrer');
    });
  });

  const forms = document.querySelectorAll('form[data-contact-form]');
  forms.forEach((form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const name = form.querySelector('input[name="name"]')?.value?.trim();
      const email = form.querySelector('input[name="email"]')?.value?.trim();
      const message = form.querySelector('textarea[name="message"]')?.value?.trim();
      const text = encodeURIComponent(
        `Halo Jawara, saya ${name || 'mau'} ingin bertanya.\nEmail: ${email || '-'}\nPesan: ${message || '-'}`
      );
      window.open(`https://wa.me/${waConfig.phone}?text=${text}`, '_blank', 'noopener,noreferrer');
    });
  });
});
