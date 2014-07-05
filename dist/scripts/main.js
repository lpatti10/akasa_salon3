//Hover state for spotlight features
$(".tile").hover( function(){
	  $(this).addClass("border");
	  }, function() {
	 	$(this).removeClass("border");
});

//Hero image blur on scroll
(function() {
  $(window).scroll(function() {
    var scrollBlur;
    scrollBlur = $(window).scrollTop() / 100;
    return $(".blur").css("opacity", scrollBlur);
  });

//Commenting this out will omit blur on scroll
}).call(this);


