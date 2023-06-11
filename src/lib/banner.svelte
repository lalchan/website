<script lang="ts">
	import { onMount } from 'svelte';
	import { fade, slide } from 'svelte/transition';

	let self: HTMLElement;
	export let image: any;
	let isHovering: boolean = false;
	let hover: HTMLElement;
	let animate: boolean = false;
	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					animate = true;
				}
			},
			{
				threshold: 0.5,
			},
		);
		observer.observe(self);
		return observer.disconnect;
	});
</script>

<div
	bind:this={self}
	class="flex flex-col sm:flex-row-reverse aspect-[2/3] sm:aspect-[32/9] bg-neutral-200 dark:bg-neutral-800 relative rounded-3xl p-4 hover:scale-[1.01] hover:bg-neutral-300 hover:dark:bg-neutral-700"
	on:mouseenter={() => (isHovering = true)}
	on:mouseleave={() => (isHovering = false)}
	on:mousemove={(e) => {
		if (!isHovering) {
			return;
		}
		hover.style.top = `${e.y - self.getBoundingClientRect().y}px`;
		hover.style.left = `${e.x - self.getBoundingClientRect().x}px`;
	}}
>
	{#if animate}
		<div
			class="w-full h-fit text-center sm:w-3/5 sm:h-full flex items-center justify-center"
			in:slide={{ duration: 3000, delay: 750 }}
		>
			<img src={image.main} alt="sda" class="w-full" />
		</div>
		<div
			class="w-full h-fit text-center sm:w-2/5 sm:h-full sm:text-left overflow-y-clip flex flex-col justify-center"
			in:fade={{ duration: 1500 }}
		>
			<slot />
		</div>
	{/if}
	{#if isHovering}
		<img
			class={`w-48 absolute`}
			bind:this={hover}
			src={image.hover}
			alt="hover"
		/>
	{/if}
</div>
<div class="w-full h-4" />
