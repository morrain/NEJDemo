NEJ.define([
    'base/klass',
    'base/element',
    'base/event',
    'util/template/tpl',
    'util/dispatcher/module',
    'pro/base'
], function(k, e, v, tpl, t, b, p) {

    var pro;

    p._$$Module = k._$klass();
    pro = p._$$Module._$extend(b._$$ModuleBase);


    pro.__doBuild = function(options) {

        this.__body = e._$html2node(
            tpl._$getTextTemplate('blog-tag')
        );

        this.__super(options);
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

    t._$regist('blog-tag', p._$$Module);

    return p;

});
