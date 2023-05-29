<script lang="ts">
	import Typewriter from '../lib/typewriter.svelte';
	import { page } from '$app/stores';
</script>

<div class="text-6xl h-screen w-full flex flex-col items-center">
	<div class="w-full h-[60%]">
		<Typewriter
			speed={2}
			content={"I'm sorry Dave, I'm afraid I can't do that."}
		/>
	</div>
	<p class="text-primary">Error</p>
	<p class="text-7xl text-primary">{$page.error?.message}</p>
</div>
