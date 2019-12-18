function getConvertedVal (ele) {
	//debugger;
	var currval = Number($('#points').val());

	if(currval !== "" && !isNaN(currval)){
	  var totalPoints = $('#cashback-conversion').data('totalpoints');
	  var dollarValPerPoint = $('#cashback-conversion').data('dollarval');
	  var dollarsToRedeem = currval*dollarValPerPoint;
	  var pointsRemaining = totalPoints - currval;
	  $('.points-sec .cashback-points-redeem').text(currval.toLocaleString('en'));  
	  $('.points-sec .cashback-dollars-redeem').text(dollarsToRedeem.toLocaleString('en'));  
	  $('.points-sec .total-remaining-points').text(pointsRemaining.toLocaleString('en'));
	  if (currval == 0) {
	  	$('.points-sec').hide() 
	  }else{
	  	$('.points-sec').fadeIn(1500);
	  }
	  
	}else{
		ele.parents('form').submit();  
	  $('.points-sec').hide() 
	}
}
// exceed-point

  $('.pointsToDollar').click(function(){
	getConvertedVal($(this))	 
  })

  $('#points').keyup(function(){
	getConvertedVal($(this))	 
  })
  
  $('.cashback #redeem-points').validator(validatorOptions).on('submit', function (e) {
	if (e.isDefaultPrevented()) {		
	  // handle the invalid form...
	} else {	
		e.preventDefault();
		$('.account-details input').removeAttr('required')
		$('.redeem-confirm').hide()
		current_fs = $(this).parents('.step');
		next_fs = $(this).parents('.step').next();
		moveToNextStep(current_fs,next_fs) 	
	  // everything looks good!
	}
  })
  
  $('#redemption').validator(validatorOptions).on('submit', function (e) {
	if (e.isDefaultPrevented()) {		
	  // handle the invalid form...
	} else {	
		e.preventDefault();
		$('.redeem-two').hide();		
		var currActiveType = $('[name="redeemType"]:checked').val()
		if(currActiveType === 'creditToAccount'){
			$('.depositToOther').hide();
			$('.creditToAccount').show();		
		}else{
			$('.depositToOther').show();
			$('.creditToAccount').hide();
		}
		$('.redeem-confirm').fadeIn(1000);
		$('.progress-sec .tile.two').addClass('active');
	  // everything looks good!
	}
  })

  $('.cashback #confirmRedeem').click(function(){
	// write your logic for confirmation
	current_fs = $(this).parents('.step');
	next_fs = $(this).parents('.step').next();
	moveToNextStep(current_fs,next_fs) 
})