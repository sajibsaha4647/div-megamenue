

    $(document).ready(function() {
     
      $("#owl-demo").owlCarousel({
     
          navigation : true, // Show next and prev buttons
          slideSpeed : 300,
          paginationSpeed : 400,
          singleItem:true,
		  items : 1,
		navigation : false,
		pagination : true,
		autoPlay: 3000 ,
		  
      });
     
    });  
	$(document).ready(function() {
     
      $(".partner1").owlCarousel({
     
          navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:false,
	  items : 6,
	  navigation : false,
	  pagination : false,
	  autoPlay: 3000 ,
		  
      });
     
    }); 
	

  





// Active MIX IT UP

$(function(){
	$('.portfolio_img').mixItUp({
		animation:{
			effects: 'fade'
		}
	
	});

});








$(document).ready(function(){
	var a = $(".manu");
	var pos = a.position();
	$(window).scroll(function(){
		var windowpos = $(window).scrollTop();
		if (windowpos >= pos.top){
			a.addClass("mvw");
		} else {
			a.removeClass("mvw");
		}
	});
});



