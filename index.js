
function getCalculatorElement(){
	const div = createElement("div", "calculator","")
	const firstInput = createElement("input", "number1", "")
	const secondInput = createElement("input", "number2", "")
	const firstButton = createElement("button", "equals", "=")
	const span = createElement("span", "result", "")
	div.appendChild(firstInput)
	div.appendChild(secondInput)
	div.appendChild(firstButton)
	div.appendChild(span)
	return div;
}

function createElement(type, in_id, text){
	const result = document.createElement(type)
	result.id = in_id
	result.textContent = text
	return result
}



document.getElementById("app").appendChild(getCalculatorElement())

function calculatorEquals() {
	let a=getValue("number1")
	let b=getValue("number2")
	var numb = a/(b*b);
	numb = numb.toFixed(2);
	let result=numb;
	setResult(result)
}
document.getElementById("equals").onclick=calculatorEquals



function setResult(r){
	document.getElementById("result").innerText=r
}
function getValue(id){
	let v=document.getElementById(id).value
	return Number(v)
}




/*---------button---------*/

//Get the button
var mybutton = document.getElementById("myBtn");

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}




