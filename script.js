document.addEventListener('DOMContentLoaded', () => {
    const icons = document.querySelectorAll('.plus-icon');
  
    icons.forEach(icon => {
      icon.addEventListener('click', function() {
        const answer = this.parentElement.nextElementSibling;
        
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
        
        this.src = this.src.includes('icon-plus.svg') ? './assets/images/icon-minus.svg' : './assets/images/icon-plus.svg';
      });
    });
  });
  