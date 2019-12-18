$("document").ready(function () {
	// $('select').selectBox({
	// 	mobile: false,
	// 	menuSpeed: 'fast',
	// 	menuTransition: 'fade'
	// });
	// $(".clickable").click(function(){
	// 	$(this).parent("tr").toggleClass("tableCollapsed");
	// });

	// for modal popup
	$('.survey-modal .panel').click(function(){
		var panelParent = $(this).parent();
		var chbx = panelParent.find('input[type="checkbox"]');
		if(chbx.is(':checked')){
			chbx.prop('checked',false);
			panelParent.removeClass('active');
		}else{
			chbx.prop('checked',true);
			panelParent.addClass('active');
		}
	})

	// Home page Slider

	$('.slider-container-js').slick({
		slidesToShow: 1,
		slidesToScroll: 3,
		dots: true,
		centerMode: true,
		focusOnSelect: true,
		variableWidth: true
	});

	sliderContainerCatalog('recent-wrapper');
	
	$("#DataTables th").click(function(){
		$("#DataTables tr").removeClass("tableCollapsed");
	});	

	

	$('.recent-wrapper').each(function(){

		var len = $(this).find('.slick-slide').length;

	    if (len <= 6) {
			$(this).find('.slick-dots').hide();
		}
	});


	// Custom Scroll Init

	$(".catalog-content-sort--panelScoll").mCustomScrollbar();
		
	// Tooltip init

	$('[data-toggle="tooltip"]').tooltip(); 
	
	// notification close
	$('.alert .close').on('click',function(){
		$(this).parents('.alert').fadeOut('1000')
	})
//	$('#timeout').modal('show');


	$(".newAccBtn").click(function(){
		$(".rewardsRedemption--maintainAcc").hide();
		$(".rewardsRedemption--addNewAcc").show();
	});

	$(".cancel-btn").click(function(){
		$(".rewardsRedemption--maintainAcc").show();
		$(".rewardsRedemption--addNewAcc, .rewardsRedemption--editAcc").hide();
	});

	$(".table a").click(function(){
		$(".rewardsRedemption--maintainAcc").hide();
		$(".rewardsRedemption--editAcc").show();
	});


	$(".redemption-container .btn-auto-redemption , .redemption-container .goto-change-allocations").click(function(){
		$(".redemption-container .redemptionDisabled").hide();
		$(".redemption-container .redemptionEarning").show();
	});
	$(".redemption-container .goto-change-allocations").click(function(){
		$(".redemption-container .redemption-review").hide();
		$(".redemption-container .redemption-review .enabled-review-btn-group").hide();
		$(".redemption-container .redemptionEarning").show();
		$(".redemption-container .rewardsRedemption-btns").show();
	});

	$(".on-demand-container .goto-change-allocations").click(function(){
		$(".on-demand-container .redemption-review").hide();
		$(".on-demand-container .redemption-review .enabled-review-btn-group").hide();
		$(".on-demand-container .redemptionEarning").show();
		$(".on-demand-container .rewardsRedemption-btns").show();
	});
	$(".back-redemption-review").click(function(){
		$(this).parents(".redemption-container").find(".redemption-review").hide();
		$(this).parents(".redemption-container").find(".redemptionEarning").show();
	});
	
	$(".modal-disable-btn").click(function(){
		$(".redemption-container .redemptionDisabled").show();
		$(".redemption-container .redemption-review").hide();
		$('#redemption-modal').modal('hide')
	});
	$(".redemption-container .goto-redemption-review").click(function(){
	});
	$(".redemption-container .goto-thanku").click(function(){
		$(".redemption-container .redemption-review").hide();
		$(".redemption-container .thank-section").show();
	});

	/*$(".on-demand-container .goto-redemption-review").click(function(){
		$(".on-demand-container .redemptionEarning").hide();
		$(".on-demand-container .redemption-review").show();
	});*/

	$(".redemption-container .back-redemptionenable").click(function(){
		$(".redemption-container .redemptionEarning").hide();
		$(".redemption-container .rewardsRedemption-btns").hide();
		$(".redemption-container .redemption-review").show();
		$(".redemption-container .redemption-review .enabled-review-btn-group").show();
	});

	$(".redemption-container .back-redemptionreward").click(function(){
		$(this).parents(".redemption-container").find(".redemptionEarning").hide();
		$(this).parents(".redemption-container").find(".redemptionDisabled").show();
	});

	$(".on-demand-container .goto-thanku").click(function(){
		$(".on-demand-container .redemption-review").hide();
		$(".on-demand-container .thank-section").show();
	});

	$(".redemptionEarning .account-form select").each(function( index ) {
		var selectedVal = $(this).val();
		if ($(this).val().length == 0) {
			$(this).parents(".form-group").find("input[type='text']").attr("disabled", "disabled");
		}
	});

	$(".redemptionEarning .account-form").on("change","select", function(){
		$(this).parents(".form-group").find("input[type='text']").removeAttr("disabled"); 
	});

	// <li>Filter <a href="#">X</a></li>

	// $(".catalog-content-sort--panelContent .container-checkbox input[type='checkbox']").on('change', function(){
	// 	if($(this).is(':checked')){
	// 		var val = $(this).val();
	// 		$(".catalog-content-sort--tags ul").append('<li data-val="'+val+'">'+ val +' <a href="#">X</a></li>')
	// 	}
	// });

	// $(document).on('.catalog-content-sort--tags li a', 'click', function(e){
	// 	e.preventDefault();

	// 	debugger;

	// 	var val = $(this).parent().data('val');

	// 	$('.catalog-content-sort--panelContent input["value"='+val+']').removeAttr('checked')

	// 	// $(".catalog-content-sort--tags ul").append('<li data-val="'+val+'">'+ val +' <a href="#">X</a></li>')
	// });

	// $(".clearAll-filter").click(function(){
	// 	$(".catalog-content-sort--tags ul ").html("");
	// 	$(".container-checkbox input").prop('checked', false);
	// });

	$('.section-cont ul li a').click(function(e){
		e.preventDefault();
		$("html,body").animate({
				scrollTop:$($(this).attr("href")).offset().top-30
			},"slow")
	});

	// START: Quanity Counter

	$('.qty-sub').click(function(e){

		var value =	parseInt($("#qtyCount").val());
		var maxValue =	$("#qtyCount").attr("max-value");

		if (value != "" && value != 1) {
			value -= 1;
		}
		$("#qtyCount").val(value);
	});

	$('.qty-add').click(function(e){

		var value =	parseInt($("#qtyCount").val());
		var maxValue =	$("#qtyCount").attr("max-value");

		if (value != "" && value != maxValue) {
			value += 1;
		}
		$("#qtyCount").val(value);
	});

	$('#qtyCount').on('input', function() {
		var position = this.selectionStart - 1;

		fixed = this.value.replace(/[^0-9\.]/g, '');
		if(fixed.charAt(0) === '.')
			fixed = fixed.slice(1);

		var pos = fixed.indexOf(".") + 1;
		if(pos >= 0)
			fixed = fixed.substr(0,pos) + fixed.slice(pos).replace('.', '');

		if (this.value !== fixed) {
			this.value = fixed;
			this.selectionStart = position;
			this.selectionEnd = position;
		}
	});

	$('.qtyCount').on('blur', function() {
		if( Number(this.value) == '0' ){
			$(this).val('1');
		}
	});

	// END: Quanity Counter

			$('.backToTop').click(function(e){
					e.preventDefault();
					$("html,body").animate({
						scrollTop:$('body').offset().top-30
					},"slow")
				});

				$('.expandAll').click(function(){
					$(".collapseActive").collapse('show');
				});

				$('.collapseAll').click(function(){
						$(".collapseActive").collapse('hide');
				});
		
				$('input[type="text"]:disabled').removeAttr('required')

				$('.form-enroll select').selectBox({
					mobile: false,
					menuSpeed: 'fast',
					menuTransition: 'fade'
					});

					$('.btn-reward-popup').click(function(e){
						$('#reward-modal').modal('show');
					});

					$('.btn-reward-thanku').click(function(e){
						$(".confirm-enroll").hide();
						$('#reward-modal').modal('hide');
						$(".enrollThanku").show();
					});
					$('input.selectAllChk,.seldiffcatg input[type="checkbox"]').removeAttr('required');
					$('input.selectAllChk').change(function(){
						if($(this).is(':checked')){
							$('.seldiffcatg input[type="checkbox"]').attr('checked',true);
						}else{
							$('.seldiffcatg input[type="checkbox"]').removeAttr('checked');
						}
					});

					$('.selCatg input.selectAllChkEnroll').change(function(){
					
						if($(this).is(':checked')){
							$('.enrollSelCatg input[type="checkbox"]').attr('checked',true);
						}else{
							$('.enrollSelCatg input[type="checkbox"]').removeAttr('checked');
							$('.selCatg.seldiffcatg.enrollSelCatg').hide();
						}
					});

					$(".btn-enroll-edit").click(function(){
						$(".confirm-enroll").hide();
						$(".form-enroll").show();
					});
					
					$(".btn-rewards-cancel").click(function(){
						$(".form-rewards-edit").hide();
						$(".form-rewards").show();
					});

					$('.link-net-popup').click(function(e){
						$('#netjets-modal').modal('show');
					});

					$('.btn-contact').click(function(e){
						$('#contact-modal').modal('show');
					});

				
					$(".show-read-more").each(function(){
						
						var maxLength = 300;
						var myStr = $(this).text();
						if($.trim(myStr).length > maxLength){
							if(myStr[maxLength] !== " "){
								for(var i=1;i<myStr.length;i++){
									maxLength = maxLength+i
									if (myStr[maxLength] === " "){										
										break;
									}else{
										continue;
									}
								}	
							}
								var newStr = myStr.substring(0, maxLength);
								var removedStr = myStr.substring(maxLength, $.trim(myStr).length);
								$(this).empty().html(newStr);
								$(this).append('<a href="javascript:void(0);" class="read-more"> Read More...</a>');
								$(this).append('<span class="more-text">' + removedStr + '</span>');							
						}
					});
					$(".read-more").click(function(){
						$(this).siblings(".more-text").contents().unwrap();
						$(this).remove();
					});

					$('.showModal').click(function(){
						$('#timeout').modal('show');
					})

					var maxLengthDots = 35;
					$(".show-dots").each(function(){
						var myStr = $(this).text();
						if($.trim(myStr).length > maxLengthDots){
							var newStr = myStr.substring(0, maxLengthDots);
							var removedStr = myStr.substring(maxLengthDots, $.trim(myStr).length);
							$(this).empty().html(newStr);
							$(this).append('<span>...</span>');
							$(this).append('<span class="more-text">' + removedStr + '</span>');
						}
					});
					$(".show-dots").click(function(){
						$(this).siblings(".more-text").contents().unwrap();
						$(this).remove();
					});
});


	// Catalog Products Slider
	function sliderContainerCatalog(parent){

		$('.' +  parent +' .slider-container-catalog').slick({
			slidesToShow: 6,
			slidesToScroll: 6,
			dots: true,
			arrows : true,
			responsive: [
			{
				breakpoint: 992,
				settings: {
					variableWidth: true,
					dots: false,
					arrows : false
				}
			},
			{
				breakpoint: 767,
				settings: {
					variableWidth: true,
					slidesToShow: 4,
					slidesToScroll: 2,
					dots: false,
					arrows : false
				}
			},
			{
				breakpoint: 480,
				settings: {
					variableWidth: true,
					slidesToShow: 3,
					slidesToScroll: 1,
					dots: false,
					arrows : false
				}
			}
			]
		});
	}

