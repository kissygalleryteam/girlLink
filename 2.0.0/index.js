/**
 * @fileoverview
 * @author
 * @module girllink
 **/
KISSY.add(function (S, Node,Base) {
    var EMPTY = '';
    var $ = Node.all;
    /**
     *
     * @class Girllink
     * @constructor
     * @extends Base
     */
    function Girllink(comConfig) {
        var self = this;
        //调用父类构造函数
        Girllink.superclass.constructor.call(self, comConfig);
    }
    S.extend(Girllink, Base, /** @lends Girllink.prototype*/{

    }, {ATTRS : /** @lends Girllink*/{

    }});
    return Girllink;
}, {requires:['node', 'base']});



