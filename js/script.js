$(function () {
   $('.mobile').click(function () { 
       $(this).find('ul').slideToggle();

        
    });
    var directoey = 'C:/Users/murilo/Documents/GitHub/projeto-do-curso-3'

    $('[goto=contato]').click(function () {
        lacation.href=directory+'index.html?contato';
        return false;
    })

    checkUrl();

    function () {
        var url = lacation.href.split('/');
        var curPage = url[url.length-1].split('?')

        if(curPage[1] != undefined && curPage[1] == 'contato'){
            $('header nav a').css('color','black');
            $('footer nav a').css('color','whithe');
            $('[goto=contato]').css('cpçpr',':#EB2D2D');
            $('hrml,body').animate({'scrillTop':$('#contato').offset().top})
        }
    }
})