$( document ).ready(function() {
    // bind a click event to the 'skip' link
    $(".SkipToContent").click(function(event){

        // strip the leading hash and declare
        // the content we're skipping to
        var skipTo="#"+this.href.split('#')[1];

        // Setting 'tabindex' to -1 takes an element out of normal 
        // tab flow but allows it to be focused via javascript
        $(skipTo).attr('tabindex', -1).on('blur focusout', function () {

            // when focus leaves this element, 
            // remove the tabindex attribute
            $(this).removeAttr('tabindex');

        }).focus(); // focus on the content container
    });
});

// autocomplete Home page header
$(function() {
    var projects = [
       {
          value: "java",
          label: "Java",
          desc: "write once run anywhere",
          point: "1234"
       },
       {
          value: "jquery-ui",
          label: "jQuery UI",
          desc: "the official user interface library for jQuery",
          point: "12988"
       },
       {
          value: "Bootstrap",
          label: "Twitter Bootstrap",
          desc: "popular front end frameworks ",
          point: "2277"
       }
    ];

    $('.nav-search-form input.form-control').on("focus", function(){

    	var parentContainer = $(this).siblings('.parentElem');

    	$(this).autocomplete({
           minLength: 0,
           source: projects,
           appendTo: parentContainer,
           open: function(event, ui) {
           		parentContainer.show();
        		$('.ui-autocomplete').append('<h4 class="foot"><a href="javascript:alert(\'redirecting...\')">See All Result</a></h4>'); //See all results
         	},
         	close: function( event, ui ) {
         		parentContainer.hide();
         	}
        }).data( "ui-autocomplete" )._renderItem = function( ul, item ) {
        //ul.parent(".parentElem").append("");
           return $( "<li>" )
           .append( "<div><div class='img-group'><div class='image'><img src='' class='rounded float-left' alt=''></div><div><span class='product-desc'>" + item.desc 
           	+ "</span><p class='points'><span>"+item.point+"</span> Points</p></div></div><button class='btn btn-fill'>Detail</button></div>" )
           .appendTo( ul );


        };

    });
    $('.bonus-slider-wrapper .slider-container-catalog').slick({
		slidesToShow: 4,
		slidesToScroll: 4,
		dots: true,
		arrows : true,
		responsive: [
		{
			breakpoint: 992,
			settings: {
				variableWidth: false,
				slidesToShow: 3,
				slidesToScroll: 3,
				dots: false,
				arrows : false
			}
		},
		{
			breakpoint: 767,
			settings: {
				variableWidth: false,
				slidesToShow: 2,
				slidesToScroll: 2,
				dots: false,
				arrows : false
			}
		},
		{
			breakpoint: 480,
			settings: {
				variableWidth: false,
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: false,
				arrows : false
			}
		}
		]
	});

	$(".video-banner .play-icon").click(function(){
		var video = $("#bannerVideo").get(0);
		video.paused ? video.play() : video.pause();
	});


	/****Surrvey js Start****/
	var getSelectedAnswrGlov; 
	$(".survey-modal .next-step").click(function(){
		getSelectedAnswrGlov = getSelectedAnswr();
		var current_fs = $(this).parents('.survey-modal').find(".step.active");
		var next_fs = $(this).parents('.survey-modal').find(".step.active").next();
		showNextStep(current_fs, next_fs);
	});
	$(".survey-modal .prev-step").click(function(){


		var current_fs = $(this).parents('.survey-modal').find(".step.active");
		var prev_fs = $(this).parents('.survey-modal').find(".step.active").prev();
		showPrevStep(current_fs, prev_fs);
	});

	$(".survey-modal").on("click", ".prev-step.cancel-survey", function(){
		resetSurvey();
	});

	function resetSurvey(){
		console.log("called survey");
		getSelectedAnswrGlov.SurveyResponses = [];

		$(".survey-modal .listCheckbox").prop('checked', false);
		$(".catalog-category-list .active").removeClass("active");
		$(".survey-modal .catalog-category-list").hide().removeClass("active");
		$(".survey-modal .catalog-category-list[data-step='1']").show().addClass("active");

		$(".progress-sec .tile").removeClass("active");
		$(".progress-sec .tile.step-1").addClass("active");
		$(".survey-modal .next-step").attr("type", "button").text("Next");
		$(".survey-modal .prev-step").text("Back").attr("data-dismiss","").removeClass("cancel-survey");
		$('#exampleModal').modal('toggle'); 

	}

	function showNextStep(current_fs, next_fs){
		var length_fs = Number($(".survey-modal .step").length);
		var current_fs_length = Number(next_fs.attr("data-step"));
		if (!current_fs_length) {
			
			//resetSurvey(); call the reset method after ajax success.
			//"getSelectedAnswrGlov" pass that value in ajax call
		}
		$(".progress-sec .tile.step-"+current_fs_length).addClass("active");
		if (current_fs_length <=  length_fs) {
			next_fs.show().addClass("active");
			current_fs.hide().removeClass("active");
			if (current_fs_length == length_fs) {
				$(".survey-modal .next-step").attr("type", "submit").text("Submit").addClass("submitAnswer");
				$(".survey-modal .prev-step").text("Cancel").attr("data-dismiss","modal").addClass("cancel-survey");
			}

		}
	}

	function showPrevStep(current_fs, prev_fs){
		var length_fs = Number($(".survey-modal .step").length);
		var current_fs_length = Number(prev_fs.attr("data-step"));
		var headQuestionId = $(".survey-modal .catalog-category-list[data-step='"+current_fs_length+"']").find(".question_head").attr("QuestionId")
		
		getSelectedAnswrGlov.SurveyResponses = $.grep(getSelectedAnswrGlov.SurveyResponses, function(e){ return e.QuestionId != headQuestionId; });

		if (current_fs_length >=  1) {
			$(".progress-sec .tile.step-"+current_fs.attr("data-step")).removeClass("active");
			prev_fs.show().addClass("active");
			current_fs.hide().removeClass("active");
		}else{
			$(".survey-modal .next-step").attr("type", "button").text("Next");
			$(".survey-modal .prev-step").text("Back").attr("data-dismiss","").removeClass("cancel-survey");
		}
	}

	var getSelectedAnswr = (function (){
		var answrObj ={
			"SurveyResponses":[

			]
		}
		return function () {
			$(".catalog-category-list.active").find("input.listCheckbox:checked").each(function() {
			   console.log(this.value);
			   var answrObjArray = {};
			   answrObjArray.QuestionId = $(this).attr("QuestionId");
			   answrObjArray.AnswerId = $(this).attr("AnswerId");
			   answrObj.SurveyResponses.push(answrObjArray);
			});
			return answrObj;
		}
		
		
	})();
	
	$('.button-wrapper .btn').click(function(){
		if((!($(this).hasClass('fadeButton'))) && ($('.button-wrapper .btn.fadeButton').length>=1) ){
			$('.button-wrapper .btn').removeClass('fadeButton');
			$('.gift-card-border').addClass('d-none');
			console.log('hello')
		}else{
			$('.gift-card-border').addClass('d-none');
			$('.'+$(this).attr('data-name')).removeClass('d-none');
			$('.button-wrapper .btn').removeClass('fadeButton').not(this).toggleClass('fadeButton');
			console.log('test');
		}
	});

	$.fn.digits = function(){ 
		return this.each(function(){ 
			$(this).text( $(this).text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") ); 
		})
	}
	$('.quanityChangeSelect').change(function(){
		var multiplyQty = $(this).val(),
		multipValue =$(this).parent().parent().parent().find('.pointsText').data('points').replace(/,/g, ''),
		sum = 0;
		$(this).parent().parent().parent().find('.multipedValue').text(multiplyQty*multipValue).digits();

		$('.multipedValue').each(function(){
			sum+=parseFloat($(this).text().replace(/,/g, ''));
		});
		$(this).parent().parent().parent().parent().find('#totalRewardsPoint').text(sum).digits();
	})

	

});
