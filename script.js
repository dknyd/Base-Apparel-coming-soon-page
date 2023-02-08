// function activeState() {
// 	const emailContainer = document.getElementById("icon");
// 	const newDiv = document.createElement("IMG");
// 	newDiv.src = "images/icon-error.svg";
// 	emailContainer.appendChild(newDiv);
// }

function activeState(){
	if (inputContainer.children.length <4){
		const inputContainer = document.getElementById("inputContainer");
	const newDiv = document.createElement("IMG");
	newDiv.src = "images/icon-error.svg";
	inputContainer.appendChild(newDiv);
	}
}
