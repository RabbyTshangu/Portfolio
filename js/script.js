// Navigation et interactions modernes
document.addEventListener('DOMContentLoaded', function() {
  // Navigation mobile
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', function() {
      const isActive = hamburger.classList.toggle('active');
      // ensure navMenu matches same state
      if (isActive) {
        navMenu.classList.add('active');
      } else {
        navMenu.classList.remove('active');
      }
      hamburger.setAttribute('aria-expanded', String(isActive));
    });

    // Fermer le menu mobile au clic sur un lien
    const navLinks = navMenu.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });

    // Fermer le menu mobile au clic en dehors
    document.addEventListener('click', function(e) {
      if (!e.target.closest('.navbar') && !e.target.closest('.nav-menu') && !e.target.closest('.hamburger')) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Navigation active au scroll
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  function updateActiveNavLink() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 100;
      const sectionId = section.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', updateActiveNavLink);
  updateActiveNavLink(); // Initial call

  // Animation d'entrée des éléments au scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in-up');
      }
    });
  }, observerOptions);

  // Observer les éléments à animer
  document.querySelectorAll('.skill-card, .project-card, .contact-item, .about-content, .stats').forEach(el => {
    observer.observe(el);
  });

  // Formulaire de contact avec Formspree
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      // Ne pas empêcher la soumission par défaut - Formspree gère l'envoi
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;

      // Animation de soumission
      submitBtn.textContent = 'Envoi en cours...';
      submitBtn.disabled = true;

      // Formspree gère automatiquement la soumission
      // Après soumission réussie, Formspree redirige vers une page de confirmation
      // ou affiche un message de succès

      // Reset du bouton après un délai (au cas où)
      setTimeout(() => {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
      }, 5000);
    });
  }

  // Effet de parallaxe subtil sur le hero
  window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const heroSection = document.querySelector('.hero-section');

    if (heroSection) {
      const rate = scrolled * -0.5;
      heroSection.style.transform = `translateY(${rate}px)`;
    }
  });

  // Animation des barres de progression des compétences
  const skillCards = document.querySelectorAll('.skill-card');
  const skillsObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const progressBar = entry.target.querySelector('.progress-bar');
        if (progressBar) {
          const width = progressBar.style.width;
          progressBar.style.width = '0%';
          setTimeout(() => {
            progressBar.style.width = width;
          }, 200);
        }
      }
    });
  }, { threshold: 0.5 });

  skillCards.forEach(card => {
    skillsObserver.observe(card);
  });

  // Préloader (optionnel)
  window.addEventListener('load', function() {
    const preloader = document.querySelector('.preloader');
    if (preloader) {
      preloader.style.opacity = '0';
      setTimeout(() => {
        preloader.style.display = 'none';
      }, 300);
    }
  });

  // Gestion du thème sombre/clair (optionnel - peut être ajouté plus tard)
  // const themeToggle = document.querySelector('.theme-toggle');
  // if (themeToggle) {
  //   themeToggle.addEventListener('click', function() {
  //     document.body.classList.toggle('dark-theme');
  //     localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light');
  //   });
  // }

  // Initialisation du thème sauvegardé
  // const savedTheme = localStorage.getItem('theme');
  // if (savedTheme === 'dark') {
  //   document.body.classList.add('dark-theme');
  // }

    // --- Lightbox / Galerie minimale ---
    function createLightbox() {
      let lb = document.querySelector('.lightbox');
      if (lb) return lb;
      lb = document.createElement('div');
      lb.className = 'lightbox';
      lb.innerHTML = `
        <div class="lightbox-inner">
          <button class="lightbox-close" aria-label="Fermer">×</button>
          <img class="lightbox-img" src="" alt="">
          <div class="lightbox-caption"></div>
        </div>`;
      document.body.appendChild(lb);
      return lb;
    }

    function openLightbox(href, caption) {
      const lb = createLightbox();
      lb.classList.add('active');
      const img = lb.querySelector('.lightbox-img');
      const cap = lb.querySelector('.lightbox-caption');
      img.src = href;
      img.alt = caption || '';
      cap.textContent = caption || '';
    }

    function closeLightbox() {
      const lb = document.querySelector('.lightbox');
      if (!lb) return;
      lb.classList.remove('active');
      const img = lb.querySelector('.lightbox-img');
      if (img) img.src = '';
    }

    document.addEventListener('click', function(e) {
      const target = e.target;
      // click on gallery link
      if (target.matches('.gallery a') || target.closest('.gallery a')) {
        e.preventDefault();
        const a = target.closest('a');
        const href = a.getAttribute('href');
        const fig = a.closest('figure');
        const caption = fig ? (fig.querySelector('figcaption') ? fig.querySelector('figcaption').textContent : '') : '';
        openLightbox(href, caption);
        return;
      }

      // close buttons or outside click
      if (target.matches('.lightbox') || target.matches('.lightbox-close') || target.closest('.lightbox-close')) {
        closeLightbox();
      }
    });

    // close on Esc
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') closeLightbox();
    });

});
