define(['jquery'], function ($) {
    function Scroll() {
        let $services = $('#services'),
            $portfolio = $('#portfolio'),
            $about = $('#about'),
            $team = $('#team'),
            $newsList = $('#newsList'),
            $contact = $('#contact')

        function isVisable($el) {
            var windowHeight = $(window).height(),
                scrollTop = $(window).scrollTop(),
                nodeTop = $el.offset().top,
                nodeHeight = $el.outerHeight(true);

            if (windowHeight + scrollTop > nodeTop && scrollTop < nodeTop + nodeHeight) {
                return true;
            } else {
                return false;
            }
        }

        $(window).on('scroll', () => {
            $('ul.nav > li > a').removeClass('active')
            if (isVisable($services)) {
                $('ul.nav > li > a[href="#services"]').addClass('active')
            } else if (isVisable($portfolio)) {
                $('ul.nav > li > a[href="#portfolio"]').addClass('active')
                $('header').addClass('blackbar')
            } else if (isVisable($about)) {
                $('ul.nav > li > a[href="#about"]').addClass('active')
                $('header').addClass('blackbar')
            } else if (isVisable($team)) {
                $('ul.nav > li > a[href="#team"]').addClass('active')
                $('header').addClass('blackbar')
            } else if (isVisable($newsList)) {
                $('ul.nav > li > a[href="#newsList"]').addClass('active')
                $('header').addClass('blackbar')
            } else if (isVisable($contact)) {
                $('ul.nav > li > a[href="#contact"]').addClass('active')
                $('header').addClass('blackbar')
            } else {
                $('ul.nav > li > a[href="#services"]').addClass('active')
                $('header').removeClass('blackbar')
            }
        })
    }
    return Scroll
})