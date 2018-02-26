var _bdhmProtocol = (("https:" == document.location.protocol) ? " https://" : " http://");
// document.write(unescape("%3Cscript src='" + _bdhmProtocol + "hm.baidu.com/h.js%3Fc4dc089a9fa4c47cfaac4945ae28a592' type='text/javascript'%3E%3C/script%3E"));

function showCover(blur,cover,ele) {
    ele.addEventListener("click",function(e) {
        blur.className = "blur";
        cover.className = "cover";
    })
}
function close(blur,cover,ele) {
    ele.addEventListener("click",function(e) {
        blur.className = "";
        cover.className = "cover hidden";
    })
}

function closeBotton(content,ele) {
    ele.addEventListener("click",function(e) {
        content.className += " hidden";
        return false
    })
}


// 金选周刊订阅/退订按钮
function showBooking(ele,className,content,closeWhow){
    ele.addEventListener("click",function(e) {
        content.className = className;
        if(canceled === false){
            closeWhow.className +=" hidden"
        }
        return true;
    });

}

// 金选周刊提交成功显示
function sumit(ele,content,hiddEle){
    ele.addEventListener("click",function(e) {
        hiddEle.className +=" hidden";
        content.className = '';

    });

}


// // 小屏幕导航内容出现隐藏
// function showNav(blur,cover,content,ele,contactUs) {
//     var kaibi = false;
//     ele.addEventListener("click",function(e) {
//         if(kaibi === false){
//             blur.className = "blur";
//             content.className = "header-nav-s";
//             cover.className = "cover-nav";
//
//             kaibi = true;
//         }else{
//             blur.className = "";
//             content.className = "hidden";
//             cover.className = "hidden";
//             contactUs.className = "hidden";
//             kaibi = false
//         }
//     })
// }


// jajx提交 联系我们的数据 数据
function submitTextBox (submit){
    submit.addEventListener('click',function (e) {
        var textBoxValue = textBox.value;
        $.ajax({
            url:'http://admin.jinxuanji.com/api/web/AddContact',
            type:'POST',
            data:{'':textBoxValue},
            success:function (data) {
                console.log(data)
            }
        })
    })
}

//跳转到手机页面
function jumpToMobile(url){
    var res = GetRequest();
    var par = res['index'];
    if(par!='gfan'){
        var ua=navigator.userAgent.toLowerCase();
        var contains=function (a, b){
            if(a.indexOf(b)!=-1){return true;}
        };

//            输入手机端网址
        var toMobileVertion = function(){
            window.location.href = url
        }
        if(contains(ua,"ipad")||(contains(ua,"rv:1.2.3.4"))||(contains(ua,"0.0.0.0"))||(contains(ua,"8.0.552.237"))){return false}
        if((contains(ua,"android") && contains(ua,"mobile"))||(contains(ua,"android") && contains(ua,"mozilla")) ||(contains(ua,"android") && contains(ua,"opera"))	||contains(ua,"ucweb7")||contains(ua,"iphone")){toMobileVertion();}	}};
function GetRequest() {
    var url = location.search; //获取url中"?"符后的字串
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        strs = str.split("&");
        for(var i = 0; i < strs.length; i ++) {
            theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);
        }
    }
    return theRequest;}


// 小屏幕导航内容出现隐藏
var kaibi = false;
function showNav(blur,cover,content,ele) {

    ele.addEventListener("click",function(e) {
        if(kaibi === false){
            blur.className = "blur";
            content.className = "header-nav-s";
            cover.className = "cover-nav";
            contactUs.className = "hidden";
            kaibi = true;
        }else{
            blur.className = "";
            content.className = "hidden";
            cover.className = "hidden";
            contactUs.className = "about-us";
            kaibi = false;
        }
    })
}

function coverCloseNav(blur,cover,content,ele) {

    ele.addEventListener("click",function(e) {

        blur.className = "";
        content.className = "hidden";
        cover.className = "hidden";
        contactUs.className = "about-us";
        kaibi = false;

    })
}