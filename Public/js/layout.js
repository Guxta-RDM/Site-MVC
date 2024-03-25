window.addEventListener('scroll', function () {
    var footer = document.getElementById('#footer_main');
    var mainHeight = document.querySelector('#content_main').offsetHeight;
    var footerHeight = footer.offsetHeight;
    var scrollPosition = window.innerHeight + window.pageYOffset;

    if (scrollPosition >= mainHeight + footerHeight) {
        footer.style.display = 'block';
    } else {
        footer.style.display = 'none';
    }
});