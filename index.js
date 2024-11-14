// Progress Bar
const progressBar = document.querySelector(".progress-bar");
window.addEventListener("scroll", () => {
  const windowHeight =
    document.documentElement.scrollHeight - window.innerHeight;
  const scrolled = (window.scrollY / windowHeight) * 100;
  progressBar.style.transform = `scaleX(${scrolled / 100})`;
});

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe elements with data-aos attribute
document.querySelectorAll("[data-aos]").forEach((element) => {
  element.style.opacity = "0";
  element.style.transform = "translateY(20px)";
  element.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  observer.observe(element);
});

// Add visible class for animation
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-aos]").forEach((element) => {
    element.classList.add("aos-init");
  });
});
// Custom Cursor
document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.querySelector('.cursor');
    const cursorOuter = document.querySelector('.cursor-outer');
    
    // Hide default cursor
    document.body.style.cursor = 'none';
    
    // Track mouse movement
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        
        cursorOuter.style.left = e.clientX + 'px';
        cursorOuter.style.top = e.clientY + 'px';
    });
    
    // Add hover effect for interactive elements
    const links = document.querySelectorAll('a, button, .project-card, .skill-card');
    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
            cursorOuter.style.transform = 'translate(-50%, -50%) scale(1.5)';
            cursor.style.backgroundColor = 'var(--violet-500)';
        });
        
        link.addEventListener('mouseleave', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
            cursorOuter.style.transform = 'translate(-50%, -50%) scale(1)';
            cursor.style.backgroundColor = 'var(--purple-500)';
        });
    });
    
    // Add cursor effects when clicking
    document.addEventListener('mousedown', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(0.8)';
        cursorOuter.style.transform = 'translate(-50%, -50%) scale(0.8)';
    });
    
    document.addEventListener('mouseup', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        cursorOuter.style.transform = 'translate(-50%, -50%) scale(1)';
    });
});

// Keep your existing progress bar and intersection observer code below...

// Helper class for animations
document.addEventListener("scroll", () => {
  document
    .querySelectorAll("[data-aos].aos-init:not(.visible)")
    .forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      const elementBottom = element.getBoundingClientRect().bottom;

      if (elementTop < window.innerHeight && elementBottom > 0) {
        element.style.opacity = "1";
        element.style.transform = "translateY(0)";
        element.classList.add("visible");
      }
    });
});
