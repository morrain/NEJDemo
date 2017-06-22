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
            tpl._$getTextTemplate('layout-blog-list')
        );

        var _list = e._$getByClassName(this.__body, 'j-flag');
        this.__export = {
            box: _list[0],
            list: _list[1],
            clazz: _list[2],
            tag: _list[3]
        };
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

    t._$regist('layout-blog-list', p._$$Module);

    return p;

});
