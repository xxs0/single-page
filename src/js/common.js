require.config({
    baseUrl: "js",
    paths: {
        jquery: "lib/jquery.min",
        carousel: "com/carousel",
        gotop: "com/gotop",
        newslist: "com/newslist",
        scroll: "com/scroll"
    }
});

require(['jquery', 'carousel', 'gotop', 'newslist', 'scroll'], function ($, Carousel, GoTop, Newslist, Scroll) {
    new Carousel($('.carousel').eq(0));
    new GoTop($('body'));
    new Newslist($("#newsList"));
    new Scroll()
});



