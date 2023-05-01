let result = document.getElementById("result");
let expression = "";

function addNumber(num) {
	expression += num;
	result.value = expression;
}

function addOperator(operator) {
	expression += operator;
	result.value = expression;
}

function addDecimal() {
	expression += ".";
	result.value = expression;
}

function clearResult() {
	expression = "";
	result.value = "";
}

function calculate() {
	try {
		let answer = eval(expression);
		expression = answer.toString();
		result.value = expression;
	} catch (error) {
		alert("Invalid expression");
	}
}


