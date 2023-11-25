
$(document).ready(function(){

    $('.buttons').click(function(){

        $(this).addClass('active').siblings().removeClass('active');

        var filter = $(this).attr('data-filter')

        if(filter == 'all'){
            $('.images').show(400);
        }else{
            $('.images').not('.'+filter).hide(200);
            $('.images').filter('.'+filter).show(400);
        }

    });

    $('.gallery').magnificPopup({

        delegate:'a',
        type:'images',
        gallery:{
            enabled:true
        }

    });

});
