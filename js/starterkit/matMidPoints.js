function getConvertedValMatMid (ele) {
	var currval = Number($('#matMidPoints').val());

	if(currval !== "" && !isNaN(currval)){
	//   var totalPoints = $('#cashback-conversion').data('totalpoints');
	//   var dollarValPerPoint = $('#cashback-conversion').data('dollarval');
	//   var dollarsToRedeem = currval*dollarValPerPoint;
	//   var pointsRemaining = totalPoints - currval;
	//   $('.points-sec .cashback-points-redeem').text(currval.toLocaleString('en'));  
	//   $('.points-sec .cashback-dollars-redeem').text(dollarsToRedeem.toLocaleString('en'));  
	//   $('.points-sec .total-remaining-points').text(pointsRemaining.toLocaleString('en'));  
	//$('.points-sec').fadeIn(1500);
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

  $('.matMidTransfer .pointsToDollar').click(function(){
	getConvertedValMatMid($(this))	 
  })

  $('#matMidPoints').keyup(function(){
	getConvertedValMatMid($(this))	 
	})
	

	/// validation code and steps.

 $('#matmid-points').validator(validatorOptions).on('submit', function (e) {
	if (e.isDefaultPrevented()) {		
	  // handle the invalid form...
	} else {	
		e.preventDefault();
		current_fs = $(this).parents('.step');
		next_fs = $(this).parents('.step').next();
		moveToNextStep(current_fs,next_fs) 	
	  // everything looks good!
	}
	})
	
	$('#matmidAccountInfo').validator(validatorOptions).on('submit', function (e) {
		if (e.isDefaultPrevented()) {		
			// handle the invalid form...
		} else {	
			e.preventDefault();
			current_fs = $(this).parents('.step');
			next_fs = $(this).parents('.step').next();
			moveToNextStep(current_fs,next_fs) 	
			// everything looks good!
		}
		})


		$('#matmidTransfer').click(function(){
			// write your logic for confirmation
			current_fs = $(this).parents('.step');
			next_fs = $(this).parents('.step').next();
			moveToNextStep(current_fs,next_fs) 
		})
