var a;

var g;

var cad;
var ccp;

var def=0;

var attack=0;

var choixun=0;
var choixdeux=0;
var choixtrois=0;
var choixquatres=0;
var choixcpun=0;
var choixcpdeux=0;
var choixcptrois=0;
var choixcpquatres=0;

var prop=0;

var joue=0;

var defj=0;

var attackj=0;

var toto=0;

var toto1=10;
var toto2=10;
var toto3=10;
var toto4=10;
var toto5=10;
var toto6=10;
var toto7=10;
var toto8=10;
var toto9=10;
var toto10=10;
var toto11=10;
var toto12=10;
var toto13=10;
var toto14=10;

var tts=0;

var tts1=0;
var tts2=10;
var tts3=10;
var tts4=10;
var tts5=10;
var tts6=10;
var tts7=10;
var tts8=10;
var tts9=10;
var tts10=10;
var tts11=10
var tts12=10;
var tts13=10;
var tts14=10;
var g=0;
var dejapasse=0;
// Merci de ne pas utiliser ce script si ce n' est pour l'observer. Pour me contacter : cyberpommer@ifrance.com

function selectionne(object){

def=0
attackj=0
defj=0
if(object.value=="JR" || object.value=="CP"){
alert("Le chiffre à déja était selectionné")
}
else{
nombredechoix(object)}}

// Merci de ne pas utiliser ce script si ce n' est pour l'observer. Pour me contacter : cyberpommer@ifrance.com

function nombredechoix(object){

prop++;

if(prop==1){
choixun=object.value}
else if(prop==2){
choixdeux=object.value}
else if(prop==3){
choixtrois=object.value}
else if(prop>=5){alert("perdu")}
else if(prop==4){
choixquatres=object.value}
object.value="JR"
calculposad()
}

// Merci de ne pas utiliser ce script si ce n' est pour l'observer. Pour me contacter : cyberpommer@ifrance.com
function calculposad(){
if (prop==1){
tts1=15-choixun

}
else if (prop==2){
tts2=15-choixdeux
tts3=15-choixdeux-choixun

}
else if (prop==3){
tts4=15-choixtrois
tts5=15-choixtrois-choixun
tts6=15-choixtrois-choixdeux
tts7=15-choixtrois-choixdeux-choixun}
else if(prop==4){
tts8=15-choixquatres
tts9=15-choixquatres-choixun
tts10=15-choixquatres-choixdeux
tts11=15-choixquatres-choixtrois
tts12=15-choixquatres-choixtrois-choixun
tts13=15-choixquatres-choixtrois-choixdeux
tts14=15-choixquatres-choixdeux-choixun-choixtrois
}
def=0
if (tts1<10 && tts1>0){
def=1
tts=tts1
cad=1
}
if (tts2<10 && tts2>0){
def=1
tts=tts2
cad=2
}
if (tts3<10 && tts3>0){
def=1
cad=3
tts=tts3
}
if (tts4<10 && tts4>0){
def=1
cad=4
tts=tts4}
if (tts5<10 && tts5>0){
def=1
cad=5
tts=tts5}
if (tts6<10 && tts6>0){
def=1
cad=6
tts=tts6}
if (tts7<10 && tts7>0){
def=1
cad=7
tts=tts7}
if (tts8<10 && tts8>0){
def=1
cad=8
tts=tts8}
if (tts9<10 && tts9>0){
def=1
cad=9
tts=tts9}
if (tts10<10 && tts10>0){
def=1
cad=10
tts=tts10}
if (tts11<10 && tts11>0){
def=1
cad=11
tts=tts11}
if (tts12<10 && tts12>0){
def=1
cad=12
tts=tts12}
if (tts13<10 && tts13>0){
def=1
cad=13
tts=tts13}
if (tts14<10 && tts14>0){
def=1
cad=14
tts=tts14}
if(tts1==0){
g=1
alert("bravo")
alert(choixun+' est égal à 15')

 }
if(tts2==0){
g=1
alert("bravo")
alert(choixdeux+' est égal à 15') 

}
if(tts3==0){
g=1
alert("bravo")
alert(choixdeux+' + '+ choixun+' est égal à 15')

}
if(tts4==0){
g=1
alert("bravo")
alert(choixtrois+' est égal à 15')

}
if(tts5==0){
g=1
alert("bravo")
alert(choixtrois+' + '+choixun+ ' est égal à 15')

}
if(tts6==0){
g=1
alert("bravo")
alert(choixtrois+ ' + '+choixdeux+' est égal à 15')

}
if(tts7==0){
g=1
alert("bravo")
alert(choixtrois+ ' + '+choixdeux+ ' + '+choixun+' est égal à 15')

}
if(tts8==0){
g=1
alert("bravo")
alert(choixquatres+' est égal à 15')

}
if(tts9==0){
g=1
alert("bravo")
alert(choixquatres +' + '+choixun+' est égal à 15')

}
if(tts10==0){
g=1
alert("bravo")
alert(choixquatres +' + '+choixdeux+' est égal à 15')

}
if(tts11==0){
g=1
alert("bravo")
alert(choixquatres +' + '+choixtrois+' est égal à 15')

}
if(tts12==0){
g=1
alert("bravo")
alert(choixquatres +' + '+choixtrois+' + '+choixun+' est égal à 15')

}
if(tts13==0){
g=1
alert("bravo")
alert(choixquatres +' + '+choixtrois+' + '+choixdeux+' est égal à 15')

}
if(tts14==0){
g=1
alert("bravo")
alert(choixquatres +' + '+choixtrois+' + '+choixdeux+' + '+choixun+' est égal à 15')

}

if (attack==1){attaque()}
else{
 if (def==1){boutonlibreounon()}
 else if (def==0){aupif()}}}
