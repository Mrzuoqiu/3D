(function($, window, document) {

    var BXL = {
        author: 'Lyy',
        init: function() {
            console.log('我是初始化的方法')
        },
        hanshu: function() {
            var y = -60;
            var x = 45;
            var that = this;
            that.mousedown(function(ev1) {
                var disX = ev1.pageX - x;
                var disY = ev1.pageY - y;
                $(document).mousemove(function(ev) {
                    var y = ev.pageX - disY;
                    var x = ev.pageY + disX;
                    that.css('transform', 'perspective(800px) rotateX(' + x + 'deg) rotateY(' + y + 'deg)');

                })
                $(document).mouseup(function() {
                    $(document).off('mousemove');
                    $(document).off('mouseup');
                })
                return false;

            });

        }
    }
    $.fn.bxlTab = function(option) {
        return this.each(function() {
            var $this = $(this);
            //接下来我要判断option是否是正常的字符串和对象的方法
            if (typeof option == 'string' && BXL[option]) {
                return BXL[option].call($this);
            } else if (!option) {
                return BXL.init($this);
            } else if (!BXL[option] || typeof option == 'object') {
                $.error('参数传递错误');
                return this;
            }
        })
    }
})($, window, document)