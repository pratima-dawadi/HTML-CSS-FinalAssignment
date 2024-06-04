document.getElementById('toggle-button').addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
    document.body.classList.toggle('light-theme');
    // Change the image source based on the theme
    var scrollImg = document.querySelector('.headerdown__scroll img');
    if (document.body.classList.contains('dark-theme')) {
        scrollImg.src = "images/srldown_dark.png"; // New image for dark theme
    } else {
        scrollImg.src = "images/srldown.png"; // Original image for light theme
    }

});
