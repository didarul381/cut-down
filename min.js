const eid="14 May 2022";
const daydiv=document.getElementById("days");
const hourdiv=document.getElementById("hours");
const mindiv=document.getElementById("minitue");
const secdiv=document.getElementById("sec");

function cutdo(){
const eida= new Date(eid);
const currenttime= new Date();

const totaltime=(eida-currenttime)/1000;

const days=Math.floor(totaltime/3600/24);
const hour= Math.floor(totaltime/3600)%24;
const min=   Math.floor(totaltime/60)%60;
const sec=  Math.floor(totaltime)%60;
daydiv.innerHTML=days;
hourdiv.innerHTML=hour;
mindiv.innerHTML=min;
secdiv.innerHTML=sec;
console.log(days);

}
cutdo();
setInterval(cutdo ,1000);