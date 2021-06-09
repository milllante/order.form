var counrty = {
    RU: 'url(static/ru.png)',
    EN: 'url(static/EN.png)'
};

$("select").change(function(){
    var select = $('.select_counrty').val();
    $('.select_counrty_block').css('background-image', counrty[select]);
});

