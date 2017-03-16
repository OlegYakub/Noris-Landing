
/*==============slick=============*/

$('.main-2__slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  dots: false,
  infinite: true,
  arrows: true,
});

$('.main-3__slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  dots: false,
  infinite: true,
  arrows: true,
  prevArrow: '.prev__caro',
  nextArrow: '.next__caro',
});

$('.main-7__body').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 3500,
  dots: false,
  infinite: true,
  arrows: true,
});

/*================modal=====================*/
	
	


$(document).ready(function() {
	$('#appl-btn1, .main-5__col .btn, .popup-desc .btn').click(function(e){
		e.preventDefault();
		$('#appl').modal({
		  fadeDuration: 250,
		  fadeDelay: 0.80,
		});
	});

	$('#appl2btn').click(function(e){
		e.preventDefault();
		$('#appl2').modal({
		  fadeDuration: 250,
		  fadeDelay: 0.80,
		});
	});


	$('#all4').click(function(){
		//console.log('f');
		$('#all4pop').modal({
		  closeClass: 'popup-desc__close',
		  fadeDuration: 250,
		  fadeDelay: 0.80,
		  closeText: '',

		});

	});
	$('#all6').click(function(){
	//	console.log('f');
		$('#all6pop').modal({
		  closeClass: 'popup-desc__close',
		  fadeDuration: 250,
		  fadeDelay: 0.80,
		  closeText: '',

		});
		
	});
	$('#all4zigoma').click(function(){
		//console.log('f');
		$('#all4zigomapop').modal({
		  closeClass: 'popup-desc__close',
		  fadeDuration: 250,
		  fadeDelay: 0.80,
		  closeText: '',

		});
		
	});

	$('#spec1').click(function(e){
		 e.preventDefault();
		$('.main-7 p.title, .main-7__body').hide();
		$('.main-7').css('background-color', '#eaeaea');
		$('.main-7__form').css('display', 'flex');
	});

	$('.main-7__form .form__close').click(function(e){
		e.preventDefault();
		$('.main-7 p.title, .main-7__body').show();
		$('.main-7').css('background-color', '#fff');
		$('.main-7__form').css('display', 'none');
	})

/*=========================================================*/
	var width = $(window).width();
	
	/*$('.popup-desc').slimScroll({
		height: '590px'
	});*/
	if(width <= 743){

		$('.main-5__body').slick();
		$('.main-5__body .main-5__text').shave(106);
	}	

		
/*======================mobile  main-6====================*/

	$('#item1').click(function(){
		//console.log(22);
		$('#drop1').toggle(400);
		$('#item1 .main-6m__p img').toggleClass('rotate');

	});
	$('#item2').click(function(){
		//console.log(22);
		$('#drop2').toggle(400);
		$('#item2 .main-6m__p img').toggleClass('rotate');

	});
	$('#item3').click(function(){
		//console.log(22);
		$('#drop3').toggle(400);
		$('#item3 .main-6m__p img').toggleClass('rotate');

	});
	$('#item4').click(function(){
	//	console.log(22);
		$('#drop4').toggle(400);
		$('#item4 .main-6m__p img').toggleClass('rotate');

	});
	$('#item5').click(function(){
		//console.log(22);
		$('#drop5').toggle(400);
		$('#item5 .main-6m__p img').toggleClass('rotate');

	});

/*=========================================================*/

	if( width >= 743){
		$('#addres1').click(function(){
			//console.log(1);
			$('.main-8__col').removeClass('active');
			$('#addres1').addClass('active');
			$('.main-8__map img').attr("src", "img/map.jpg");
		})

		$('#addres2').click(function(){
			//console.log(2);
			$('.main-8__col').removeClass('active');
			$('#addres2').addClass('active');
			$('.main-8__map img').attr("src", "img/noris_map2.png");
		})
		
	}

	//$('.popup').height($(window).height());

	
	/*var r = width - $('.popup-desc').width();
	var left = r/2;
	console.log(left);
	$('.popup-desc').css('left', left);*/




	/*var text = $('.main-5__text').text();
	console.log(text.length);
	var str = text.slice(0,150);
	var a = str.split(' ');
	a.splice(a.length-1,1);
	str = a.join(' ');
	$('.main-5__text').text(str+' ...');*/
		var i=0
		$('.main-5 .main-5__text').each( function(index,el) {
			i++;
		var text = $(this).text();
		var l = text.length;

	});
/*=============================validator=========================*/

	 jQuery.validator.addMethod("ContainsAtLeastOneDigit", function (value) { 
            return /[a-z].*[0-9]|[0-9].*[a-z]/i.test(value); 
    }, 'Your input must contain at least 1 letter and 1 number');


     jQuery.validator.addMethod("rus", function (value) { 
            return /^[а-яА-ЯёЁa-zA-Z0-9]+$/i.test(value); 
    }, 'Имя должно состоять только из букв или цифр');

    $(document).on("input", ".reg-phone", function() {
        this.value = this.value.replace(/[^\d\.\-]/g,'');
    });

    $("#appl1-form").validate({ 
        rules: {
                "name[]" : {
                    required: true,
                    minlength: 2,
                    maxlength: 30,
                    rus: true,
                },
                "contacts[phone]":{
                    required: true,
                },
            },
            messages: {
                "name[]" : {
                    required: "Необходимо ввести имя",
                    minlength: "Имя должно быть больше 2 букв",
                },
                "contacts[phone]":{
                    required: "Необходимо ввести телефон",
                },
            },
            submitHandler: function(form) {
                $(form).ajaxSubmit();
            },
            errorLabelContainer: "#messageBox",
            wrapper: "span",
    }); 

    $("#appl2-form").validate({ 
        rules: {
                "name[]" : {
                    required: true,
                    minlength: 2,
                    maxlength: 30,
                    rus: true,
                },
                "contacts[phone]":{
                    required: true,
                },
            },
            messages: {
                "name[]" : {
                    required: "Необходимо ввести имя",
                    minlength: "Имя должно быть больше 2 букв",
                },
                "contacts[phone]":{
                    required: "Необходимо ввести телефон",
                },
            },
            submitHandler: function(form) {
                $(form).ajaxSubmit();
            },
            errorLabelContainer: "#messageBox",
            wrapper: "span",
    });

    $("#m8form").validate({ 
        rules: {
                "name[]" : {
                    required: true,
                    minlength: 2,
                    maxlength: 30,
                    rus: true,
                },
                "contacts[phone]":{
                    required: true,
                },
            },
            messages: {
                "name[]" : {
                    required: "Необходимо ввести имя",
                    minlength: "Имя должно быть больше 2 букв",
                },
                "contacts[phone]":{
                    required: "Необходимо ввести телефон",
                },
            },
            submitHandler: function(form) {
                $(form).ajaxSubmit();
            },
            errorLabelContainer: "#messageBox",
            wrapper: "span",
    });  

     $("#consult-form").validate({ 
        rules: {
                "name[]" : {
                    required: true,
                    minlength: 2,
                    maxlength: 30,
                    rus: true,
                },
                "contacts[phone]":{
                    required: true,
                },

                date:{
                	required: true,
                }
            },
            messages: {
                "name[]" : {
                    required: "Необходимо ввести имя",
                    minlength: "Имя должно быть больше 2 букв",
                },
                "contacts[phone]":{
                    required: "Необходимо ввести телефон",
                },

                date:{
                	required: "Необходимо ввести дату",
                }
            },
            submitHandler: function(form) {
                $(form).ajaxSubmit();
            },
            errorLabelContainer: "#messageBox",
            wrapper: "span",
    }); 

    $.datepicker.setDefaults( $.datepicker.regional[ "ru" ] ); 
    $('#date-pick').datepicker({
    	showAnim: 'show',
    	dateFormat: 'd.M.yy',
    	showOtherMonths: true,
      selectOtherMonths: true

    });


});