// Merci de ne pas utiliser ce script si ce n' est pour l'observer. Pour me contacter : cyberpommer@ifrance.com

function boutonlibreounon(){

if(tts==1 &&  document.f.one.value=="1"){
 document.f.one.value="CP"
 cj=1
defj=1
}
if(tts==2 && document.f.two.value=="2"){
 document.f.two.value="CP"
 defj=1
 cj=2
}
if(tts==3 && document.f.three.value=="3"){
document.f.three.value="CP"
defj=1
 cj=3
}
if(tts==4 && document.f.four.value=="4"){
document.f.four.value="CP"
defj=1
 cj=4
}
if(tts==5 && document.f.five.value=="5"){
document.f.five.value="CP"
defj=1
 cj=5
}
if(tts==6 && document.f.six.value=="6"){
document.f.six.value="CP"
defj=1
 cj=6
}
if(tts==7 && document.f.seven.value=="7"){
document.f.seven.value="CP"
defj=1
 cj=7
}
if(tts==8 && document.f.eight.value=="8"){
document.f.eight.value="CP"
defj=1
 cj=8
}
if(tts==9 && document.f.nine.value=="9"){
document.f.nine.value="CP"
defj=1
 cj=9
}
jouerounon()

}
function jouerounon(){

if (defj==1){joue++
calculposcp()}

else if (defj==0){
recalculerposad()}}

// Merci de ne pas utiliser ce script si ce n' est pour l'observer. Pour me contacter : cyberpommer@ifrance.com
function recalculerposad(){
cad--

if (cad==13){
if(tts13<10 && tts13>0){
tts=tts13
boutonlibreounon()}
else{recalculerposad()}}

else if (cad==12){
if(tts12<10 && tts12>0){
tts=tts12
boutonlibreounon()}
 else{recalculerposad()}}
 
else if (cad==11){
if(tts11<10 && tts11>0){
tts=tts11
boutonlibreounon()
}
else{recalculerposad()}}

else if (cad==10){
if(tts10<10 && tts10>0){
tts=tts10
boutonlibreounon()
}
else{recalculerposad()}}

else if (cad==9){
if(tts9<10 && tts9>0){
tts=tts9
boutonlibreounon()
}
else{recalculerposad()}}

else if (cad==8){
if(tts8<10 && tts8>0){
tts=tts8
boutonlibreounon()
}
else{recalculerposad()}}

else if (cad==7){
if(tts7<10 && tts7>0){
tts=tts7
boutonlibreounon()
}
else{recalculerposad()}}

else if (cad==6){
if(tts6<10 && tts6>0){
tts=tts6
boutonlibreounon()
}
else{recalculerposad()}}

else if (cad==5){
if(tts5<10 && tts5>0){
tts=tts5
boutonlibreounon()
}
else{recalculerposad()}}

else if (cad==4){
if(tts4<10 && tts4>0){
tts=tts4
boutonlibreounon()
}
else{recalculerposad()}}

else if (cad==3){
if(tts3<10 && tts3>0){
tts=tts3
boutonlibreounon()
}
else{recalculerposad()}}

else if (cad==2){
if(tts2<10 && tts2>0){
tts=tts2
boutonlibreounon()
}
else{recalculerposad()}}

else if (cad==1){
if(tts1<10 && tts1>0){
tts=tts1
boutonlibreounon()
}
else{recalculerposad()}}

else if (cad==0){
aupif()}}
// Merci de ne pas utiliser ce script si ce n' est pour l'observer. Pour me contacter : cyberpommer@ifrance.com
  
