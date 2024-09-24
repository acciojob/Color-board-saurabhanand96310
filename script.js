//your JS code here. If requi
const container=document.querySelector(".container");
for(let i=0;i<800;i++){
	let div=document.createElement("div")
	div.className="square"
	// div.style.backgroundColor = getRandomColor();
	div.addEventListener("mouseover" , ()=>{
		div.style.backgroundColor=getRandomColor();
		setTimeout(()=>{
			div.style.backgroundColor=""
		},1000)
	})
	container.appendChild(div);
}
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}