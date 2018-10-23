const _ = require("lodash");

function component() {
	let element = document.createElement('div');
	element.innerHTML = _.join(['Hebbo', 'there!'], ' ');
	// element.innerHTML = "<strong> Hi there! </strong>";
	return element;
}

document.body.appendChild(component());
