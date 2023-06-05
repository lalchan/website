<script lang="ts">
	import { onMount } from 'svelte';
	import type { ScrollableTextContent } from './scrollContent';

	export let props: ScrollableTextContent;
	export let id: string;
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

<div
	bind:this={content}
	class="h-screen px-16 text-teal-500 scroll-mt-[6rem] bg-neutral-900 mr-4 rounded-3xl py-4"
	{id}
>
	<div class="text-4xl capitalize text-center w-full my-12">
		{props.title}
	</div>
	<div>
		{props.text}
	</div>
</div>
