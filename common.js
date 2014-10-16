$(function(){

    $.getScript( 'waypoints.min.js', function() { // подлкючаем плагин waypoints

        //контейнер с анимационными блоками
        $('.animation-block')
            // случай, когда скроллим сверху вниз и офсет блока-контенера равен 80%
            .waypoint( function (dir) {

                if (dir === 'down') { //скролл вниз

                    //если браузер поддерживает css3 анимации
                    if (Modernizr.cssanimations) {

                        $(this).find('.item1')
                            .removeClass('fadeOut')
                            .addClass('fadeInDown');

                        $(this).find('.item2')
                            .removeClass('fadeOut')
                            .addClass('fadeInDown');

                        $(this).find('.item3')
                            .removeClass('fadeOut')
                            .addClass('fadeInDown');

                    } else if (Modernizr.opacity)  {
                        //if ie9. используем .animate()
                        prepareElementForAnimate($(this));

                        var positionY = 150;
                        $(this).find('.item1')
                            .css('top', -positionY )
                            .stop()
                            .animate({
                                opacity: 1,
                                top: '+='+positionY
                            }, 500);

                        $(this).find('.item2')
                            .css('top', -positionY )
                            .stop()
                            .animate({
                                opacity: 1,
                                top: '+='+positionY
                            }, 800);

                        $(this).find('.item3')
                            .css('top', -positionY )
                            .stop()
                            .animate({
                                opacity: 1,
                                top: '+='+positionY
                            }, 1100);
                    } else {
                        //если это ie8, просто показываем элемент
                        ie8notAnimate($(this).find('.item1, .item2, .item3'));
                    }

                }
                else { //скролл вверх
                    if (Modernizr.cssanimations) {

                        $(this).find('.item1')
                            .removeClass('fadeInDown')
                            .addClass('fadeOut');

                        $(this).find('.item2')
                            .removeClass('fadeInDown')
                            .addClass('fadeOut');

                        $(this).find('.item3')
                            .removeClass('fadeInDown')
                            .addClass('fadeOut');

                    } else if (Modernizr.opacity)  {
                        // if ie9. используем .animate()

                        $(this).find('.item1, .item2, .item3')
                            .stop()
                            .animate({
                                opacity: 0
                            }, 500);
                    } else {
                        //if ie8 (ie8 не поддерживает нормально opacity)
                        ie8notAnimate($(this).find('.item1, .item2, .item3'));
                    }
                }

            }, {
                offset: '80%'
            })
            // случай, когда скроллим снизу вверх и офсет блока-контенера равен чуть меньше его высоты
            // (анимации как в предыдущем случае, но наоборот)
        .waypoint( function (dir) {

            if (dir === 'down') { //скролл вниз

                if (Modernizr.cssanimations) {

                    $(this).find('.item1')
                        .removeClass('fadeInDown')
                        .addClass('fadeOut');

                    $(this).find('.item2')
                        .removeClass('fadeInDown')
                        .addClass('fadeOut');

                    $(this).find('.item3')
                        .removeClass('fadeInDown')
                        .addClass('fadeOut');

                } else if (Modernizr.opacity)  {
                    //if ie9. используем .animate()

                    $(this).find('.item1, .item2, .item3')
                        .stop()
                        .animate({
                            opacity: 0
                        }, 500);
                } else {
                    //if ie8 (ie8 не поддерживает нормально opacity)
                    ie8notAnimate($(this).find('.item1, .item2, .item3'));
                }

            }
            else { //скролл вверх

                //если браузер поддерживает css3 анимации
                if (Modernizr.cssanimations) {

                    $(this).find('.item1')
                        .removeClass('fadeOut')
                        .addClass('fadeInDown');

                    $(this).find('.item2')
                        .removeClass('fadeOut')
                        .addClass('fadeInDown');

                    $(this).find('.item3')
                        .removeClass('fadeOut')
                        .addClass('fadeInDown');

                } else if (Modernizr.opacity)  {
                    //if ie9. используем .animate()
                    prepareElementForAnimate($(this));

                    var positionY = 150;
                    $(this).find('.item1')
                        .css('top', -positionY )
                        .stop()
                        .animate({
                            opacity: 1,
                            top: '+='+positionY
                        }, 500);

                    $(this).find('.item2')
                        .css('top', -positionY )
                        .stop()
                        .animate({
                            opacity: 1,
                            top: '+='+positionY
                        }, 800);

                    $(this).find('.item3')
                        .css('top', -positionY )
                        .stop()
                        .animate({
                            opacity: 1,
                            top: '+='+positionY
                        }, 1100);
                } else {
                    //if ie8 (ie8 не поддерживает нормально opacity)
                    ie8notAnimate($(this).find('.item1, .item2, .item3'));
                }

            }

        }, {
            offset: -100
        });

    });

    function prepareElementForAnimate(thisAnimationContainer) {
        var $this;

        if (thisAnimationContainer.hasClass('animated')){

            //если переданный в ф-ю элемент сам является анимимруемым, т.е имеет класс animated
            $this = thisAnimationContainer;
        } else {

            //если переданный в ф-ю элемент не является анимимруемым, то ищем анимируемые эл-ты в нем
            $this = thisAnimationContainer.find('.animated');
        }

        $this.each(function () {
            //устанавливаем непрозрачность 0
            $(this).css( {
                'visibility' : 'visible',
                'opacity': 0
            });

            //чтоб ф-я animate работала, задаем position relative для тех элементов, у кого она не absolute и изначаьно не retative
            if ($(this).css("position") != 'absolute' && $(this).css("position") != 'relative') {
                $(this).css(
                    {"position": "relative"}
                );
            }
        });
    }

    function ie8notAnimate($this){
        //ie8 не поддерживает нормально opacity, поэтому просто показываем элемент, без анимации
        $this.css('visibility','visible');
    }

}); // END READY