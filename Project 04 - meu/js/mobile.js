$(function(){
    abrirJanela();
    fecharJanela();
    var ul = $('.mobile ul');
    function abrirJanela () {
        $('.mobile').click(function (e){
            e.stopPropagation();
            ul.fadeIn();
        });
    };
    function fecharJanela () {
        var el = $('body, .xmob');
        el.click(function () {
            ul.fadeOut();
        });
    };
});