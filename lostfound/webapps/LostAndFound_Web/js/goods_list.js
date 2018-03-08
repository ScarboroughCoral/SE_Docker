webpackJsonp([4],[,,,,,,,,function(t,e,o){"use strict";(function(t){o(9);var e=o(10),n=o(11);SPA_RESOLVE_INIT=function(o){t("#router-content").html(e),(new n).page_init()}}).call(e,o(0))},function(t,e){},function(t,e){t.exports='<div id="goodsList">\r    <div class="goods-list-container">\r        <header>\r            <h2>失物列表</h2>\r        </header>\r        <div class="search-container">\r            <div class="goods-type-block">\r                <label for="goodsType">失物类型：</label>\r                <select name="goodsType" id="goodsType">\r                    <option value="-1">请选择失物类型</option>\r                </select>\r            </div>\r            <div class="time-block">\r                <label for="startTime">时间段：</label>\r                <input type="date" name="startTime" id="startTime">\r                <label for="endTime">至</label>\r                <input type="date" name="endTime" id="endTime">\r            </div>\r            <div class="search-btn">搜索</div>\r        </div>\r        <div class="goods-table">\r            <table>\r                <thead>\r                    <tr>\r                        <th>物品描述</th>\r                        <th>丢失时间</th>\r                        <th>是否找到</th>\r                        <th>联系</th>\r                    </tr>\r                </thead>\r                <tbody id="goodsListContainer">\r                </tbody>\r            </table>\r        </div>\r    </div>\r</div>'},function(t,e,o){"use strict";(function(e){function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var n=function(){function t(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,o,n){return o&&t(e.prototype,o),n&&t(e,n),e}}(),i=function(){function t(){o(this,t)}return n(t,[{key:"page_init",value:function(){this.get_goods_type_list(),this.get_goods_list()}},{key:"get_goods_type_list",value:function(){e.ajax({url:"/LostAndFound/getAllGoodsType",type:"GET",dataType:"JSON",success:function(t){var o=t.goodsTypeList,n="";o.forEach(function(t){n+='<option value="'+t.goods_type_id+'">'+t.goods_type+"</option>"}),e("#goodsType").append(n)}})}},{key:"get_goods_list",value:function(){var t=this;e.ajax({url:"/LostAndFound/getGoodsList",type:"GET",dataType:"JSON",success:function(o){var n=o.goodsList,i="";n.forEach(function(t){i+='<tr value="'+t.goods_id+'"><td>'+t.goods_remark+"</td><td>"+t.goods_starttime+"</td><td>"+(t.has_found?"是":"否")+'</td><td><span class="view-details">点击查看</span></td></tr>'}),e("#goodsListContainer").append(i),t.attach_event()}})}},{key:"attach_event",value:function(){e(".view-details").each(function(t,o){e(o).click(function(){var t=e(this).parent().parent().attr("value");location.href="#/goodsdetails?goods_id="+t})})}}]),t}();t.exports=i}).call(e,o(0))}],[8]);