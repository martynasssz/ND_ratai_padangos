console.log('Calculator started!');

var input_a = document.getElementById('parameter_a');
var input_b = document.getElementById('parameter_b');
var input_c = document.getElementById('parameter_c');
var result = document.getElementById('result');

//input_c.addEventListener('mouseout', check_interval, add); galvojau daryti be mygtuku

function check_interval() {
var a = (input_a.value);	
var b = (input_b.value);
var c = (input_c.value);
if (a==""||b==""||c==""){
	alert("Nurodykite visus paramentrus");
}
else if (a<50) {
	alert("Jūsų padangos aukstis mažesnis nei 50 mm."+
		"Nurodykite didesnį padangos aukštį");
}
else if (a>300) {
	alert("Jūsų padangos aukstis didesnis nei 300 mm."+
		"Nurodykite mažesnį padangos aukštį");
}
else if (b<13) {
	alert("Jūsų ranlankio skersmuo mažesnis nei 13'."+
		"Nurodykite didesnį ratlankio skersmenį");
}
else if (b>24){
	alert("Jūsų ranlankio skersmuo didesnis nei 24'."+
		"Nurodykite mažesnį ratlankio skersmenį");
}
else if ((a+(b*25.4/2)+2)>c) {
	alert("Pagal nurodyta arkos spindulį, ratas netinka");
}
else {
	result.innerHTML=("Išsirinkote tinkamus rantlankius ir padangas");
}
}

function valyti() {
(input_a.value)="";	
(input_b.value)="";
(input_c.value)="";
result.innerHTML=""
}
