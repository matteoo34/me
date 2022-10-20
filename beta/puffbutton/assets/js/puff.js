import {ctx, length, length2, MIN_CLOUDS, MAX_CLOUDS, MIN_OFFSET, MAX_OFFSET} from "./main.js";

const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export default function puff(x, y) {
	canvas.style.left = `${x - length2}px`;
	canvas.style.top = `${y - length2}px`;
	ctx.resetTransform();
	ctx.clearRect(0, 0, length, length);
	ctx.translate(length2, length2);

	const clouds = rand(3, 5);
	const step = Math.PI * 2 / clouds;

	for (let i = 0; i < clouds; i++) {
		const offset = rand(MIN_OFFSET, MAX_OFFSET);

		ctx.rotate(step * i);

		ctx.beginPath();
		// ctx.moveTo(0, 0);
		// ctx.lineTo(offset / 2, offset / 2);
		ctx.arc(offset, offset, 2, 0, Math.PI * 2);
		ctx.fill();
	}
}