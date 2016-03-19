var delay = 200; //in milliseconds

var drag=false;
var objDisque=null;
var x = 0;
var y = 0;
var DisquesOnTower1 = new Array(null,null,null,null,null,null,null,null);
var DisquesOnTower2 = new Array(null,null,null,null,null,null,null,null);
var DisquesOnTower3 = new Array(null,null,null,null,null,null,null,null);
var DisquesOnTowers = new Array(DisquesOnTower1,DisquesOnTower2,DisquesOnTower3);
var offsetleft = 30;
var offsettop = 30;
var offsettower = 20;
var offsethoriz = 30;
var basetop = 0;
var Disqueheight = 0;
var midhoriztower = 0;
var indexTo=1;
var indexFr=1;
var movectr=0;
var gameOver=false;
var prevIndex=0;
var zindex = 0;
var currTower=1;
var prevTower=1;
var demo=false;
var arrFr = new Array(255);
var arrTo = new Array(255);
var idx = 0;
var pos = 0;
var t=null;
var stop=false;

function init(){
if (document.getElementById){
var Disqueno = document.hanoi.Disqueno;
Disqueno.options.selectedIndex = 0;
drawTowers();
drawDisques(parseInt(Disqueno.options[Disqueno.options.selectedIndex].text)); 
}
}

function initVars(){
for (var i=0;i<DisquesOnTower1.length;i++){
DisquesOnTower1[i]=null;
DisquesOnTower2[i]=null;
DisquesOnTower3[i]=null;
}
drag = false;
indexTo = 1;
indexFr = 1;
movectr = 0;
zindex = 0;
idx = 0;
pos = 0;
t = null;
gameOver=false;
stop=false;
demo=false;
document.hanoi.btnUndo.disabled=true;
}

function drawTowers(){
var title=document.getElementById("title");
var tower1=document.getElementById("tower1");
var tower2=document.getElementById("tower2");
var tower3=document.getElementById("tower3");
var settings=document.getElementById("settings");
var titlewidth = parseInt(title.style.width);
var titleheight = parseInt(title.style.height); 
var towerwidth = parseInt(tower1.style.width);
var towerheight = parseInt(tower1.style.height);
var settingswidth = parseInt(settings.style.width);
midhoriztower = parseInt(document.getElementById("horiztower1").style.width)/2;
Disqueheight = parseInt(document.getElementById("Disque1").style.height);

title.style.left=offsetleft+(1.5*towerwidth)+offsettower-(titlewidth/2)+"px";
title.style.top=offsettop+"px";
tower1.style.left=offsetleft+"px";
tower1.style.top=offsettop+titleheight+offsethoriz+"px";
tower2.style.left=offsetleft+towerwidth+offsettower+"px";
tower2.style.top=offsettop+titleheight+offsethoriz+"px";
tower3.style.left=offsetleft+(towerwidth+offsettower)*2+"px";
tower3.style.top=offsettop+titleheight+offsethoriz+"px";
settings.style.left=offsetleft+(1.5*towerwidth)+offsettower-(settingswidth/2)+"px";
settings.style.top=parseInt(tower1.style.top)+towerheight+offsethoriz+"px";
}

function drawDisques(Disquenum){
var tower1=document.getElementById("tower1");
var Disquetop = parseInt(tower1.style.top)+parseInt(document.getElementById("horiztower1").style.top);
var lefttower1 = parseInt(tower1.style.left);
var Disque;
var f=document.hanoi;
basetop = Disquetop;
for (var i=DisquesOnTower1.length;i>=1;i--){
Disque = document.getElementById("Disque"+i);
Disque.style.zIndex=++zindex; 
if (i<=Disquenum){
Disque.style.left=lefttower1+midhoriztower-parseInt(Disque.style.width)/2+"px";
Disque.style.top=Disquetop-Disqueheight-1+"px";
Disquetop = parseInt(Disque.style.top);
DisquesOnTowers[0][i-1]=Disque;
} 
else {
Disque.style.left="-250px";
Disque.style.top="-250px";
DisquesOnTowers[0][i-1]=null;
}
} 
f.minmove.value=f.Disqueno.options[f.Disqueno.options.selectedIndex].value;
f.yourmove.value=0;
}

