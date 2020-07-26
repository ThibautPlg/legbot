setOutput = $('.random4');
partOutput = $('.random6');
started = new Date().getTime();

animationTimer = setInterval(function() {
    setOutput.text(
            (''+
            Math.floor(Math.random() * 200)+
            Math.floor(Math.random() * 100)).substring(0,5)
        );
    partOutput.text(
            (''+
            Math.floor(Math.random() * 700)+
            Math.floor(Math.random() * 600)).substring(0,7)
        );
}, 2000);


jQuery('.scroll').on('click', function() {
    jQuery('html, body').animate( { scrollTop: jQuery('#features-link').offset().top }, 750 );
    return false;
});