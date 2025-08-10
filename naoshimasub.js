
  // ====== Title Animation ======
  const elements = document.querySelectorAll('.title');
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.animate({
          opacity: [0, 1],
          transform: ['translateY(-180px)', 'translateY(0)']
        }, {
          duration: 400,
          fill: 'forwards'
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  elements.forEach(el => observer.observe(el));

  // ====== Timeline Animation ======
  const timelineElements = document.querySelectorAll('.timeline');
  timelineElements.forEach((el, i) => el.dataset.index = i);
  const timelineObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const index = Number(entry.target.dataset.index);
        entry.target.animate({
          opacity: [0, 1],
          transform: ['translateY(50px)', 'translateY(0)']
        }, {
          duration: 800,
          delay: index * 200,
          fill: 'forwards'
        });
        setTimeout(() => observer.unobserve(entry.target), 1000);
      }
    });
  }, { threshold: 0 });
  timelineElements.forEach(el => timelineObserver.observe(el));

// ====== PuraibasiTop Animation ======
const praibasiTopElements = document.querySelectorAll('.praibasitopdiv');
praibasiTopElements.forEach((el, i) => el.dataset.index = i);
const praibasiTopObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const index = Number(entry.target.dataset.index);
      entry.target.animate({
        opacity: [0, 1],
        transform: ['translateY(50px)', 'translateY(0)']
      }, {
        duration: 800,
        delay: index * 200,
        fill: 'forwards'
      });
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0 });
praibasiTopElements.forEach(el => praibasiTopObserver.observe(el));
