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


const sikakus = document.getElementsByClassName('マス');sikakus[1]

button.onclick=function(){
for(let i=0;i<sikakus.length;i++){
    sikakus[i].textContent='□';sikakus[i].classList.remove("マル");sikakus[i].classList.remove("バツ");
    taitoru.textContent='';
    button.textContent ='reset';}   
    }
for(let i=0;i<sikakus.length;i++){
    sikakus[i].onclick=function(){
    if(sikakus[i].classList.contains('マル')){}else{if(sikakus[i].classList.contains('バツ')){}else{
    sikakus[i].textContent='○';sikakus[i].classList.add("マル");
        if(i>=8){if(sikakus[i-4].classList.contains('マル')){sikakus[i+4].textContent='×';sikakus[i+4].classList.add("バツ");}
            else{if(sikakus[i+1].classList.contains('マル')){sikakus[i-2].textContent='×';sikakus[i-2].classList.add("バツ");}
            else{if(sikakus[i-3].classList.contains('マル')){sikakus[i+1].textContent='×';sikakus[i+1].classList.add("バツ");}
            else{if(sikakus[i-1].classList.contains('マル')){sikakus[i-3].textContent='×';sikakus[i-3].classList.add("バツ");}
            else{sikakus[i-1].textContent='×';sikakus[i-1].classList.add("バツ");}}}}}
        else{if(i>=4){
            {if(sikakus[i+4].classList.contains('マル')){sikakus[i-4].textContent='×';sikakus[i-4].classList.add("バツ");}
            else{if(sikakus[i-1].classList.contains('マル')){sikakus[i-3].textContent='×';sikakus[i-3].classList.add("バツ");}
            else{if(sikakus[i+3].classList.contains('マル')){sikakus[i-1].textContent='×';sikakus[i-1].classList.add("バツ");}
            else{if(sikakus[i+1].classList.contains('マル')){sikakus[i+3].textContent='×';sikakus[i+3].classList.add("バツ");}
            else{sikakus[i+1].textContent='×';sikakus[i+1].classList.add("バツ");}}}}}}
        else{if(sikakus[i+1].classList.contains('マル')){sikakus[i+3].textContent='×';sikakus[i+3].classList.add("バツ");}
            else{sikakus[i+1].textContent='×';sikakus[i+1].classList.add("バツ");}}}}
        
    }}}

    
    
