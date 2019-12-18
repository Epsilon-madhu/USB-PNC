var validatorOptions = {
	custom: {
// Find an agent input validation

'fname': function($el) {
	if(checkString($el.val(), $el)) {
		return true;
	} else {
		return;
	}
},

'lname': function($el) {
	if(checkString($el.val(), $el)) {
		return true;
	} else {
		return;
	}
},

'zip-code': function($el) {
	if (isValidZip($el.val()) && $el.val().length > 0) {
		return true;
	}else{
		return;
	}
},

'username': function($el) {
	if(isValidPassword($el.val()) && $el.val().length > 0) {
		return true;
	} else {
		return;
	}
},

'minlength': function($el) {
	if(minLength($el.val()) && $el.val().length > 0) {
		return true;
	} else {
		return;
	}
},
'calcincrementalOrderCost': function($el) {
	if(calcincrementalOrderCost($el.val(),$el) && $el.val().length > 0) {
		return true;
	} else {
		return;
	}
},

'minlengthAcc': function($el) {
	if(minlengthAcc($el.val(),$el) && $el.val().length > 0) {
		return true;
	} else {
		return;
	}
},

'checkinstock': function($el) {
	if(checkinstock($el.val(),$el)) {
		return true;
	} else {
		return;
	}
},

'password': function($el) {
	if(isValidPassword($el.val()) && $el.val().length > 0) {
		return true;
	} else {
		return false;
	}
},

'confirmpassword': function($el) {
	if(isValidPassword($el.val()) && $el.val().length > 0) {
		return true;
	} else {
		return false;
	}
},

'email': function($el) {
	if(ValidateEmail($el.val()) && $el.val().length > 0) {
		return true;
	} else {
		return false;
	}
},

'confirmEmail': function($el) {
	if(ValidateEmail($el.val()) && $el.val().length > 0) {
		return true;
	} else {
		return false;
	}
},

'card-expiry' : function($el) {
	if(formatString($el.val())) {
		return;
	} else {
		return '';
	}
},
'card-validator': function($el) {
	// CCNumberValid($el.val(), $el);

	if(checkCC($el.val(), $el) && $el.val().length > 0) {
		return true;
	} else {
		return false;
	}
},

'phone': function($el) {

	if(checkPhone($el.val(), $el) && $el.val().length > 0) {
		return true;
	} else {
		return false;
	}
},

'numeric-value': function($el) {

	if(checkInput($el.val(), $el) && $el.val().length > 0) {
		return true;
	} else {
		return false;
	}
},

'decimal-value': function($el) {

	if(checkInputDec($el.val(), $el) && $el.val().length > 0) {
		return true;
	} else {
		return false;
	}
},

'alphanumeric-value': function($el) {

	if(checkalphanumeric($el.val(), $el) && $el.val().length > 0) {
		return true;
	} else {
		return false;
	}
},

'valid-points': function($el) {

	if(checkPoints($el.val(), $el) && $el.val().length > 0) {
		return true;
	} else {
		return false;
	}
},

'household-num': function($el) {

	if(householdNum($el.val(), $el) && $el.val().length > 0) {
		return true;
	} else {
		return false;
	}
},

//household-num


'date-format-validator': function($el) {
	if(dateFormatCheck($el.val())) {
		if(ageCheck($el.val())){
			if(startDateCheck($el.val())){
				return;
			}
			else{
				return "Date of birth prior to 1990 not accepted";
			}
		}
		else{
			return "Age should be 18 and above";
		}
	} else{
		return "Date is not in the proper format";
	}
},

// Confirm Password validation
'passwordMatch': function($el) {
	if($el.val().length > 0) {
		if($el.val() == $('#password').val()) {
			return;
		} else {
			return true
		}
	}
},

'fieldMatch': function($el) {
	var matchElement = $($el).attr('data-fieldmatch');
	if($el.val().length > 0 && $(matchElement).val().length > 0) {
		if(fieldMatch($el.val(), $el) ) {
			return;
		} else {
			return true
		}
	}
},

'emailMatch': function($el) {
	if($el.val().length > 0) {
		if($el.val() == $('#email').val()) {
			return;
		} else {
			return true
		}
	}
},
'point-range-redemp': function($el) {
	if(pointRangeRedemp($el.val(), $el) && $el.val().length > 0) {
		return true;
	} else {
		return false;
	}
},
'exceed-point': function($el) {
	
	if($el.val().length > 0) {
		var invalidChars = /^[0-9]*$/;
		if(invalidChars.test($el)) {
			if($el.val() > Number($('#cashback-conversion').data('totalpoints')) || $el.val() <  Number($('.minPoints').text().trim())) {
				return true;
			} else {
				return false;
			}
		}
	}
},
'increment-point-check': function($el) {
	if(incrementCheck($el)) {
		return true;
	}else{
		return false;
	}
},
'city': function($el) {
	if(checkCity($el.val(), $el) && $el.val().length > 0) {
		return true;
	} else {
		return;
	}
}


}
};

