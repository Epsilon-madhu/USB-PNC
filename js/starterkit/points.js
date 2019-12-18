
//jQuery time
var current_fs, next_fs, previous_fs; //fieldsets
var left, opacity, scale; //fieldset properties which we will animate
var animating; //flag to prevent quick multi-click glitches

var moveToNextStep = function(current_fs,next_fs){

	if(animating) return false;
	animating = true;
	

	
	//activate next step on progressbar using the index of next_fs
    //$("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
    var currStep = current_fs.data('step')
    if(currStep === 1){
        $('.progress .progress-bar').css('width','50%')
        setTimeout(function(){
			$('.tile.one').addClass('active')
			$('.tile.two,p.two').addClass('init')
        },500)
    }else if(currStep === 2){
		$('.progress .progress-bar').css('width','100%')
		$('.link.backlink').hide()
		setTimeout(function(){
			$('.tile.two').addClass('active')
			$('.tile.three,p.three').addClass('init active')			
		},500)       
    }
	
	//show the next fieldset
	next_fs.show(); 
	//hide the current fieldset with style
	current_fs.animate({opacity: 0}, {
		step: function(now, mx) {
			//as the opacity of current_fs reduces to 0 - stored in "now"
			//1. scale current_fs down to 80%
			scale = 1 - (1 - now) * 0.2;
			//2. bring next_fs from the right(50%)
			left = (now * 50)+"%";
			//3. increase opacity of next_fs to 1 as it moves in
			opacity = 1 - now;
			current_fs.css({
        'transform': 'scale('+scale+')',
        'position': 'absolute'
      });
			next_fs.css({'left': left, 'opacity': opacity});
		}, 
		duration: 0, 
		complete: function(){
			current_fs.hide();
			animating = false;
		}, 
		//this comes from the custom easing plugin
		easing: ''
	});
	
}

var moveToPrevStep = function(current_fs,previous_fs){
	if(animating) return false;
	animating = true;
	
	// current_fs = $(this).parent();
	// previous_fs = $(this).parent().prev();
	var currStep = current_fs.data('step')
	
	//de-activate current step on progressbar
	//$("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
	
	//show the previous fieldset
	previous_fs.show(); 
	//hide the current fieldset with style
	current_fs.animate({opacity: 0}, {
		step: function(now, mx) {
			//as the opacity of current_fs reduces to 0 - stored in "now"
			//1. scale previous_fs from 80% to 100%
			scale = 0.8 + (1 - now) * 0.2;
			//2. take current_fs to the right(50%) - from 0%
			left = ((1-now) * 50)+"%";
			//3. increase opacity of previous_fs to 1 as it moves in
			opacity = 1 - now;
			current_fs.css({'left': left});
			previous_fs.css({'transform': 'scale('+scale+')', 'opacity': opacity,'position':'relative'});
		}, 
		duration: 0, 
		complete: function(){
			current_fs.hide();
			animating = false;
		}, 
		//this comes from the custom easing plugin
		easing: ''
	});
};


$('[name="account"]').change(function(){
	var currVal = $(this).val()
	if(currVal==="newAccount"){
		$('input.newAccount').attr('required',true).parents('.form-group').fadeIn(200)
	}else{
		$('input.newAccount').removeAttr('required').parents('.form-group').hide()
	}
})

$('[name="redeemType"]').change(function(){
	var currVal = $(this).val()
	if(currVal==="depositeToOtherAccount"){
		$('.account-details input').attr('required',true)
		$('.account-details').fadeIn(200);
	}else{
		$('.account-details input').removeAttr('required')
		$('.account-details').hide();
	}
})

$('[name="optIn"]').change(function(){
	$('.points-sec').hide();
	$('.points-sec input').removeAttr('required')
	$(this).parents('.redeem-list').find('.points-sec').show().find('input').attr('required','true')
})

// $('.transferpoints .backlink').click(function(e){
// e.preventDefault();
//   //   var currstep = "";
// 	// currstep = Number($('.progress-sec .tile.init').not('.active').text());
// 	// console.log(currstep);
// 	// var curren_fs = $('.step[data-step="'+currstep+'"]');
// 	// var prev_fs = $('.step[data-step="'+currstep+'"]').prev();
// 	// moveToPrevStep(curren_fs,prev_fs);
// 	// var currStep = current_fs.data('step')
//   //   if(currstep === 1){

    // }else if(currstep === 2){
		// $('.progress .progress-bar').css('width','0%');
		// $('.tile.two').removeClass('init');  
    //     $('.tile.one').removeClass('active'); 
    // }else if(currstep === 3){
		// $('.progress .progress-bar').css('width','50%');
		// $('.tile.three').removeClass('init');  
    //     $('.tile.two').removeClass('active');
    //     $('.form-section.verify').removeClass("d-none");
		// $(".form-section.confirmTransfer").addClass("d-none");
    // }

	
// })

$('.cashback .backlink').click(function(e){		
e.preventDefault();		
    var currstep = "";		
    		
	currstep = Number($('.progress-sec .tile.init').not('.active').text());		
	var curren_fs = $('.step[data-step="'+currstep+'"]');		
	var prev_fs = $('.step[data-step="'+currstep+'"]').prev();		
	moveToPrevStep(curren_fs,prev_fs);		
	var currStep = current_fs.data('step')		
    if(currstep === 1){		
    }else if(currstep === 2){		
		$('.progress .progress-bar').css('width','0%');		
		$('.tile.two').removeClass('init');  		
        $('.tile.one').removeClass('active'); 		
    }else if(currstep === 3){		
    	var res = JSON.parse( $('#cashback-conversion').attr('data-response'));		
    			
		$('.progress .progress-bar').css('width','50%');		
		$('.tile.three').removeClass('init');  		
        $('.tile.two').removeClass('active');		
        if(res.rewardType === 'H'){		
        	$('.cashback .form-section.redeem-two').show();		
     		$(".cashback .form-section.redeem-confirm").hide();		
        }else if(res.rewardType === 'S'){		
        	$(".cashback .form-section.redeem-confirm").hide();		
        	currstep = Number($('.progress-sec .tile.init').not('.active').text());		
        	var curren_fs = $('.step[data-step="'+currstep+'"]');		
        	var prev_fs = $('.step[data-step="'+currstep+'"]').prev();		
        	moveToPrevStep(curren_fs,prev_fs);		
        	$('.progress .progress-bar').css('width','0%');		
        	$('.tile.two').removeClass('init');  		
        }else{		
            $(".cashback .form-section.redeem-confirm").hide();		
        	currstep = Number($('.progress-sec .tile.init').not('.active').text());		
        			
            $('.cashback .form-section.redeem-two').show();		
        }		
        		
       		
    }		
			
})