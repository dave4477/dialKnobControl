import KnobControl from './KnobControl.js';

export default class View {
	constructor() {
		this.knobControl = new KnobControl(0.1, 0.9, 0, 0, 1);
		
		const knobContainer = document.createElement("div");
		knobContainer.className = "knobControlContainer";
		knobContainer.appendChild(this.knobControl.createControl());
		
		document.body.appendChild(knobContainer);
		this.knobControl.dial.onchange = (e) => {
			console.log(this.knobControl.scaledValue);
		}
	}
}