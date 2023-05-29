<script lang="ts">
	import { onMount } from 'svelte';
	import type { ScrollableTextContent } from './scrollContent';

	export let props: ScrollableTextContent;
	export let onHide: Function;
	export let onShow: Function;
	let content: Element;
	function handleInterSection(entries: IntersectionObserverEntry[]) {
		const entry = entries[0];
		entry.isIntersecting ? onShow() : onHide();
	}
	onMount(() => {
		const observer = new IntersectionObserver(handleInterSection, {
			rootMargin: '0px',
			threshold: 0.3,
		});
		observer.observe(content);
		return () => observer.disconnect();
	});
</script>

<div bind:this={content} class="h-screen px-16 text-primary">
	<div class="text-4xl capitalize">
		{props.title}
	</div>
	<div>
		{props.text}
	</div>
</div>
