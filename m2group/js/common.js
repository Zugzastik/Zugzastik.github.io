$(function() {
	// Custom JS


$(".tabs>ul>li").click(function(e) {
  e.preventDefault();
  $(".tabs>ul>li").removeClass('active');
  $(this).addClass('active');
  $(".owl-carousel").trigger('refresh.owl.carousel');
});



$('.slider1').owlCarousel({
		loop: true,
		items: 1,
		nav: true,
		navText: "",
		dots: false,
		 responsive: {
	    1200: {
	      dots: true,
	    }
	  }
		
});

$('.owl-next').click(function() {
	$(".slider1").trigger('next.owl.carousel', [600]);
})
$('.owl-prev').click(function() {
	$(".slider1").trigger('prev.owl.carousel', [600]);
});

$('.slider2').owlCarousel({
		loop: true,
		items: 1,
		nav: true,
		navText: "",
		dots: false,
});

$('.owl-next1').click(function() {
	$(".slider2").trigger('next.owl.carousel', [600]);
})
$('.owl-prev1').click(function() {
	$(".slider2").trigger('prev.owl.carousel', [600]);
});





$(document).ready(function(){
    var show = true;
	var countbox = "#p5";
	$(window).on("scroll load resize", function(){
		if(!show) return false;                   // Отменяем показ анимации, если она уже была выполнена
		var w_top = $(window).scrollTop();        // Количество пикселей на которое была прокручена страница
		var e_top = $(countbox).offset().top;     // Расстояние от блока со счетчиками до верха всего документа
		var w_height = $(window).height();        // Высота окна браузера
		var d_height = $(document).height();      // Высота всего документа
		var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
		if(w_top + 800 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height){
			$('.spincrement').css('display','block');
			$('.spincrement').each(function () {
				var $this = $(this);
				jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
						duration: 5000,
						easing: 'swing',
						step: function () {
								$this.text(Math.ceil(this.Counter));
						}
				});
		});
			show = false;
		}
	});
});

$("form").submit(function() { //Change
	var th = $(this);
	$.ajax({
		type: "POST",
		url: "mail.php", //Change
		data: th.serialize()
	}).done(function() {
		alert("Спасибо за заявку! Мы свяжемся с вами в ближайшее время.");
		setTimeout(function() {
			// Done Functions
			th.trigger("reset");
		}, 1000);
	});
return false;
});



});