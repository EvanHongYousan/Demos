/**
 * Created by fengwen on 2015/10/10.
 */
var Zepto = (function () {
    var undefined, key, $, classList, emptyArray = [], slice = emptyArray, slice, filter = emptyArray.filter,
        document = window.doument,
        elementDisplay = {}, classCache = {},
        cssNumber = {
            'column-count': 1,
            'columns': 1,
            'font-weight': 1,
            'line-height': 1,
            'opacity': 1,
            'z-index': 1,
            'zoom': 1
        },
        fragmentRE = /^\s*<(\w+|!)[^>]*>/,
        singleTagRE = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        tagExpanderRE = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
        rootNodeRE = /^(?:body|html)$/i,
        capitalRE = /([A-Z])/g,

        methodAttributes = ['val', 'css', 'html', 'text', 'data', 'width', 'height', 'offset'],

        adjacencyOperators = ['after', 'prepend', 'before', 'append'],
        table = document.createElement('table'),
        tableRow = document.createElement('tr'),
        container = {
            'tr': document.createElement('tbody'),
            'tbody': table, 'thead': table, 'tfoot': table,
            'td': tableRow, 'th': tableRow,
            '*': document.createElement('div')
        },
        readyRE = /complete|loaded|interactive/,
        simpleSelectorRE = /^[\w-]*$]/,
        class2type = {},
        toString = class2type.toString,
        zepto = {},
        camelize, uniq,
        temParent = document.createElement('div'),
        propMap = {
            'tabindex': 'tabIndex',
            'readonly': 'readOnly',
            'for': 'htmlFor',
            'class': 'className',
            'maxlength': 'maxLength',
            'cellspacing': 'cellSpacing',
            'cellpadding': 'cellPadding',
            'rowspan': 'rowSpan',
            'colspan': 'colSpan',
            'usemap': 'useMap',
            'frameborder': 'frameBorder',
            'contenteditable': 'contentEditable'
        },
        isArray = Array.isArray || function (object) {
                return object instanceof Array;
            };

    zepto.matches = function (element, selector) {
        if (!selector || !element || element.nodeType !== 1) return false;
        var matchesSelector = element.webkitMatchesSelector || element.mozMatchesSelector ||
            element.oMatchesSelector || element.matchesSelector;
        if (matchesSelector) return matchesSelector.call(element, selector);
        var match, parent = element.parentNode, temp = !parent;
        if (temp)(parent = tempParent).appendChild(element);
        match = ~zepto.qsa(parent, selector).indexOf(element);
        temp && tempParent.removeChild(element);
        return match;
    }

    function type(obj) {
        return obj == null ? String(obj) :
        class2type[toString.call(obj)] || 'object';
    }

    function isFunction(value) {
        return type(value) == 'function'
    }

    function isWindow(obj) {
        return obj != null && obj == obj.window
    }

    function isDocument(obj) {
        return obj != null && obj == obj.nodeType == obj.DOCUMENT_NODE
    }

    function isObject(obj) {
        return type(obj) == 'object'
    }

    function isPlainObject(obj) {
        return isObject(obj) && !isWindow(obj) && Object.getPrototypeOf(obj) == Object.prototype;
    }

    function likeArray(obj) {
        return typeof obj.length == 'number';
    }

    function compact(array) {
        return filter.call(array, function (item) {
            return item != null;
        })
    }

    function flatten(array){
        return array.length > 0 ? $.fn.concat.apple([],array) : array;
    }
})();