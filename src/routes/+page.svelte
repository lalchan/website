<script lang="ts">
	import Banner from '$lib/banner.svelte';
	import Lander from '$lib/lander.svelte';
	import { icons } from 'feather-icons';
	let contents: any[] = [
		{
			image: {
				hover: 'https://meropadhai.com/images/landing-page/meropadhai-laptop-phone.png',
				main: 'https://meropadhai.com/images/mero-padhai-main-logo.svg',
			},
			text: {
				title: 'MeroPadhai',
			},
			link: 'https://meropadhai.com/',
		},
		{
			image: {
				hover: 'https://www.restrox.co/images/hero-img.svg',
				main: 'https://www.restrox.co/logo/RestroXLogo.png',
			},
			text: {
				title: 'RestroX',
			},
			link: 'https://www.restrox.co/',
		},
		// { image: 'image3', text: 'text3' },
	];
</script>

<Lander />

{#each contents as content}
	<Banner image={content.image}>
		<h1 class="text-2xl">
			{content.text.title}
		</h1>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. A expedita
			molestiae, libero cum dignissimos natus nisi fuga sequi enim
			aspernatur minima error illum harum eius maiores recusandae.
			Assumenda, soluta iusto?
		</p>
		<a
			href={content.link}
			class="bg-transparent w-fit h-fit block absolute right-2 bottom-2 hover:bg-lime-600"
			>{@html icons['external-link'].toSvg({
				width: '1.5rem',
				height: '1.5rem',
			})}</a
		>
	</Banner>
{/each}
