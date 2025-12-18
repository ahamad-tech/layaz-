// Mobile navigation toggle
const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');

if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = navToggle.classList.toggle('is-open');
    siteNav.classList.toggle('is-open', isOpen);
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  // Close menu when clicking a link (mobile)
  siteNav.addEventListener('click', (event) => {
    const target = event.target;
    if (target.matches('a') && window.innerWidth <= 768) {
      navToggle.classList.remove('is-open');
      siteNav.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });
}

// Smooth scrolling for internal links
document.addEventListener('click', (event) => {
  const target = event.target;
  if (target instanceof HTMLAnchorElement) {
    const href = target.getAttribute('href');
    if (href && href.startsWith('#') && href.length > 1) {
      const section = document.querySelector(href);
      if (section) {
        event.preventDefault();
        const top = section.getBoundingClientRect().top + window.pageYOffset - 80;
        window.scrollTo({
          top,
          behavior: 'smooth',
        });
      }
    }
  }
});


