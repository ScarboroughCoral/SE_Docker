webpackJsonp([3],{1:function(r,e,a){"use strict";var i=function(){for(var r=location.hash.split("?"),e=r[0].split("#/")[1],a=r[1]?r[1].split("&"):[],i={},t=0;t<a.length;t++){var s=a[t].split("=");i[s[0]]=s[1]}return{path:e,query:i}};r.exports=i},22:function(r,e,a){"use strict";(function(r){a(23);var e=a(24),i=a(1);SPA_RESOLVE_INIT=function(a){r("#router-content").html(e),r(function(){var e=i().query.user;r.ajax({url:"/LostAndFound/show",type:"POST",dataType:"JSON",data:{userId:e},success:function(e){if(e.success){var a=e.userInfo;for(var i in a)if(a.hasOwnProperty(i)){var t=a[i];r("#"+i).val(t)}}}}),r("#save-modify").click(function(a){var i=r(this);r.ajax({url:"/LostAndFound/updateUserInfo",type:"POST",dataType:"JSON",data:{userId:e,username:r("#username").val(),stuId:r("#stuId").val(),sex:r("#sex").val(),phone:r("#phone").val(),qq:r("#qq").val(),remark:r("#remark").val()},success:function(r){alert(r.message),r.success&&(location.href=i.children("a").attr("href")+"?user="+e),a.preventDefault()}})}),r("#cancel-modify").click(function(a){location.href=r(this).children("a").attr("href")+"?user="+e,a.preventDefault()})})}}).call(e,a(0))},23:function(r,e){},24:function(r,e){r.exports='<div id="modifyInfo">\r    <div class="show-info-container">\r        <header>\r            <h2>我的信息</h2>\r        </header>\r        <div class="main-info">\r            <div class="row">\r                <label for="">姓名：</label>\r                <input id="username" type="text">\r            </div>\r            <div class="row">\r                <label for="">学号：</label>\r                <input id="stuId" type="text">\r            </div>\r            <div class="row">\r                <label for="">性别：</label>\r                <input id="sex" type="text" >\r            </div>\r            <div class="row">\r                <label for="">手机号：</label>\r                <input id="phone" type="text" >\r            </div>\r            <div class="row">\r                <label for="">QQ：</label>\r                <input id="qq" type="text"  >\r            </div>\r            <div class="row">\r                <label for="">备注：</label>\r                <input type="text"  name="" id="remark" >\r            </div>\r        </div>\r        <div class="btn-container">\r            <div id="save-modify" class="save-modify"><a href="#/show_info">保存修改</a></div>\r            <div id="cancel-modify" class="cancel-modify"><a href="#/show_info">取消修改</a></div>\r        </div>\r    </div>\r</div>'}},[22]);