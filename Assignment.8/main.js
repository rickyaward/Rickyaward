//--------------------------button 1
    var name = "ricky";
    
	document.getElementById("button1").addEventListener("click", function() {
    console.log(name);
     }, false);
//--------------------button 2
    document.getElementById("button2").addEventListener("click", function() {
        console.log("hello " + "ricky");
    }, false);

//-------------------------button 3
    // var myArray = ["Ford", "Chevy", "Dodge", "Porsha"];

    // document.getElementById("button3").addEventListener("click", function() {
    //     console.log(myArray[1]);
    // }, false);






//-------------------------button 4
	// document.getElementById("button4").addEventListener("click", function() {
 //        for (i = 0; i < 11; i++) {
 //        console.log(i);
 //        }
 //    }, false);

//-------------------------button 5
var myArray = ["Ford", "Chevy", "Dodge", "Porsha"];
document.getElementById("button5").addEventListener("click", function() {
	for (i = 0; i < myArray.length; i++) {
	console.log(myArray[i]);
	}}, false);
//-------------------------button 6
var myArray = ["Ford", "Chevy", "Dodge", "Porsha"];
document.getElementById("button6").addEventListener("click", function() {
	for (i = 0; i < myArray.length;i++){
	if(myArray[i].substring(0,1) === "P"){
	console.log(myArray[i]);
	}}}, false)


//-------------------------button 7
   var car = {
   		door: 4, 
   		honk: function(){
        	console.log("honk");
        }
    };
	document.getElementById("button7").addEventListener("click", function() {
    car.honk()});
//------------------------testing
 $("#button3").click(function() {
    console.log(myArray[1]);
});

 $(".one").css("color", "blue");

 $("#two").css("color", "red");

 $("#button4").click(function() {
    for (i = 0; i < 11; i++) {
    console.log(i);
    }
 });




