function newGame(obj){
if (movectr>0 && !gameOver && !stop){
if (confirm("Le jeu va s'arrêter, voulez-vous continuer ?")){
initVars();
drawDisques(parseInt(obj.options[obj.options.selectedIndex].text));
}
else document.hanoi.Disqueno.options.selectedIndex=prevIndex;
}
else {
initVars();
drawDisques(parseInt(obj.options[obj.options.selectedIndex].text));
}
}

function initializeDrag(Disque,e){
if (!e) e=event;
if (stop){
alert("Vous ne pouvez pas continuer le jeu après avoir cliquer sur le bouton 'Stop'.\nCliquer sur le bouton 'Recommencer' ou selectionner le nombre de disques pour continuer à jouer.");
return;
}
indexFr = indexTo;
if (Disque.id!=DisquesOnTowers[indexFr-1][0].id || gameOver || demo) return;
objDisque=Disque;
x=e.clientX;
y=e.clientY;
tempx=parseInt(Disque.style.left);
tempy=parseInt(Disque.style.top);
document.onmousemove=dragDisque;
}

function dragDisque(e){
if (!e) e=event;
zindex++;
drag=true;
var posX = tempx+e.clientX-x;
var posY = tempy+e.clientY-y;
var objTower1 = document.getElementById("tower1");
var objTower2 = document.getElementById("tower2");
var objTower3 = document.getElementById("tower3");
var tower1Left = parseInt(objTower1.style.left);
var tower2Left = parseInt(objTower2.style.left);
var tower3Left = parseInt(objTower3.style.left);
var tower3Width = parseInt(objTower3.style.width);

objDisque.style.zIndex=zindex;
objDisque.style.left=posX+'px';
objDisque.style.top=posY+'px'; 

if (e.clientX>=document.body.clientWidth-10 || e.clientY>=document.body.clientHeight-5 || e.clientX==5 || e.clientY==5){ //outside available window
indexTo=indexFr;
dropDisque(objDisque);
}
else if ( //in the vicinity of tower 3
(tower3Left<=posX) && 
(tower3Left+tower3Width>=posX) && 
(parseInt(objTower3.style.top)+parseInt(objTower3.style.height)>posY)
){
indexTo=3;
}
else if ((tower2Left<=posX) && (tower2Left+tower3Width>=posX)){ //in the vicinity of tower 2
indexTo=2;
}
else if ((tower1Left<=posX) && (tower1Left+parseInt(objTower1.style.width)>=posX)){ //in the vicinity of tower 1
indexTo=1;
}
else indexTo = indexFr;
return false;
}

function dropDisque(Disque){
var f=document.hanoi;
document.onmousemove=new Function("return false");
if (!drag) return;
var gameStatus=false;
var topDisque = DisquesOnTowers[indexTo-1][0];
if (indexFr==indexTo){
getNewTop(indexFr,null);
pushDisque(Disque,indexFr); //put Disque back to original tower
getNewTop(indexFr,Disque);
}
else if (topDisque==null) {
pushDisque(Disque,indexTo);
getNewTop(indexFr,null);
getNewTop(indexTo,Disque);
movectr++;
currTower=indexTo;
prevTower=indexFr;
f.btnUndo.disabled=false;
}
else if (parseInt(Disque.style.width)<parseInt(topDisque.style.width)){
pushDisque(Disque,indexTo);
getNewTop(indexFr,null);
getNewTop(indexTo,Disque);
movectr++;
currTower=indexTo;
prevTower=indexFr;
if (indexTo==3) gameStatus=checkStatus();
f.btnUndo.disabled=false;
}
else {
getNewTop(indexFr,null);
pushDisque(Disque,indexFr); //put Disque back to original tower
getNewTop(indexFr,Disque);
}

drag=false;
f.yourmove.value=movectr;
if (gameStatus) {
f.btnUndo.disabled=true;
minmove = parseInt(f.minmove.value);
if (movectr==minmove) msg="\nCongratulations! Vous avez gagné en "+minmove+" déplacements."
else if (movectr>minmove) msg="\nVous pouvez améliorer votre score."
else msg="";
alert("Perdu !!!"+msg);
gameOver=true;
}
return;
} 

