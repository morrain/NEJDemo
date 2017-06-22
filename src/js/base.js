/**
 * 项目模块基类实现文件
 * @param  {[type]} k  [description]
 * @param  {[type]} t  [description]
 * @param  {[type]} p) {}          [description]
 */
NEJ.define([
    'base/klass',
    'base/element',
    'base/util',
    'base/event',
    'util/dispatcher/module'
], function(k, e, u, v, t, p) {

    var pro;

    p._$$ModuleBase = k._$klass();
    pro = p._$$ModuleBase._$extend(t._$$ModuleAbstract);

    pro.__doBuild = function() {
        this.__super();
    };

    pro.__onShow = function(options) {
        this.__super(options);
    };


    pro.__onHide = function() {
        this.__super();
    };

    /**
     * 代理容器点击行为
     * @param  {Node}   parent - 容器节点
     * @param  {Object} config - 配置信息
     */
    pro._$delegate = function(scope, parent, config) {
        v._$addEvent(
            parent, 'click',
            function(event) {
                // check action
                var node = v._$getElement(event, 'action');
                if (!node) {
                    return;
                }
                // do action
                var action = e._$dataset(node, 'action'),
                    func = (config || {})[action];
                if (u._$isFunction(func)) {
                    v._$stopDefault(event);
                    // v._$stop(event);
                    func.call(scope || this, node, event);
                }
            }
        );
    };

    return p;
});
