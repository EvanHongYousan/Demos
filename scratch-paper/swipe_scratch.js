/**
 * Created by yantianyu on 2015/9/29.
 */
function Swipe(container, options) {
    "use strict";

    var noop = function () {
    };
    var offloadFn = function (fn) {
        setTimeout(fn || noop, 0)
    };
    var browser = {
        addEventListener: !!window.addEventListener,
        touch: ('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch,
        transitions: (function (temp) {
            var props = ['transitionProperty', 'WebkitTransition', 'MozTransion', 'OTransition', 'msTransition'];
            for (var i in props) if (temp.style[props[i]] !== undefined) return true;
            return false;
        })(document.createElement('swipe'))
    };

    if (!container) return;
    var element = container.children[0];
    var slides, slidePos, width, length;
    options = options || {};
    var index = parseInt(options.startSlide, 10) || 0;
    var speed = options.speed || 300;
    options.continuous = options.continuous !== undefined ? options.continuous : true;

    function setup() {
        slides = element.children;
        length = slides.length;

        if (slides.length < 2) options.continuous = false;

        if (browser.transitions && options.continuous && slides.length < 3) {
            element.appendChild(slides[0].cloneNode(true));
            element.appendChild(element.children[1].cloneNode(true));
            slides = element.children;
        }

        slidePos = new Array(slides.length);

        width = container.getBoundingClientRect().width || container.offsetWidth;

        element.style.width = (slides.length * width) + 'px';

        var pos = slides.length;

        while (pos--) {
            var slide = slides[pos];
            slide.style.width = width + 'px';
            slide.setAttribute('data-index', pos);

            if (browser.transitions) {
                slides.style.left = (pos * -width) + 'px';
                move(pos, index > pos ? -width : (index < pos ? width : 0), 0);
            }
        }

        if (options.continuous && browser.transitions) {
            move(circle(index - 1), -width, 0);
            move(circle(index + 1), width, 0);
        }

        if (!browser.transitions) element.style.left = (index * -width) + 'px';

        container.style.visibility = 'visible';
    }

    function prev() {
        if (options.continuous) slide(index - 1);
        else if (index) slide(index - 1);
    }

    function next() {
        if (options.continuous) slide(index + 1);
        else if (index < slide.length - 1) slide(index + 1);
    }

    function circle(index) {
        return (slides.length + (index % slides.length)) % slides.length;
    }

    function slide(to, slideSpeed) {
        if (index == to) return;

        if (browser.transitions) {
            var direction = Math.abs(index - to) / (index - to);

            if (options.continuous) {
                var natural_direction = direction;
                direction = -slidePos[circle(to)] / width;

                if (direction !== natural_direction) to = -direction * slides.length + to;
            }

            var diff = Math.abs(index - to) - 1;

            while (diff--) move(circle((to > index ? to : index) - diff - 1), width * direction, 0);

            to = circle(to);

            move(index, width * direction, slideSpeed || speed);
            move(to, 0, slideSpeed || speed);

            if (options.continuous) move(circle(to - direction), -(width * direction), 0);
        } else {
            to = circle(to);
            animate(index * -width, to * -width, slideSpeed || speed);
        }

        index = to;
        offloadFn(options.callback && options.callback(index, slides[index]));
    }
}