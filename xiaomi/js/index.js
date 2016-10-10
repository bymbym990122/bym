/**
 * Created by Administrator on 2016/10/9.
 */
/*ËÑË÷¿ò*/
$(function(){
    $(".navRight span,i").mouseenter(function() {
        $(this).siblings("p").children().addClass("cc").removeClass("gg");
    }).mouseleave(function() {
        $(this).siblings("p").children().removeClass("cc").addClass("gg");
    });
    $(".navRight p").eq(1).mouseenter(function() {
        $(this).siblings().addClass("cc").removeClass("gg");
    })
})












