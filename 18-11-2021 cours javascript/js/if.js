/*
Condition IF


if(condition)
{

    //code 
}

*/


var a = 10;
var b = 10;
var c = "10";

if(a == b){
    alert("a+b");
}
if(a == 10){
    alert("a=10");
}

if(b == 10){
    alert("oui b=10");
}

if(a == c) {

    alert("la valeur de A = a  la valeur de C");
}


if(a === c) {

    alert("la valeur et le type du A = C");
}
if(a === b) {

    alert("la valeur et le type du A = B");
}

if(a>b) {

    alert("a superieur a b");
}

if(a<b) {

    alert("a inférieur à b");
}

if(a>=b) {

    alert("a superieur ou égal a b");
}

if(a<=b) {

    alert("a inférieur ou égal a b");
}

if(a!=b) { 
    alert("a different de b");
}

if(a==b && a==c) {
    alert("a=b et a=c");
}

if(a==b || a==c) {
    alert("a=b ou a=c");
}

if((a==b && b==c) || a==c)  {
    alert("a=b ou a=c");
}

if((a==b || b==c) && a==c)  {
    alert("a=b ou b=c et a=c");
}











