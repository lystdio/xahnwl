
/*内部导航跳转*/
$(".secNav_ul li").click(function(){
    var thisid = $(this).attr("id");
     $("div[name="+thisid+"]").show().siblings(".g-con").hide();
    $(this).addClass("color").siblings().removeClass("color")
});

//返回顶部
    $("#phone").hover(function(){
        $(".hides").show();
    },function(){
        $(".hides").hide();
    });
//公司新闻
$(function () {
    $('#liao_1').on('click',function () {
        if($(this).text() == "了解更多>>"){
            $(this).text("收起");
            $('#hang').hide();
        }else{
            $(this).text("了解更多>>");
            $('#hang').show();
        }
        $('#gong_1').toggleClass('over');
    })
});
//行业新闻
$(function () {
   $('#liao_2').on('click',function () {
       if($(this).text() == "了解更多>>"){
           $(this).text("收起");
           $('#gong1').hide();
       }else{
           $(this).text("了解更多>>");
           $('#gong1').show();
       }
       $('#hang_1').toggleClass('over');
   })
});

