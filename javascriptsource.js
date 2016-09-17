
function myFunction() {

	document.getElementById("jslink").innerHTML="hello";
	newFunction();
}

myFunction();

function newFunction() {

	document.getElementById("jslink1").innerHTML="";
}


//below function for multiplication
function arithmatic() {

	a=1*(document.getElementById("input1").value);
	b=1*(document.getElementById("input2").value);
	sym=document.getElementById("sym").value;
	if(sym=="+")
	x=a+b;
	if(sym=="-")
	x=a-b;
	if(sym=="*")
	x=a*b;
	if(sym=="/")
	x=a/b;
	sol=a+sym+b+"=";
	document.getElementById("jslink1").innerHTML=sol+x;

}


//below code and function for hide and show text and button
/*
to hide
document.getElementById("b1").style.display="none";
to show
document.getElementById("b2").innerHTML="block";
*/
document.getElementById("b2").style.display="none";

function hide(){

	document.getElementById("visible").innerHTML="";
	document.getElementById("b1").style.display="none";
	document.getElementById("b2").style.display="block";
}

function show(){
	document.getElementById("visible").innerHTML="click to hide";
	document.getElementById("b1").style.display="block";

	document.getElementById("b2").style.display="none";

}



function job(){
	fname=document.getElementById("fname").value;
	lname=document.getElementById("lname").value;
	age=document.getElementById("age").value;
	comp=document.getElementById("comp").value;
	desi=document.getElementById("desi").value;
	x="Firstname:"+fname+"<br/>"+"Lastname:"+lname+"<br/>"+"age:"+age+"<br/>"+"company:"+comp+"<br/>"+"designation:"+desi;
	document.write(x);
}


function change()
	{
		z=0;
		x=(document.getElementById("ip1").value)*1;
		y=(document.getElementById("ip2").value)*1;
		s=(document.getElementById("symb").value);
		if(s=="+"){
			z=x+y;
		}
		else if(s=="-"){
			z=x-y;
		}
		else if(s=="*"){
			z=x*y;
		}
		else if(s=="/"){
			z=x/y;
		}
		else if(s=="%"){
			z=x%y;
		}

		resultt= x+s+y+"="+z;
		//to display the whole equation at the last line.........
		document.getElementById("res").innerHTML=resultt;
		//document.write(resultt);
	}

	function chngimg1(x){
		x.src="2.jpg";

	} 

	function chngimg2(x){
		x.src="1.png";
	}


	function keyUp(){
		var x = document.getElementById("key1");
    x.value = x.value.toUpperCase();
	}

	function keydown(){
		var aa = document.getElementById("key2");
    aa.value = aa.value.toLowerCase();
	}


	function consol(par) {
		if (par==1) {
			console.log('in');
		}
		else{
			console.log('out');
		}

		for(i=0;i<10;i++){
			console.log(i);
		}
}

jasoncall();

function jasoncall(){
	var js1={"name":"aaaa",
	"age":"22",
	"evenmore":{
		"ph":"xxxxx"
	}
	};

	console.log(js1.name);
	console.log(js1.age);
	console.log(js1.evenmore.ph);
}



function jsonfunc(){
	var js1={"name":"aaaa",
	"age":"22",
	"evenmore":{
		"ph":"xxxxx"
	}
	};

	document.write("name:"+js1.name+"<br/>");
	document.write("age"+js1.age+"<br/>");
	document.write("Phone:"+js1.evenmore.ph+"<br/>");

}