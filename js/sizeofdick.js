function randomNumber() {
    var currentNumber = $('.input').text();
    var a= Math.round(Math.random()*50)
    $({numberValue: currentNumber}).animate({numberValue: a}, {
        duration: 800,
        easing: 'linear',
        step: function() {
            $('.input').text(Math.ceil(this.numberValue) + "cm");
        }

    });
    return false}