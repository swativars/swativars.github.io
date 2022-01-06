document.onreadystatechange = function () {
    if (document.readyState !== "complete") {
        document.querySelector("body").style.visibility = "hidden";
        document.querySelector("#loader").style.visibility = "visible";
        document.documentElement.style.overflow = 'hidden';
    } else {
        document.querySelector("#loader").style.display = "none";
        document.querySelector("body").style.visibility = "visible";
        document.documentElement.style.overflow = 'auto';
    }
};

$("[data-trigger]").on("click", function () {
    console.log("bv jhhhhhhhhhhhhhhhhhh")
    var trigger_id = $(this).attr('data-trigger');
    $(trigger_id).addClass("show");
    console.log("fdfegrefge", trigger_id);
    $('html').addClass("offcanvas-active");
    $('html').css('overflow', 'hidden');
});

//close button
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