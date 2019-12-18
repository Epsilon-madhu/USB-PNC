//function to add number of hours 
Date.prototype.addHours= function(h){
    this.setHours(this.getHours()+h);
    return this;
}

timeout = {
    continue:function(){
        var currTime = new Date();
        if(currTime >= new Date(localStorage.finalTimeout)){
            this.logout();   
        }else{
            $('#timeout').modal('hide');
            console.log('continue')
        } 
    },
    logout:function(){
        $('#timeout').modal('hide');
        localStorage.removeItem('finalTimeout');
        console.log('logout triggered');
        // logout call will go here
    }
}

$(document).ready(function(){
    // comment this in AEM DEV ENV
    // if($('#timeout')){
    //     $('#timeout').modal('show');
    // }
   
    // use this line after login
    localStorage.finalTimeout = new Date().addHours(10);

    // by clicking no logout button
    $('.timeout #noBtn').click(function(){
       timeout.logout()
    });

    // on click of yes continue button
    $('.timeout #yesBtn').click(function(){
        timeout.continue();
    });
})