<script lang="ts">
	import Typewriter from '$lib/typewriter.svelte';
	import ScrollableContent from '$lib/scrollContent.svelte';
	export let data;
</script>

<div
	class="px-4 flex flex-row items-center rounded-3xl bg-fixed bg-[url('/images/main_bg.jpeg')] bg-cover h-[calc(100vh-2rem)]"
>
	<div
		class="h-full w-1/2 text-9xl text-left flex flex-col text-primary justify-center"
	>
		<Typewriter speed={1} content={'Hello World!'} bg={'bg-transparent'} />
	</div>
	<div class="flex align-center justify-end">
		<p class="h-full text-primary w-1/2 text-right">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
			eum minus eius architecto totam odio error. Vero sed culpa
			voluptatem minus, nobis vitae? Molestias at, sed vitae nihil quis
			sapiente.
		</p>
	</div>
</div>

<ScrollableContent content={data.scrollContent} />

<style>
</style>
