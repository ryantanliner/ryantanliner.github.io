// Back to Top Button
const backToTop = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTop.classList.add('visible');
  } else {
    backToTop.classList.remove('visible');
  }
});

backToTop.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Tab functionality
document.addEventListener('DOMContentLoaded', () => {
  const tabBtns = document.querySelectorAll('.tab-btn');
  const courseContainers = document.querySelectorAll('.course-container');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active class from all buttons
      tabBtns.forEach(b => b.classList.remove('active'));
      // Add active class to clicked button
      btn.classList.add('active');

      // Hide all course containers
      courseContainers.forEach(container => {
        container.classList.add('hidden');
      });

      // Show selected container
      const targetId = `${btn.dataset.tab}-courses`;
      document.getElementById(targetId).classList.remove('hidden');
    });
  });
});

// Add this JavaScript
document.addEventListener('DOMContentLoaded', () => {
  const showMoreBtn = document.querySelector('.show-more-btn');
  const hiddenProjects = document.querySelectorAll('.project-card.hidden');
  const btnText = document.querySelector('.show-more-text');

  showMoreBtn.addEventListener('click', () => {
    hiddenProjects.forEach(project => {
      project.classList.toggle('hidden');
    });

    showMoreBtn.classList.toggle('active');
    btnText.textContent = showMoreBtn.classList.contains('active') ? 'Show Less' : 'Show More';
  });
});

