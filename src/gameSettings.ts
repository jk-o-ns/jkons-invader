import { getCanvas, getContext } from "./gameHelper";

const canvas: HTMLCanvasElement = getCanvas();
let zoom: number = 1;
let size: number = 0;

export function setCanvasSize() {
	resizeCanvas();

	// Webkit/Blink will fire this on load, but Gecko doesn't.
	window.addEventListener("resize", () => {
		resizeCanvas();
	});
}

function resizeCanvas() {
	// resize canvas if the window size reached a specific size
	if (innerHeight <= 450) {
		zoom = 1;
	} else if (innerHeight <= 690 || innerWidth <= 675) {
		zoom = 2;
	} else if (innerHeight <= 915 || innerWidth <= 900) {
		zoom = 3;
	} else {
		zoom = 4;
	}

	size = 225 * zoom;
	// Set canvas height and with in JS, because with and height set in CSS distort drawn shapes
	canvas.width = size;
	canvas.height = size;
	getContext().imageSmoothingEnabled = false;
}
