$(document).ready(function(){
    $('.itemMask').mouseover(function(){
    $(this).css('opacity','0');
    }).mouseout(function(){
    $(this).css('opacity','0.5');
    });
});


// Modal window
$(function(){
    $('.triMdl').click(function(){
        wn = '.' + $(this).data('tgt');
        var mW = $(wn).find('.modalBody').innerWidth() / 2;
        var mH = $(wn).find('.modalBody').innerHeight() / 2;
        $(wn).find('.modalBody').css({'margin-left':-mW,'margin-top':-mH});
        $(wn).fadeIn(500);
    });
    $('.closeBtn').click(function(){
        $(wn).fadeOut(500);
    });
});