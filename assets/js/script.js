//variable declerations
var countersList = document.querySelectorAll(".counter-item span");
var flag = false;

//value reset to zero and increment
countersList.forEach(function(val){
    var n = parseInt(val.innerHTML);
    val.innerHTML = "0";
    var steps = 100;
    var incrimrnt = Math.round(n/steps);
    var timer = setInterval(function(){
        if(parseInt(val.innerHTML)<=n)
             flag && (val.innerHTML = (parseInt(val.innerHTML)+incrimrnt));
        else{
            val.innerHTML = n;
            clearInterval(timer);
        }
    },20)
});

//scroll event listner
document.addEventListener("scroll", function(){ flag = true })








