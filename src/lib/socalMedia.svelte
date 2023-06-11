<script lang="ts">
	import { icons, type FeatherIcon } from 'feather-icons';
	import { slide } from 'svelte/transition';
	import { onMount } from 'svelte';
	type Socials = {
		link: string;
		icon: FeatherIcon;
	};
	const socials: Socials[] = [
		{
			icon: icons.instagram,
			link: 'https://www.instagram.com/mr_mediocure/',
		},
		{
			icon: icons.twitter,
			link: 'https://twitter.com/MrMediocure',
		},
		{
			icon: icons.github,
			link: 'https://github.com/lalchan/',
		},
		{
			icon: icons.linkedin,
			link: 'https://www.linkedin.com/in/adarsh-lalchan-074a99209/',
		},
	];
	export let show: boolean = false;
	onMount(() => {
		show = true;
	});
	let duration: number = 400;
	let delay: number = 200;
</script>

<div class="flex gap-4 h-20">
	{#if show}
		{#each socials as { link, icon }, index}
			<div
				in:slide={{
					delay: 3000 + delay * index,
					duration,
					axis: 'y',
				}}
			>
				<a
					href={link}
					target="_blank"
					class="cursor-default w-fit aspect-square bg-transparent"
				>
					{@html icon.toSvg({
						class: 'p-2 hover:bg-lime-600',
						'stroke-linecap': 'square',
						'stroke-width': 1,
						width: '4rem',
						height: '4rem',
					})}
				</a>
			</div>
		{/each}
	{/if}
</div>
