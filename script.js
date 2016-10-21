
var car = document.getElementsByClassName("carousal");
var carousal = document.getElementsByClassName("testimonialElements");
var count = 0;
setInterval(function(){
    if(count == 2) {
      count = 0;
    } else {
      count++;
    }
    if(count == 2) {
      for(var i = 0; i < carousal.length; i++) {
        console.log("now");
          $(carousal[i]).addClass('notransition');
          carousal[i].style.left = 100 + "%";
          $(carousal[i]).removeClass('notransition');
      }
    }
    for(var i = 0; i < carousal.length; i++) {
        carousal[i].style.left = (-100*count) + "%";
    }
},10000);
