import puff from "./puff.js";

export const
	length = 144,
	length2 = 144 * .5,
	MIN_CLOUDS = 3,
	MAX_CLOUDS = 8,
	MIN_OFFSET = 10,
	MAX_OFFSET = 20,
	ctx = canvas.getContext("2d");

canvas.width = canvas.height = length;

button.addEventListener("click", e => {
	const {clientX: x, clientY: y} = e;

	puff(x, y);
});