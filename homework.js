var top1=document.getElementsByClassName("top1")[0];
		window.onscroll=function(){
			var st=document.documentElement.scrollTop;
			if(st>100){
				top1.style.position='fixed';
			}else{
				top1.style.position='static';
			}
		}

//下拉框文字变化
var select=document.getElementById('select');
var rmb=document.getElementById('rmb');
select.onchange=function(){
	rmb.innerHTML="￥"+select.value;
}

//轮播图
var middle2=document.getElementById('middle2');
var slider=document.getElementById('slider');
var left=document.getElementById("left");
var right=document.getElementById("right");
var oNavlist = document.getElementById('nav').children;
var index = 1; //打开页面生效的图片的下标为1
var timer;
var isMoving = false;



middle2.onmouseover = function(){
	left.style.opacity="0.6";
	right.style.opacity="0.6";
	clearInterval(timer); //图片停止滚动
}
middle2.onmouseout=function(){
	left.style.opacity="0";
	right.style.opacity="0";
	timer = setInterval(next, 3000); //图片开始接着滚动
}
right.onclick = next;
left.onclick = prev;
function next() {
	if (isMoving) {
		return;
	}
	isMoving = true;
	index++;
	navmove();
	animate(slider, {
		left: -804 * index
	}, function () {
		if (index == 7) {
			slider.style.left = '-804px';
			index = 1;
		}
		isMoving = false;
	});
}

function prev() {
	if (isMoving) {
		return;
	}
	isMoving = true;
	index--;
	navmove();
	animate(slider, {
		left: -804  * index
	}, function () {
		if (index == 0) {
			slider.style.left = '-424px';
			index = 6;
		}
		isMoving = false;
	});
}
for (var i = 0; i < oNavlist.length; i++) {
	oNavlist[i].index = i;
	oNavlist[i].onclick = function () {
		index = this.index + 1;
		navmove();
		animate(slider, {
			left: -804  * index
		});
	}

}
//图片切换时按钮样式跟着切换
function navmove() {
	for (var i = 0; i < oNavlist.length; i++) {
		oNavlist[i].className = "";
	}
	if (index > 6) {
		oNavlist[0].className = "active";
	} else if (index <= 0) {
		oNavlist[5].className = "active";
	} else {
		oNavlist[index - 1].className = "active";
	}
}
//页面打开时自动滚动切换
timer = setInterval(next, 3000);


function getStyle(obj, attr) { //返回值带有单位px
  	if (obj.currentStyle) {
  		return obj.currentStyle[attr];
  	} else {
  		return getComputedStyle(obj, null)[attr];
  	}
}



function animate(obj, json, callback) {
  	clearInterval(obj.timer);
  	obj.timer = setInterval(function () {
  		var flag = true;
  		for (var attr in json) {
  			(function (attr) {
  				if (attr == "opacity") {
  					var now = parseInt(getStyle(obj, attr) * 100);
  					var dest = json[attr] * 100;
  				} else {
  					var now = parseInt(getStyle(obj, attr));
  					var dest = json[attr];
  				}
  				var speed = (dest - now) / 6;
  				speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
  				if (now != dest) {
  					flag = false;
  					if (attr == "opacity") {
  						obj.style[attr] = (now + speed) / 100;
  					} else {
  						obj.style[attr] = now + speed + "px";
  					}
  				}
  			})(attr);
  		}
  		if (flag) {
  			clearInterval(obj.timer);
  			callback && callback(); //如果回调函数存在，就调用回调函数
  		}
  	}, 30);
  }




//滚动
window.onload = roll(50);

function roll(t) {
    var pub1 = document.getElementById("pub1");
    var pub2 = document.getElementById("pub2");
    var bigcelan = document.getElementById("bigcelan");
    pub2.innerHTML = pub1.innerHTML;
    bigcelan.scrollTop = 50;
    var timer = setInterval(rollStart, t);
    bigcelan.onmouseover = function () {
        clearInterval(timer)
    }
    bigcelan.onmouseout = function () {
        timer = setInterval(rollStart, t);
        }
    }

function rollStart() {
    if (bigcelan.scrollTop >= pub1.scrollHeight) {
        bigcelan.scrollTop = 0;
    } else {
        bigcelan.scrollTop++;
    }
}

 //侧边栏
 var bar1=document.getElementById("bar1");
 var youhui=document.getElementById("youhui");
 var app=document.getElementById("app");
 var shop=document.getElementById("shop");
 var aerwei=document.getElementById("aerwei")
 var serwei=document.getElementById("serwei");

 bar1.onmouseover=function(){
 	bar1.style.left=-75+"px";
 }
 bar1.onmouseout=function(){
 	bar1.style.left=0+"px";
 }

 app.onmouseover=function(){

 	app.style.left=-75+"px";
 	aerwei.setAttribute("src","img/erwei.png");
 	serwei.style.display="none";
 	aerwei.style.display="";


 }
 app.onmouseout=function(){
 	app.style.left=0+"px";
 	serwei.style.display="";
 	aerwei.style.display="none";
 }

 youhui.onmouseover=function(){
 	youhui.style.left=-75+"px";
 }
 youhui.onmouseout=function(){
 	youhui.style.left=0+"px";
 }

 shop.onmouseover=function(){
 	shop.style.left=-75+"px";
 }
 shop.onmouseout=function(){
 	shop.style.left=0+"px";
 }
 