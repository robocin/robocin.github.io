 AOS.init({
 	duration: 800,
 	easing: 'slide',
 	once: true
 });

var path = window.location.pathname
var invisible

if($(window).width() < 1182){

	if(path === '/membros.html' && $(window).width() < 1182){
		invisible = document.getElementById('team-section')
		const inv = document.createElement('div')
		inv.setAttribute('class', 'invisible_class_members')
		invisible.insertBefore(inv, invisible.firstChild);
	}
	else if(path === '/seletiva.html' && $(window).width() < 1182){
		invisible = document.getElementById('pricing-section')
		const inv = document.createElement('div')
		inv.setAttribute('class', 'invisible_class_section')
		invisible.insertBefore(inv, invisible.firstChild);
	}
	else if(path === '/publicacoes.html' && $(window).width() < 1182){
		invisible = document.getElementById('services-section')
		const inv = document.createElement('div')
		inv.setAttribute('class', 'invisible_class_papers')
		invisible.insertBefore(inv, invisible.firstChild);
	}
	else if(path === '/contato.html' && $(window).width() < 1182){
		invisible = document.getElementById('contact-section')
		const inv = document.createElement('div')
		inv.setAttribute('class', 'invisible_class_contact')
		invisible.insertBefore(inv, invisible.firstChild);
	}

}

$(window).resize(() =>  {
	if(path === '/membros.html'){
		invisible = document.getElementById('team-section')
		const inv = document.createElement('div')
		inv.setAttribute('class', 'invisible_class_members')
		invisible.insertBefore(inv, invisible.firstChild);
	}
	else if(path === '/seletiva.html'){
		invisible = document.getElementById('pricing-section')
		const inv = document.createElement('div')
		inv.setAttribute('class', 'invisible_class_section')
		invisible.insertBefore(inv, invisible.firstChild);
	}
	else if(path === '/publicacoes.html' && $(window).width() < 1182){
		invisible = document.getElementById('services-section')
		const inv = document.createElement('div')
		inv.setAttribute('class', 'invisible_class_papers')
		invisible.insertBefore(inv, invisible.firstChild);
	}
	else if(path === '/contato.html'){
		invisible = document.getElementById('contact-section')
		const inv = document.createElement('div')
		inv.setAttribute('class', 'invisible_class_contact')
		invisible.insertBefore(inv, invisible.firstChild);
	}
})


console.log('Welcome to RobôCIn')

window.addEventListener('load', function () {
	
	var	brand = document.getElementsByClassName('classLogo')
	const logo = brand[0]


	if($(window).width() > 1182){
		logo.setAttribute('class','logo')
	}

	$(window).resize(() => {
		if($(window).width() < 1182){
			console.log(logo)
			logo.removeAttribute('class','logo')
			logo.setAttribute('class','logoClass')
	
		}else{
			console.log(used)
			logo.removeAttribute('class','logoClass')
			logo.setAttribute('class','logo')
		}
	});

})




