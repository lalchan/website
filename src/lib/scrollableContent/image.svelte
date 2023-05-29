<script lang="ts">
	import { blur, crossfade, fade, slide } from 'svelte/transition';
	import type { ScrollableImage } from './scrollContent';
	import { onMount } from 'svelte';
	import { cubicInOut } from 'svelte/easing';

	export let image: ScrollableImage;
	let showPhoto = true;
	$: handleImageChange(image);
	const animationTime = 400;

	function handleImageChange(photo: ScrollableImage) {
		showPhoto = false;
	}
	onMount(() => {
		showPhoto = true;
	});
</script>

<div class="w-full h-full flex justify-center items-center p-2">
	{#if showPhoto}
		<div
			class="w-full h-full"
			transition:blur={{
				duration: animationTime,
				easing: cubicInOut,
			}}
			on:outroend={() => {
				showPhoto = true;
			}}
		>
			<img
				src={image}
				alt="scroll"
				class="w-auto h-full object-cover rounded-2xl"
			/>
		</div>
	{/if}
</div>
