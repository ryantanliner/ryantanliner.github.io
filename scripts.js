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

// Show more for projects 
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

