# KnobControl
A simple rotating dialKnobControl written in ES6.

Constructor:
Note - All values can be omitted and the dial will use it's default values.

minRotate. The minimum the dial can rotate to. Default is 0.1.
maxRotate. The maximum the dial can rotate to. Default is 0.9. 
divisions. The amount of steps within the given rotation. Use this to create clamping. Default is 0 (no clamping, free rotation).
minRange. The minimum value to return when the knob is on minRotate. Default is 0.
maxRange. The maximum value to return when the knob is on maxRoate. Default is 1.
defaultValue. The defaultValue to set the knob to. Default is 0.1 (minimum value and rotation).

To get the scaledValue and NOT the rotation value, use scaledValue.

Example:

	this.knobControl = new KnobControl(0.1, 0.9, 0, 0, 1, 0.1);

	const knobContainer = document.createElement("div");
	knobContainer.className = "knobControlContainer";
	knobContainer.appendChild(this.knobControl.createControl());

	document.body.appendChild(knobContainer);
	this.knobControl.dial.onchange = (e) => {
		console.log(this.knobControl.scaledValue);
	}