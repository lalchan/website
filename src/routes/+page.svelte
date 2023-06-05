<script lang="ts">
	import Typewriter from '$lib/typewriter.svelte';
	import ScrollableContent from '$lib/scrollContent.svelte';
	export let data;
</script>

<div
	class="px-4 flex flex-row items-center rounded-3xl bg-fixed bg-[url('/images/main_bg.jpeg')] bg-cover h-[calc(100vh-2rem)]"
>
	<div
		class="h-full w-1/2 text-9xl text-left flex flex-col text-teal-500 justify-center"
	>
		<Typewriter speed={1} content={'Hello World!'} bg={'bg-transparent'} />
	</div>
	<div class="flex align-center justify-end">
		<p class="h-full text-teal-500 w-1/2 text-right">
			I am <span class="font-bold">Adarsha Lalchan</span>, a NodeJs
			developer who specializes in backend technology. I currently am
			working in Clinchtech.
		</p>
	</div>
</div>

<ScrollableContent content={data.scrollContent} />

<style>
</style>
