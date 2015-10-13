window.Swipe = function (element, options) {
    if (!element) return null;
    var _this = this;  //缓存this
    this.options = options || {}; //接受配置
    this.index = this.options.startSlide || 0; //幻灯片索引
    this.speed = this.options.speed || 300; //移动速度
    this.callback = this.options.callback || function () {
        };  //回调函数
    this.delay = this.options.auto || 0; //延迟执行
    this.CustomDistance = this.options.Distance || 0; // 自定义距离 屏幕的宽度减去此距离
    this.container = element;  //swipe
    this.element = this.container.children[0];  //swipe-wrap
    this.container.style.overflow = 'hidden';
    this.element.style.listStyle = 'none';
    this.element.style.margin = 0;
    this.setup();  //设置幻灯片
    this.begin();  //开始执行

    if (this.element.addEventListener) {  //监听各种
        this.element.addEventListener('touchstart', this, false);  //触摸开始
        this.element.addEventListener('touchmove', this, false);  //触摸时
        this.element.addEventListener('touchend', this, false);  //触摸结束
        this.element.addEventListener('webkitTransitionEnd', this, false); //动画结束时触发 webkit专用
        this.element.addEventListener('msTransitionEnd', this, false); //动画结束时触发 ie专用
        this.element.addEventListener('oTransitionEnd', this, false); //动画结束时触发 Opera 专用
        this.element.addEventListener('transitionend', this, false); //动画结束时触发 公用
        window.addEventListener('resize', this, false) //窗口改变时
    }
};
Swipe.prototype = {
    setup: function () {
        console.log(this);
        this.slides = this.element.children; //获取幻灯片div
        this.length = this.slides.length;  //获取幻灯片div的数量
        if (this.length < 2) return null;  //当只有一个幻灯片的时候直接返回

        //getBoundingClientRect这个方法返回一个矩形对象，包含四个属性：left、top、right和bottom。分别表示元素各边与页面上边和左边的距离。
        this.width = ("getBoundingClientRect" in this.container) ? this.container.getBoundingClientRect().width : this.container.offsetWidth;  //获取宽度

        if (!this.width) return null;  //如过获取不到宽度 直接返回
        this.container.style.visibility = 'hidden';  //整个div不让显示 为了设置下面的属性 设置好后 再显示
        this.element.style.width = (this.slides.length * this.width - (this.CustomDistance * this.slides.length)) + 'px'; //设置中间框的距离为里面幻灯片宽度的综合
        var index = this.slides.length;  //设置个循环 循环次数为幻灯片的数量
        while (index--) {  //开始循环
            var el = this.slides[index]; //获取单个幻灯片
            el.style.width = this.width - this.CustomDistance + 'px';  // 它的宽度
            el.style.display = 'table-cell';  //加上表格布局属性
            el.style.verticalAlign = 'top'  //顶部排列
        }
        ;
        this.slide(this.index, 0);  //执行slide方法
        this.container.style.visibility = 'visible'
    },
    slide: function (index, duration) {  //接受两个参数 幻灯片的位置索引，移动的速度
        var style = this.element.style;
        if (duration == undefined) {
            duration = this.speed  //移动速度
        }
        ;
        style.webkitTransitionDuration = style.MozTransitionDuration = style.msTransitionDuration = style.OTransitionDuration = style.transitionDuration = duration + 'ms';  //设置css3过渡的动画速度
        style.MozTransform = style.webkitTransform = 'translate3d(' + -(index * (this.width - this.CustomDistance)) + 'px,0,0)';  //火狐和谷歌加上 Transform属性
        style.msTransform = style.OTransform = 'translateX(' + -(index * (this.width - this.CustomDistance)) + 'px)';  //ie和opera加上 Transform属性
        this.index = index; //设置幻灯片的索引
    },
    getPos: function () {
        return this.index; //获取幻灯片的索引
    },
    prev: function (delay) {   //往上滑
        this.delay = delay || 0;  //更新延迟
        clearTimeout(this.interval);  //清除延时
        if (this.index) this.slide(this.index - 1, this.speed)  //执行slide 进行动画
    },
    next: function (delay) {  //往下滑同上
        this.delay = delay || 0;
        clearTimeout(this.interval);
        if (this.index < this.length - 1) this.slide(this.index + 1, this.speed);
        else this.slide(0, this.speed)
    },
    begin: function () {
        var _this = this;
        this.interval = (this.delay) ? setTimeout(function () {
            _this.next(_this.delay)
        }, this.delay) : 0 //延迟执行的索引 如过没有延迟 返回0
    },
    stop: function () {  //停止动画
        this.delay = 0;
        clearTimeout(this.interval)
    },
    resume: function () {  //是否自动执行
        this.delay = this.options.auto || 0;
        this.begin()
    },
    handleEvent: function (e) {  //获取type值 根据type值执行相应的函数
        switch (e.type) {
            case 'touchstart':
                this.onTouchStart(e);  //触摸开始
                break;
            case 'touchmove':
                this.onTouchMove(e);  //触摸时
                break;
            case 'touchend':
                this.onTouchEnd(e);  //触摸结束
                break;
            case 'webkitTransitionEnd':
            case 'msTransitionEnd':
            case 'oTransitionEnd':
            case 'transitionend':
                this.transitionEnd(e);  //动画结束时执行
                break;
            case 'resize':
                this.setup();  //窗口变换时执行
                break
        }
    },
    transitionEnd: function (e) {
        if (this.delay) this.begin();  //动画结束时判断是否再次执行 这步是判断自动执行的关键所在
        this.callback(e, this.index, this.slides[this.index])  //执行结束时的回调函数 返回even对象，当前的幻灯片索引，当前幻灯片的对象
    },
    onTouchStart: function (e) {
        this.start = {  //记录刚开始的更重数值 x y 和 时间
            pageX: e.touches[0].pageX,
            pageY: e.touches[0].pageY,
            time: Number(new Date())
        };
        this.isScrolling = undefined;  //设置个属性 目的在move时 isScrolling只计算一次
        this.deltaX = 0;
        this.element.style.MozTransitionDuration = this.element.style.webkitTransitionDuration = 0;  //先把动画的值设置为0

    },
    onTouchMove: function (e) {
        if (e.touches.length > 1 || e.scale && e.scale !== 1) return;  //如过是两根以上的手指 或者是 窗口缩放了 那就直接返回
        this.deltaX = e.touches[0].pageX - this.start.pageX;   //计算移动X轴的距离
        if (typeof this.isScrolling == 'undefined') {
            this.isScrolling = !!(this.isScrolling || Math.abs(this.deltaX) < Math.abs(e.touches[0].pageY - this.start.pageY))  //如过Y轴的倾向大于X轴的倾向也不赋值
        }
        ;
        if (!this.isScrolling) {
            e.preventDefault();  //如果是左右滑动则阻止默认事件以防止安卓move只执行一次的问题
            clearTimeout(this.interval);
            this.deltaX = this.deltaX / ((!this.index && this.deltaX > 0 || this.index == this.length - 1 && this.deltaX < 0) ? (Math.abs(this.deltaX) / this.width + 1) : 1);
            this.element.style.MozTransform = this.element.style.webkitTransform = 'translate3d(' + (this.deltaX - this.index * (this.width - this.CustomDistance)) + 'px,0,0)';

        }
    },
    onTouchEnd: function (e) {
        var isValidSlide = Number(new Date()) - this.start.time < 250 && Math.abs(this.deltaX) > 20 || Math.abs(this.deltaX) > this.width / 2,
            isPastBounds = !this.index && this.deltaX > 0 || this.index == this.length - 1 && this.deltaX < 0;
        if (!this.isScrolling) {
            this.slide(this.index + (isValidSlide && !isPastBounds ? (this.deltaX < 0 ? 1 : -1) : 0), this.speed)  //执行动画
        }
        ;

    }
};