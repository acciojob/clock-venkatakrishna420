//your JS code here. If required.
function renderTimer(){
	let date=new Date();
	document.getElementById("timer").innerHTML=date.toLocaleString();
}
setIntervel(()=>{renderTimer},1000)