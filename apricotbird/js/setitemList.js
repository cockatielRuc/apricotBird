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
'icn_itemTypePgy',/*040*/
'icn_itemTypeNbu',/*041*/
'icn_itemTypeNpk',/*042*/
'icn_itemTypeNyw',/*043*/
'icn_itemTypeNrd',/*044*/
'icn_itemTypeNbl',/*045*/
'icn_itemTypeNpu',/*046*/
'icn_itemTypeNgr',/*047*/
'icn_itemTypeNgr',/*048*/
'icn_itemTypeNbu',/*049*/
'icn_itemTypeNbu',/*050*/
'icn_itemTypeNpk',/*051*/
'icn_itemTypeNyw',/*052*/
'icn_itemTypeNbl',/*053*/
'icn_itemTypeNyw',/*054*/
'icn_itemTypeNyw',/*055*/
'icn_itemTypeNgr',/*056*/
'icn_itemTypeNrd',/*057*/
'icn_itemTypeNbu',/*058*/
'icn_itemTypeNor',/*059*/
'icn_itemTypeNsv',/*060*/
'icn_itemTypePrd',/*061*/
'icn_itemTypePbu',/*062*/
'icn_itemTypePyw',/*063*/
'icn_itemTypePbl',/*064*/
'icn_itemTypePyw',/*065*/
'icn_itemTypePyw',/*066*/
'icn_itemTypePpk',/*067*/
'icn_itemTypePpk',/*068*/
'icn_itemTypePpk',/*069*/
'icn_itemTypePpk',/*070*/
'icn_itemTypePpk',/*071*/
'icn_itemTypePrd',/*072*/
'icn_itemTypePrd',/*073*/
'icn_itemTypePrd',/*074*/
'icn_itemTypePor',/*075*/
'icn_itemTypePor',/*076*/
'icn_itemTypePyw',/*077*/
'icn_itemTypePpu',/*078*/
'icn_itemTypePpu',/*079*/
'icn_itemTypePpu',/*080*/
'icn_itemTypePpu',/*081*/
'icn_itemTypePpu',/*082*/
'icn_itemTypePpu',/*083*/
'icn_itemTypePpu',/*084*/
'icn_itemTypePsv',/*085*/
'icn_itemTypePsv',/*086*/
'icn_itemTypePsv',/*087*/
'icn_itemTypePge',/*088*/
'icn_itemTypePge',/*089*/
'icn_itemTypePge',/*090*/
'icn_itemTypePbu',/*091*/
'icn_itemTypePbu',/*092*/
'icn_itemTypePbu',/*093*/
'icn_itemTypePbu',/*094*/
'icn_itemTypePbu',/*095*/
'icn_itemTypeNbu',/*096*/
'icn_itemTypeBge',/*097*/
'icn_itemTypeNor',/*098*/
'icn_itemTypeNrd',/*099*/
'icn_itemTypeNpk',/*100*/
'icn_itemTypeNpk',/*101*/
'icn_itemTypeNgr',/*102*/
'icn_itemTypeBsv'/*103*/
);
mnum = 1 * 104;

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
'ear',/*040*/
'neck',/*041*/
'neck',/*042*/
'neck',/*043*/
'neck',/*044*/
'neck',/*045*/
'neck',/*046*/
'neck',/*047*/
'neck',/*048*/
'neck',/*049*/
'neck',/*050*/
'neck',/*051*/
'neck',/*052*/
'neck',/*053*/
'neck',/*054*/
'neck',/*055*/
'neck',/*056*/
'neck',/*057*/
'neck',/*058*/
'neck',/*059*/
'neck',/*060*/
'ear',/*061*/
'ear',/*062*/
'ear',/*063*/
'ear',/*064*/
'ear',/*065*/
'ear',/*066*/
'ear',/*067*/
'ear',/*068*/
'ear',/*069*/
'ear',/*070*/
'ear',/*071*/
'ear',/*072*/
'ear',/*073*/
'ear',/*074*/
'ear',/*075*/
'ear',/*076*/
'ear',/*077*/
'ear',/*078*/
'ear',/*079*/
'ear',/*080*/
'ear',/*081*/
'ear',/*082*/
'ear',/*083*/
'ear',/*084*/
'ear',/*085*/
'ear',/*086*/
'ear',/*087*/
'ear',/*088*/
'ear',/*089*/
'ear',/*090*/
'ear',/*091*/
'ear',/*092*/
'ear',/*093*/
'ear',/*094*/
'ear',/*095*/
'neck',/*096*/
'arm',/*097*/
'neck',/*098*/
'neck',/*099*/
'neck',/*100*/
'neck',/*101*/
'neck',/*102*/
'arm',/*103*/
);
mnum = 1 * 104;

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
