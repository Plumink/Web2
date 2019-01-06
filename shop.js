 var top1=document.getElementsByClassName("top1")[0];

		window.onscroll=function(){
			var st=document.documentElement.scrollTop;
			if(st>100){
				top1.style.position='fixed';
			}else{
				top1.style.position='static';
			}

			
		}

//放大镜
var box=document.getElementById("box");
var img1=document.getElementById("img1");
var img2=document.getElementById("img2");
var Bimg=document.getElementById("Bimg");
var slider=document.getElementById("slider");

img1.onmouseover=function(){
	slider.style.display = 'block';
	img2.style.display = 'block';
}
img1.onmouseout=function(){
	slider.style.display = 'none';
	img2.style.display = 'none';
}
img1.onmousemove=function(ev){
	var ev = ev || window.event;

			var oL = ev.clientX - box.offsetLeft - slider.offsetWidth / 2;
			var oT = ev.clientY - box.offsetTop - slider.offsetHeight / 2;
			// console.log(ev.clientX);
			console.log(ev.clientY);


			var oMaxw = img1.offsetWidth - slider.offsetWidth;
			var oMaxh = img1.offsetHeight - slider.offsetHeight;

			oL = oL > oMaxw ? oMaxw : oL < 0 ? 0 : oL;
			oT = oT > oMaxh ? oMaxh : oT < 0 ? 0 : oT;

			slider.style.left = oL+ 188 + 'px';
			slider.style.top = oT + 230 + 'px';
			

			var scale = img2.offsetWidth / slider.offsetWidth;
			Bimg.style.left = -scale * oL+ 20 + 'px'
			Bimg.style.top = -scale * oT  +'px'
}
//点击图片出现边框
var two=document.getElementById("two");
var IMG1=document.getElementById("IMG1");
var Bimg=document.getElementById("Bimg");


two.onmouseover=function(){
	two.style.border= "2px solid #ff9003";
	three.style.border= "2px solid #ffffff";
	IMG1.setAttribute("src","img/pp0.jpeg");
	Bimg.setAttribute("src","img/pp0.jpeg");

}

var three=document.getElementById("three");
three.onmouseover=function(){
	two.style.border= "2px solid #ffffff";
	three.style.border= "2px solid #ff9003";
	IMG1.setAttribute("src","img/pp1.jpeg");
	Bimg.setAttribute("src","img/pp1.jpeg");
}

//容量变换
var red=document.getElementById("onee");
var add=document.getElementById("twoo");
var num=document.getElementById("num");

red.onclick=function(){
	if(num.value>1){
		num.value--;
	}
	if(num.value==1){
		red.style.cursor="not-allowed";
	}
}
add.onclick=function(){
	if(num.value<5){
		num.value++;
	}
	if(num.value==5){
		add.style.cursor="not-allowed";
	}
	
}
//容量
var ml=document.getElementById("ml");
var mll=document.getElementById("mll");
var ml_1=document.getElementById("ml_1");
var ml_2=document.getElementById("ml_2");
var l=document.getElementById("l");

ml_1.onclick=function(){
	mll.style.border="none";
	mll.style.background="#ffffff";
	ml.style.border="1px solid red";
	ml.style.background="#ffffff url('img/duigou.png') no-repeat right bottom";
	l.innerHTML='"150ml"';
}
ml_2.onclick=function(){
	ml.style.border="none";
	ml.style.background="#ffffff";
	mll.style.border="1px solid red";
	mll.style.background="#ffffff url('img/duigou.png') no-repeat right bottom";
	l.innerHTML='"200ml"';
}

//透明
var rr=document.getElementById("rr");
var gray=document.getElementById("gray");
var continue1=document.getElementById("continue1");
var spare=document.getElementById("spare");
var X=document.getElementById('X');

continue1.onclick=function(){
	gray.style.display="none";
	spare.style.display="none";

}
rr.onclick=function(){
	gray.style.display="inline";
	spare.style.display="inline";
}
X.onclick=function(){
	gray.style.display="none";
	spare.style.display="none";
}