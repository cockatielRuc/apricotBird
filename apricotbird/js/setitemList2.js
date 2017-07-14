itemListName = new Array(
'',
'icn/icn_itemTypePyw',/*001*/
'icn/icn_itemTypePpk',/*002*/
'icn/icn_itemTypePpk',/*003*/
'icn/icn_itemTypeBpu',/*004*/
'icn/icn_itemTypeBge',/*005*/
'icn/icn_itemTypeBrd',/*006*/
'icn/icn_itemTypeOgy',/*007*/
'icn/icn_itemTypeOgy',/*008*/
'icn/icn_itemTypeOgy',/*009*/
'icn/icn_itemTypeRsv',/*010*/
'icn/icn_itemTypePrd',/*011*/
'icn/icn_itemTypeNsv',/*012*/
'icn/icn_itemTypeNbu',/*013*/
'icn/icn_itemTypeNbl',/*014*/
'icn/icn_itemTypeNbu',/*015*/
'icn/icn_itemTypeBbr',/*016*/
'icn/icn_itemTypePgl',/*017*/
'icn/icn_itemTypePgl',/*018*/
'icn/icn_itemTypePsv',/*019*/
'icn/icn_itemTypePsv',/*020*/
'icn/icn_itemTypePpk',/*021*/
'icn/icn_itemTypePge',/*022*/
'icn/icn_itemTypePbu',/*023*/
'icn/icn_itemTypePpk',/*024*/
'icn/icn_itemTypePge',/*025*/
'icn/icn_itemTypePbu',/*026*/
'icn/icn_itemTypePpk',/*027*/
'icn/icn_itemTypePge',/*028*/
'icn/icn_itemTypePbu',/*029*/
'icn/icn_itemTypePrd',/*030*/
'icn/icn_itemTypePbu',/*031*/
'icn/icn_itemTypePyw',/*032*/
'icn/icn_itemTypePgy',/*033*/
'icn/icn_itemTypeBpk',/*034*/
'icn/icn_itemTypeBge',/*035*/
'icn/icn_itemTypeByw',/*036*/
'icn/icn_itemTypeBpk',/*037*/
'icn/icn_itemTypeBbu',/*038*/
'icn/icn_itemTypeBGe',/*039*/
'icn/icn_itemTypePgy'/*040*/
);
mnum = 1 * 41;

function itemList(){
    for (i=0; i<mnum; i++){
        var noNum = i;
        var resetNum = ('000' + noNum).slice(-3);
        document.write('<dl class="itemBox triMdl" id="wdi'+resetNum+'" data-tgt="wdi'+resetNum+'">');
        document.write('<div class="itemMask">&nbsp;</div>');
        document.write('<dt><img src="/img/item/item'+resetNum+'_01.jpg" width="80" height="80"></dt>');
        document.write('<dd class="itemIcon"><img src="/img/'+itemListName[i]+'.png" width="20"></dd>');
        document.write('<dd class="itemNo">No.'+resetNum+'</dd>');
        document.write('</dl>');
    }
}
itemList();