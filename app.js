var startTime="";

function appearDivs(){
document.getElementById("shape").style.display="block";
 startTime=new Date().getTime();
}

function dilayShapes(){
  setTimeout(appearDivs,Math.random()*2000);
}

function disappearDivs(){
  document.getElementById("shape").style.display="none";
}

function random_bg_color() {
var x = Math.floor(Math.random() * 256);
var y = Math.floor(Math.random() * 256);
var z = Math.floor(Math.random() * 256);
 var bgColor="rgb(" + x + "," + y + "," + z + ")";
document.getElementById("shape").style.backgroundColor=bgColor;
}

function positioniong(){
      document.getElementById("shape").style.position="relative";
      var x = Math.floor(Math.random() * 300)+"px";
      var y = Math.floor(Math.random() * 800)+"px";
      document.getElementById("shape").style.top=x;
      document.getElementById("shape").style.left=y;
    }

    function shapeRandomness(){
          var borderRadius = Math.floor(Math.random() * 100)+"px";
          document.getElementById("shape").style.borderRadius=borderRadius;
        }


    function shapeRandomSize(){
      var min="20px";
      var max="200px";
      var width = Math.random() * (max - min) + min+"px";
      var height = Math.random() * (max - min) + min+"px";
      document.getElementById("shape").style.width=width;
      document.getElementById("shape").style.height=height;
        }



random_bg_color();
dilayShapes();
document.getElementById("shape").onclick=function(){
positioniong();
shapeRandomness();
shapeRandomSize();
dilayShapes();
random_bg_color();
disappearDivs();
var endTime=new Date().getTime()-startTime;
document.getElementById("TimeTeller").innerHTML="<span style='font-size:21px;'>"+"It took you: "+"</span>" + "<span style='font-size:26px; font-weight:bold;'>" + endTime/1000+ " seconds";
disappearDivs();
}


$(document).on("keydown", function(event) {
if (event.key == "Escape") {
    $("body").css("display","none");
}
});
