//js//
var number1=5;
var number2=5;
var result= number1 + number2;

//example1
function showResult(){
	document.getElementById('sr').innerHTML=result;
}


var adi=9;
var nafi=5;
var number= adi - nafi;

//example2
function showNumber(){
	document.getElementById('sn').innerHTML=number;
}

var tasi=9;
var nami=3;
var total= tasi * nami;

//example3
function showTotal(){
	document.getElementById('st').innerHTML=total;
}

var fari=9;
var wazi=3;
var divine= fari / wazi;

//example4
function showDivine(){
	document.getElementById('sd').innerHTML=divine;
}

//example5
function showAlert(){
	window.alert("why are you here!!!");
}

var number9=9;
var number10=3;
var tru= number9 > number10;
//example6
function showTrue(){
	document.getElementById('str').innerHTML=tru;
}

var numbera=10;
var numberb=3;
var fals= numbera < numberb;
//example7
function showFalse(){
	document.getElementById('sf').innerHTML=fals;
}


var number13=9;
var number14=9;
var same= number13 = number14;
//example8
function showSame(){
	document.getElementById('ssm').innerHTML=same;
}


var number15=9;
var number16=9;
var equal= number15 == number16;
//example9
function showEqual(){
	document.getElementById('seq').innerHTML=equal;
}


var number17=9;
var number18=9;
var identical= number17 === number18;
//example10
function showIdentiqal(){
	document.getElementById('sid').innerHTML=identical;
}

//example11
var carName1 = "Volvo XC60"; // Double quotes
var carName2 = 'Volvo XC60'; // Single quotes

function showString(){
document.getElementById("string").innerHTML =
carName1 + " " + carName2; 
}

//example12
let answer1 = "It's alright";
let answer2 = "He is called 'Johnny'";
let answer3 = 'He is called "Johnny"';

function showInfo(){
document.getElementById("sinf").innerHTML =
answer1 + "<br>" + answer2 + "<br>" + answer3; 
}

//example13
let text = `He's often called "Johnny"`;
function showText(){
document.getElementById("stext").innerHTML = text;
}

//example14
function showAlert1(){
	window.alert(" previous template is not supported in Internet Explorer!!");
}
//example15
let text1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function showLength(){
document.getElementById("slth").innerHTML = text1.length;
}

//example16
function showPara(){
document.getElementById("spara").innerHTML = "Hello Dolly!";
}
//example17
let text2 = "Please locate where 'locate' occurs!";
let index = text2.lastIndexOf("locate");
function showLoc(){
document.getElementById("sloc").innerHTML = index;
}
//example18
let text3 = "Please locate where 'locate' occurs!";
let indexi = text3.indexOf("John");
function showLoc1(){
document.getElementById("sloc1").innerHTML = indexi;
}


//example19
let text4 = "The rain in SPAIN stays mainly in the plain";
const myArr = text4.match("ain");
function showMatch(){
document.getElementById("smatch").innerHTML = myArr.length + " " + myArr;

}
//example20

let text5 = "Hello world, welcome to the universe.";

function showInclude(){
document.getElementById("sinclu").innerHTML = text5.includes("world");
}

//example21
function showAlert2(){
	window.alert(" previous template is not supported in Internet Explorer!!");
}

//example22
let text6 = "Hello world, welcome to the universe.";

function showStart(){
document.getElementById("sstart").innerHTML = text6.startsWith("Hello");


}

//example23
function showAlert3(){
	window.alert(" previous template is not supported in Internet Explorer!!");
}

//example24

let text7 = "John Doe";

function showEnd(){
document.getElementById("send").innerHTML = text7.endsWith("Doe");

}

//example25
let text8 = `Hello world!`;
function showTem(){
document.getElementById("stem").innerHTML = text8;


}

//example26
function showAlert4(){
	window.alert(" previous template is not supported in Internet Explorer!!");
}

//example27
let text9 =

`The quick
brown fox
jumps over
the lazy dog`;
	

function showMulti(){
document.getElementById("smul").innerHTML = text9;
}
//example28
function showAlert5(){
	window.alert(" previous template is not supported in Internet Explorer!!");
}
//example29
let price = 10;
let VAT = 0.25;
let total1 = `Total: ${(price * (1 + VAT)).toFixed(2)}`;

function showVari(){
document.getElementById("svari").innerHTML = total1;


}
//example30
function showAlert6(){
	window.alert(" previous template is not supported in Internet Explorer!!");
}

//example31
let x1 = 3.14;
let y1 = 3;
function showDeci(){
document.getElementById("sdeci").innerHTML = x1 + "<br>" + y1;

}
//example32
let x2 = 123e5;
let y2 = 123e-5;
function showSci(){
document.getElementById("sci").innerHTML = x2 + "<br>" + y2;


}

//example33
let x3 = 0.2 + 0.1;
function showFloat(){
document.getElementById("sfloat").innerHTML = "0.2 + 0.1 = " + x3;


}
//example34
function showAlert7(){
	window.alert(" Floating point arithmetic is not always 100% accurate!!");
}
//example35
let x4 = 999999999999999;
let y4 = 9999999999999999;
function showInteger(){
document.getElementById("sinte").innerHTML = x4 + "<br>" + y4;


}

//example36
let x5 = 9007199254740995n;
let y5 = 9007199254740995n;
let z = x5 * y5;
function showBmulti(){
document.getElementById("sbmulti").innerHTML = z; 


}

//example37

let x6 = 5n;
let y6 = Number(x6) / 2;
function showBdivide(){
document.getElementById("sbdivi").innerHTML = y6; 	



}

//example38
let x7 = 6;
function showNumpro(){
document.getElementById("snumpro").innerHTML = x7.MAX_VALUE;


}
//example39

let x8 = Number.MIN_VALUE;
function showMin(){
document.getElementById("smin").innerHTML = x8;

}

//example40
let x9 = Number.POSITIVE_INFINITY;
function showPos(){
document.getElementById("spos").innerHTML = x9;



}
//example41
let x10 = Number.NEGATIVE_INFINITY;
function showNeg(){
document.getElementById("sneg").innerHTML = x10;


}

//example42
const cars1 = ["Saab", "Volvo", "BMW"];

function showArray(){
document.getElementById("sarr").innerHTML = cars1;


}
//example43
const fruits = ["Banana", "Orange", "Apple", "Mango"];

function showTsring(){
document.getElementById("stsring").innerHTML = fruits.toString();


}
//example44
const person = ["John", "Doe", 46];
function showAnum(){
document.getElementById("sanum").innerHTML = person[0];



}
//example45
const person1 = {firstName:"John", lastName:"Doe", age:46};
function showNacc(){
document.getElementById("snacc").innerHTML = person1.firstName;



}

//example46
function showBool(){
document.getElementById("sbool").innerHTML = Boolean(10 > 9);



}
//example47
let x11 = 0;
function showBoold(){
document.getElementById("sboold").innerHTML = Boolean(x11);

}

//example48
let x12 = 5;
function showComp(){
document.getElementById("scomp").innerHTML = (x12 >= 8);



}
//example49
let x13 = 5;
function showCompa(){

document.getElementById("scompa").innerHTML = (x13 != 8);

}
//example50
let x14 = 6;
function showCompar(){

document.getElementById("scompar").innerHTML = (x14 != 8);

}


