$(document).on('scroll', function () {
    const windowHeight = $(window).height();
    const scrollValue = $(this).scrollTop();
    const $services1 = $('.services-photo');
    const services1FromTop = $services1.offset().top;
    const services1Height = $services1.outerHeight();


    const $services2 = $('.services-info');
    const services2FromTop = $services2.offset().top;
    const services2Height = $services2.outerHeight();

    const $feature1 = $('.feature1');
    const feature1FromTop = $feature1.offset().top;
    const feature1Height = $feature1.outerHeight();

    const $feature2 = $('.feature2');
    const feature2FromTop = $feature2.offset().top;
    const feature2Height = $feature2.outerHeight();


    const $feature3 = $('.feature3');
    const feature3FromTop = $feature3.offset().top;
    const feature3Height = $feature3.outerHeight();

    const $feature4 = $('.feature4');
    const feature4FromTop = $feature4.offset().top;
    const feature4Height = $feature4.outerHeight();

    const $feature5 = $('.feature5');
    const feature5FromTop = $feature5.offset().top;
    const feature5Height = $feature5.outerHeight();

    const $feature6 = $('.feature6');
    const feature6FromTop = $feature6.offset().top;
    const feature6Height = $feature6.outerHeight();

    const $col1 = $('.col-1');
    const col1FromTop = $col1.offset().top;
    const col1Height = $col1.outerHeight();

    const $col2 = $('.col-2');
    const col2FromTop = $col2.offset().top;
    const col2Height = $col2.outerHeight();

    const $purchase = $('.purchase-info');
    const purchaseFromTop = $purchase.offset().top;
    const purchaseHeight = $purchase.outerHeight();

    const $person1 = $('.person1');
    const person1FromTop = $person1.offset().top;
    const person1Height = $person1.outerHeight();

    const $person2 = $('.person2');
    const person2FromTop = $person2.offset().top;
    const person2Height = $person2.outerHeight();

    const $person3 = $('.person3');
    const person3FromTop = $person3.offset().top;
    const person3Height = $person3.outerHeight();

    const $person4 = $('.person4');
    const person4FromTop = $person4.offset().top;
    const person4Height = $person4.outerHeight();

    const $person5 = $('.person5');
    const person5FromTop = $person5.offset().top;
    const person5Height = $person5.outerHeight();

    const $person6 = $('.person6');
    const person6FromTop = $person6.offset().top;
    const person6Height = $person6.outerHeight();

    const $newsletter = $('.newsletter');
    const newsletterFromTop = $newsletter.offset().top;
    const newsletterHeight = $newsletter.outerHeight();

    const $footer = $('.f13');
    const footerFromTop = $footer.offset().top;
    const footerHeight = $footer.outerHeight();

    const $header = $('.page-header');
    const $nav = $('nav');
    const $logo = $('.logo');
    const $ul = $('ul');



    if (scrollValue > 100) {
        $header.addClass('active');
        $nav.addClass('active');
        $logo.addClass('active');
        $ul.addClass('active');

    }
    if (scrollValue > services1FromTop - windowHeight) {
        $services1.addClass('active');
        $services2.addClass('active');

    }
    if (scrollValue > feature1FromTop - feature1Height * 3 - windowHeight) {
        $feature1.addClass('active');
        $feature2.addClass('active');
        $feature3.addClass('active');

    }

    if (scrollValue > feature4FromTop - feature4Height * 3 - windowHeight) {
        $feature4.addClass('active');
        $feature5.addClass('active');
        $feature6.addClass('active');

    }

    if (scrollValue > col1FromTop - col1Height - windowHeight) {
        $col1.addClass('active');
        $col2.addClass('active');
    }

    if (scrollValue > purchaseFromTop + purchaseHeight / 2 - windowHeight) {
        $purchase.addClass('active');
    }

    if (scrollValue > person1FromTop - person1Height * 2 - windowHeight) {
        $person1.addClass('active');
        $person2.addClass('active');
        $person3.addClass('active');
    }

    if (scrollValue > person4FromTop - person4Height * 2 - windowHeight) {
        $person4.addClass('active');
        $person5.addClass('active');
        $person6.addClass('active');
    }

    if (scrollValue > newsletterFromTop + newsletterHeight - windowHeight) {
        $newsletter.addClass('active');
    }

    if (scrollValue > footerFromTop + footerHeight / 2 - windowHeight) {
        $footer.addClass('active');
    }



    if (scrollValue < 80) {
        $services1.removeClass('active');
        $services2.removeClass('active');
        $feature1.removeClass('active');
        $feature2.removeClass('active');
        $feature3.removeClass('active');
        $feature4.removeClass('active');
        $feature5.removeClass('active');
        $feature6.removeClass('active');
        $col1.removeClass('active');
        $col2.removeClass('active');
        $purchase.removeClass('active');
        $person1.removeClass('active');
        $person2.removeClass('active');
        $person3.removeClass('active');
        $person4.removeClass('active');
        $person5.removeClass('active');
        $person6.removeClass('active');
        $newsletter.removeClass('active');
        $footer.removeClass('active');
        $header.removeClass('active');
        $nav.removeClass('active');
        $logo.removeClass('active');
        $ul.removeClass('active');
    }


})

// Smooth scroll
$('.page-navigation a').smoothScroll({
    offset: -20,
    afterScroll: function () {
        $(this).closest('.page-navigation').find('a').removeClass('active');
        $(this).addClass('active')
    }

});

$('.mobile-navigation a').smoothScroll({
    offset: -50,
    afterScroll: function () {
        $(this).closest('.mobile-navigation').find('a').removeClass('active');
        $(this).addClass('active')
    }

});