NEJ.define([
    'base/klass',
    'base/element',
    'util/template/tpl',
    'util/dispatcher/module',
    'pro/base'
], function(k, e, tpl, t, b, p) {

    var pro;

    p._$$Module = k._$klass();
    pro = p._$$Module._$extend(b._$$ModuleBase);

    pro.__doBuild = function(options) {
        this.__body = e._$html2node(
            tpl._$getTextTemplate('blog-list')
        );
        this.__super(options);
    };

    pro.__onMessage = function(_event) {

        // _event.from 消息来源
        // _event.data 消息数据，这里可能是 {a:'aaaaaa',b:'bbbbbbbbb'}
        // 
        this.__body.innerText = _event.data.message;
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

    t._$regist('blog-list', p._$$Module);

    return p;

});
