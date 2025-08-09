const button = document.getElementById('に');
const taitoru = document.getElementById('いち');let いち= '赤をよけましょう';taitoru.textContent=いち;
const sikaku1 = document.getElementById('マス1');sikaku1.textContent='';
const sikaku2 = document.getElementById('マス2');sikaku2.textContent='';
const sikaku3 = document.getElementById('マス3');sikaku3.textContent='';
const sikaku4 = document.getElementById('マス4');sikaku4.textContent='';
const sikaku5 = document.getElementById('マス5');sikaku5.textContent='';
const sikaku6 = document.getElementById('マス6');sikaku6.textContent='';
const sikaku7 = document.getElementById('マス7');sikaku7.textContent='';
const sikaku8 = document.getElementById('マス8');sikaku8.textContent='';

button.onclick=function(){
    let マス1 = '□';sikaku1.textContent=マス1;
    let マス2 = '□';sikaku2.textContent=マス2;
    let マス3 = '□';sikaku3.textContent=マス3;
    let マス4 = '□';sikaku4.textContent=マス4;
    let マス5 = '□';sikaku5.textContent=マス5;
    let マス6 = '□';sikaku6.textContent=マス6;
    let マス7 = '□';sikaku7.textContent=マス7;
    let マス8 = '□';sikaku8.textContent=マス8;
    taitoru.textContent='';
button.textContent =''
}