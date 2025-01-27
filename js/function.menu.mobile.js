$(function(){
    abrirMenu();
    fecharJanela();
    function abrirMenu() {
        $('.mobile').click(function(e) {
            e.stopPropagation();
            $('.mobile ul').fadeIn();
        });
    }
    function fecharJanela() {
        var el = $('body, .close');
        el.click(function() {
            $('.mobile ul').fadeOut();
        });
        $('.mobile ul').click(function(e) {
            e.stopPropagation();
        });
    }
});