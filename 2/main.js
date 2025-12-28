const button = document.getElementById('に');
const taitoru = document.getElementById('いち');let いち= '○×ゲーム';taitoru.textContent=いち;
const sikaku1 = document.getElementById('マス1');sikaku1.textContent='';const maru1 = document.getElementById('マル1');maru1.textContent='';
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

const sikakus = document.getElementsByClassName('マス')
const circles = document.getElementsByClassName('マル')
sikakus[1]

button.onclick=function(){
    for(let i=0;i<sikakus.length;i++){
    sikakus[i].textContent='□';}
    taitoru.textContent='';
    button.textContent ='reset';}
 for(let i=0;i<sikakus.length;i++){
sikakus[i].onclick=function(){
        sikakus[i].textContent='';let マル1 = '○';maru1.textContent=マル1
        sikakus[i].classList.add("マル")
        }}