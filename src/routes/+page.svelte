<script lang="ts">
	import Typewriter from '../components/typewriter.svelte';
	import ScrollableContent from './scrollableContent.svelte';
</script>

<div
	class="main-head flex flex-col items-center rounded-3xl bg-fixed bg-[url('images/main_bg.jpeg')] h-[calc(100vh-2rem)]"
>
	<div class="h-[60%] text-9xl">
		<Typewriter speed={1} content={'Hello World'} />
	</div>
	<p class="text-primary w-1/2 text-center">
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt eum
		minus eius architecto totam odio error. Vero sed culpa voluptatem minus,
		nobis vitae? Molestias at, sed vitae nihil quis sapiente.
	</p>
</div>

<ScrollableContent />

<style>
</style>
