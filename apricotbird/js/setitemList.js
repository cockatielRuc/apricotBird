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


// item Nav
jQuery(function($){
    $("#itemThumBox004 img").bind("load",function(){
        var ImgHeight = $(this).height();
        $('#itemThumBox004').css('height',ImgHeight);
    });
    
    $('#itemNav004 a').click(function(){
        if($(this).hasClass('over') == false){
            $('#itemNav004 a').removeClass('over');
            $(this).addClass('over');
            $('#itemThumBox004 img').hide().attr('src',$(this).attr('href')).fadeIn();
        };
        return false;
    }).filter(':eq(0)').click();
});

jQuery(function($){
    $("#itemThumBox005 img").bind("load",function(){
        var ImgHeight = $(this).height();
        $('#itemThumBox005').css('height',ImgHeight);
    });
    
    $('#itemNav005 a').click(function(){
        if($(this).hasClass('over') == false){
            $('#itemNav005 a').removeClass('over');
            $(this).addClass('over');
            $('#itemThumBox005 img').hide().attr('src',$(this).attr('href')).fadeIn();
        };
        return false;
    }).filter(':eq(0)').click();
});

jQuery(function($){
    $("#itemThumBox006 img").bind("load",function(){
        var ImgHeight = $(this).height();
        $('#itemThumBox006').css('height',ImgHeight);
    });
    
    $('#itemNav006 a').click(function(){
        if($(this).hasClass('over') == false){
            $('#itemNav006 a').removeClass('over');
            $(this).addClass('over');
            $('#itemThumBox006 img').hide().attr('src',$(this).attr('href')).fadeIn();
        };
        return false;
    }).filter(':eq(0)').click();
});

jQuery(function($){
    $("#itemThumBox010 img").bind("load",function(){
        var ImgHeight = $(this).height();
        $('#itemThumBox010').css('height',ImgHeight);
    });
    
    $('#itemNav010 a').click(function(){
        if($(this).hasClass('over') == false){
            $('#itemNav010 a').removeClass('over');
            $(this).addClass('over');
            $('#itemThumBox010 img').hide().attr('src',$(this).attr('href')).fadeIn();
        };
        return false;
    }).filter(':eq(0)').click();
});

jQuery(function($){
    $("#itemThumBox011 img").bind("load",function(){
        var ImgHeight = $(this).height();
        $('#itemThumBox011').css('height',ImgHeight);
    });
    
    $('#itemNav011 a').click(function(){
        if($(this).hasClass('over') == false){
            $('#itemNav011 a').removeClass('over');
            $(this).addClass('over');
            $('#itemThumBox011 img').hide().attr('src',$(this).attr('href')).fadeIn();
        };
        return false;
    }).filter(':eq(0)').click();
});

jQuery(function($){
    $("#itemThumBox013 img").bind("load",function(){
        var ImgHeight = $(this).height();
        $('#itemThumBox013').css('height',ImgHeight);
    });
    
    $('#itemNav013 a').click(function(){
        if($(this).hasClass('over') == false){
            $('#itemNav013 a').removeClass('over');
            $(this).addClass('over');
            $('#itemThumBox013 img').hide().attr('src',$(this).attr('href')).fadeIn();
        };
        return false;
    }).filter(':eq(0)').click();
});

jQuery(function($){
    $("#itemThumBox014 img").bind("load",function(){
        var ImgHeight = $(this).height();
        $('#itemThumBox014').css('height',ImgHeight);
    });
    
    $('#itemNav014 a').click(function(){
        if($(this).hasClass('over') == false){
            $('#itemNav014 a').removeClass('over');
            $(this).addClass('over');
            $('#itemThumBox014 img').hide().attr('src',$(this).attr('href')).fadeIn();
        };
        return false;
    }).filter(':eq(0)').click();
});

jQuery(function($){
    $("#itemThumBox016 img").bind("load",function(){
        var ImgHeight = $(this).height();
        $('#itemThumBox016').css('height',ImgHeight);
    });
    
    $('#itemNav016 a').click(function(){
        if($(this).hasClass('over') == false){
            $('#itemNav016 a').removeClass('over');
            $(this).addClass('over');
            $('#itemThumBox016 img').hide().attr('src',$(this).attr('href')).fadeIn();
        };
        return false;
    }).filter(':eq(0)').click();
});