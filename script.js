$(document).ready(function () {
    $(".container-imagem").click(function () {
        if ($(".active").length >= 1) {
            $(this).removeClass("active");
            $(this).css({ "z-index": "0" });
        } else {
            $(this).css({
                "z-index": "10",
                transition: "0.3s",
            });
            $(this).addClass("active");
        }
    });
    $(".container-imagem").mouseenter(function () {
        if (!$(".active").length >= 1) {
            $(this).css({
                transform: "scale(1.1)",
            });
        }
    });

    $(".container-imagem").mouseleave(function () {
        if (!$(".active").length >= 1) {
            $(this).css({
                transform: "scale(1)",
            });
        }
    });
});
