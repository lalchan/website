<script lang="ts">
	import { sineInOut } from 'svelte/easing';
	import { slide } from 'svelte/transition';

	interface Headers {
		nav: string;
		text: string;
	}
	const headers: Headers[] = [
		{
			nav: '/',
			text: 'Home',
		},
		{
			nav: '/about',
			text: 'About',
		},
		{
			nav: '/projects',
			text: 'Projects',
		},
	];

	let animationTime = 400;
	export let screenSize: number;
	export let y: number;
	let show: boolean = false;
	$: show = y > screenSize;
</script>

{#if show}
	<nav
		class="bg-neutral-900 z-50 grid grid-cols-3 grid-rows-1 items-center text-teal-500 fixed top-0 h-16 w-full font-light drop-shadow-lg"
		transition:slide={{
			duration: animationTime,
			easing: sineInOut,
		}}
		on:mouseenter={() => (show = true)}
		on:mouseleave={() => (show = false || y > screenSize)}
	>
		{#each headers as { nav, text }}
			<a
				href={nav}
				class="cursor-default mx-auto text-4xl px-4 py-2 font-sans font-medium"
			>
				<p>
					{text}
				</p>
			</a>
		{/each}
	</nav>
{:else}
	<div
		class="h-16 w-full fixed top-0 bg-transparent z-50"
		on:mouseenter={() => (show = true)}
		on:mouseleave={() => (show = false)}
	/>
{/if}
