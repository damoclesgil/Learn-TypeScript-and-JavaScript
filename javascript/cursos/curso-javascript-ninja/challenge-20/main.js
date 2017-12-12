(function (win, doc) {
    /* Use o setTimeout*/
    var counter = 0;
    var $button = doc.querySelector('[data-js="button"]');
    var temporizador;
    function timer() {
        console.log('timer', counter++);
        if (counter > 20)
            return;
        temporizador = setTimeout(timer, 1000);
        console.log(temporizador);
    }
    timer();

    $button.addEventListener('click', function(){
        clearTimeout(temporizador);
    }, false);
    
})(window, document);