function calculposcp(){

if (joue==1){
 choixcpun=cj
 toto1= 15-choixcpun

 }
 else if (joue==2){
 choixcpdeux=cj
 toto2= 15-choixcpdeux
toto3= 15-choixcpun-choixcpdeux

 }
 else if (joue==3){
 choixcptrois=cj
 toto4=15-choixcptrois
 toto5=15-choixcptrois-choixcpun
 toto6=15-choixcptrois-choixcpdeux
 toto7=15-choixcptrois-choixcpdeux-choixcpun
 }
 else if (joue==4){
 choixcpquatres=cj
 toto8=15-choixcpquatres
 toto9=15-choixcpquatres-choixcpun
 toto10=15-choixcpquatres-choixcpdeux
 toto11=15-choixcpquatres-choixcptrois
 toto12=15-choixcpquatres-choixcptrois-choixcpun
 toto13=15-choixcpquatres-choixcptrois-choixcpdeux
 toto14=15-choixcpquatres-choixcptrois-choixcpdeux-choixcpun
 }

 if (toto1<10 && toto1>=0){
 
attack=1
ccp=1
toto=toto1
}
if (toto2<10 && toto2>=0){
attack=1
ccp=2
toto=toto2
}
if (toto3<10 && toto3>=0){
attack=1
ccp=3
toto=toto3

}
if (toto4<10 && toto4>=0){
attack=1
ccp=4
toto=toto4}
if (toto5<10 && toto5>=0){
attack=1
ccp=5
toto=toto5}
if (toto6<10 && toto6>=0){
attack=1
ccp=6

toto=toto6}
if (toto7<10 && toto7>=0){
attack=1
ccp=7
toto=toto7}
if (toto8<10 && toto8>=0){
attack=1
ccp=8
toto=toto8}
if (toto9<10 && toto9>=0){
attack=1
ccp=9
toto=toto9}
if (toto10<10 && toto10>=0){
attack=1
ccp=10
toto=toto10}
if (toto11<10 && toto11>=0){
attack=1
ccp=11
toto=toto11}
if (toto12<10 && toto12>=0){
attack=1
ccp=12
toto=toto12}
if (toto13<10 && toto13>=0){
attack=1
ccp=13
toto=toto13}
if (toto14<10 && toto14>=0){
attack=1
ccp=14
toto=toto14}

if(a==1){pourquoi()}

}

// Merci de ne pas utiliser ce script si ce n' est pour l'observer. Pour me contacter : cyberpommer@ifrance.com

function attaque(){
attack=0
if(toto==1 && document.f.one.value=="1"){
document.f.one.value="CP"
attackj=1
cj=1
}
if(toto==2 && document.f.two.value=="2"){
 document.f.two.value="CP"
 attackj=1
 cj=2}
 
 if(toto==3 && document.f.three.value=="3"){
 document.f.three.value="CP"
 cj=3
 attackj=1}
 
 if(toto==4 && document.f.four.value=="4"){
 document.f.four.value="CPs"
 cj=4
 attackj=1}
 
 if(toto==5 && document.f.five.value=="5"){
 document.f.five.value="CP"
 cj=5
 attackj=1}
 
 if(toto==6 && document.f.six.value=="6"){
 document.f.six.value="CP"
 attackj=1
 cj=6}
 
 if(toto==7 && document.f.seven.value=="7"){
 document.f.seven.value="CP"
 cj=7
 attackj=1}
 
 if(toto==8 && document.f.eight.value=="8"){
 document.f.eight.value="CP"
 cj=8
 attackj=1}
 
 if(toto==9 && document.f.nine.value=="9"){
 document.f.nine.value="CP"
 attackj=1
 cj=9}
 if (toto==0){alert("felicitation")}
 if (attackj==1 && g==0){
 joue++

 alert("Tu as perdu j'ai réussi à aligner 15 points")
 pourquoi()
 
}
 else if (attackj==0){recalculposcp()}
}
// Merci de ne pas utiliser ce script si ce n' est pour l'observer. Pour me contacter : cyberpommer@ifrance.com
function recalculposcp(){
ccp--

if (ccp==13){
if(toto13<10 && toto13>0){
toto=toto13
attaque()}
else{recalculposcp()}}

else if (ccp==12){
if(toto12<10 && toto12>0){
toto=toto12
attaque()}
 else{recalculposcp()}}
 
else if (ccp==11){
if(toto11<10 && toto11>0){
toto=toto11
attaque()
}
else{recalculposcp()}}

else if (ccp==10){
if(toto10<10 && toto10>0){
toto=toto10
attaque()
}
else{recalculposcp()}}

else if (ccp==9){
if(toto9<10 && toto9>0){
toto=toto9
attaque()
}
else{recalculposcp()}}

else if (ccp==8){
if(toto8<10 && toto8>0){
toto=toto8
attaque()
}
else{recalculposcp()}}

else if (ccp==7){
if(toto7<10 && toto7>0){
toto=toto7
attaque()
}
else{recalculposcp()}}

else if (ccp==6){
if(toto6<10 && toto6>0){
toto=toto6
attaque()
}
else{recalculposcp()}}

else if (ccp==5){
if(toto5<10 && toto5>0){
toto=toto5
attaque()
}
else{recalculposcp()}}

else if (ccp==4){
if(toto4<10 && toto4>0){
toto=toto4
attaque()
}
else{recalculposcp()}}

else if (ccp==3){
if(toto3<10 && toto3>0){
toto=toto3
attaque()
}
else{recalculposcp()}}

else if (ccp==2){
if(toto2<10 && toto2>0){
toto=toto2
attaque()
}
else{recalculposcp()}}

else if (ccp==1){
if(toto1<10 && toto1>0){
toto=toto1
attaque()
}
else{recalculposcp()}}

else if (ccp==0){
boutonlibreounon()}
}
// Merci de ne pas utiliser ce script si ce n' est pour l'observer. Pour me contacter : cyberpommer@ifrance.com

