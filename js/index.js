/**
 * Created by 嬌嬌 on 2016/10/22.
 */
$(function(){
    if($.browser.msie && $.browser.version < 10){
        $('body').addClass('ltie10');
    }
    $.fn.fullpage({
        verticalCentered: false,
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7', 'page8', 'page9', 'page10'],
        navigation: true,
        navigationTooltips: ['首页', '央视报道','视觉', '交互', '皮肤', '功能', '待办邮件', '联系人邮件', '科技', '连接易信', '马上体验']
    });
});