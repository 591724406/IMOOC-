window.onload = function(){
	var title = document.getElementById('tab').getElementsByTagName('section');
	var divs = $(".tab-body");
	if (title.length!=divs.length){
		return;
	}
	else{
		for(i=0;i<title.length;i++){
			title[i].id = i;
			title[i].onmouseover = function(){
				divs[this.id].style.display="block";
			}
			title[i].onmouseout = function(){
				divs[this.id].style.display="none";
			}
		}
	}
}
