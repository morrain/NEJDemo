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
            tpl._$getTextTemplate('setting-account-tab')
        );

        this._$delegate(this, this.__body, {
            redirect: function(node, event) {
                v._$stop(event);
                this.__dispatcher._$redirect(e._$dataset(node, 'href'));
            }
        });
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

    t._$regist('setting-account-tab', p._$$Module);

    return p;

});
