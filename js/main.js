document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const container = entry.target;
        // Find all cascade items anywhere inside this entire section
        const items = container.querySelectorAll('.cascade-item');
        
        items.forEach((item, index) => {
          item.style.setProperty('--i', index);
          item.classList.add('is-visible');
        });
        
        observer.unobserve(container); 
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: "0px 0px 50px 0px"
  });

  // Target all <section> elements, plus any global wrappers that sit outside sections
  const sections = document.querySelectorAll('section, .carousel-container');
  sections.forEach((section) => {
    observer.observe(section);
  });
});