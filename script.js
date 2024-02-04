const toggleBtn = document.querySelector('.toggle-btn')
      const toggleBtnIcon = document.querySelector('.toggle-btn i')
      const dropDownMenu = document.querySelector('.dropdown-menu')

      toggleBtn.onclick = function () {
        dropDownMenu.classList.toggle('open')
        const isOpen = dropDownMenu.classList.contains('open')

        toggleBtnIcon.classList = isOpen
        ? 'fa-solid fa-xmark'
        : 'fa-solid fa-bars'
      }

      window.onload = function() {
            document.body.style.zoom = "100%";
        };

        document.addEventListener('DOMContentLoaded', function () {
    var misalmText = document.querySelector('.misalmtext');
    var misalmElement = document.querySelector('.misalmeba');

    misalmElement.addEventListener('animationend', function () {
        misalmText.style.visibility = 'visible';
    });
});
