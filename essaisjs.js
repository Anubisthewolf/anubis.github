function lagon() {
	var f=0;
	var q1=document.quiz1.question1.value;
	var q2=document.quiz1.question2.value;
	var q3=document.quiz1.question3.value;
	var resultat1 = document.getElementById('resultat1');
	var quiz1=document.getElementById("quiz1");
	if (q1=="3000") {f++}
	if (q2=="Madagascar") {f++}
	if (q3=="3") {f++}
	quiz1.style.display="none"
	
	if (f==0) {
		resultat1.textContent=" ton résultat est de 0 sur 3, tu devrais relire les documents."
	}
	
	if (f==1) {
		resultat1.textContent=" ton résultat est de 1 sur 3, tu devrais relire les documents."
	}
	if (f==2) {
		resultat1.textContent=" ton résultat est de 2 sur 3, domage."
	}
	if (f==3) {
		resultat1.textContent=" ton résultat est de 3 sur 3, bravo."
	}
}


function bidonville() {
	var f=0;
	var q1=document.quiz2.question1.value;
	var q2=document.quiz2.question2.value;
	var q3=document.quiz2.question3.value;
	var resultat2 = document.getElementById('resultat2');
	var quiz2=document.getElementById("quiz2");
	if (q1=="Bateaux") {f++}
	if (q2=="Kawéni") {f++}
	if (q3=="Bangas") {f++}
	quiz2.style.display="none"
	
	if (f==0) {
		resultat2.textContent=" ton résultat est de 0 sur 3, tu devrais relire les documents."
	}
	
	if (f==1) {
		resultat2.textContent=" ton résultat est de 1 sur 3, tu devrais relire les documents."
	}
	if (f==2) {
		resultat2.textContent=" ton résultat est de 2 sur 3, domage."
	}
	if (f==3) {
		resultat2.textContent=" ton résultat est de 3 sur 3, bravo."
	}
}