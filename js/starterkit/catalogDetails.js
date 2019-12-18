// function getCurrentVal(val){
//     var currValArr = val.split(',');
//     return currValArr[0];
// }

// $('.productConfigurationList select').change(function(){
//     debugger;
//     var currVal = getCurrentVal($(this).val())
//     var currId = $(this).attr('id');

//     $('.productConfigurationList select').each(function(){
//         if($(this).attr('id') !== currId){
//             var isPresent = false;
//             var pcSelArr = $(this).val().split(',');
//            for(var i=0;i<pcSelArr.length;i++){

//               if(pcSelArr[i] === currVal){
//                 isPresent = true;
//               }
//            }
//            $(this).attr('data-inStock',isPresent);
            
//         }
//     })
//     $('.productConfigurationList select').focusout();
// })

function loadVarients(){
    var rewardId = $('.rewardId').val();
    $('.productConfigurationList select').each(function(){
        var curr = $(this);
        $(this).find('option').each(function(){
            var fieldId = curr.attr('id')==='styleId' ? 'selectedOne' : curr.attr('id')==='configurationId' ? 'selectedTwo' : curr.attr('id')==='colorId' ? 'selectedThree' : '';
           
            if($('.'+fieldId).val()===$(this).text().trim()){
                var currentVal = $(this).attr('value');
                var valAr = getCurrentVal(currentVal);
                if(valAr.indexOf(rewardId) === -1){
                    valAr.unshift(rewardId);
                    $(this).attr('value',valAr.toString());
                } 
               curr.val($(this).attr('value'));   
            }       
        })
    })
    $('.productConfigurationList select:first').change();
}

function getCurrentVal(val){
    var currValArr = val.split(',');
    return currValArr;
}

$('.productConfigurationList select').change(function(){
    var currValArr = getCurrentVal($(this).val())
    var currId = $(this).attr('id');
    var currElem = $(this);
    var presentArr = [];
    var finalArr = [];
    $('.productConfigurationList select').each(function(){ 
            if($(this).attr('id') !== currId){                
                var isPresent = false;
                var pcSelArr = $(this).val().split(',');
                finalArr.push(pcSelArr);
                for(var j=0;j<currValArr.length;j++){      
                    for(var i=0;i<pcSelArr.length;i++){

                        if(pcSelArr[i] === currValArr[j]){
                            isPresent = true;   
                                                 
                        }
                    }
                }
                presentArr.push(isPresent)
                $(this).attr('data-inStock',true);                
            }else{
                var pcSelArr = $(this).val().split(',');
                finalArr.push(pcSelArr);  
            }     
    })
    
    if(presentArr.indexOf(false) !== -1){
        currElem.attr('data-inStock',false);
    }else{
        currElem.attr('data-inStock',true);
        var currRewardArr  = getCommonElements(finalArr);
        var currRewardId = currRewardArr[0];
        // ajax here
    } 
    $('.productConfigurationList select').focusout();
})

$(document).ready(function(){
    loadVarients();
})


function getCommonElements(arrays){
  var currentValues = {};
  var commonValues = {};
  for (var i = arrays[0].length-1; i >=0; i--){
    currentValues[arrays[0][i]] = 1; 
  }
  for (var i = arrays.length-1; i>0; i--){
    var currentArray = arrays[i];
    for (var j = currentArray.length-1; j >=0; j--){
      if (currentArray[j] in currentValues){
        commonValues[currentArray[j]] = 1; 
      }
    }
    currentValues = commonValues;
    commonValues = {};
  }
  return Object.keys(currentValues).map(function(value){
    return parseInt(value);
  });
}



//// code for edit address

$(".checkout__title a").click(function(){
    $('#AddressEdit2').removeAttr('required');					
    $('#formAddressEdit #fname').val($('.firstname').text().trim());
    $('#formAddressEdit #lname').val($('.lastname').text().trim());					
    $('#AddressEdit').val($('.cartAddOne').text().trim());
    $('#cityEdit').val($('.cartCity').text().trim());
    $('#stateId').val($('.cartState').text().trim());
    $('#zip-code-edit').val($('.cartPostal').text().trim());
    $('#mobileNumber').val($('.cartPhone').text().trim().replace(/[^a-zA-Z0-9]/g, ''));
    $('#email').val($('.cartEmail').text().trim());

    $(".checkout__address,.checkout__shipdetails,.checkout__btnwrapper").hide();
    $(".checkout__edit").show();
});

$('#formAddressEdit').validator(validatorOptions).on('submit', function (e) {
    if (e.isDefaultPrevented()) {		
        // handle the invalid form...
      } else {	
        e.preventDefault();	
        $('.checkout__address .firstname').text($('#formAddressEdit #fname').val());
        $('.checkout__address .lastname').text($('#formAddressEdit #lname').val());					
        $('.cartAddOne').text($('#AddressEdit').val());
        $('.cartCity').text($('#cityEdit').val());
        $('.cartState').text($('#stateId').val());
        $('.cartPostal').text($('#zip-code-edit').val());
        $('.cartPhone').text(normalize($('#mobileNumber').val()));							
        $('.cartEmail').text($('#email').val());
        $(".checkout__address,.checkout__shipdetails,.checkout__btnwrapper").show();
        $(".checkout__edit").hide();
    }
});



$(".btn-edit-cancel").click(function(){
    $(".checkout__address,.checkout__shipdetails,.checkout__btnwrapper").show();
    $(".checkout__edit").hide();
});

function normalize(phone) {
    //normalize string and remove all unnecessary characters
    phone = phone.replace(/[^\d]/g, "");
    //check if number length equals to 10
    if (phone.length == 10) {
        //reformat and return phone number
        return phone.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
    }
    return null;
}