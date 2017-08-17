require.config({
    baseUrl: "js",
    paths: {
        jquery: "lib/jquery.min",
        carousel: "com/carousel",
        gotop: "com/gotop",
        newslist: "com/newslist"
    }
});

require(['jquery', 'carousel', 'gotop', 'newslist'], function ($, Carousel, GoTop, Newslist) {
    new Carousel($('.carousel').eq(0));
    new GoTop($('body'));
    new Newslist($("#newsList"));
});



