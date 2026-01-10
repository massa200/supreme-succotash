const button = document.getElementById('に');
const taitoru = document.getElementById('いち');let いち= '○×ゲーム';taitoru.textContent=いち;
const sikaku1 = document.getElementById('マス1');sikaku1.textContent='';
const sikaku2 = document.getElementById('マス2');sikaku2.textContent='';
const sikaku3 = document.getElementById('マス3');sikaku3.textContent='';
const sikaku4 = document.getElementById('マス4');sikaku4.textContent='';
const sikaku5 = document.getElementById('マス5');sikaku5.textContent='';
const sikaku6 = document.getElementById('マス6');sikaku6.textContent='';
const sikaku7 = document.getElementById('マス7');sikaku7.textContent='';
const sikaku8 = document.getElementById('マス8');sikaku8.textContent='';
const sikaku9 = document.getElementById('マス9');sikaku9.textContent='';
const sikaku10 = document.getElementById('マス10');sikaku10.textContent='';
const sikaku11 = document.getElementById('マス11');sikaku11.textContent='';
const sikaku12 = document.getElementById('マス12');sikaku12.textContent='';
const sikaku13 = document.getElementById('マス13');sikaku13.textContent='';
const sikaku14 = document.getElementById('マス14');sikaku14.textContent='';
const sikaku15 = document.getElementById('マス15');sikaku15.textContent='';
const sikaku16 = document.getElementById('マス16');sikaku16.textContent='';
const maru1 = document.getElementById('マル1');maru1.textContent='';
const maru2 = document.getElementById('マル2');maru2.textContent='';
const maru3 = document.getElementById('マル3');maru3.textContent='';
const maru4 = document.getElementById('マル4');maru4.textContent='';
const maru5 = document.getElementById('マル5');maru5.textContent='';
const maru6 = document.getElementById('マル6');maru6.textContent='';
const maru7 = document.getElementById('マル7');maru7.textContent='';
const maru8 = document.getElementById('マル8');maru8.textContent='';
const maru9 = document.getElementById('マル9');maru9.textContent='';
const maru10 = document.getElementById('マル10');maru10.textContent='';
const maru11 = document.getElementById('マル11');maru11.textContent='';
const maru12 = document.getElementById('マル12');maru12.textContent='';
const maru13 = document.getElementById('マル13');maru13.textContent='';
const maru14 = document.getElementById('マル14');maru14.textContent='';
const maru15 = document.getElementById('マル15');maru15.textContent='';
const maru16 = document.getElementById('マル16');maru16.textContent='';
const batsu1 = document.getElementById('バツ1');batsu1.textContent='';
const batsu2 = document.getElementById('バツ2');batsu2.textContent='';
const batsu3 = document.getElementById('バツ3');batsu3.textContent='';
const batsu4 = document.getElementById('バツ4');batsu4.textContent='';
const batsu5 = document.getElementById('バツ5');batsu5.textContent='';
const batsu6 = document.getElementById('バツ6');batsu6.textContent='';
const batsu7 = document.getElementById('バツ7');batsu7.textContent='';
const batsu8 = document.getElementById('バツ8');batsu8.textContent='';
const batsu9 = document.getElementById('バツ9');batsu9.textContent='';
const batsu10 = document.getElementById('バツ10');batsu10.textContent='';
const batsu11 = document.getElementById('バツ11');batsu11.textContent='';
const batsu12 = document.getElementById('バツ12');batsu12.textContent='';
const batsu13 = document.getElementById('バツ13');batsu13.textContent='';
const batsu14 = document.getElementById('バツ14');batsu14.textContent='';
const batsu15 = document.getElementById('バツ15');batsu15.textContent='';
const batsu16 = document.getElementById('バツ16');batsu16.textContent='';

const sikakus = document.getElementsByClassName('マス');sikakus[1]

button.onclick=function(){
for(let i=0;i<sikakus.length;i++){
    if(i % 2 == 1) {sikakus[i].textContent='';}else{sikakus[i].textContent='□';}sikakus[i].classList.remove("マル");}
    taitoru.textContent='';
    button.textContent ='reset';}
for(let i=0;i<sikakus.length;i++){let s=i;
    sikakus[i].onclick=function(){
    if(i % 2 == 0) {sikakus[i].textContent='';sikakus[i+1].textContent='○';sikakus[i+1].classList.add("マル");}}
    }