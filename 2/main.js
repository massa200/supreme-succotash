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


const sikakus = document.getElementsByClassName('マス');sikakus[1];

let tate1=0;
let tate2=0;
let tate3=0;
let tate4=0;
let yoko1=0;
let yoko2=0;
let yoko3=0;
let yoko4=0;
let naname1=0;
let naname2=0;
let batsu=0;
let worl=0;
const battu = document.getElementById('あほ');battu.textContent=batsu;
button.onclick=function(){
    for(let i=0;i<sikakus.length;i++){
        sikakus[i].textContent='□';sikakus[i].classList.add('シカク');sikakus[i].classList.remove("マル");sikakus[i].classList.remove("バツ");sikakus[i].classList.remove("リセット");
        taitoru.textContent=''; 
        tate1=0;tate2=0;tate3=0;tate4=0;yoko1=0; yoko2=0; yoko3=0;yoko4=0;naname1=0;naname2=0;batsu=0;worl=0;
        button.textContent ='reset';battu.textContent=tate1;
    }   
        }
for(let i=0;i<sikakus.length;i++){
    sikakus[i].onclick=function(){
         tate1=0;tate2=0;tate3=0;tate4=0;yoko1=0;yoko2=0;yoko3=0;yoko4=0;naname1=0;naname2=0;
        if(sikakus[i].classList.contains('マル')) {}
        else {
        if(sikakus[i].classList.contains('バツ')){}
        else{
            if(sikakus[i].classList.contains('シカク')){
            sikakus[i].textContent='○';sikakus[i].classList.add("マル");
                
                for(let x=0;x<sikakus.length;x++){        
                    if(sikakus[x].classList.contains('マル')){
                    if(x%4 === 0){tate1=tate1+1;if(tate1 == 4){button.textContent ='you win!';worl=1;}}
                    if(x%4 === 1){tate2=tate2+1;if(tate2 == 4){button.textContent ='you win!';worl=1;}}
                    if(x%4 === 2){tate3=tate3+1;if(tate3 == 4){button.textContent ='you win!';worl=1;}}
                    if(x%4 === 3){tate4=tate4+1;if(tate4 == 4){button.textContent ='you win!';worl=1;}}
                    /*
                    この演算子は「左シフト」という操作をします。
                    二進数で指定された桁数分左にずらす、という操作です。
                    例えば、7 >> 2 とした場合、
                    二進数で7は 111
                    これを左に2回ずらして
                    001
                    となり、結果が1となります。
                    詳しくは
                    https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Right_shift
                    を確認してください。
                    今回の操作では、4で割ったうえであまりを切り捨てる操作をしています。

                    */
                    if(x >> 2 == 0){yoko1=yoko1+1;if(yoko1 == 4){button.textContent ='you win!';worl=1;}}
                    if(x >> 2 == 1){yoko2=yoko2+1;if(yoko2 == 4){button.textContent ='you win!';worl=1;}}
                    if(x >> 2 == 2){yoko3=yoko3+1;if(yoko3 == 4){button.textContent ='you win!';worl=1;}}
                    if(x >> 2 == 3){yoko4=yoko4+1;if(yoko4 == 4){button.textContent ='you win!';worl=1;}}
                    if(x%5 === 0){naname1=naname1+1;if(naname1 == 4){button.textContent ='you win!';worl=1;}}
                    if(x%3 === 0){if(x%15 === 0){}else{naname2=naname2+1;if(naname2 == 4){button.textContent ='you win!';worl=1;}}}
                }else{if(sikakus[x].classList.contains('バツ')){
                    if(x%4 === 0){tate1=tate1-1;if(tate1 == -4){button.textContent ='you lose...';worl=1;}}
                    if(x%4 === 1){tate2=tate2-1;if(tate2 == -4){button.textContent ='you lose...';worl=1;}}
                    if(x%4 === 2){tate3=tate3-1;if(tate3 == -4){button.textContent ='you lose...';worl=1;}}
                    if(x%4 === 3){tate4=tate4-1;if(tate4 == -4){button.textContent ='you lose...';worl=1;}}
                    if(x >> 2 == 0){yoko1=yoko1-1;if(yoko1 == -4){button.textContent ='you lose...';worl=1;}}
                    if(x >> 2 == 1){yoko2=yoko2-1;if(yoko2 == -4){button.textContent ='you lose...';worl=1;}}
                    if(x >> 2 == 2){yoko3=yoko3-1;if(yoko3 == -4){button.textContent ='you lose...';worl=1;}}
                    if(x >> 2 == 3){yoko4=yoko4-1;if(yoko4 == -4){button.textContent ='you lose...';worl=1;}}
                    if(x%5 === 0){naname1=naname1-1;if(naname1 == -4){button.textContent ='you lose...';worl=1;}}
                    if(x%3 === 0){if(x%15 === 0){}else{naname2=naname2-1;if(naname2 == -4){button.textContent ='you lose...';worl=1;}}}}}
                    battu.textContent=tate2;
                }
            
            if(worl==1){for(let p=0;p<sikakus.length;p++){
            sikakus[p].classList.add('マル');sikakus[p].classList.add('リセット');}}
            else{batsu=0;
            for(let s=0;s<sikakus.length;s++){
                if(sikakus[s].classList.contains('マル')){}
                else{if(sikakus[s].classList.contains('バツ')){}
                    else{batsu=batsu+1;
                    if(tate1 == 3){
                if(s%4 === 0){
                    sikakus[s].textContent='×';sikakus[s].classList.add("バツ");}}                     
                    else{if(tate2 == 3){
                if(s%4 === 1){
                    sikakus[s].textContent='×';sikakus[s].classList.add("バツ");}}
                    else{if(tate3 == 3){
                if(s%4 === 2){
                    sikakus[s].textContent='×';sikakus[s].classList.add("バツ");}}
                    else{if(tate4 == 3){
                if(s%4 === 3){
                    sikakus[s].textContent='×';sikakus[s].classList.add("バツ");}}
                    else{if(yoko1 == 3){
                if(s >> 2 == 0){
                    sikakus[s].textContent='×';sikakus[s].classList.add("バツ");}}                     
                    else{if(yoko2 == 3){
                if(s >> 2 == 1){
                    sikakus[s].textContent='×';sikakus[s].classList.add("バツ");}}
                    else{if(yoko3 == 3){
                if(s >> 2 == 2){
                    sikakus[s].textContent='×';sikakus[s].classList.add("バツ");}}
                    else{if(yoko4 == 3){
                if(s >> 2 == 3){
                    sikakus[s].textContent='×';sikakus[s].classList.add("バツ");}}
                    else{if(naname1 == 3){
                if(s%5 === 0){
                    sikakus[s].textContent='×';sikakus[s].classList.add("バツ");}}
                    else{if(naname2 == 3){
                if(s%3 === 0){
                    sikakus[s].textContent='×';sikakus[s].classList.add("バツ");}}
                else{
                if(batsu<=1){
                    sikakus[s].textContent='×';sikakus[s].classList.add("バツ");}}
            tate1=0;tate2=0;tate3=0;tate4=0;yoko1=0;yoko2=0;yoko3=0;yoko4=0;naname1=0;naname2=0;
                    for(let x=0;x<sikakus.length;x++){        
                    if(sikakus[x].classList.contains('マル')){
                    if(x%4 === 0){tate1=tate1+1;if(tate1 == 4){button.textContent ='you win!';worl=1;}}
                    if(x%4 === 1){tate2=tate2+1;if(tate2 == 4){button.textContent ='you win!';worl=1;}}
                    if(x%4 === 2){tate3=tate3+1;if(tate3 == 4){button.textContent ='you win!';worl=1;}}
                    if(x%4 === 3){tate4=tate4+1;if(tate4 == 4){button.textContent ='you win!';worl=1;}}
                    if(x >> 2 == 0){yoko1=yoko1+1;if(yoko1 == 4){button.textContent ='you win!';worl=1;}}
                    if(x >> 2 == 1){yoko2=yoko2+1;if(yoko2 == 4){button.textContent ='you win!';worl=1;}}
                    if(x >> 2 == 2){yoko3=yoko3+1;if(yoko3 == 4){button.textContent ='you win!';worl=1;}}
                    if(x >> 2 == 3){yoko4=yoko4+1;if(yoko4 == 4){button.textContent ='you win!';worl=1;}}
                    if(x%5 === 0){naname1=naname1+1;if(naname1 == 4){button.textContent ='you win!';worl=1;}}
                    if(x%3 === 0){if(x%15 === 0){}else{naname2=naname2+1;if(naname2 == 4){button.textContent ='you win!';worl=1;}}}
                }else{if(sikakus[x].classList.contains('バツ')){
                    if(x%4 === 0){tate1=tate1-1;if(tate1 == -4){button.textContent ='you lose...';worl=1;}}
                    if(x%4 === 1){tate2=tate2-1;if(tate2 == -4){button.textContent ='you lose...';worl=1;}}
                    if(x%4 === 2){tate3=tate3-1;if(tate3 == -4){button.textContent ='you lose...';worl=1;}}
                    if(x%4 === 3){tate4=tate4-1;if(tate4 == -4){button.textContent ='you lose...';worl=1;}}
                    if(x >> 2 == 0){yoko1=yoko1-1;if(yoko1 == -4){button.textContent ='you lose...';worl=1;}}
                    if(x >> 2 == 1){yoko2=yoko2-1;if(yoko2 == -4){button.textContent ='you lose...';worl=1;}}
                    if(x >> 2 == 2){yoko3=yoko3-1;if(yoko3 == -4){button.textContent ='you lose...';worl=1;}}
                    if(x >> 2 == 3){yoko4=yoko4-1;if(yoko4 == -4){button.textContent ='you lose...';worl=1;}}
                    if(x%5 === 0){naname1=naname1-1;if(naname1 == -4){button.textContent ='you lose...';worl=1;}}
                    if(x%3 === 0){if(x%15 === 0){}else{naname2=naname2-1;if(naname2 == -4){button.textContent ='you lose...';worl=1;}}}}}
                    battu.textContent=tate2;
                } 
            if(worl==1){for(let p=0;p<sikakus.length;p++){
             sikakus[p].classList.add('マル');sikakus[p].classList.add('リセット');}}
        
        } 
        }
    }
    }
    }
}

}}}

                

                

                }
                

                }
            }
        }}}}}}
