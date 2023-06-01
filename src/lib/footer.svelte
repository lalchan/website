<script lang="ts">
	import { onMount } from 'svelte';
	import { cubicInOut } from 'svelte/easing';
	import { slide } from 'svelte/transition';
	import Socialmedia from './socialMedia.svelte';
	let showSocials: boolean = false;
	const animationTime: number = 200;
	let content: Element;
	function handleInterSection(entries: IntersectionObserverEntry[]) {
		showSocials = entries[0].isIntersecting;
	}
	onMount(() => {
		const observer = new IntersectionObserver(handleInterSection, {
			rootMargin: '0px',
			threshold: 0.1,
		});
		observer.observe(content);
		return () => observer.disconnect();
	});
</script>

<div
	class="h-[calc(100vh-4rem)] text-primary w-full p-4 z-50 bg-base bg-fixed bg-[url('/images/main_bg.jpeg')] bg-cover"
	bind:this={content}
>
	<div>footer content here</div>
	{#if showSocials}
		<div
			class="fixed right-0 bottom-0 bg-secondary text-tertiary h-fit w-fit p-4 rounded-3xl m-4"
			transition:slide={{
				duration: animationTime,
				easing: cubicInOut,
			}}
		>
			<Socialmedia />
		</div>
	{/if}
</div>
