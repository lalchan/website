<script lang="ts">
	import Typewriter from '../lib/typewriter.svelte';
	import { page } from '$app/stores';
</script>

<div class="text-6xl h-screen w-full flex flex-col items-center text-primary">
	<div class="w-[40%] h-[60%] flex items-center justify-center">
		<div class="flex flex-wrap items-center justify-center">
			<Typewriter
				speed={2}
				content={"I'm sorry Dave, I'm afraid I can't do that."}
			/>
		</div>
	</div>
	<p>Error</p>
	<p class="text-7xl">{$page.error?.message}</p>
</div>
