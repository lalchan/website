<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/navbar.svelte';
	import Footer from '$lib/footer.svelte';

	let y: number = 0;
	let screenSize: number;
</script>

<svelte:window bind:scrollY={y} bind:outerHeight={screenSize} />

<Navbar {screenSize} {y} />
<main class="bg-black justify-center min-h-screen p-4 drop-shadow-lg">
	<slot />
</main>

<footer>
	<Footer />
</footer>
