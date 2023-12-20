/*
* @Author: Alex Dong
* @Date:   2022-06-07 18:34:09
* @Last Modified by:   Alex Dong
* @Last Modified time: 2022-06-07 18:35:15
*/

var Alothemes = window.Alothemes || {};
Alothemes.custom =  Alothemes.custom || {};


Alothemes.custom.ClickShow = function(){
    $('.title-click-show').click(function (event) {
        event.preventDefault();

        if ($(this).parent().hasClass('active')) {
            $(this).parent().removeClass('active');
            $(this).parent().find('.content-click-show').slideUp();
        }

        else{
            $('.parent-click-show').removeClass('active');
            $(this).parent().addClass('active');
            $('.content-click-show').slideUp();
            $(this).parent().find('.content-click-show').slideDown();
        }
    });
}();