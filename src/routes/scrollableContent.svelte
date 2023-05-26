<script lang="ts">
	import { onMount } from 'svelte';
	import { ContentHandler } from './scrollContent';
	const contentHandler = new ContentHandler([
		{
			value: 'lorem',
			image: 'image of school',
		},
		{
			value: 'bachelor',
			image: 'image of bachelor',
		},
		{
			value: 'blacktech',
			image: 'image of blacktech',
		},
		{
			value: 'clinchtech',
			image: 'image of clinchtech',
		},
	]);
	let imageContent: any = contentHandler.getImage();
	let scrollableContent = contentHandler.getContents();
	let screenBinds = new Array(scrollableContent.length);

	function handleIntersection(entries: any[]) {
		const index = Number(entries[0].target.getAttribute('data-index'));
		const image = contentHandler.setVisible(
			index,
			entries[0].isIntersecting,
		);
		imageContent = image || imageContent;
	}
	onMount(() => {
		const observer = new IntersectionObserver(handleIntersection, {
			rootMargin: '0px',
			threshold: 0.1,
		});
		screenBinds.forEach((screenBind) => observer.observe(screenBind));
		return () => observer.disconnect();
	});
</script>

<div class="w-full relative flex py-4 bg-tertiary rounded-3xl text-primary">
	<div class="w-1/2">
		{#each scrollableContent as { index, value } (index)}
			<div class="flex" bind:this={screenBinds[index]} data-index={index}>
				<div
					class="h-[100vh] w-full bg-tertiary flex justify-center items-center"
				>
					<p>{value}</p>
				</div>
			</div>
			<hr />
		{/each}
	</div>
	<div
		class={`w-1/2 bg-base flex justify-center items-center sticky right-0 top-20 max-h-[calc(100vh-6rem)] rounded-3xl my-4 `}
	>
		<p>{imageContent}</p>
	</div>
</div>
