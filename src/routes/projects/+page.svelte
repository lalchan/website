<script lang="ts">
	import axios from 'axios';
	import { blur } from 'svelte/transition';
	const repos = axios.get('https://api.github.com/users/lalchan/repos');
</script>

<h3>My Repositories</h3>
<br />
{#await repos}
	<h1>Loading</h1>
{:then data}
	{#each data.data as repo (repo.id)}
		<div class="flex flex-row" transition:blur|local={{ duration: 200 }}>
			<h3 class="uppercase basis-7/8">
				{repo.name}
			</h3>
			<a href={repo.html_url} class="basis-1/8"> Link </a>
		</div>
	{/each}
{/await}
