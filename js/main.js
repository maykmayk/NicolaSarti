const _app = {};

document.addEventListener("DOMContentLoaded", function() {
    var menuIcons = document.querySelectorAll(".menu-icon");

    menuIcons.forEach(function(menuIcon) {
        menuIcon.addEventListener("click", function() {
          var col5Elements = document.querySelectorAll(".col-md-5");
          var col7Elements = document.querySelectorAll(".col-md-7");
      
          col5Elements.forEach(function(col5) {
            col5.classList.remove("d-none");
            col5.classList.add("d-block");
          });
      
          col7Elements.forEach(function(col7) {
            col7.classList.add("d-none");
            col7.classList.remove("d-block");
          });
      
          menuIcon.classList.add("d-none");
        });
      });
      
})

_app.startUp = () => {
};

_app.startUp();
