//your JS code here. If required.
const btn = document.getElementById("enterBtn");
btn.addEventListener("Click",changeName());

function changeName(){
	const pTag = document.getElementById("status");
	pTag.textContent = "Entered Metaverse";
	var h1Element = document.createElement('h1');
	h1Element.textContent = "Entered Metaverse";
	pTag.parentNode.replaceChild(h1Element, pTag);
}