function loadContent(section) {
    // Menggunakan fetch untuk memuat file HTML dinamis ke dalam div dengan id="main-content"
    fetch(section + ".html")
      .then(response => response.text())
      .then(data => {
        document.getElementById('main-content').innerHTML = data;
      })
      .catch(error => {
        document.getElementById('main-content').innerHTML = "<h1>Error</h1><p>Sorry, the content could not be loaded.</p>";
      });

    // Mengubah kelas aktif pada menu navbar
    let navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => link.classList.remove('active'));
    document.querySelector(`.nav-link[onclick="loadContent('${section}')"]`).classList.add('active');
  }