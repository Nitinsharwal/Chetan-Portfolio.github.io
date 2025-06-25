document
  .querySelector(".navbar-selector")
  .addEventListener("change", function () {
    const selectedValue = this.value;
    if (selectedValue) {
      window.location.href = selectedValue; 
    }
  });
  var typed = new Typed(".highlight", {
    strings: [
      "Python Developer",
      "Software Developer",
      "Data Engineer",
      "Backend Developer",
    ],
    typeSpeed: 100,  
    backSpeed: 50,   
    backDelay: 1000, 
    loop: true
  });

  function toggleSidebar() {
    var navbar = document.querySelector(".navbar-selector");
    if (window.innerWidth <= 768) { // Only toggle if screen width is small
        if (navbar.style.display === "none" || navbar.style.display === "") {
            navbar.style.display = "flex";
        } else {
            navbar.style.display = "none";
        }
    }
}

  
