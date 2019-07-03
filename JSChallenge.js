var calculation = document.getElementById("calculation");
var blue = document.getElementsByClassName("blue");
var green = document.getElementsByClassName("green");
var red = document.getElementsByClassName("red");


blue onclick = function(){
    calculation.backgroundColor="blue";
   
    var B = 66;
    var l = 108;
    var u = 117;
    var e = 101;
    
   calculation.innerHTML = "Hi, my name is Blue <br>" + (B+l+u+e);  
}


green onclick = function(){
    calculation.backgroundColor="green";
   
    var G = 71;
    var r = 114;
    var n = 110;
    var e = 101;

   calculation.innerHTML = "Hi, my name is Green <br>" + (G+r+e+e+n);    
}


red onclick = function(){
    calculation.backgroundColor="red";
   
    var R = 82;
    var e = 101;
    var d = 100;
    
   calculation.innerHTML = "Hi, my name is Red <br>" + (R+e+d);    
}