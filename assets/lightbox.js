$(document).ready(function(){
    $('#resume').click(function(e) {
    $('#lightbox').lightbox_me({
    centered: true, 
    onLoad: function() { 
    $('#lightbox').find('input:first').focus()
    }
    });
    e.preventDefault();
    });

    $ele.lightbox_me();
    $ele.trigger('close');
})
