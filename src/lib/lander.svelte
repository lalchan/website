<script lang="ts">
	import { onMount } from 'svelte';
	import { typewriter } from '../transitions/typewriter';
	import { draw, slide } from 'svelte/transition';
	import HoverText from './hoverText.svelte';
	import SocalMedia from './socalMedia.svelte';
	import { logo } from './svgs';

	let start: boolean = false;
	const duration = {
		short: 2000,
		long: 3000,
	};

	onMount(() => {
		start = true;

		return () => (start = false);
	});
</script>

<div class="w-full min-h-screen flex flex-col items-center text-center">
	{#if start}
		<div class="w-full flex items-center justify-center h-96">
			<svg
				width={logo.width}
				height={logo.height}
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					class="stroke-black dark:stroke-white"
					in:draw={{
						duration: duration.short,
						delay: 0,
					}}
					d={logo.path.L}
					fill="transparent"
					stroke-width="1.5"
				/>
				<path
					class="stroke-black dark:stroke-white"
					in:draw={{
						duration: duration.short,
						delay: 500,
					}}
					d={logo.path.c}
					fill="transparent"
					stroke-width="1.5"
				/>
				<path
					class="stroke-black dark:stroke-white"
					in:draw={{
						duration: duration.short,
						delay: 1000,
					}}
					d={logo.path.n}
					fill="transparent"
					stroke-width="1.5"
				/>
			</svg>
		</div>
		<p
			class="text-3xl font-extrabold"
			in:typewriter={{ duration: duration.long }}
		>
			Hello World, I am Adarsha Lalchan
		</p>
		<span class="w-full h-8" />
		<div
			in:slide={{
				delay: duration.long,
				duration: duration.short,
			}}
			class="max-w-3xl"
		>
			<p>
				I am a software developer who specializes in backend and am
				proficient in NodeJS, working at
				<HoverText content={'2022-present'}>
					<a href="https://clinchtech.net/" target="_blank"
						>Clinchtech</a
					></HoverText
				>. I studied software engineering in
				<HoverText content={'2016-2021'}>
					<a href="https://gces.edu.np/" target="_blank">GCES</a
					></HoverText
				>.
			</p>
			<div class="w-full h-8" />
			<p class="w-full">
				I worked at
				<HoverText content={'2021-2022'}>
					<a href="https://www.blacktech.com.np/" target="_blank"
						>Blacktech</a
					></HoverText
				>,
				<span class="line-through">Aatreyas</span>
			</p>
		</div>
		<div
			class="w-[calc(100%-2rem)] absolute bottom-0 left-4 flex flex-col items-center gap-2"
		>
			<SocalMedia />
			<div class="h-2" />
			<div class="absolute right-0 bottom-2">Pokhara, NP🇳🇵</div>
			<hr class="w-full" />
		</div>
	{/if}
</div>
