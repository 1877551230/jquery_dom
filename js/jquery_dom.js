//jquery的dom的基本操作
function f1(){
    //html方法能够执行带有html标记的文本
    //等价于原生js   对象.innerHTML=""
    $("#d1 span").html("<span style='color:red;'>span的文本节点</span>");
}
function f2(){
    //text方法不能够执行带有html标记的文本
     //等价于原生js   对象.innerText=""
    $("#d1 span").text("<span style='color:red;'>span的文本节点</span>");
}
function f3(){
    //$("#d1 :text").val("zhangsan");
    //$("#d1 input[type=text]").val("zhangsan");
    //$("#d1 input:text").val("zhangsan");
    //$("#d1 input[name=username]").val("zhangsan");
    //$("#d1 input[id=uname]").val("zhangsan");
    //$("#d1 #uname").val("zhangsan");
    $("#d1 #uname").attr("value","zhangsan");
}
function f4(){
    $("#d1 #uname").attr("type","button").attr("value","测试按钮");
    $("#d1 #uname").click(function(){
        alert("呵呵呵呵");
    });
}

//jquery的dom的创建和插入
function f5(){
    $("#d2 ul").append("<li>item4</li>");
}

function f6(){
    $("#d2 ul").prepend("<li>item0</li>");
}
function f7(){
    $("#d2 #li2").after("<li>item</li>");
}
function f8(){
    $("#d2 #li2").before("<li>item</li>");
}

//jquery的dom删除
function f9(){
    $("#d3 ul").remove();
}
function f10(){
    //$("#d3 ul li").remove();//移除的是所有的li
    $("#d3 ul li").remove("#li2");
}
function f11(){
    //$("#d3 ul li:eq(0)").empty();
    //$("#d3 ul li:eq(0)").text("");
    //$("#d3 ul li:eq(0)").html("");
    $("#d3 ul").empty();

}

//jQuery的dom克隆
function f12(){
    $("#d4 ul li:eq(0)").css("cursor","pointer").click(function(){
        $(this).css("font-size","30px");
    });
    var obj=$("#d4 ul li:eq(0)").clone();
    $("#d4 ul").append(obj);

}
function f13(){
    $("#d4 ul li:eq(0)").css("cursor","pointer").click(function(){
        $(this).css("font-size","30px");
    });
    var obj=$("#d4 ul li:eq(0)").clone(true);//事件也一并克隆
    $("#d4 ul").append(obj);
}

//jquery的com样式操作
function f14(){
    //两个样式的切换
    if($("#d5 #d5_1").hasClass("s1")){
        $("#d5 #d5_1").removeClass("s1").addClass("s2");
    }else{
        $("#d5 #d5_1").removeClass("s2").addClass("s1");
    }
}
function f15(){
    $("#d5 #d5_1").removeClass("s1");
}
function f16(){
    //两个样式的切换 但是样式没有被移出
    if($("#d5 #d5_1").hasClass("s1")){
        $("#d5 #d5_1").toggleClass("s2");
    }else{
        $("#d5 #d5_1").toggleClass("s1");
    }
}
function f17(){
    alert($("#d5 #d5_1").hasClass("s1"));
}
function f18(){
    alert($("#d5 #d5_1").css("color"));
}
function f19(){
    $("#d5 #d5_1").css("background-color","pink");
}
function f20(){
    $("#d5 #d5_1").attr("class","s2");
}

//jquery的dom遍历节点操作
function f21(){
    //var obj=$("#d6").children("div");
    var obj=$("#d6").children("#d6_2");
    alert(obj.length);
}
function f22(){
    //$("#d6 #d6_1").next().css("color","red");
    $("#d6 #d6_1").next().next().css("color","red");
}
function f23(){
    $("#d6 :last").prev().prev().css("color","red");
}
function f24(){
    //$("#d6 #d6_2").siblings().css("color","red");
    //$("#d6 #d6_2").siblings("span").css("color","red");
    $("#d6 #d6_2").siblings(":contains('张')").css("color","red");
}
function f25(){
    $("#d6").find("span:eq(0)").css("color","red");

}
function f26(){
    $("#d6 :contains('张')").parent().css("color","red");
}