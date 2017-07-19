function getByClass(clsname,parent){
  var par,arr,eles=[];
  if(parent){
    par=document.getElementById(parent);
  }else{
    par=document;
  }
  arr=par.getElementsByTagName('*');
  //console.log(arr);
  for(var i=0;i<arr.length;i++){
    if(arr[i].className==clsname){
      eles.push(arr[i]);
    }
  } 
  //console.log(eles);
  return eles;
}
window.onload=drag;
function drag(){
  //获取鼠标被按住就能被拖动的区域：标题
  var title= getByClass("login_logo_webqq","loginPanel")[0];
  //console.log(title);
  //给标题区域加上按下鼠标事件
  title.onmousedown=fdown;

}
//fdown的event是鼠标按下的事件
function fdown(event){
  //希望面板跟着光标走，下面需要获得面板
  var panel=document.getElementById("loginPanel");
  //console.log(panel);
  //光标按下时，光标和面板的相对距离
  event = event || window.event;
  var reX=event.clientX-panel.offsetLeft;
  var reY=event.clientY-panel.offsetTop;
  //console.log(reX);
  //当按下鼠标就应该加上在元素内部移动的事件了也就是move,因为是在整个页面移动所以是document
  //这里的event是面板移动时候的事件
  //获得left和top的最大值
  var MX=(document.documentElement.clientWidth || document.body.clientWidth)-panel.offsetWidth;
  var MY=(document.documentElement.clientHeight || document.body.clientHeight)-panel.offsetHeight;
  console.log(MX);
  document.onmousemove=function(event){
     event = event || window.event;
     var X=event.clientX-reX;
     var Y=event.clientY-reY;
     if(X<0){
      X=0;
     }else if(X>MX){
       X=MX;
     }
     if(Y<0){
      Y=0;
     }else if(Y>MY){
       Y=MY;
     }
     panel.style.left=X +'px';
     panel.style.top=Y +'px';
  }  
   // 释放鼠标
  document.onmouseup=function(){
    document.onmousemove=null;
  }
  
}