function incrementCheck($el){

    var PointInputValChng;
    var constantVal = Number($('.cashback #points').attr('data-incrementorder'));
	PointInputValChng = Number($el.val());

 	if ((PointInputValChng - PointInputValInit) % constantVal == 0 ) {

        return false;
 	}else{
 		
 		$(".cashback #points").attr("required", "true");

 		$el.parents(".form-group").addClass("has-error");
 		return true;
 	}
}

$(document).on('keypress', ':input:not(textarea):not([type=submit])', function (e) {
    if (e.which == 13) e.preventDefault();
});


$(document).ready(function() {
	$('form[data-toggle="validator"]').validator(validatorOptions).on('submit', function (e) {
		if (e.isDefaultPrevented()) {
		}
	});
});

$(window).on('load', function () {
	$('form[data-toggle="validator"]').validator(validatorOptions).on('submit', function (e) {
		if (e.isDefaultPrevented()) {
		}
	});
});


function fieldMatch(val, $el) {
	var matchElement = $($el).attr('data-fieldmatch');

	if($(matchElement).val() == val && $(matchElement).attr('confirm')) {
		$(matchElement).trigger("input");
	}

	if(val.length > 0 && $(matchElement).val().length > 0 && $(matchElement).val() != val) {
		if( $(matchElement).attr('confirm')){
			$(matchElement).trigger("input");
			return true
		} else {
			return false
		}
	} else {
		return true
	}
}

