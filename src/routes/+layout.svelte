<script lang="ts">
	import Footer from '$lib/footer.svelte';
	import '../app.css';
</script>

<main
	class="bg-neutral-50 dark:bg-neutral-950 items-center font-mono flex flex-col dark:text-white select-text w-screen h-screen"
>
	<div
		class="w-full lg:w-3/4 bg-neutral-100 dark:bg-neutral-900 grid grid-cols-1 items-center p-4 drop-shadow-2xl overflow-auto min-h-screen"
	>
		<slot />
		<Footer />
	</div>
</main>
