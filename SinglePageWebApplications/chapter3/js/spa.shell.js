/**
 * Created by Evan on 15/5/28.
 */
spa.shell = (function(){
    var
        configMap = {
            anchor_schema_map : {
                chat : { open : true, closed : true }
            },
            main_html : String()
            + '<div class="spa-shell-head">'
                + '<div class="spa-shell-head-logo"></div>'
                + '<div class="spa-shell-head-acct"></div>'
                + '<div class="spa-shell-head-search"></div>'
            + '</div>'
            + '<div class="spa-shell-main">'
                + '<div class="spa-shell-main-nav"></div>'
                + '<div class="spa-shell-main-content"></div>'
            + '</div>'
            + '<div class="spa-shell-foot"></div>'
            + '<div class="spa-shell-chat"></div>'
            + '<div class="spa-shell-modal"></div>',
            chat_extend_time : 1000,
            chat_retract_time : 300,
            chat_extend_height : 450,
            chat_retract_height : 15,
            chat_extend_title : 'Click to retract',
            chat_retract_title : 'Click to extend'
        },
        stateMap = {
            $container : null,
            anchor_map : {},
            is_chat_retracted : true
        },
        jqueryMap = {},

        copyAnchorMap, setJqueryMap, toggleChat,
        changeAnchorPart, onHashchange,
        onClickChat, initModule;

    copyAnchorMap = function(){
        return $.extend(true, {}, stateMap.anchor_map);
    };

    setJqueryMap = function(){
        var $container = stateMap.$container;

        jqueryMap = {
            $container : $container,
            $chat : $container.find('.spa-shell-chat')
        };
    };
})();