function checkStatus(){
var gameStat = false;
var Disques=0;
for (var i=0;i<DisquesOnTower3.length;i++){
if (DisquesOnTowers[2][i]!=null) Disques++;
}
if (Disques==parseInt(document.hanoi.Disqueno.options[document.hanoi.Disqueno.options.selectedIndex].text)) gameStat=true;
return gameStat;
}

function pushDisque(Disque,index){
var DisqueWidth = parseInt(Disque.style.width);
var towerLeft = parseInt(document.getElementById("tower"+index).style.left);
var topDisque = DisquesOnTowers[index-1][0];
if (topDisque!=null){
topDisqueWidth = parseInt(topDisque.style.width);
topDisqueTop = parseInt(topDisque.style.top);
Disque.style.left=towerLeft+midhoriztower-DisqueWidth/2+"px";
Disque.style.top=topDisqueTop-Disqueheight-1+"px";
}
else {
Disque.style.left=towerLeft+midhoriztower-DisqueWidth/2+"px";
Disque.style.top=basetop-Disqueheight-1+"px";
} 
}

function getNewTop(index,Disque){
if (Disque==null){ //pop
for (var i=0;i<DisquesOnTower1.length-1;i++){
DisquesOnTowers[index-1][i]=DisquesOnTowers[index-1][i+1];
}
DisquesOnTowers[index-1][DisquesOnTower1.length-1]=null;
}
else { //push
for (var i=DisquesOnTower1.length-1;i>=1;i--){
DisquesOnTowers[index-1][i]=DisquesOnTowers[index-1][i-1];
}
DisquesOnTowers[index-1][0]=Disque;
}
}

function solve(btn){
if (btn.value=="Solution"){
if (movectr>0 && !gameOver && !stop)
if (!confirm("le jeu va s arrêter, Voulez-vous vraiment recommencer?")) return;
btn.value="Stop";
initVars();
stop=false;
demo=true;
var f=document.hanoi;
f.btnIns.disabled=true;
f.btnRes.disabled=true;
f.btnUndo.disabled=true;
Disquenum = parseInt(f.Disqueno.options[f.Disqueno.options.selectedIndex].text);
drawDisques(Disquenum);
getMoves(0, 2, 1, Disquenum); 
t=window.setTimeout("moveDisque()",delay);
}
else {
if (t) {
window.clearTimeout(t);
btn.value="Solution";
frm.btnIns.disabled=false;
frm.btnRes.disabled=false;
t = null;
stop=true;
demo=false;
}

}
}

function moveDisque(){
frm = document.hanoi;
Disque=DisquesOnTowers[arrFr[pos]][0];
pushDisque(Disque,arrTo[pos]+1);
getNewTop(arrFr[pos]+1,null);
getNewTop(arrTo[pos]+1,Disque);
movectr++;
frm.yourmove.value=movectr;
pos++;
if (movectr<parseInt(frm.minmove.value)) t=window.setTimeout("moveDisque()",delay);
else {
alert("Pouvez-vous le faire en "+movectr+" déplacements?");
gameOver=true;
stop=false;
frm.btnSolve.value="Solution";
frm.btnIns.disabled=false;
frm.btnRes.disabled=false;
}
}

function getMoves(from,to,empty,numDisque){
if (numDisque > 1) {
getMoves(from, empty, to, numDisque - 1);
arrFr[idx] = from;
arrTo[idx++] = to;
getMoves(empty, to, from, numDisque - 1);
}
else {
arrFr[idx] = from;
arrTo[idx++] = to;
}
}

function unDo(btn){
Disque=DisquesOnTowers[currTower-1][0];
pushDisque(Disque,prevTower);
getNewTop(currTower,null);
getNewTop(prevTower,Disque);
movectr--;
document.hanoi.yourmove.value=movectr;
btn.disabled=true;
}

function displayIns(){
var msg="Essayer de déplacer tous les disques de la tour 1 à la tour 3.\n";
msg+="Vous ne pouvez déplacer qu un disque à la fois.\n";
msg+="Vous ne pouvez pas mettre un gros disque sur un disque plus petit.";
alert(msg);
}