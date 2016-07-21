var banner = document.getElementById('banner');
var list = document.getElementById('list');
var button = document.getElementById('button').getElementsByTagName('span');
var prve = document.getElementById('prve');
var next = document.getElementById('next');
var index = 1;
var timer;
var interval = 3000;
function showButton(){
	for(var i=0;i<button.length;i++){
		if (button[i].className == "on") {
			button[i].className ="";
			break;
		}
	}
	button[index-1].className = "on";
}
function animate(offset){
	var newLeft = parseInt(list.style.left)+offset;
	list.style.left = newLeft +"px";
	if (newLeft>-1200) {
		list.style.left=-6025+"px";
	}else if(newLeft<-6025){
		list.style.left = -1205 + "px";
	}
}
function play() {
    timer = setTimeout(function () {
        next.onclick();
        play();
    }, interval);
}
function stop() {
    clearTimeout(timer);
}
next.onclick = function(){
	if (index == 5) {
		index=1;
	}else{
		index+=1;
	}
	showButton()
	animate(-1205);}
prve.onclick = function(){
	if (index == 1) {
		index=5;
	}else{
		index-=1;
	}
	showButton()
	animate(1205);
}
for(var i=0;i<button.length;i++){
	button[i].onclick = function(){
		if (this.className == "on") {
			return;
		}
		var myIndex = parseInt(this.getAttribute("index"));
		var offset = -1205 * (myIndex - index);
		animate(offset);
		index = myIndex;
		showButton();
	}
}
banner.onmouseover = stop;
banner.onmouseout = play;
play();
