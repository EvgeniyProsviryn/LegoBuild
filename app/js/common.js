$(function() {
    $(window).scroll(function() {
    if ($(this).scrollTop()+600 > $('.gallery-wrapp').offset().top) {
        $('.gallery-wrapp').addClass("animated bounceInLeft")
    }
    
    if ($(this).scrollTop()+500 > $('.overlay').offset().top) {
        $('.advantages-left').addClass("animated bounceInRight")
        $('.advantages-right').addClass("animated bounceInRight")
        $('.advantages-title').addClass("animated bounceInRight")
    }
        
    if ($(this).scrollTop()+600 > $('.character').offset().top) {
        $('.character-title').addClass("animated rotateIn")
        $('.pr').addClass("animated rotateIn")
        $('.pl').addClass("animated rotateIn")
        $('.to').addClass("animated rotateIn")
        $('.mo').addClass("animated rotateIn")
        $('.vo').addClass("animated rotateIn")
    }
        
    if ($(this).scrollTop()+600 > $('.formwall').offset().top) {
        $('.character-title').addClass("animated rotateIn")
        $('.formwall').addClass("animated bounceInLeft")
        
    }
    });
    $('.menu-toggle').click(function() {
        $(this).toggleClass('menu-toggle--active');
        $('.mob-menu').toggleClass("active");
        animClass();
    });

    function animClass(){
    	$('.mob-menu').addClass("animated zoomIn");
    }
    
   $(".mapfilter").click(function(){
        $(this).fadeOut("slow")
   })
   
   $(".sendbutton").click(function(){
        $('html,body').animate({
			scrollTop: $('.formwall').offset().top
		},2000)
   })
   
   $(".icobox").click(function(){
        $('html,body').animate({
			scrollTop: $('.gallery-wrapp').offset().top
		},2000)
   })
   
   $(".price-z").click(function(){
        $('html,body').animate({
			scrollTop: $('.formwall').offset().top
		},2000)
   })
   
   $(".list1").click(function(){
        $('html,body').animate({
			scrollTop: $('.start-wrapp').offset().top
		},2000)
   })
   
   $(".list2").click(function(){
        $('html,body').animate({
			scrollTop: $('.gallery-wrapp').offset().top
		},2000)
   })
   
   $(".list3").click(function(){
        $('html,body').animate({
			scrollTop: $('.overlay').offset().top
		},2000)
   })
   
   $(".list4").click(function(){
        $('html,body').animate({
			scrollTop: $('.character').offset().top
		},2000)
   })
   
   $(".list5").click(function(){
        $('html,body').animate({
			scrollTop: $('.price-wrapp').offset().top
		},2000)
   })
    
    
    $('.icobox').addClass("animated bounce");
    
    $('.bxslider').bxSlider({controls: false});
    $('.bxslider2').bxSlider({
    	controls: true,
    	mode: 'fade',
    	speed: 700,
    	randomStart: true,
    	touchEnabled: true,
    	auto: true,
    	autoHover: true
    });
	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};
    
	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
    
});

