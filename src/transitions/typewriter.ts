export function typewriter(node: Element, { duration = 3000 }) {
	const text = node.textContent?.trim();

	if (!text) {
		throw new Error(
			`This transition only works on elements with a text content`,
		);
	}
	return {
		duration,
		tick: (t: number) => {
			const i = Math.ceil(text.length * t);

			node.textContent =
				text.slice(0, i) + (i === text.length ? '' : '_');
		},
	};
}
