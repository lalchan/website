<script lang="ts">
	import { icons, type FeatherIcon } from 'feather-icons';
	type Socials = {
		name: string;
		link: string;
		icon: FeatherIcon;
	};
	const socials: Socials[] = [
		{
			name: 'Instagram',
			icon: icons.instagram,
			link: 'https://www.instagram.com/mr_mediocure/',
		},
		{
			name: 'Twitter',
			icon: icons.twitter,
			link: 'https://twitter.com/MrMediocure',
		},
		{
			name: 'Github',
			icon: icons.github,
			link: 'https://github.com/lalchan/',
		},
		{
			name: 'LinkedIn',
			icon: icons.linkedin,
			link: 'https://www.linkedin.com/in/adarsh-lalchan-074a99209/',
		},
	];
</script>

<div class="flex gap-4 capitalize">
	{#each socials as { name, link, icon }}
		<a
			href={link}
			target="_blank"
			class="cursor-default w-12 aspect-square"
		>
			{@html icon.toSvg({
				class: 'stroke-tertiary p-2 rounded-2xl bg-transparent hover:bg-tertiary hover:stroke-secondary',
				'stroke-linecap': 'round',
				width: '100%',
				height: '100%',
			})}
		</a>
	{/each}
</div>
