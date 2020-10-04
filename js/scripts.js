$(document).ready(function(){
    $('.design').click(function(){
        $('.design').slideUp('5000');
        $('.design-text').fadeIn('3000');
    });
    $('.design-text').click(function(){
        $('.design').slideDown('5000');
        $('.design-text').fadeOut('slow');

    });

    $('.developement').click(function(){
        $('.developement').slideUp('5000');
        $('.developement-text').fadeIn('3000');
    });

    $('.developement-text').click(function(){
        $('.developement').slideDown('5000');
        $('.developement-text').fadeOut('slow');

    });

    $('.product').click(function(){
        $('.product').slideUp('5000');
        $('.product-text').fadeIn('3000');
    });

    $('.product-text').click(function(){
        $('.product').slideDown('5000');
        $('.product-text').fadeOut('slow');

    });
    $('.portofolio-img').hover(function(){
        $('.portofolio-text',this).slideToggle('slow');
    });
});