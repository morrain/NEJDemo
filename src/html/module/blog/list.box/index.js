NEJ.define([
    'base/klass',
    'base/element',
    'base/event',
    'util/template/tpl',
    'util/dispatcher/module',
    'pro/base'
], function(k, e, v, tpl, t, b, p) {

    var pro;
    var map = {
        'input': '这是收件箱日志列表页面',
        'draft': '这是草稿箱日志列表页面',
        'delete': '这是回收站日志列表页面'
    };

    p._$$Module = k._$klass();
    pro = p._$$Module._$extend(b._$$ModuleBase);


    pro.__doBuild = function(options) {

        this.__body = e._$html2node(
            tpl._$getTextTemplate('blog-list-box')
        );

        v._$addEvent(
            this.__body, 'click',
            function(event) {
                // check action
                var node = v._$getElement(event, 'action');
                if (!node) {
                    return;
                }
                // do action
                var action = e._$dataset(node, 'action');

                this.__switch(action);
            }.bind(this)
        );

        this.__super(options);
    };

    /**
     * 切换列表类型
     * @param  {String} type 
     */
    pro.__switch = function(type) {

        for (var i = 0; i < this.__body.children.length; i++) {

            var node = this.__body.children[i],
                action = e._$dataset(node, 'action');

            if (action == type) e._$addClassName(node, 'z-sel');
            else
                e._$delClassName(node, 'z-sel');
        }

        this.__doSendMessage(
            '/?/blog/list/', {
                message: map[type]
            }
        );

    };

    pro.__onShow = function(options) {
        this.__super(options);
    };

    pro.__onRefresh = function(options) {
        this.__super(options);
    };

    pro.__onHide = function(options) {
        this.__super(options);
    };

    t._$regist('blog-list-box', p._$$Module);

    return p;

});
