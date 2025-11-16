const youwin = document.getElementById('勝利');let 勝利='YOU WIN!';youwin.textContent='';const tate1 = document.getElementById('縦1');let 縦1 = 0;tate1.textContent=縦1
const yoko1 = document.getElementById('横1'); let 横1 = 0;yoko1.textContent='';const turnn = document.getElementById('turn');let turn = 1;turnn.textContent=turn;
let 縦2 = 0;let 縦3 = 0;let 縦4 = 0;let 横2 = 0;let 横3 = 0;let 横4 = 0;let 斜1 = 0;let 斜2 = 0;
let m1=0;let m2=0;let m3=0;let m4=0;let m5=0;let m6=0;let m7=0;let m8=0;let m9=0;let m10=0;let m11=0;let m12=0;let m13=0;let m14=0;let m15=0;let m16=0;
let マス一 =0;let マス二 =0;let マス三 =0;let マス四 =0;let マス五 =0;let マス六 =0;let マス七 =0;let マス八 =0;let マス九 =0;let マス十 =0;
let マス十一 =0;let マス十二 =0;let マス十三 =0;let マス十四 =0;let マス十五 =0;let マス十六 =0;
const button = document.getElementById('に');button.textContent ='start'
const taitoru = document.getElementById('いち');let いち= '○×GAME';taitoru.textContent=いち;
const sikaku1 = document.getElementById('マス1');sikaku1.textContent='';const maru1 = document.getElementById('マル1');maru1.textContent='';
const sikaku2 = document.getElementById('マス2');sikaku2.textContent='';const maru2 = document.getElementById('マル2');maru2.textContent='';
const sikaku3 = document.getElementById('マス3');sikaku3.textContent='';const maru3 = document.getElementById('マル3');maru3.textContent='';
const sikaku4 = document.getElementById('マス4');sikaku4.textContent='';const maru4 = document.getElementById('マル4');maru4.textContent='';
const sikaku5 = document.getElementById('マス5');sikaku5.textContent='';const maru5 = document.getElementById('マル5');maru5.textContent='';
const sikaku6 = document.getElementById('マス6');sikaku6.textContent='';const maru6 = document.getElementById('マル6');maru6.textContent='';
const sikaku7 = document.getElementById('マス7');sikaku7.textContent='';const maru7 = document.getElementById('マル7');maru7.textContent='';
const sikaku8 = document.getElementById('マス8');sikaku8.textContent='';const maru8 = document.getElementById('マル8');maru8.textContent='';
const sikaku9 = document.getElementById('マス9');sikaku9.textContent='';const maru9 = document.getElementById('マル9');maru9.textContent='';
const sikaku10 = document.getElementById('マス10');sikaku10.textContent='';const maru10 = document.getElementById('マル10');maru10.textContent='';
const sikaku11 = document.getElementById('マス11');sikaku11.textContent='';const maru11 = document.getElementById('マル11');maru11.textContent='';
const sikaku12 = document.getElementById('マス12');sikaku12.textContent='';const maru12 = document.getElementById('マル12');maru12.textContent='';
const sikaku13 = document.getElementById('マス13');sikaku13.textContent='';const maru13 = document.getElementById('マル13');maru13.textContent='';
const sikaku14 = document.getElementById('マス14');sikaku14.textContent='';const maru14 = document.getElementById('マル14');maru14.textContent='';
const sikaku15 = document.getElementById('マス15');sikaku15.textContent='';const maru15 = document.getElementById('マル15');maru15.textContent='';
const sikaku16 = document.getElementById('マス16');sikaku16.textContent='';const maru16 = document.getElementById('マル16');maru16.textContent='';
const batsu1 = document.getElementById('バツ1');batsu1.textContent='';const batsu2 = document.getElementById('バツ2');batsu2.textContent='';
const batsu3 = document.getElementById('バツ3');batsu3.textContent='';const batsu4 = document.getElementById('バツ4');batsu4.textContent='';
const batsu5 = document.getElementById('バツ5');batsu5.textContent='';const batsu6 = document.getElementById('バツ6');batsu6.textContent='';
const batsu7 = document.getElementById('バツ7');batsu7.textContent='';const batsu8 = document.getElementById('バツ8');batsu8.textContent='';
const batsu9 = document.getElementById('バツ9');batsu9.textContent='';const batsu10 = document.getElementById('バツ10');batsu10.textContent='';
const batsu11 = document.getElementById('バツ11');batsu11.textContent='';const batsu12 = document.getElementById('バツ12');batsu12.textContent='';
const batsu13 = document.getElementById('バツ13');batsu13.textContent='';const batsu14 = document.getElementById('バツ14');batsu14.textContent='';
const batsu15 = document.getElementById('バツ15');batsu15.textContent='';const batsu16 = document.getElementById('バツ16');batsu16.textContent='';
button.onclick=function(){
    let マス1 = '□';sikaku1.textContent=マス1;let マス2 = '□';sikaku2.textContent=マス2;maru1.textContent='';maru3.textContent='';batsu1.textContent='';batsu9.textContent='';
    let マス3 = '□';sikaku3.textContent=マス3;let マス4 = '□';sikaku4.textContent=マス4;maru2.textContent='';maru4.textContent='';batsu2.textContent='';batsu10.textContent='';
    let マス5 = '□';sikaku5.textContent=マス5;let マス6 = '□';sikaku6.textContent=マス6;maru5.textContent='';maru6.textContent='';batsu3.textContent='';batsu11.textContent='';
    let マス7 = '□';sikaku7.textContent=マス7;let マス8 = '□';sikaku8.textContent=マス8;maru7.textContent='';maru8.textContent='';batsu4.textContent='';batsu12.textContent='';
    let マス9 = '□';sikaku9.textContent=マス9;let マス10 = '□';sikaku10.textContent=マス10;maru9.textContent='';maru10.textContent='';batsu5.textContent='';batsu13.textContent='';
    let マス11 = '□';sikaku11.textContent=マス11;let マス12 = '□';sikaku12.textContent=マス12;maru11.textContent='';maru12.textContent='';batsu6.textContent='';batsu14.textContent='';
    let マス13 = '□';sikaku13.textContent=マス13;let マス14 = '□';sikaku14.textContent=マス14;maru13.textContent='';maru14.textContent='';batsu7.textContent='';batsu15.textContent='';
    let マス15 = '□';sikaku15.textContent=マス15;let マス16 = '□';sikaku16.textContent=マス16;maru15.textContent='';maru16.textContent='';batsu8.textContent='';batsu16.textContent='';
    youwin.textContent='';
    taitoru.textContent=''; 縦1 = 0;tate1.textContent=縦1; 横1 = 0;yoko1.textContent=横1;横2 = 0;横3 = 0;横4 = 0;縦2 =0;縦3 = 0; 斜1 = 0; 斜2 = 0;turn = 1;縦4 = 0;
    マス一 =0;マス二 =0;マス三 =0;マス四 =0;マス五 =0;マス六 =0;マス七 =0;マス八 =0;マス九 =0;マス十 =0;
    マス十一 =0;マス十二 =0;マス十三 =0;マス十四 =0;マス十五 =0;マス十六 =0;
    button.textContent ='reset'}
    sikaku1.onclick=function(){ マス一 =1;
    sikaku1.textContent='';let マル1 = '○';maru1.textContent=マル1;
    縦1=縦1+1;  tate1.textContent=縦1;横1=横1+1;yoko1.textContent=横1;斜1=斜1+1;
    turn =turn-1;sikaku2.textContent='';let バツ2 = '×';batsu2.textContent=バツ2;
    if(マス四>=1){batsu2.textContent='';sikaku5.textContent='';let バツ5='×';batsu5.textContent=バツ5;let マス2 = '□';sikaku2.textContent=マス2;}
    if(マス三>=1){batsu2.textContent='';sikaku5.textContent='';let バツ5='×';batsu5.textContent=バツ5;let マス2 = '□';sikaku2.textContent=マス2;}
    if(マス二>=1){batsu2.textContent='';sikaku5.textContent='';let バツ5='×';batsu5.textContent=バツ5;sikaku2.textContent='';}
    if(横1>=7){sikaku4.textContent='';let バツ4 = '×';batsu4.textContent=バツ4;}if(横1>=8){batsu4.textContent='';}
    if(横1>=11){sikaku3.textContent='';let バツ3 = '×';batsu3.textContent=バツ3;batsu4.textContent='';}
    if(横1>=13){sikaku2.textContent='';let バツ2 = '×';batsu2.textContent=バツ2;batsu4.textContent='';batsu3.textContent='';}
    if(縦1>=7){sikaku13.textContent='';let バツ13 = '×';batsu13.textContent=バツ13;}if(縦1>=8){batsu13.textContent='';}
    if(縦1>=11){sikaku9.textContent='';let バツ9 = '×';batsu9.textContent=バツ9;batsu13.textContent='';}
    if(縦1>=13){sikaku5.textContent='';let バツ5 = '×';batsu5.textContent=バツ5;batsu13.textContent='';batsu9.textContent='';}
    if(斜1>=7){sikaku16.textContent='';let バツ16 = '×';batsu16.textContent=バツ16;}if(斜1>=8){batsu16.textContent='';}
    if(斜1>=11){sikaku11.textContent='';let バツ11 = '×';batsu11.textContent=バツ11;batsu16.textContent='';}
    if(斜1>=13){sikaku6.textContent='';let バツ6 = '×';batsu6.textContent=バツ6;batsu16.textContent='';batsu11.textContent='';}
    if(横1>=15){youwin.textContent=勝利;}if(縦1>=15){ youwin.textContent=勝利;}
    if(斜1>=15){youwin.textContent=勝利;}
    }
    sikaku2.onclick=function(){マス二 =1;
    sikaku2.textContent='';let マル2 = '○';maru2.textContent=マル2;
    縦2=縦2+1;横1=横1+2;yoko1.textContent=横1;
    sikaku1.textContent='';let バツ1 = '×';batsu1.textContent=バツ1;
    if(マス四>=1){batsu1.textContent='';sikaku6.textContent='';let バツ6 = '×';batsu6.textContent=バツ6;let マス1 = '□';sikaku1.textContent=マス1;}
    if(マス一>=1){batsu1.textContent='';sikaku3.textContent='';let バツ3 = '×';batsu3.textContent=バツ3;sikaku1.textContent='';}
    if(マス三>=1){batsu1.textContent='';batsu3.textContent='';sikaku6.textContent='';let バツ6 = '×';batsu6.textContent=バツ6;let マス1 = '□';sikaku1.textContent=マス1;}
    if(マス一>=1){sikaku1.textContent='';}
    if(横1>=15){youwin.textContent=勝利;}if(縦2>=15){ youwin.textContent=勝利}
    if(横1>=7){sikaku4.textContent='';let バツ4 = '×';batsu4.textContent=バツ4;}if(横1>=8){batsu4.textContent='';}
    if(横1>=11){sikaku3.textContent='';let バツ3 = '×';batsu3.textContent=バツ3;batsu4.textContent='';}
    if(横1>=14){sikaku1.textContent='';let バツ1 = '×';batsu1.textContent=バツ1;batsu4.textContent='';batsu3.textContent='';}
    if(縦2>=7){sikaku14.textContent='';let バツ14 = '×';batsu14.textContent=バツ14;batsu10.textContent='';batsu6.textContent=バツ6;}if(縦2>=8){batsu14.textContent='';}
    if(縦2>=11){sikaku10.textContent='';let バツ10 = '×';batsu10.textContent=バツ10;batsu14.textContent='';batsu6.textContent=バツ6;}
    if(縦2>=13){sikaku6.textContent='';let バツ6 = '×';batsu6.textContent=バツ6;batsu14.textContent='';batsu10.textContent='';}
    }
    sikaku3.onclick=function(){マス三 =1;
    sikaku3.textContent='';let マル3 = '○';maru3.textContent=マル3;
    縦3=縦3+1;横1=横1+4;yoko1.textContent=横1;
    sikaku4.textContent='';let バツ4 = '×';batsu4.textContent=バツ4;
    if(マス四>=1){batsu4.textContent='';sikaku7.textContent='';let バツ7 = '×';batsu7.textContent=バツ7;}
    if(マス二>=1){batsu4.textContent='';sikaku7.textContent='';let バツ7 = '×';batsu7.textContent=バツ7;let マス4 = '□';sikaku4.textContent=マス4;}
    if(マス一>=1){batsu4.textContent='';sikaku7.textContent='';let バツ7 = '×';batsu7.textContent=バツ7;let マス4 = '□';sikaku4.textContent=マス4;}
    if(マス七>=1){batsu7.textContent='';sikaku4.textContent='';let バツ4 = '×';batsu4.textContent=バツ4;}
    if(横1>=15){ youwin.textContent=勝利;}if(縦3>=15){ youwin.textContent=勝利;}
    if(横1>=7){sikaku4.textContent='';let バツ4 = '×';batsu4.textContent=バツ4;}if(横1>=8){batsu4.textContent='';}
    if(横1>=13){sikaku2.textContent='';let バツ2 = '×';batsu2.textContent=バツ2;batsu4.textContent='';}
    if(横1>=14){sikaku1.textContent='';let バツ1 = '×';batsu1.textContent=バツ1;batsu4.textContent='';batsu2.textContent='';}
    if(縦3>=7){sikaku15.textContent='';let バツ15 = '×';batsu15.textContent=バツ15;}if(縦3>=8){batsu15.textContent='';}
    if(縦3>=11){sikaku11.textContent='';let バツ11 = '×';batsu11.textContent=バツ11;batsu15.textContent='';}
    if(縦3>=13){sikaku7.textContent='';let バツ7 = '×';batsu7.textContent=バツ7;batsu15.textContent='';batsu11.textContent='';}
    }
    sikaku4.onclick=function(){マス四 =1;
    sikaku4.textContent='';let マル4 = '○';maru4.textContent=マル4;
    縦4=縦4+1;横1=横1+8;yoko1.textContent=横1;斜2=斜2+1;turn =turn-1;
    sikaku3.textContent='';let バツ3 = '×';batsu3.textContent=バツ3;
    if(マス二>=1){batsu3.textContent='';sikaku8.textContent='';let バツ8='×';batsu8.textContent=バツ8;sikaku3.textContent='□';}
    if(マス一>=1){batsu3.textContent='';sikaku8.textContent='';let バツ8='×';batsu8.textContent=バツ8;sikaku3.textContent='□';}
    if(マス八>=1){sikaku8.textContent='';sikaku3.textContent='';let バツ3 = '×';batsu3.textContent=バツ3;batsu8.textContent='';}
    if(横1>=15){ youwin.textContent=勝利;}if(縦4>=15){ youwin.textContent=勝利;}
    if(斜2>=15){ youwin.textContent=勝利;}
    if(横1>=11){sikaku3.textContent='';let バツ3 = '×';batsu3.textContent=バツ3;}if(横1>=12){batsu3.textContent='';}
    if(横1>=13){sikaku2.textContent='';let バツ2 = '×';batsu2.textContent=バツ2;batsu3.textContent='';}
    if(横1>=14){sikaku1.textContent='';let バツ1 = '×';batsu1.textContent=バツ1;batsu3.textContent='';batsu2.textContent='';}
    if(縦4>=7){sikaku16.textContent='';let バツ16 = '×';batsu16.textContent=バツ16;}if(縦4>=8){batsu16.textContent='';}
    if(縦4>=11){sikaku12.textContent='';let バツ12 = '×';batsu12.textContent=バツ12;batsu16.textContent='';}
    if(縦4>=13){sikaku8.textContent='';let バツ8 = '×';batsu8.textContent=バツ8;batsu16.textContent='';batsu12.textContent='';}
    if(斜2>=7){sikaku13.textContent='';let バツ13 = '×';batsu13.textContent=バツ13;}if(斜2>=8){batsu13.textContent='';}
    if(斜2>=11){sikaku10.textContent='';let バツ10 = '×';batsu10.textContent=バツ10;batsu13.textContent='';}
    if(斜2>=13){sikaku7.textContent='';let バツ7 = '×';batsu7.textContent=バツ7;batsu13.textContent='';batsu10.textContent='';}
    }
    sikaku5.onclick=function(){マス五 =1;
    sikaku5.textContent='';let マル5 = '○';maru5.textContent=マル5;
    縦1=縦1+2;tate1.textContent=縦1;横2=横2+1;turn =turn-1;sikaku6.textContent='';let バツ6 = '×';batsu6.textContent=バツ6;
    if(マス八>=1){batsu6.textContent='';sikaku9.textContent='';let バツ9='×';batsu9.textContent=バツ9;let マス6 = '□';sikaku6.textContent=マス6;}
    if(マス七>=1){batsu6.textContent='';sikaku9.textContent='';let バツ9='×';batsu9.textContent=バツ9;let マス6 = '□';sikaku6.textContent=マス6;}
    if(マス六>=1){batsu6.textContent='';sikaku9.textContent='';let バツ9='×';batsu9.textContent=バツ9;sikaku6.textContent='';}
    if(横2>=15){ youwin.textContent=勝利;}if(縦1>=15){youwin.textContent=勝利}    
    if(横2>=7){sikaku8.textContent='';let バツ8 = '×';batsu8.textContent=バツ8;}if(横2>=8){batsu8.textContent='';}
    if(横2>=11){sikaku7.textContent='';let バツ7 = '×';batsu7.textContent=バツ7;batsu8.textContent='';}
    if(横2>=13){sikaku6.textContent='';let バツ6 = '×';batsu6.textContent=バツ6;batsu8.textContent='';batsu7.textContent='';}
    if(縦1>=7){sikaku13.textContent='';let バツ13 = '×';batsu13.textContent=バツ13;}if(縦1>=8){batsu13.textContent='';}
    if(縦1>=11){sikaku9.textContent='';let バツ9 = '×';batsu9.textContent=バツ9;batsu13.textContent='';}
    if(縦1>=14){sikaku1.textContent='';let バツ1 = '×';batsu1.textContent=バツ1;batsu13.textContent='';batsu9.textContent='';}}
    sikaku6.onclick=function(){マス六 =1;
    sikaku6.textContent='';let マル6 = '○';maru6.textContent=マル6;
    縦2=縦2+2;横2=横2+2;斜1=斜1+2;turn =turn-1;
    sikaku5.textContent='';let バツ5 = '×';batsu5.textContent=バツ5;
    if(マス八>=1){batsu5.textContent='';sikaku10.textContent='';let バツ10='×';batsu10.textContent=バツ10;let マス5 = '□';sikaku5.textContent=マス5;}
    if(マス五>=1){batsu5.textContent='';sikaku7.textContent='';let バツ7='×';batsu7.textContent=バツ7;sikaku5.textContent='';}
    if(マス七>=1){batsu5.textContent='';sikaku10.textContent='';let バツ10='×';batsu10.textContent=バツ10;let マス5 = '□';sikaku5.textContent=マス5;}
    if(マス十>=1){batsu10.textContent='';let マル10 = '○';maru10.textContent=マル10;}
    if(横2>=15){ youwin.textContent=勝利;}if(縦2>=15){ youwin.textContent=勝利;}
    if(斜1>=15){ youwin.textContent=勝利;}    
    if(横2>=7){sikaku8.textContent='';let バツ8 = '×';batsu8.textContent=バツ8;}if(横2>=8){batsu8.textContent='';}
    if(横2>=11){sikaku7.textContent='';let バツ7 = '×';batsu7.textContent=バツ7;batsu8.textContent='';}
    if(横2>=14){sikaku5.textContent='';let バツ5 = '×';batsu5.textContent=バツ5;batsu8.textContent='';batsu7.textContent='';}
    if(縦2>=7){sikaku14.textContent='';let バツ14 = '×';batsu14.textContent=バツ14;}if(縦2>=8){batsu14.textContent='';}
    if(縦2>=11){sikaku10.textContent='';let バツ10 = '×';batsu10.textContent=バツ10;batsu14.textContent='';}
    if(縦2>=14){sikaku2.textContent='';let バツ2 = '×';batsu2.textContent=バツ2;batsu14.textContent='';batsu10.textContent='';}
    if(斜1>=7){sikaku16.textContent='';let バツ16 = '×';batsu16.textContent=バツ16;}if(斜1>=8){batsu16.textContent='';}
    if(斜1>=11){sikaku11.textContent='';let バツ11 = '×';batsu11.textContent=バツ11;batsu16.textContent='';}
    if(斜1>=14){sikaku1.textContent='';let バツ1 = '×';batsu1.textContent=バツ1;batsu16.textContent='';batsu11.textContent='';}}
    sikaku7.onclick=function(){マス七 =1;
    sikaku7.textContent='';let マル7 = '○';maru7.textContent=マル7;
    縦3=縦3+2;横2=横2+4;斜2=斜2+2;turn =turn-1;
    sikaku8.textContent='';let バツ8 = '×';batsu8.textContent=バツ8;
    if(マス五>=1){batsu8.textContent='';sikaku11.textContent='';let バツ11='×';batsu11.textContent=バツ11;let マス8 = '□';sikaku8.textContent=マス8;}
    if(マス六>=1){batsu8.textContent='';sikaku11.textContent='';let バツ11='×';batsu11.textContent=バツ11;let マス8 = '□';sikaku8.textContent=マス8;}
    if(マス八>=1){batsu8.textContent='';sikaku11.textContent='';let バツ11='×';batsu11.textContent=バツ11;sikaku8.textContent='';}
    if(マス十一>=1){batsu11.textContent='';sikaku8.textContent='';let バツ8='×';batsu8.textContent=バツ8;}
    if(横2>=15){ youwin.textContent=勝利;}if(縦3>=15){ youwin.textContent=勝利;}
    if(斜2>=15){ youwin.textContent=勝利;}   
    if(横2>=7){sikaku8.textContent='';let バツ8 = '×';batsu8.textContent=バツ8;}if(横2>=8){batsu8.textContent='';}
    if(横2>=13){sikaku6.textContent='';let バツ6 = '×';batsu6.textContent=バツ6;batsu8.textContent='';}
    if(横2>=14){sikaku5.textContent='';let バツ5 = '×';batsu5.textContent=バツ5;batsu8.textContent='';batsu6.textContent='';}
    if(縦3>=7){sikaku15.textContent='';let バツ15 = '×';batsu15.textContent=バツ15;}if(縦3>=8){batsu15.textContent='';}
    if(縦3>=11){sikaku11.textContent='';let バツ11 = '×';batsu11.textContent=バツ11;batsu15.textContent='';}
    if(縦3>=14){sikaku3.textContent='';let バツ3 = '×';batsu3.textContent=バツ3;batsu15.textContent='';batsu11.textContent='';}
    if(斜2>=7){sikaku13.textContent='';let バツ13 = '×';batsu13.textContent=バツ13;}if(斜2>=8){batsu13.textContent='';}
    if(斜2>=11){sikaku10.textContent='';let バツ10 = '×';batsu10.textContent=バツ10;batsu13.textContent='';}
    if(斜2>=14){sikaku4.textContent='';let バツ4 = '×';batsu4.textContent=バツ4;batsu13.textContent='';batsu10.textContent='';}}
    sikaku8.onclick=function(){マス八 =1;
    sikaku8.textContent='';let マル8 = '○';maru8.textContent=マル8;
    縦4=縦4+2;横2=横2+8;turn =turn-1;
    sikaku7.textContent='';let バツ7 = '×';batsu7.textContent=バツ7;
    if(マス十二>=1){sikaku12.textContent='';sikaku7.textContent='';let バツ7 = '×';batsu7.textContent=バツ7;batsu12.textContent='';}
    if(マス五>=1){batsu7.textContent='';sikaku12.textContent='';let バツ12='×';batsu12.textContent=バツ12;let マス7 = '□';sikaku7.textContent=マス7;}
    if(マス六>=1){batsu7.textContent='';sikaku12.textContent='';let バツ12='×';batsu12.textContent=バツ12;let マス7 = '□';sikaku7.textContent=マス7;}
    if(横2>=15){ youwin.textContent=勝利;}if(縦4>=15){ youwin.textContent=勝利;}
    if(横2>=11){sikaku7.textContent='';let バツ7 = '×';batsu7.textContent=バツ7;}if(横2>=12){batsu7.textContent='';}
    if(横2>=13){sikaku6.textContent='';let バツ6 = '×';batsu6.textContent=バツ6;batsu7.textContent='';}
    if(横2>=14){sikaku5.textContent='';let バツ5 = '×';batsu5.textContent=バツ5;batsu7.textContent='';batsu6.textContent='';}
    if(縦4>=7){sikaku16.textContent='';let バツ16 = '×';batsu16.textContent=バツ16;}if(縦4>=8){batsu16.textContent='';}
    if(縦4>=11){sikaku12.textContent='';let バツ12 = '×';batsu12.textContent=バツ12;batsu16.textContent='';}
    if(縦4>=14){sikaku4.textContent='';let バツ4 = '×';batsu4.textContent=バツ4;batsu16.textContent='';batsu12.textContent='';}}
    sikaku9.onclick=function(){マス九 =1;
    sikaku9.textContent='';let マル9 = '○';maru9.textContent=マル9;
    縦1=縦1+4;tate1.textContent=縦1;横3=横3+1;turn =turn-1;
    sikaku10.textContent='';let バツ10 = '×';batsu10.textContent=バツ10;
    if(マス十二>=1){batsu10.textContent='';sikaku13.textContent='';let バツ13='×';batsu13.textContent=バツ13;let マス10 = '□';sikaku10.textContent=マス10;}
    if(マス十一>=1){batsu10.textContent='';sikaku13.textContent='';let バツ13='×';batsu13.textContent=バツ13;let マス10 = '□';sikaku10.textContent=マス10;}
    if(マス十>=1){batsu10.textContent='';sikaku13.textContent='';let バツ13='×';batsu13.textContent=バツ13;sikaku13.textContent='';sikaku10.textContent='';}
    if(横3>=15){ youwin.textContent=勝利;}if(縦1>=15){ youwin.textContent=勝利;}
    if(横3>=7){sikaku12.textContent='';let バツ12 = '×';batsu12.textContent=バツ12;}if(横3>=8){batsu12.textContent='';}
    if(横3>=11){sikaku11.textContent='';let バツ11 = '×';batsu11.textContent=バツ11;batsu12.textContent='';}
    if(横3>=13){sikaku10.textContent='';let バツ10 = '×';batsu10.textContent=バツ10;batsu12.textContent='';batsu11.textContent='';}
    if(縦1>=7){sikaku13.textContent='';let バツ13 = '×';batsu13.textContent=バツ13;}if(縦1>=8){batsu13.textContent='';}
    if(縦1>=13){sikaku5.textContent='';let バツ5 = '×';batsu5.textContent=バツ5;batsu13.textContent='';}
    if(縦1>=14){sikaku1.textContent='';let バツ1 = '×';batsu1.textContent=バツ1;batsu13.textContent='';batsu5.textContent='';}}
    sikaku10.onclick=function(){マス十 =1;
    sikaku10.textContent='';let マル10 = '○';maru10.textContent=マル10;
    縦2=縦2+4;横3=横3+2;斜2=斜2+4;turn =turn-1;
    sikaku9.textContent='';let バツ9 = '×';batsu9.textContent=バツ9;
    if(マス十二>=1){batsu9.textContent='';sikaku14.textContent='';let バツ14='×';batsu14.textContent=バツ14;let マス9 = '□';sikaku9.textContent=マス9;}
    if(マス九>=1){batsu9.textContent='';sikaku11.textContent='';let バツ11='×';batsu11.textContent=バツ11;sikaku9.textContent='';}
    if(マス十一>=1){batsu9.textContent='';sikaku14.textContent='';let バツ14='×';batsu14.textContent=バツ14;let マス9 = '□';sikaku9.textContent=マス9;}
    if(マス十一>=1){batsu9.textContent='';sikaku14.textContent='';let バツ14='×';batsu14.textContent=バツ14;let マス9 = '□';sikaku9.textContent=マス9;}
    if(横3>=15){ youwin.textContent=勝利;}if(縦2>=15){ youwin.textContent=勝利;}
    if(斜2>=15){ youwin.textContent=勝利;}
    if(横3>=7){sikaku12.textContent='';let バツ12 = '×';batsu12.textContent=バツ12;}if(横3>=8){batsu12.textContent='';}
    if(横3>=11){sikaku11.textContent='';let バツ11 = '×';batsu11.textContent=バツ11;batsu12.textContent='';}
    if(横3>=14){sikaku9.textContent='';let バツ9 = '×';batsu9.textContent=バツ9;batsu12.textContent='';batsu11.textContent='';}
    if(縦2>=7){sikaku14.textContent='';let バツ14 = '×';batsu14.textContent=バツ14;}if(縦2>=8){batsu14.textContent='';}
    if(縦2>=13){sikaku6.textContent='';let バツ6 = '×';batsu6.textContent=バツ6;batsu14.textContent='';}
    if(縦2>=14){sikaku2.textContent='';let バツ2 = '×';batsu2.textContent=バツ2;batsu14.textContent='';batsu6.textContent='';}
    if(斜2>=7){sikaku13.textContent='';let バツ13 = '×';batsu13.textContent=バツ13;}if(斜2>=8){batsu13.textContent='';}
    if(斜2>=13){sikaku7.textContent='';let バツ7 = '×';batsu7.textContent=バツ7;batsu13.textContent='';}
    if(斜2>=14){sikaku4.textContent='';let バツ4 = '×';batsu4.textContent=バツ4;batsu13.textContent='';batsu7.textContent='';}}
    sikaku11.onclick=function(){マス十一 =1;
    sikaku11.textContent='';let マル11 = '○';maru11.textContent=マル11;
    縦3=縦3+4;横3=横3+4;斜1=斜1+4;turn =turn-1;sikaku12.textContent='';let バツ12 = '×';batsu12.textContent=バツ12;
    if(マス九>=1){batsu12.textContent='';sikaku15.textContent='';let バツ15='×';batsu15.textContent=バツ15;let マス12 = '□';sikaku12.textContent=マス12;}
    if(マス十>=1){batsu12.textContent='';sikaku15.textContent='';let バツ15='×';batsu15.textContent=バツ15;let マス12 = '□';sikaku12.textContent=マス12;}
    if(マス十二>=1){batsu12.textContent='';sikaku15.textContent='';let バツ15='×';batsu15.textContent=バツ15;sikaku12.textContent='';}
    if(横3>=15){youwin.textContent=勝利;}if(縦3>=15){ youwin.textContent=勝利;}
    if(斜1>=15){ youwin.textContent=勝利;}
    if(横3>=7){sikaku12.textContent='';let バツ12 = '×';batsu12.textContent=バツ12;}if(横3>=8){batsu12.textContent='';}
    if(横3>=13){sikaku10.textContent='';let バツ10 = '×';batsu10.textContent=バツ10;batsu12.textContent='';}
    if(横3>=14){sikaku9.textContent='';let バツ9 = '×';batsu9.textContent=バツ9;batsu12.textContent='';batsu10.textContent='';}
    if(縦3>=7){sikaku15.textContent='';let バツ15 = '×';batsu15.textContent=バツ15;}if(縦3>=8){batsu15.textContent='';}
    if(縦3>=13){sikaku7.textContent='';let バツ7 = '×';batsu7.textContent=バツ7;batsu15.textContent='';}
    if(縦3>=14){sikaku3.textContent='';let バツ3 = '×';batsu3.textContent=バツ3;batsu15.textContent='';batsu7.textContent='';}
    if(斜1>=7){sikaku16.textContent='';let バツ16 = '×';batsu16.textContent=バツ16;}if(斜1>=8){batsu16.textContent='';}
    if(斜1>=13){sikaku11.textContent='';let バツ6 = '×';batsu6.textContent=バツ6;batsu16.textContent='';}
    if(斜1>=14){sikaku6.textContent='';let バツ1 = '×';batsu1.textContent=バツ1;batsu16.textContent='';batsu6.textContent='';}}
    sikaku12.onclick=function(){マス十二 =1;
    sikaku12.textContent='';let マル12 ='○';maru12.textContent=マル12;
    縦4=縦4+4;横3=横3+8;turn =turn-1;
    sikaku11.textContent='';let バツ11 = '×';batsu11.textContent=バツ11;
    if(マス十六>=1){sikaku12.textContent='';sikaku11.textContent='';let バツ11 = '×';batsu11.textContent=バツ11;batsu16.textContent='';}
    if(マス九>=1){batsu11.textContent='';sikaku16.textContent='';let バツ16='×';batsu16.textContent=バツ16;let マス11 = '□';sikaku11.textContent=マス11;}
    if(マス十>=1){batsu11.textContent='';sikaku16.textContent='';let バツ16='×';batsu16.textContent=バツ16;let マス11 = '□';sikaku11.textContent=マス11;'○';maru16.textContent=マル16;} 
    if(横3>=15){ youwin.textContent=勝利;}if(縦4>=15){youwin.textContent=勝利;}
    if(横3>=11){sikaku11.textContent='';let バツ11 = '×';batsu11.textContent=バツ11;}if(横3>=12){batsu11.textContent='';}
    if(横3>=13){sikaku10.textContent='';let バツ10 = '×';batsu10.textContent=バツ10;batsu11.textContent='';}
    if(横3>=14){sikaku9.textContent='';let バツ9 = '×';batsu9.textContent=バツ9;batsu11.textContent='';batsu10.textContent='';}
    if(縦4>=7){sikaku16.textContent='';let バツ16 = '×';batsu16.textContent=バツ16;}if(縦4>=8){batsu16.textContent='';}
    if(縦4>=13){sikaku8.textContent='';let バツ8 = '×';batsu8.textContent=バツ8;batsu16.textContent='';}
    if(縦4>=14){sikaku4.textContent='';let バツ4 = '×';batsu4.textContent=バツ4;batsu16.textContent='';batsu8.textContent='';}}
    sikaku13.onclick=function(){マス十三 =1;
    sikaku13.textContent='';let マル13 = '○';maru13.textContent=マル13;
    縦1=縦1+8;tate1.textContent=縦1;横4=横4+1;斜2=斜2+8;turn =turn-1;sikaku14.textContent='';let バツ14 = '×';batsu14.textContent=バツ14;
    if(マス十六>=1){batsu14.textContent='';sikaku9.textContent='';let バツ9='×';batsu9.textContent=バツ9;let マス14 = '□';sikaku14.textContent=マス14;}
    if(マス十五>=1){batsu14.textContent='';sikaku9.textContent='';let バツ9='×';batsu9.textContent=バツ9;let マス14 = '□';sikaku14.textContent=マス14;}
    if(マス十四>=1){batsu14.textContent='';sikaku9.textContent='';let バツ9='×';batsu9.textContent=バツ9;sikaku14.textContent='';}
    if(マス九>=1){batsu14.textContent='';sikaku9.textContent='';let バツ9='×';batsu9.textContent=バツ9;sikaku14.textContent='';}
    if(横4>=15){ youwin.textContent=勝利;}if(縦1>=15){ youwin.textContent=勝利;}
    if(斜2>=15){ youwin.textContent=勝利;}
    if(横4>=7){sikaku16.textContent='';let バツ16 = '×';batsu16.textContent=バツ16;}if(横4>=8){batsu16.textContent='';}
    if(横4>=11){sikaku15.textContent='';let バツ15 = '×';batsu15.textContent=バツ15;batsu16.textContent='';}
    if(横4>=13){sikaku14.textContent='';let バツ14 = '×';batsu14.textContent=バツ14;batsu16.textContent='';batsu15.textContent='';}
    if(縦1>=11){sikaku9.textContent='';let バツ9 = '×';batsu9.textContent=バツ9;}if(縦1>=12){batsu9.textContent='';}
    if(縦1>=13){sikaku5.textContent='';let バツ5 = '×';batsu5.textContent=バツ5;batsu9.textContent='';}
    if(縦1>=14){sikaku1.textContent='';let バツ1 = '×';batsu1.textContent=バツ1;batsu9.textContent='';batsu5.textContent='';}
    if(斜2>=11){sikaku10.textContent='';let バツ10 = '×';batsu10.textContent=バツ10;}
    if(斜2>=13){sikaku7.textContent='';let バツ7 = '×';batsu7.textContent=バツ7;batsu10.textContent='';}
    if(斜2>=14){sikaku4.textContent='';let バツ4 = '×';batsu4.textContent=バツ4;batsu10.textContent='';batsu7.textContent='';}}
    sikaku14.onclick=function(){マス十四 =1;
    sikaku14.textContent='';let マル14 = '○';maru14.textContent=マル14;
    縦2=縦2+8;横4=横4+2;turn =turn-1;
    sikaku13.textContent='';let バツ13 = '×';batsu13.textContent=バツ13;
    if(マス十六>=1){batsu13.textContent='';sikaku10.textContent='';let バツ10='×';batsu10.textContent=バツ10;let マス13 = '□';sikaku13.textContent=マス13;}
    if(マス十五>=1){batsu13.textContent='';sikaku10.textContent='';let バツ10='×';batsu10.textContent=バツ10;let マス13 = '□';sikaku13.textContent=マス13;}    
    if(マス十三>=1){batsu13.textContent='';sikaku10.textContent='';let バツ10='×';batsu10.textContent=バツ10;sikaku13.textContent='';}
    if(横4>=15){ youwin.textContent=勝利;}if(縦2>=15){ youwin.textContent=勝利;}
    if(横4>=7){sikaku16.textContent='';let バツ16 = '×';batsu16.textContent=バツ16;}if(横4>=8){batsu16.textContent='';}
    if(横4>=11){sikaku15.textContent='';let バツ15 = '×';batsu15.textContent=バツ15;batsu16.textContent='';}
    if(横4>=14){sikaku13.textContent='';let バツ13 = '×';batsu13.textContent=バツ13;batsu16.textContent='';batsu15.textContent='';}
    if(縦2>=11){sikaku10.textContent='';let バツ10 = '×';batsu10.textContent=バツ10;}if(縦2>=12){batsu10.textContent='';}
    if(縦2>=13){sikaku6.textContent='';let バツ6 = '×';batsu6.textContent=バツ6;batsu10.textContent='';}
    if(縦2>=14){sikaku2.textContent='';let バツ2 = '×';batsu2.textContent=バツ2;batsu10.textContent='';batsu6.textContent='';}}
    sikaku15.onclick=function(){マス十五 =1;
    sikaku15.textContent='';let マル15 = '○';maru15.textContent=マル15;
    縦3=縦3+8;横4=横4+4;turn =turn-1; sikaku16.textContent='';let バツ16 = '×';batsu16.textContent=バツ16;  
    if(マス十三>=1){batsu16.textContent='';sikaku11.textContent='';let バツ11='×';batsu11.textContent=バツ11;let マス16 = '□';sikaku16.textContent=マス16;}
    if(マス十四>=1){batsu16.textContent='';sikaku11.textContent='';let バツ11='×';batsu11.textContent=バツ11;let マス16 = '□';sikaku16.textContent=マス16;}
    if(マス十六>=1){batsu16.textContent='';sikaku11.textContent='';let バツ11='×';batsu11.textContent=バツ11;sikaku16.textContent='';}
    if(横4>=15){ youwin.textContent=勝利;}if(縦3>=15){ youwin.textContent=勝利;}
    if(横4>=7){sikaku16.textContent='';let バツ16 = '×';batsu16.textContent=バツ16;}if(横4>=8){batsu16.textContent='';}
    if(横4>=13){sikaku14.textContent='';let バツ14 = '×';batsu14.textContent=バツ14;batsu16.textContent='';}
    if(横4>=14){sikaku13.textContent='';let バツ13 = '×';batsu13.textContent=バツ13;batsu16.textContent='';batsu14.textContent='';}
    if(縦3>=11){sikaku11.textContent='';let バツ11 = '×';batsu11.textContent=バツ11;}if(縦3>=12){batsu11.textContent='';}
    if(縦3>=13){sikaku7.textContent='';let バツ7 = '×';batsu7.textContent=バツ7;batsu11.textContent='';}
    if(縦3>=14){sikaku3.textContent='';let バツ3 = '×';batsu3.textContent=バツ3;batsu11.textContent='';batsu7.textContent='';}}
    sikaku16.onclick=function(){マス十六 =1;
    sikaku16.textContent='';let マル16 = '○';maru16.textContent=マル16;
    縦4=縦4+8;横4=横4+8;斜1=斜1+8;turn =turn-1;sikaku15.textContent='';let バツ15 = '×';batsu15.textContent=バツ15;
    if(マス十二>=1){sikaku15.textContent='';sikaku15.textContent='';let バツ15 = '×';batsu15.textContent=バツ15;batsu12.textContent='';}
    if(マス十三>=1){batsu15.textContent='';sikaku12.textContent='';let バツ12='×';batsu12.textContent=バツ12;let マス15 = '□';sikaku15.textContent=マス15;}
    if(マス十四>=1){batsu15.textContent='';sikaku12.textContent='';let バツ12='×';batsu12.textContent=バツ12;let マス15 = '□';sikaku15.textContent=マス15;'○';maru16.textContent=マル16;} 
    if(横4>=15){ youwin.textContent=勝利;}if(縦4>=15){ youwin.textContent=勝利;}
    if(斜1>=15){ youwin.textContent=勝利;}
    if(横4>=11){sikaku15.textContent='';let バツ15 = '×';batsu15.textContent=バツ15;}if(横4>=12){batsu15.textContent='';}
    if(横4>=13){sikaku14.textContent='';let バツ14 = '×';batsu14.textContent=バツ14;batsu15.textContent='';}
    if(横4>=14){sikaku13.textContent='';let バツ13 = '×';batsu13.textContent=バツ13;batsu15.textContent='';batsu14.textContent='';}
    if(縦4>=11){sikaku12.textContent='';let バツ12 = '×';batsu12.textContent=バツ12;}if(縦4>=12){batsu12.textContent='';}
    if(縦4>=13){sikaku8.textContent='';let バツ8 = '×';batsu8.textContent=バツ8;batsu12.textContent='';}
    if(縦4>=14){sikaku4.textContent='';let バツ4 = '×';batsu4.textContent=バツ4;batsu12.textContent='';batsu8.textContent='';}
    if(斜1>=11){sikaku11.textContent='';let バツ11 = '×';batsu11.textContent=バツ11;}
    if(斜1>=13){sikaku6.textContent='';let バツ6 = '×';batsu6.textContent=バツ6;batsu11.textContent='';}
    if(斜1>=14){sikaku1.textContent='';let バツ1 = '×';batsu1.textContent=バツ1;batsu11.textContent='';batsu6.textContent='';}}