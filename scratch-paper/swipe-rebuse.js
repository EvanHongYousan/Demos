/**
 *
 * Created by yantianyu on 15/9/30.
 */

var compoments = (function () {
    function swipeInit(element, options) {
        var
            container = element,
            element = element.children[0],
            options = options || {},
            speed = options.speed || 300,
            width, length, slides;

        container.style.overflow = 'hidden';
        element.style.margin = '0';
        element.style.listStyle = 'none';

        function setup() {
            console.log(container);

            var
                index;

            slides = element.children;
            length = slides.length;

            if (length < 2) return;

            width = ('getBoundingClientRect' in container) ? container.getBoundingClientRect().width : container.offsetWidth;

            if (!width) return;

            container.style.visibility = 'hidden';

            element.style.width = length * width + 'px';

            index = length;

            while (index--) {
                var el = slides[index];
                el.style.width = width + 'px';
                el.style.display = 'table-cell';
                el.style.verticalAlign = 'top';
            }

            slide(index, 0);
            container.style.visibility = 'visible';
        }

        function slide(index, duration) {
            var
                style = element.style;

            if (duration == 'undefined') duration = speed;

            style.webkitTransitionDuration = style.MozTransitionDuration = style.msTransitionDuration = style.OTransitionDuration = style.transitionDuration = duration + 'ms';  //设置css3过渡的动画速度
            style.MozTransform = style.webkitTransform = 'translate3d(' + -(index * (this.width - this.CustomDistance)) + 'px,0,0)';  //火狐和谷歌加上 Transform属性
            style.msTransform = style.OTransform = 'translateX(' + -(index * (this.width - this.CustomDistance)) + 'px)';  //ie和opera加上 Transform属性
            this.index = index;
        }

        setup();
    }

    return {swipeInit: swipeInit}
})();

compoments.swipeInit(document.getElementById('container'));
