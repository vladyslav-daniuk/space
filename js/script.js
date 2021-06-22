$(document).ready(function() {
    $(".phone").mask("+38 (999) 999-99-99");
  });
// Заменяет все изображение SVG встроенным SVG
jQuery('img.svg').each(function(){
    let $img = jQuery(this);
    let imgID = $img.attr('id');
    let imgClass = $img.attr('class');
    let imgURL = $img.attr('src');

    jQuery.get(imgURL, function(data) {
        // Получить svg тег, игнорируя остальные
        let $svg = jQuery(data).find('svg');

        // Добавляет замененный идентификатор изображения в новый SVG
        if(typeof imgID !== 'undefined') {
            $svg = $svg.attr('id', imgID);
        }
        // Добавляет замененные классы изображений в новый SVG
        if(typeof imgClass !== 'undefined') {
            $svg = $svg.attr('class', imgClass+' replaced-svg');
        }

        // Удаляет все недопустимые теги XML
        $svg = $svg.removeAttr('xmlns:a');

        // Заменяет изображение новым SVG
        $img.replaceWith($svg);

    }, 'xml');

});
