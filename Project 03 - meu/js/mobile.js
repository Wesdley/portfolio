$(function(){
    abrirJanela();
    fecharJanela();
    function abrirJanela(){
        $('.mobile').click(function(e){
            e.stopPropagation();
            $('.mobile ul').fadeIn();
        });
    };
    function fecharJanela(){
        var el = $('body, .xmob');
        el.click(function(){
            $('.mobile ul').fadeOut();
        });
    };
});