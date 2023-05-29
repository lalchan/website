import type { ScrollableContent } from '$lib/scrollableContent/scrollContent';

export function load(): {
	scrollContent: ScrollableContent[];
} {
	return {
		scrollContent: [
			{
				props: {
					title: 'school',
					text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, voluptatum dolorum eligendi veritatis recusandae fuga nihil in ea nostrum rerum modi perferendis quos ullam incidunt repellendus quidem molestiae, distinctio nulla.',
				},
				image: '/images/scroll/school.jpeg',
			},
			{
				props: {
					title: 'bachelor',
					text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, voluptatum dolorum eligendi veritatis recusandae fuga nihil in ea nostrum rerum modi perferendis quos ullam incidunt repellendus quidem molestiae, distinctio nulla.',
				},
				image: '/images/scroll/bachelor.jpeg',
			},
			{
				props: {
					title: 'blacktech',
					text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, voluptatum dolorum eligendi veritatis recusandae fuga nihil in ea nostrum rerum modi perferendis quos ullam incidunt repellendus quidem molestiae, distinctio nulla.',
				},
				image: '/images/scroll/blacktech.jpeg',
			},
			{
				props: {
					title: 'clinchtech',
					text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, voluptatum dolorum eligendi veritatis recusandae fuga nihil in ea nostrum rerum modi perferendis quos ullam incidunt repellendus quidem molestiae, distinctio nulla.',
				},
				image: '/images/scroll/clinchtech.jpeg',
			},
		],
	};
}
