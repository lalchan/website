export function typewriter(node: Element, { speed = 1 }) {
	const text = node.textContent?.trim();

	if (!text) {
		throw new Error(
			`This transition only works on elements with a text content`,
		);
	}
	const duration = text.length / (speed * 0.005);

	return {
		duration,
		tick: (t: number) => {
			const i = Math.ceil(text.length * t);
			node.textContent = text.slice(0, i);
		},
	};
}
