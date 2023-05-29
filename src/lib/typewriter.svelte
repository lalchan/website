<script lang="ts">
	import { typewriter } from '../transitions/typewriter';

	export let speed: number = 1;
	export let content: string = '';
	export let bg: string = 'bg-base';

	let words = content.split(' ');
	let _class: string = `${bg} w-fit px-5 py-3 rounded-lg mx-2 my-1 h-fit`;
	let showCount = 0;

	function incrementShow() {
		showCount += 1;
	}

	$: _class = `${bg} w-fit px-5 py-3 rounded-lg mx-2 my-1 h-fit`;
	$: setTimeout(incrementShow, 1000);
</script>

<!-- 
<div
	class="w-full max-w-[50vw] text-primary flex flex-wrap justify-center items-center p-4"
> -->
{#each words.slice(0, showCount) as word}
	<p class={_class} in:typewriter={{ speed }} on:introend={incrementShow}>
		{word}
	</p>
{/each}
<!-- </div> -->
