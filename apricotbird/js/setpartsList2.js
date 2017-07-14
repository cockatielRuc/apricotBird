partsListName = new Array(
''
);
var partsListmnum = 1 * 8;

function partsList(){
    for (i=0; i<partsListmnum; i++){
        var noNum = i;
        var resetNum = ('000' + noNum).slice(-3);
        document.write('<dl class="itemBox triMdl" id="wdp'+resetNum+'" data-tgt="wdp'+resetNum+'">');
        document.write('<div class="itemMask">&nbsp;</div>');
        document.write('<dt><img src="/img/parts/parts'+resetNum+'_01.jpg" width="80" height="80"></dt>');
        document.write('<dd class="itemIcon"><img src="/img/icn_partsType0gy.png" width="16"></dd>');
        document.write('<dd class="itemNo">No.'+resetNum+'</dd>');
        document.write('</dl>');
    }
}
partsList();