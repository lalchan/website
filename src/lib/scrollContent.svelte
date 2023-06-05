<script lang="ts">
	import Content from './scrollableContent/content.svelte';
	import Image from './scrollableContent/image.svelte';
	import {
		ContentHandler,
		type ScrollableContent,
		type ScrollableImage,
	} from './scrollableContent/scrollContent';
	export let content: ScrollableContent[];
	let handler = new ContentHandler(content);
	let contents = handler.getContents();
	let imageContent: ScrollableImage = handler.getImage();
</script>

<div class="flex w-full pt-4">
	<div class="w-1/2 gap-4 flex flex-col">
		{#each contents as { id, props, index } (index)}
			<Content
				{props}
				{id}
				onHide={() => {
					const _image = handler.setVisible(index, false);
					if (_image) {
						imageContent = _image;
					}
				}}
				onShow={() => {
					const _image = handler.setVisible(index, true);
					if (_image) {
						imageContent = _image;
					}
				}}
			/>
		{/each}
	</div>
	<div
		class={`w-1/2 bg-neutral-900 flex justify-center items-center sticky right-0 top-20 max-h-[calc(100vh-6rem)] rounded-3xl`}
	>
		<Image image={imageContent} />
	</div>
</div>
