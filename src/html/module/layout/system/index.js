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
            tpl._$getTextTemplate('m-layout')
        );
        this.__export = {
            tab: e._$getByClassName(this.__body, 'j-nav')[0],
            parent: this.__body
        };
        this.__super(options);
    };

    /**
     * 获取容器节点
     * @return {Void}
     */
    pro.__doParseParent = function(options) {
        return document.body;
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

    t._$regist('layout-system', p._$$Module);

    return p;

});
