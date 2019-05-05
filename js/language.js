
$(function(){  //初始化页面内容
    var coo = cookie.getCookie("lang");
	//alert(coo);
	if(coo == "zn"){
			changeZh()
		}else {			
			changeEn()
		}

});

function changeZh(){  //中文切换

	$.i18n.properties({

        name : 'js', //资源文件名称

        path : 'i18n/', //资源文件路径

        mode : 'map', //用Map的方式使用资源文件中的值

        language : 'zh',

        callback : function() {//加载成功后设置显示内容 
		    $("#changeEn").show();
            $("#changeZn").hide();  
            // $("#features").backgroundImage = "url('img/people/img_yingyongluoj.png')";
			 document.getElementById("features").style.backgroundImage = "url('img/people/img_yingyongluoj.png')";
			 document.getElementById("computer").src="img/people/img_diann.png";
		     $("#language_title").text('语言 ');
        	changeValue();

        }

    });

	cookie.setCookie("lang", "zn", 1);

}

function changeEn(){  //英文切换

	$.i18n.properties({

        name : 'js', //资源文件名称

        path : 'i18n/', //资源文件路径

        mode : 'map', //用Map的方式使用资源文件中的值

        language :'en',

        callback : function() {//加载成功后设置显示内容
		    $("#changeEn").hide();
            $("#changeZn").show();
			//$("#features").backgroundImage = "url('img/people/img_gith.png')";
			document.getElementById("features").style.backgroundImage = "url('img/people/img_yingyongluoj_en.png')";
			document.getElementById("computer").src="img/people/img_diann_en.png";
		    $("#language_title").text('language ');
        	changeValue();

        }

    });

	cookie.setCookie("lang", "en", 1);

}

function changeValue(){  //公共的赋值事件,需要在标签中定义一个id名(需要和properties文件中的Key相同),

	                          //和一个class属性(名字随便起，主要是为了遍历所有需要切换文字的标签)

	$('.lang').each(function(){

		var tagName=$(this).prop("tagName");

		if(tagName=="INPUT"){ //不同的标签不同的赋值方法

		  $(this).val($.i18n.prop($(this).attr("id")))

		}else{
		  $(this).html($.i18n.prop($(this).attr("id")))

		}

	})

}

