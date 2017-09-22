$(document).ready(function(){
    $('.itemMask').mouseover(function(){
    $(this).css('opacity','0');
    }).mouseout(function(){
    $(this).css('opacity','0.5');
    });
});

itemListName = new Array(
'',
'icn_itemTypePyw',/*001*/
'icn_itemTypePpk',/*002*/
'icn_itemTypePpk',/*003*/
'icn_itemTypeBpu',/*004*/
'icn_itemTypeBge',/*005*/
'icn_itemTypeBrd',/*006*/
'icn_itemTypeOgy',/*007*/
'icn_itemTypeOgy',/*008*/
'icn_itemTypeOgy',/*009*/
'icn_itemTypeRsv',/*010*/
'icn_itemTypePrd',/*011*/
'icn_itemTypeNsv',/*012*/
'icn_itemTypeNbu',/*013*/
'icn_itemTypeNbl',/*014*/
'icn_itemTypeNbu',/*015*/
'icn_itemTypeBbr',/*016*/
'icn_itemTypePgl',/*017*/
'icn_itemTypePgl',/*018*/
'icn_itemTypePsv',/*019*/
'icn_itemTypePsv',/*020*/
'icn_itemTypePpk',/*021*/
'icn_itemTypePge',/*022*/
'icn_itemTypePbu',/*023*/
'icn_itemTypePpk',/*024*/
'icn_itemTypePge',/*025*/
'icn_itemTypePbu',/*026*/
'icn_itemTypePpk',/*027*/
'icn_itemTypePge',/*028*/
'icn_itemTypePbu',/*029*/
'icn_itemTypePrd',/*030*/
'icn_itemTypePbu',/*031*/
'icn_itemTypePyw',/*032*/
'icn_itemTypePgy',/*033*/
'icn_itemTypeBpk',/*034*/
'icn_itemTypeBge',/*035*/
'icn_itemTypeByw',/*036*/
'icn_itemTypeBpk',/*037*/
'icn_itemTypeBbu',/*038*/
'icn_itemTypeBGe',/*039*/
'icn_itemTypePgy'/*040*/
);
mnum = 1 * 41;

itemListType = new Array(
'',
'ear',/*001*/
'ear',/*002*/
'ear',/*003*/
'arm',/*004*/
'arm',/*005*/
'arm',/*006*/
'ear',/*007*/
'ear',/*008*/
'ear',/*009*/
'arm',/*010*/
'ear',/*011*/
'neck',/*012*/
'neck',/*013*/
'neck',/*014*/
'neck',/*015*/
'arm',/*016*/
'ear',/*017*/
'ear',/*018*/
'ear',/*019*/
'ear',/*020*/
'ear',/*021*/
'ear',/*022*/
'ear',/*023*/
'ear',/*024*/
'ear',/*025*/
'ear',/*026*/
'ear',/*027*/
'ear',/*028*/
'ear',/*029*/
'ear',/*030*/
'ear',/*031*/
'ear',/*032*/
'ear',/*033*/
'arm',/*034*/
'arm',/*035*/
'arm',/*036*/
'arm',/*037*/
'arm',/*038*/
'arm',/*039*/
'ear'/*040*/
);
mnum = 1 * 41;

function itemList(){
    for (i=0; i<mnum; i++){
        var noNum = i;
        var resetNum = ('000' + noNum).slice(-3);
        document.write('<a href="/html/item/item'+resetNum+'.html">');
        document.write('<dl class="itemBox triMdl '+itemListType[i]+'" id="wdi'+resetNum+'" data-tgt="wdi'+resetNum+'">');
        document.write('<div class="itemMask">&nbsp;</div>');
        document.write('<dt><img src="/img/item/item'+resetNum+'_01.jpg" width="80" height="80"></dt>');
        document.write('<dd class="itemIcon"><img src="/img/icn/'+itemListName[i]+'.png" width="20"></dd>');
        document.write('<dd class="itemNo">No.'+resetNum+'</dd>');
        document.write('</dl>');
        document.write('</a>');
    }
}
itemList();
