$('#net-jets-points').validator(validatorOptions).on('submit', function (e) {
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