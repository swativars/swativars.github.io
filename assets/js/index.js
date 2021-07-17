$("[data-trigger]").on("click", function () {
    var trigger_id = $(this).attr('data-trigger');
    $(trigger_id).toggleClass("show");
    $('html').toggleClass("offcanvas-active");
    $('html').css('overflow', 'hidden');
});

// close button 
$(".btn-close").click(function (e) {
    if (e.target.parentNode.className !== 'navbar-toggler') {
        $(".navbar-collapse").removeClass("show");
        $("html").removeClass("offcanvas-active");
        $('html').css('overflow', 'auto');
    }
});
var html = document.querySelector('html');
window.onclick = function (e) {
    if (e.target === html) {
        $(".navbar-collapse").removeClass("show");
        $("html").removeClass("offcanvas-active");
        $('html').css('overflow', 'auto');
    }
}
$(document).ready(function () {
    $("#demo").carousel({ interval: false });
});
console.log("here")
function displayCarousel() {
    document.getElementsByClassName('imageCarousel')[0].style.display = "block";
}
function closeCarousel() {
    document.getElementsByClassName('imageCarousel')[0].style.display = "none";
}