function isValidPassword($el) {
	var pwdRegex = /(?=^.{8,20}$)(?=.*[a-zA-Z])((?=.*[0-9]))|((?=.*[-!$%^&*()_+|~=`{}\[\]:\/;<>?,.@#]))/;
	if (pwdRegex.test($el)) {
		$el = $el.replace(pwdRegex,"");
		return false
	} else {
		return true
	}
}

function householdNum($el){
	if ($el !== $('#houseHoldNumber').val()) {		
		return true;
	} 
	else {
		return false;
	}
}

function pointRangeRedemp($el,elem) {
	if ($el >= 20 &&  $el <= 100) {

		var inputotal = 0;
		elem.parents('.reward').find(".enableRedemptionForm .account-form input[type='text']").each(function( index ) {
			if($(this).val()){
				inputotal += parseInt($(this).val());
			}else{
				$(this).parents(".form-group").find("select").val($(this).find('option:first').val());
				$(this).attr("disabled", "disabled");
			}
		});
		elem.parents('.reward').find(".total-count-content .total").text(inputotal);
		if (inputotal == 100) {
			$(".global-redemp-error").addClass("d-none");
			//$(".enableRedemptionForm .account-form .form-group").removeClass('has-error');
			$(".enableRedemptionForm .account-form input").removeAttr("required");
			return false
		}else if(inputotal > 100){
			$(".global-redemp-error").removeClass("d-none");
			//$(".enableRedemptionForm .account-form .form-group").removeClass('has-error');
			$(".enableRedemptionForm .account-form input").removeAttr("required");
		}

			
	} else {
		return true
	}
}

function isValidZip($el) {
	var zipRegex = /^[0-9]*$/;
	if (zipRegex.test($el)) {
		$el = $el.replace(zipRegex,"");
		return false;
	} else {
		return true;
	}
}


function checkString($el) {
	var isvalidString = /^[a-zA-Z _ ,-.']*$/;
	if(isvalidString.test($el)) {
		$el = $el.replace(isvalidString,"");
		return false;
	} else {
		return true;
	}
}

function checkCity($el) {
	var isvalidString = /[,!@#$%^&*(?<)\/.\|>:;”)]/;
	if(!isvalidString.test($el)) {
		$el = $el.replace(isvalidString,"");
		return false;
	} else {
		return true;
	}
}

function checkalphanumeric($el) {
	var invalidChars = /^[a-zA-Z0-9]+$/;
	if(invalidChars.test($el)) {
		$el = $el.replace(invalidChars,"");
		return false;
	} else {
		return true;
	}
}

//Numeric input restriction

function checkInput($el) {
	var invalidChars = /^[0-9]*$/;
	if(invalidChars.test($el)) {
		$el = $el.replace(invalidChars,"");
		return false;
	} else {
		return true;
	}
}

function checkInputDec($el) {
	var invalidChars = /^\d+(\.\d{1,4})?$/;
	if(invalidChars.test($el) && Number($el) > 0) {
		$el = $el.replace(invalidChars,"");
		return false;
	} else {
		return true;
	}
}

function checkCC($el) {
	var invalidChars = /^[C0-9]{12,20}$/;
	if(invalidChars.test($el)) {
		$el = $el.replace(invalidChars,"");
		return false;
	} else {
		return true;
	}
}

function checkPhone($el) {
	var invalidChars = /(?=^.{10}$)^[0-9]*$/;
	if(invalidChars.test($el)) {
		$el = $el.replace(invalidChars,"");
		return false;
	} else {
		return true;
	}
}

//Email validation starts
function ValidateEmail($el) {
	var validEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	if (validEmail.test($el)) {
		return false;
	} else {
		return true;
	}
}
//Email validation ends

//Min Length starts
function minLength($el) {
	console.log($el)
	if ($el.length >= 8 ) {
		$el.length = 0;
		return false;
	} else {
		return true;
	}
}
//Min Length ends


function checkPoints($el, element) {

	var val = parseFloat(element.attr("max-points"));
	$el = parseInt($el);

	if ($el > val) {
		element.attr("data-valid-points-error", $('#morePointsErrorMessage').text());
		return true;
	} else if($el === 0){
		element.attr("data-valid-points-error", element.attr("data-numeric-value-error"));
		return true;
	}
	else {
		return false;
	}
}

//Card Validation starts
function CCNumberValid($el, obj){
	var val = $el;
	var newval = '';
	val = val.replace(/\s/g, '');
	for(var i=0; i < val.length; i++) {
		if(i%4 == 0 && i > 0) newval = newval.concat(' ');
		newval = newval.concat(val[i]);
	}
	obj.val(newval);
}
//Card Validation ends

//Date in mm/yyyy format in textbox starts
function formatString(e) {
	var inputChar = String.fromCharCode(event.keyCode);
	var code = event.keyCode;
	var allowedKeys = [8];
	if (allowedKeys.indexOf(code) !== -1) {
		return;
	}
	event.target.value = event.target.value.replace(
/^([1-9]\/|[2-9])$/g, '0$1/' // 3 > 03/
).replace(
/^(0[1-9]|1[0-2])$/g, '$1/' // 11 > 11/
).replace(
/^([0-1])([3-9])$/g, '0$1/$2' // 13 > 01/3
).replace(
/^(0?[1-9]|1[0-2])([0-9]{2})$/g, '$1/$2' // 141 > 01/41
).replace(
/^([0]+)\/|[0]+$/g, '0' // 0/ > 0 and 00 > 0
).replace(
/[^\d\/]|^[\/]*$/g, '' // To allow only digits and `/`
).replace(
/\/\//g, '/' // Prevent entering more than 1 `/`
);
}
//Date in mm/yyyy format in textbox ends

//Date Validator starts
function dateFormatCheck($el){
	var dateFormat = 'DD/MM/YYYY';
	var dateNumber = $el;
	var formatCheck = moment(dateNumber, [dateFormat], true).isValid();
	if(formatCheck){
		return true;
	} else{
		return false;
	}
}

function ageCheck($el){
	var dateFormat = 'DD/MM/YYYY';
	var dateNumber = $el;
	var userDate = moment(dateNumber, [dateFormat]).toDate();
	var userDateFormat = moment(userDate).format('YYYY-MM-DD');
	var years = moment().diff(userDateFormat, 'years');
	if(years < 18){
		return false;
	} else{
		return true;
	}
}

function startDateCheck($el){
	var dateFormat = 'DD/MM/YYYY';
	var dateNumber = $el;
	var userDate = moment(dateNumber, [dateFormat]).toDate();
	var userDateFormat = moment(userDate).format('YYYY-MM-DD');
	var years = moment().diff(userDateFormat, 'years');
	if(moment(userDateFormat).isAfter('1990-01-01')){
		return true;
	}else{
		return false;
	}
}

//Date Validator ends

function minlengthAcc($elVal,$el){
	if($elVal.length >= $el.data('minlengthacc')){
		return false;
	} else{
		return true;
	}
}

  
  //Reward Redemption check

  $('.enableRedemptionForm').validator(validatorOptions).on('submit', function (e) {
	if (e.isDefaultPrevented()) {		
	  // handle the invalid form...

	  var inputotal = 0;
		$(this).find(".account-form input[type='text']").each(function( index ) {
			if($(this).val()){
				inputotal += parseInt($(this).val());
			}else{
				$(this).parents(".form-group").find("select").val($(this).find('option:first').val());
				$(this).attr("disabled", "disabled");
			}
		});

		if (inputotal == 100 && !$(this).find(".form-group").hasClass('has-error')) {
			$(this).find(".account-form input").removeAttr("required");
			e.preventDefault();
	  		// everything looks good!
		  	$(".redemption-container .redemptionEarning").hide();
			$(".redemption-container .redemption-review").show();
			$(".redemption-container .redemption-review .enabled-review-btn-group").hide();
			$(".redemption-container .rewardsRedemption-btns").show();
			$(".redemption-container .redemption-review .table-body").empty();
			var rewardPoints = $(this).find("#rewardPoints").val();
				$(".redemption-review .investedPoint").text(rewardPoints);
			$(this).find(".account-form .form-group").each(function( index ) {
				var accountVal = $(this).find("select").val();
				var percentVal = $(this).find("input").val();
				
				if ($(this).find("input").val() != "" ) {
					$(".redemption-container .redemption-review .table-body").append("<div class='row'><div class='col col-sm-8 account'>"+accountVal+"</div><div class='col col-sm-4 percentage'>"+percentVal+"</div></div>");
					
				}
			})

			
		} else {
			$(this).find(".account-form input").attr("required","true");
			setTimeout(function(){$('input.form-control').focusout()},100); 
		}
	} else {	
		var inputotal = 0;
		$(this).find(".account-form input[type='text']").each(function( index ) {
			if($(this).val()){
				inputotal += parseInt($(this).val());
			}else{
				$(this).parents(".form-group").find("select").val($(this).find('option:first').val());
				$(this).attr("disabled", "disabled");
			}
		});
		if (inputotal == 100 && !$(this).find(".form-group").hasClass('has-error')) {
			$(this).find(".account-form input").removeAttr("required");
			e.preventDefault();
	  		// everything looks good!
	  		if ($(this).parents(".reward").hasClass("redemption-container")) {
	  			$(".redemption-container .redemptionEarning").hide();
				$(".redemption-container .redemption-review").show();
				$(".redemption-container .redemption-review .enabled-review-btn-group").hide();
				$(".redemption-container .rewardsRedemption-btns").show();
				$(".redemption-container .redemption-review .table-body").empty();
				var rewardPoints = $(this).find("#rewardPoints").val();
				$(".redemption-review .investedPoint").text(rewardPoints);
				$(this).find(".account-form .form-group").each(function( index ) {

					var accountVal = $(this).find("select").val();
					var percentVal = $(this).find("input").val();
					if ($(this).find("input").val() != "" ) {
						$(".redemption-container .redemption-review .table-body").append("<div class='row'><div class='col col-sm-8 account'>"+accountVal+"</div><div class='col col-sm-4 percentage'>"+percentVal+"</div></div>");
						
					}
					
				})
	  		}else if($(this).parents(".reward").hasClass("on-demand-container")){

	  			$(".on-demand-container .redemptionEarning").hide();
				$(".on-demand-container .redemption-review").show();
				$(".on-demand-container .redemption-review .table-body").empty();
				var rewardPoints = $(this).find("#rewardPoints").val();
				$(".redemption-review .investedPoint").text(rewardPoints);
				$(this).find(".account-form .form-group").each(function( index ) {

					var accountVal = $(this).find("select").val();
					var percentVal = $(this).find("input").val();
					
					if ($(this).find("input").val() != "" ) {
						$(".on-demand-container .redemption-review .table-body").append("<div class='row'><div class='col col-sm-8 account'>"+accountVal+"</div><div class='col col-sm-4 percentage'>"+percentVal+"</div></div>");
						
					}
					
				});
	  		}
		  	
		} else {
			e.preventDefault();
			$(this).find(".account-form input").attr("required","true");
			setTimeout(function(){$('input.form-control').focusout()},100); 
		}	
	}
  });


  /*$('.cashback #redeem-points').validator(validatorOptions).on('submit', function (e) {
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
  */
  
/*  $('#redemption').validator(validatorOptions).on('submit', function (e) {
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
  })*/
  
$('.updateAmount').click(function(){
	current_fs = $(this).parents('.step');
	prev_fs = $(this).parents('.step').prev();
	$('.progress-sec .tile.two').removeClass('init active');
	$('.progress-sec .tile.one').removeClass('active');
	$('.progress-sec p.two').removeClass('init')
	$('.progress .progress-bar').css('width','0%')
	$('.redeem-two').show();
	moveToPrevStep(current_fs,prev_fs)
})

$('.updateMethod').click(function(){
	$('.redeem-confirm').hide();
	$('.redeem-two').fadeIn(1000);	
	$('.progress-sec .tile.two').removeClass('active');
})

$('.account-details i').click(function(e){
	e.preventDefault()
})

$(document).ready(function() {
	// intial selection of radio button in invest page.
	// $('.invest input[name="optIn"][value="autoRedeem"]').click()
})

// choose-frequency 
$('#choose-frequency').validator(validatorOptions).on('submit', function (e) {
	if (e.isDefaultPrevented()) {		
	  // handle the invalid form...
	} else {	
		e.preventDefault();
		current_fs = $(this).parents('.step');
		next_fs = $(this).parents('.step').next();
		moveToNextStep(current_fs,next_fs)
		$('.redeem-confirm').hide();
	  // everything looks good!
	}
  })

  $('.invest #redeem-points').validator(validatorOptions).on('submit', function (e) {
	if (e.isDefaultPrevented()) {		
	  // handle the invalid form...
	} else {	
		e.preventDefault();	
		$('.redeem-one').hide()
		$('.redeem-confirm').fadeIn(1000)
	  // everything looks good!
	}
  })

  $('.invest #confirmRedeem').click(function(){
	// write your logic for confirmation
	current_fs = $(this).parents('.step');
	next_fs = $(this).parents('.step').next();
	moveToNextStep(current_fs,next_fs) 
})

$('#formEnroll').validator(validatorOptions).on('submit', function (e) {
	console.log(e.isDefaultPrevented())
	if (e.isDefaultPrevented()) {		
	  // handle the invalid form...
	} else {	
		e.preventDefault();
		$(".form-enroll").hide();
		$(".confirm-enroll").show();
	  // everything looks good!
	}
  })
  $('#formConfirm').validator(validatorOptions).on('submit', function (e) {
	console.log(e.isDefaultPrevented())
	if (e.isDefaultPrevented()) {		
	  // handle the invalid form...
	} else {	
		e.preventDefault();
			$(".confirm-enroll").hide();
				$(".enrollThanku").show();
	  // everything looks good!
	}
  })

  $('#formReward').validator(validatorOptions).on('submit', function (e) {
	console.log(e.isDefaultPrevented())
	if (e.isDefaultPrevented()) {		
	  // handle the invalid form...
	} else {	
		e.preventDefault();
			$(".form-rewards.confirm-enroll").hide();
				$(".form-rewards-edit").show();
	  // everything looks good!
	}
  })


function calcincrementalOrderCost($elVal,$el){
	var minAmt = $el.data('mindollars');

	var inc = $el.data('inc');

	if($elVal>=minAmt){
		if((($elVal-Number((minAmt).toFixed(2)))%inc) === 0){
			//console.log('allowed',(($elVal-minAmt)%inc));
			return false;
		}else{
			if(inc===0){
				return false;
			}else{
				//console.log('not allowed',(($elVal-minAmt)%inc));	
				return true;
			}			
		}
	}else{
		//console.log('min max amt error');
		return true;		
	}
}

function checkinstock($elVal,$el){
	var selState = $el.attr('data-instock')
	if(selState === "true"){
		return false;
	}else{
		return true;
	}
}