$(document).ready(function() {  

    const $nav = $('.nav'),
    $menu = $('.main__nav'),
    $menuItem = $('.menu__item'),
    $hamburger = $('.hamburger');

    //  Mobile menu behavior

    $hamburger.click(function() {
        $hamburger.toggleClass('hamburger_active');
        $menu.fadeToggle();  // toggleClass('active')
    });

    $menuItem.click(function() {
        $hamburger.toggleClass('hamburger_active');
        $menu.fadeToggle();  //toggleClass('active')
    });

    // Menu behavior on Scroll
    $(window).scroll(function() {     

        if ($(this).scrollTop() > 30 && $nav.hasClass('main__nav')) {
            $nav.addClass('main__nav_scroll');            
        } else if ($(this).scrollTop() <= 30 && $nav.hasClass('main__nav_scroll')){
            $nav.removeClass('main__nav_scroll');            
        }

    });
    
    // Smooth scroll and Page Up button
    $(window).scroll(function(){
        if ($(this).scrollTop() > 600){
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });

    // Add smooth scrolling to all links
    $('a').on('click', function (e) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            e.preventDefault();

            const hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
			// The optional number (500) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 500, function () {
                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        }
    });

    // Products Tabs
    $('.products__menu__link').click(function() {        

        const curProdId = this.id;
        const curProdCategory = $('.products__block #' + curProdId);

        $('.products__block__item').not(curProdCategory).hide(0);
        curProdCategory.show(0);

        $('.products__menu__link').not($('#' + curProdId)).removeClass('products__menu__link_active');

        $(this).addClass('products__menu__link_active');
    });

    $('#products__all').click(function() {
        $('.products__block__item').show();
    });

    // Team Section        
    $('.team__photos__label.active').parent().focus();

    $('.team__photos__item').click(function() {
        const curItemId = this.id;
        const curPhotoBig = $('.team__photo__big #' + curItemId);
        const curTeamMember = $('.team__list #' + curItemId);
        
        $('.team__photos__label').removeClass('active');
        $(this).children('p').addClass('active');

        $('.team__photo__big__img').not(curPhotoBig).removeClass('team__member_active');
        curPhotoBig.addClass('team__member_active');

        $('.team__member').not(curTeamMember).removeClass('team__member_active');
        curTeamMember.addClass('team__member_active');
    });
});

