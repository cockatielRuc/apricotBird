// parts Nav
jQuery(function($){
    $("#partsThumBox001 img").bind("load",function(){
        var ImgHeight = $(this).height();
        $('#partsThumBox001').css('height',ImgHeight);
    });
    
    $('#partsNav001 a').click(function(){
        if($(this).hasClass('over') == false){
            $('#partsNav001 a').removeClass('over');
            $(this).addClass('over');
            $('#partsThumBox001 img').hide().attr('src',$(this).attr('href')).fadeIn();
        };
        return false;
    }).filter(':eq(0)').click();
});

jQuery(function($){
    $("#partsThumBox002 img").bind("load",function(){
        var ImgHeight = $(this).height();
        $('#partsThumBox002').css('height',ImgHeight);
    });
    
    $('#partsNav002 a').click(function(){
        if($(this).hasClass('over') == false){
            $('#partsNav002 a').removeClass('over');
            $(this).addClass('over');
            $('#partsThumBox002 img').hide().attr('src',$(this).attr('href')).fadeIn();
        };
        return false;
    }).filter(':eq(0)').click();
});

jQuery(function($){
    $("#partsThumBox003 img").bind("load",function(){
        var ImgHeight = $(this).height();
        $('#partsThumBox003').css('height',ImgHeight);
    });
    
    $('#partsNav003 a').click(function(){
        if($(this).hasClass('over') == false){
            $('#partsNav003 a').removeClass('over');
            $(this).addClass('over');
            $('#partsThumBox003 img').hide().attr('src',$(this).attr('href')).fadeIn();
        };
        return false;
    }).filter(':eq(0)').click();
});

jQuery(function($){
    $("#partsThumBox004 img").bind("load",function(){
        var ImgHeight = $(this).height();
        $('#partsThumBox004').css('height',ImgHeight);
    });
    
    $('#partsNav004 a').click(function(){
        if($(this).hasClass('over') == false){
            $('#partsNav004 a').removeClass('over');
            $(this).addClass('over');
            $('#partsThumBox004 img').hide().attr('src',$(this).attr('href')).fadeIn();
        };
        return false;
    }).filter(':eq(0)').click();
});