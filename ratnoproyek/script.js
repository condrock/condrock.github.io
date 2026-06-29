/**
 * RatnoProyek – script.js
 * Vanilla JS only. No dependencies.
 */

document.addEventListener('DOMContentLoaded', () => {
  /* =========================================================
     1. SELECTORS
     ========================================================= */
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('main section[id]');
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  const fadeEls = document.querySelectorAll('.fade-up');
  const statNums = document.querySelectorAll('.stat-num');
  const galeriGrid = document.getElementById('galeri-grid');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxClose = document.getElementById('lightbox-close');
  const lightboxPrev = document.getElementById('lightbox-prev');
  const lightboxNext = document.getElementById('lightbox-next');
  const backTop = document.getElementById('back-top');

   const galeriPhotos = [
    { src: 'https://i.pinimg.com/736x/27/6d/f3/276df3efac48b738021ec6436a95a64a.jpg', alt: 'RatnoProyek - Jasa renovasi rumah, desain interior, dan konstruksi profesional' },
    { src: 'https://i.pinimg.com/1200x/df/e4/55/dfe4558fc7987b8e3290e26cc1dacf5a.jpg', alt: 'RatnoProyek - Jasa renovasi rumah, desain interior, dan konstruksi profesional' },
    { src: 'https://i.pinimg.com/736x/dc/6b/2f/dc6b2f89f2e034a0b2d0d12ddbb52746.jpg', alt: 'RatnoProyek - Jasa renovasi rumah, desain interior, dan konstruksi profesional' },
    { src: 'https://i.pinimg.com/736x/a0/9b/1c/a09b1cfa35d15b2ab35b81bcbfe9e27e.jpg', alt: 'RatnoProyek - Jasa renovasi rumah, desain interior, dan konstruksi profesional' },
    { src: 'https://i.pinimg.com/1200x/c3/9f/1a/c39f1ab148446b12e8fa10f9f4c21ce9.jpg', alt: 'RatnoProyek - Jasa renovasi rumah, desain interior, dan konstruksi profesional' },
    { src: 'https://i.pinimg.com/736x/6d/1b/de/6d1bdeb5531c1d8afc72f7ead30c318d.jpg', alt: 'RatnoProyek - Jasa renovasi rumah, desain interior, dan konstruksi profesional' },
    { src: 'https://i.pinimg.com/736x/d9/da/7d/d9da7d1a36fc19352236d2f8fd031021.jpg', alt: 'RatnoProyek - Jasa renovasi rumah, desain interior, dan konstruksi profesional' },
    { src: 'https://i.pinimg.com/1200x/fd/ca/42/fdca425e7f3b097776565aad865c0c0f.jpg', alt: 'RatnoProyek - Jasa renovasi rumah, desain interior, dan konstruksi profesional' },
    { src: 'https://i.pinimg.com/1200x/b1/0d/12/b10d12b3053385f4365990dbd067bf92.jpg', alt: 'RatnoProyek - Jasa renovasi rumah, desain interior, dan konstruksi profesional' }
  ];

  let currentPhotoIdx = 0;

  /* =========================================================
     2. NAVBAR
     ========================================================= */
  function onScroll() {
    if (navbar) {
      navbar.classList.toggle('scrolled', window.scrollY > 20);
    }

    let current = '';
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 90) current = sec.id;
    });

    navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
    });

    if (backTop) {
      backTop.hidden = window.scrollY < 400;
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* =========================================================
     3. MOBILE MENU
     ========================================================= */
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      const isOpen = !mobileMenu.hidden;
      mobileMenu.hidden = isOpen;
      hamburger.classList.toggle('open', !isOpen);
      hamburger.setAttribute('aria-expanded', String(!isOpen));
    });

    document.querySelectorAll('.mobile-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.hidden = true;
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* =========================================================
     4. FADE UP
     ========================================================= */
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    fadeEls.forEach(el => io.observe(el));
  } else {
    fadeEls.forEach(el => el.classList.add('visible'));
  }

  /* =========================================================
     5. COUNTER
     ========================================================= */
  function animateCount(el) {
    const target = parseInt(el.dataset.target, 10) || 0;
    const duration = 1400;
    const start = performance.now();

    function step(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target);
      if (progress < 1) requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
  }

  if ('IntersectionObserver' in window) {
    const cio = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCount(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    statNums.forEach(el => cio.observe(el));
  } else {
    statNums.forEach(el => animateCount(el));
  }

  /* =========================================================
     6. GALLERY
     ========================================================= */
  function openLightbox(idx) {
    if (!lightbox || !lightboxImg) return;
    currentPhotoIdx = idx;
    lightboxImg.src = galeriPhotos[idx].src.replace('w=600', 'w=1200');
    lightboxImg.alt = galeriPhotos[idx].alt;
    lightbox.hidden = false;
    document.body.style.overflow = 'hidden';
    if (lightboxClose) lightboxClose.focus();
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.hidden = true;
    document.body.style.overflow = '';
  }

  function prevPhoto() {
    currentPhotoIdx = (currentPhotoIdx - 1 + galeriPhotos.length) % galeriPhotos.length;
    if (lightboxImg) {
      lightboxImg.src = galeriPhotos[currentPhotoIdx].src.replace('w=600', 'w=1200');
      lightboxImg.alt = galeriPhotos[currentPhotoIdx].alt;
    }
  }

  function nextPhoto() {
    currentPhotoIdx = (currentPhotoIdx + 1) % galeriPhotos.length;
    if (lightboxImg) {
      lightboxImg.src = galeriPhotos[currentPhotoIdx].src.replace('w=600', 'w=1200');
      lightboxImg.alt = galeriPhotos[currentPhotoIdx].alt;
    }
  }

  if (galeriGrid) {
    galeriPhotos.forEach((photo, idx) => {
      const item = document.createElement('div');
      item.className = 'galeri-item fade-up';
      item.style.setProperty('--delay', `${idx * 0.06}s`);
      item.setAttribute('role', 'listitem');
      item.setAttribute('tabindex', '0');
      item.setAttribute('aria-label', `Buka foto: ${photo.alt}`);

      const img = document.createElement('img');
      img.src = photo.src;
      img.alt = photo.alt;
      img.loading = 'lazy';
      img.width = 400;
      img.height = 300;

      item.appendChild(img);
      galeriGrid.appendChild(item);

      item.addEventListener('click', () => openLightbox(idx));
      item.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openLightbox(idx);
        }
      });
    });

    if ('IntersectionObserver' in window) {
      const io2 = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            obs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });

      document.querySelectorAll('.galeri-item.fade-up').forEach(el => io2.observe(el));
    } else {
      document.querySelectorAll('.galeri-item.fade-up').forEach(el => el.classList.add('visible'));
    }
  }

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxPrev) lightboxPrev.addEventListener('click', prevPhoto);
  if (lightboxNext) lightboxNext.addEventListener('click', nextPhoto);

  if (lightbox) {
    lightbox.addEventListener('click', e => {
      if (e.target === lightbox) closeLightbox();
    });
  }

  document.addEventListener('keydown', e => {
    if (!lightbox || lightbox.hidden) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') prevPhoto();
    if (e.key === 'ArrowRight') nextPhoto();
  });

  /* =========================================================
     7. BACK TO TOP
     ========================================================= */
  if (backTop) {
    backTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* =========================================================
     8. SMOOTH SCROLL
     ========================================================= */
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const href = link.getAttribute('href');
      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();
      const navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 68;
      const top = target.getBoundingClientRect().top + window.scrollY - navH;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
});