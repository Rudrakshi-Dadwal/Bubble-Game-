function makebubble(){


var clutter="";
for (var i=1;i<=119;i++){
    var rn=Math.floor(Math.random()*10);
    clutter += `<div class="bubble">${rn}</div>`;}

document.getElementById("pbtm").innerHTML=clutter;


}
makebubble();

var timer=60;
function runtimer(){
    var timerint=setInterval(function(){
    if(timer>0){   
     timer--;
   document.getElementById("timerval").innerText=timer;

  } 
else{
    clearInterval(timerint);
    alert("Time up! Game Over");
} },1000);
}

runtimer();


function getnewhit(){

   var rn = Math.floor(Math.random()*10);
    document.getElementById("hitval").innerText=rn;

}

getnewhit();

var score=0;

function getscore(){
score+=10;
document.getElementById("scoreval").innerText=score;
}


//jo element pe click karenge vo event raise hoga . event lisytener na milne oar evennt parent ke oarent ke parent par listener fhundega
document.getElementById("pbtm").addEventListener("click",function(dets){
   
console.log(Number(dets.target.textContent)); // vo bubble jispe click hua
//text content pe sirf number aagya naaki the whole div and vo num ber string hoga toh convert it 


});
