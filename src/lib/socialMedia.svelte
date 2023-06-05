<script lang="ts">
	import { icons, type FeatherIcon } from 'feather-icons';
	type Socials = {
		link: string;
		name: FeatherIcon;
	};
	const socials: Socials[] = [
		{
			name: icons.instagram,
			link: 'https://www.instagram.com/mr_mediocure/',
		},
		{
			name: icons.twitter,
			link: 'https://twitter.com/MrMediocure',
		},
		{
			name: icons.github,
			link: 'https://github.com/lalchan/',
		},
		{
			name: icons.linkedin,
			link: 'https://www.linkedin.com/in/adarsh-lalchan-074a99209/',
		},
	];
</script>

<div class="flex gap-4 capitalize">
	{#each socials as { link, name }}
		<a
			href={link}
			target="_blank"
			class="cursor-default w-12 aspect-square"
		>
			{@html name.toSvg({
				class: 'm-1 p-1 rounded-2xl hover:bg-neutral-600',
				'stroke-linecap': 'round',
				width: '100%',
				height: '100%',
				stroke: '#14b8a6',
			})}
		</a>
	{/each}
</div>
