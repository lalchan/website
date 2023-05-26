<script lang="ts">
	import '../app.css';
	import Navbar from './navbar.svelte';

	let y: number = 0;
	let screenSize: number;
</script>

<svelte:window bind:scrollY={y} bind:outerHeight={screenSize} />

<Navbar {screenSize} {y} />
<main class="bg-tertiary justify-center min-h-screen p-4">
	<slot />
</main>

<footer class="h-96 z-50 bg-secondary">footer here</footer>
