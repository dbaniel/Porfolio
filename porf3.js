$(document).ready(function () {
    $(window).mousemove(function (e) {
        var y = e.clientY;
        $(".hover-element").css("margin-top", y);
    });
    $("nav ul li a").mouseover(function () {
        var activeLinkId = $(this).attr("href");
    });
});

// this is for the mouseover animation