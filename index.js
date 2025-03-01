// window.addEventListener('scroll', () => {
//     const navbar = document.querySelector('.navbar');
//     const scrolled = window.scrollY > 50;

//     if (scrolled) {
//         navbar.classList.add('scrolled');
//     } else {
//         navbar.classList.remove('scrolled');
//     }
// });

// Hover effect for menu items
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.transition = 'all 0.3s ease';
    });

    link.addEventListener('mouseout', () => {
        link.style.transition = 'all 0.3s ease';
    });
});

// Get the navbar element
const navbar = document.getElementById('navbar');

// Add scroll event listener to change the navbar style on scroll
window.onscroll = function() {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled'); // Add class to change background color
  } else {
    navbar.classList.remove('scrolled'); // Remove class to revert back
  }
};
