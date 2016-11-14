

function move(id, direction){
	var obj = document.getElementById(id);
	var sens = 1;

	if (direction == "left" || direction == "top") { sens = -1;}
	if (direction == "right") { direction = "left";}
	if (direction == "bottom") { direction = "top";}

	console.log(obj.style.left);
	var topVal = parseInt(obj.style[direction], 10);
	//alert(sens);
	obj.style[direction]= (topVal + sens*30) + "px";


}