jQuery(document).ready(function($) {

	"use strict";

	
	$(".loader").delay(1000).fadeOut("slow");
  $("#overlayer").delay(1000).fadeOut("slow");	
  

	var siteMenuClone = function() {

		$('.js-clone-nav').each(function() {
			var $this = $(this);
			$this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
		});


		setTimeout(function() {
			
			var counter = 0;
      $('.site-mobile-menu .has-children').each(function(){
        var $this = $(this);
        
        $this.prepend('<span class="arrow-collapse collapsed">');

        $this.find('.arrow-collapse').attr({
          'data-toggle' : 'collapse',
          'data-target' : '#collapseItem' + counter,
        });

        $this.find('> ul').attr({
          'class' : 'collapse',
          'id' : 'collapseItem' + counter,
        });

        counter++;

      });

    }, 1000);

		$('body').on('click', '.arrow-collapse', function(e) {
      var $this = $(this);
      if ( $this.closest('li').find('.collapse').hasClass('show') ) {
        $this.removeClass('active');
      } else {
        $this.addClass('active');
      }
      e.preventDefault();  
      
    });

		$(window).resize(function() {
			var $this = $(this),
				w = $this.width();

			if ( w > 768 ) {
				if ( $('body').hasClass('offcanvas-menu') ) {
					$('body').removeClass('offcanvas-menu');
				}
			}
		})

		$('body').on('click', '.js-menu-toggle', function(e) {
			var $this = $(this);
			e.preventDefault();

			if ( $('body').hasClass('offcanvas-menu') ) {
				$('body').removeClass('offcanvas-menu');
				$this.removeClass('active');
			} else {
				$('body').addClass('offcanvas-menu');
				$this.addClass('active');
			}
		}) 

		// click outisde offcanvas
		$(document).mouseup(function(e) {
	    var container = $(".site-mobile-menu");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {
	      if ( $('body').hasClass('offcanvas-menu') ) {
					$('body').removeClass('offcanvas-menu');
				}
	    }
		});
	}; 
	siteMenuClone();


	var sitePlusMinus = function() {
		$('.js-btn-minus').on('click', function(e){
			e.preventDefault();
			if ( $(this).closest('.input-group').find('.form-control').val() != 0  ) {
				$(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) - 1);
			} else {
				$(this).closest('.input-group').find('.form-control').val(parseInt(0));
			}
		});
		$('.js-btn-plus').on('click', function(e){
			e.preventDefault();
			$(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) + 1);
		});
	};
	// sitePlusMinus();


	var siteSliderRange = function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 500,
      values: [ 75, 300 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
      " - $" + $( "#slider-range" ).slider( "values", 1 ) );
	};
	// siteSliderRange();


	
	var siteCarousel = function () {
		if ( $('.nonloop-block-13').length > 0 ) {
			$('.nonloop-block-13').owlCarousel({
		    center: false,
		    items: 1,
		    loop: true,
				stagePadding: 0,
		    margin: 0,
		    autoplay: true,
		    nav: true,
				navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
		    responsive:{
	        600:{
	        	margin: 0,
	        	nav: true,
	          items: 2
	        },
	        1000:{
	        	margin: 0,
	        	stagePadding: 0,
	        	nav: true,
	          items: 3
	        },
	        1200:{
	        	margin: 0,
	        	stagePadding: 0,
	        	nav: true,
	          items: 4
	        }
		    }
			});
		}

		$('.single-text').owlCarousel({
	    center: false,
	    items: 1,
	    loop: true,
			stagePadding: 0,
	    margin: 0,
	    autoplay: true,
	    pauseOnHover: false,
	    nav: false,
	    smartSpeed: 1000,
	  });
		$('.slide-one-item').owlCarousel({
	    center: false,
	    items: 1,
	    loop: true,
			stagePadding: 0,
	    margin: 0,
	    autoplay: true,
	    smartSpeed: 1000,
	    pauseOnHover: false,
	    nav: true,
	    navText: ['<span class="icon-keyboard_arrow_left">', '<span class="icon-keyboard_arrow_right">']
	  });

	  

	  $('.slide-one-item-alt').owlCarousel({
	    center: false,
	    items: 1,
	    loop: true,
			stagePadding: 0,
	    margin: 0,
	    smartSpeed: 1000,
	    autoplay: true,
	    pauseOnHover: true,
	    mouseDrag: false,
	    touchDrag: false,
	  });
	  $('.slide-one-item-alt-text').owlCarousel({
	    center: false,
	    items: 1,
	    loop: true,
			stagePadding: 0,
	    margin: 0,
	    smartSpeed: 1000,
	    autoplay: true,
	    pauseOnHover: true,
	    mouseDrag: false,
	    touchDrag: false,
	    
	  });
	  

	  $('.custom-next').click(function(e) {
	  	e.preventDefault();
	  	$('.slide-one-item-alt').trigger('next.owl.carousel');
	  	$('.slide-one-item-alt-text').trigger('next.owl.carousel');
	  });
	  $('.custom-prev').click(function(e) {
	  	e.preventDefault();
	  	$('.slide-one-item-alt').trigger('prev.owl.carousel');
	  	$('.slide-one-item-alt-text').trigger('prev.owl.carousel');
	  });
	  
	};
	siteCarousel();

	var siteStellar = function() {
		$(window).stellar({
	    responsive: false,
	    parallaxBackgrounds: true,
	    parallaxElements: true,
	    horizontalScrolling: false,
	    hideDistantElements: false,
	    scrollProperty: 'scroll'
	  });
	};
	// siteStellar();

	var siteCountDown = function() {

		$('#date-countdown').countdown('2020/10/10', function(event) {
		  var $this = $(this).html(event.strftime(''
		    + '<span class="countdown-block"><span class="label">%w</span> weeks </span>'
		    + '<span class="countdown-block"><span class="label">%d</span> days </span>'
		    + '<span class="countdown-block"><span class="label">%H</span> hr </span>'
		    + '<span class="countdown-block"><span class="label">%M</span> min </span>'
		    + '<span class="countdown-block"><span class="label">%S</span> sec</span>'));
		});
				
	};
	siteCountDown();

	var siteDatePicker = function() {

		if ( $('.datepicker').length > 0 ) {
			$('.datepicker').datepicker();
		}

	};
	siteDatePicker();

	var siteSticky = function() {
		$(".js-sticky-header").sticky({topSpacing:0});
	};
	siteSticky();

	// navigation
  var OnePageNavigation = function() {
    var navToggler = $('.site-menu-toggle');
   	$("body").on("click", ".main-menu li a[href^='#'], .smoothscroll[href^='#'], .site-mobile-menu .site-nav-wrap li a", function(e) {
		
		// e.preventDefault();
		
		var home = document.getElementById('inicio')
		var members = document.getElementById('members')
		var store = document.getElementById('store')
		var vss = document.getElementById('vss')
		var ssl = document.getElementById('ssl')
		var lf = document.getElementById('lf')
		var twod = document.getElementById('2d')
		var papers = document.getElementById('papers')
		var seletiva = document.getElementById('sel')
		var contact = document.getElementById('contact')
		
		
		home.addEventListener('click', () =>{
			window.location.href = "./index.html";
		  })
		
		members.addEventListener('click', () =>{
			window.location.href = "./membros.html";
		})

		contact.addEventListener('click', () =>{
			window.location.href = "./contato.html";
		})

		store.addEventListener('click', () =>{
			window.location.href = "https://robocin.lojaintegrada.com.br/"
		})

		vss.addEventListener('click', () =>{
			window.location.href = "./verysmallsize.html";
		})

		ssl.addEventListener('click', () =>{
			window.location.href = "./smallsizeleague.html";
		})

		lf.addEventListener('click', () =>{
			window.location.href = "./seguidordelinha.html";
		})
		
		twod.addEventListener('click', () =>{
			window.location.href = "./simulacao2d.html";
		})

		papers.addEventListener('click', () =>{
			window.location.href = "./publicacoes.html";
		})

		seletiva.addEventListener('click', () =>{
			window.location.href = "./seletiva.html";
		})
   
    });
  };


  OnePageNavigation();

  var siteScroll = function() {

  	

  	$(window).scroll(function() {

  		var st = $(this).scrollTop();

  		if (st > 100) {
  			$('.js-sticky-header').addClass('shrink');
  		} else {
  			$('.js-sticky-header').removeClass('shrink');
  		}

  	}) 

  };
  siteScroll();


  var siteIstotope = function() {
  	/* activate jquery isotope */
	  var $container = $('#posts').isotope({
	    itemSelector : '.item',
	    isFitWidth: true
	  });

	  $(window).resize(function(){
	    $container.isotope({
	      columnWidth: '.col-sm-3'
	    });
	  });
	  
	  $container.isotope({ filter: '*' });

	    // filter items on button click
	  $('#filters').on( 'click', 'button', function() {
	    var filterValue = $(this).attr('data-filter');
	    $container.isotope({ filter: filterValue });
	    $('#filters button').removeClass('active');
	    $(this).addClass('active');
	  });
  }

  siteIstotope();


  $('.fancybox').on('click', function() {
	  var visibleLinks = $('.fancybox');

	  $.fancybox.open( visibleLinks, {}, visibleLinks.index( this ) );

	  return false;
	});

});