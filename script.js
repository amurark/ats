
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

var count1 = 0
var count2 = 0
$(window).on('scroll',function(e){
  var sTop = $(window).scrollTop();
  if(count1 == 0 && sTop > 0) {
    console.log(1);
    count2 = 0;
    $(".floatingWords").css({opacity: '1'});
    $("#firstWord").css({ top: '0px' });
    $("#secondWord").css({ top: '0px' });
    $("#thirdWord").css({ top: '0px' });
    count1++;
  }
  if(count2 == 0 && sTop == 0) {
    console.log(2);
    count1 = 0;
    $("#firstWord").css({ top: '50px' });
    $("#secondWord").css({ top: '200px' });
    $("#thirdWord").css({ top: '350px' });
    $(".floatingWords").css({opacity: '0'});
    count2++;
  }
});
