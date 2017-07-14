$(document).ready(function(){
    $('.partsMask').mouseover(function(){
    $(this).css('opacity','0');
    }).mouseout(function(){
    $(this).css('opacity','0.5');
    });
});


partsListName = new Array(
''
);
var partsListmnum = 1 * 8;

function partsList(){
    for (i=0; i<partsListmnum; i++){
        var noNum = i;
        var resetNum = ('000' + noNum).slice(-3);
        document.write('<a href="/html/parts/parts'+resetNum+'.html">');
        document.write('<dl class="partsBox triMdl" id="wdp'+resetNum+'" data-tgt="wdp'+resetNum+'">');
        document.write('<div class="partsMask">&nbsp;</div>');
        document.write('<dt><img src="/img/parts/parts'+resetNum+'_01.jpg" width="80" height="80"></dt>');
        document.write('<dd class="partsIcon"><img src="/img/icn/icn_partsType0gy.png" width="16"></dd>');
        document.write('<dd class="partsNo">No.'+resetNum+'</dd>');
        document.write('</dl>');
        document.write('</a>');
    }
}
partsList();