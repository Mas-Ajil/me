
const navbarToggle = document.querySelector('.navbar-toggler');
const about= document.querySelector('#about'); 
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
const experience = document.querySelector('#experience'); 

navbarToggle.addEventListener('click', function() {
  about.classList.toggle('content-padding-about');
  
});




navLinks.forEach(link => {
    link.addEventListener('click', function() {
        // Hapus kelas active dari semua link
        navLinks.forEach(item => item.classList.remove('active'));
        // Tambahkan kelas active ke link yang diklik
        this.classList.add('active');
    });
});