function aupif(){
joue++

if(document.f.eight.value=="8"){
document.f.eight.value="CP"
cj=8}

else{

if(document.f.five.value=="5"){
 document.f.five.value="CP"
 cj=5

}
 else{
 if(document.f.six.value=="6"){
 document.f.six.value="CP"
 cj=6
 }
 else{
 if(document.f.four.value=="4"){
 document.f.four.value="CP"
 cj=4
}
 else{
 if(document.f.two.value=="2"){
 document.f.two.value="CP"
 cj=2
 }
 else{
 if(document.f.nine.value=="9"){
 document.f.nine.value="CP"
 cj=9
 }
 else{
 if(document.f.seven.value=="7"){
 document.f.seven.value="CP"
 cj=7 }
 else{
 if(document.f.one.value=="1"){
 document.f.one.value="CP"
 cj=1
 }
 else{
 if(document.f.three.value=="3"){
 document.f.three.value="CP"
 cj=3
}
}}}}}}}}
if (joue==1){

choixcpun=cj
calculposcp()}
if(joue==2){
choixcpdeux=cj
calculposcp()}
if(joue==3){
choixcptrois=cj
calculposcp()}
if(joue==4){
choixcpquatres=cj
calculposcp()}}

function pourquoi(){
a=1
if(toto1==0){

alert(choixcpun+' est égal à 15')
window.location.reload()
dejapasse=1
 }

if(toto2==0){

alert(choixcpdeux+' est égal à 15') 
window.location.reload()
dejapasse=1
}

if(toto3==0){

alert(choixcpdeux+' + '+ choixcpun+' est égal à 15')
window.location.reload()
dejapasse=1
}
if(toto4==0){

alert(choixcptrois+' est égal à 15')
window.location.reload()
dejapasse=1
}
if(toto5==0){

alert(choixcptrois+' + '+choixcpun+ ' est égal à 15')
window.location.reload()
dejapasse=1
}
if(toto6==0){

alert(choixcptrois+ ' + '+choixcpdeux+' est égal à 15')
window.location.reload()
dejapasse=1
}
if(toto7==0){

alert(choixcptrois+ ' + '+choixcpdeux+ ' + '+choixcpun+' est égal à 15')
window.location.reload()
dejapasse=1
}
if(toto8==0){

alert(choixcpquatres+' est égal à 15')
window.location.reload()
dejapasse=1
}
if(toto9==0){

alert(choixcpquatres +' + '+choixcpun+' est égal à 15')
window.location.reload()
dejapasse=1
}
if(toto10==0){

alert(choixcpquatres +' + '+choixcpdeux+' est égal à 15')
window.location.reload()
dejapasse=1
}
if(toto11==0){

alert(choixcpquatres +' + '+choixcptrois+' est égal à 15')
window.location.reload()
dejapasse=1
}
if(toto12==0){

alert(choixcpquatres +' + '+choixcptrois+' + '+choixcpun+' est égal à 15')
window.location.reload()
dejapasse=1
}
if(toto13==0){

alert(choixcpquatres +' + '+choixcptrois+' + '+choixcpdeux+' est égal à 15')
window.location.reload()
dejapasse=1
}
if(toto14==0){

alert(choixcpquatres +' + '+choixcptrois+' + '+choixcpdeux+' + '+choixcpun+' est égal à 15')
window.location.reload()
dejapasse=1
}
if(dejapasse==0){
calculposcp()
}
}