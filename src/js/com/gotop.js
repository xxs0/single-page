define(['jquery'], function ($) {
    function GoTop($ct) {
        this.$ct = $ct;
        this.target = $('<button class="gotop"><i class="fa fa-arrow-up" aria-hidden="true"></i></button>');
        this.createNode();
        this.bindEvent();
    }

    GoTop.prototype = {
        bindEvent: function () {
            var btn = this.target;
            btn.on('click', function () {
                //       $(window).scrollTop(0);
                console.log($(window).scrollTop());
                //       $(window).animate({scrollTop: '0px'}, 300);
                $("html, body").animate({
                    scrollTop: "0px"
                }, 500);
            });
            $(window).on("scroll", function () {
                var windowScroll = $(window).scrollTop();
                if (windowScroll > 150) {
                    btn.show();
                } else {
                    btn.hide();
                }
            })
        },
        createNode: function () {
            this.$ct.append(this.target);
            this.target.hide();
        }
    }

    return GoTop;
})
// new GoTop($('body'));