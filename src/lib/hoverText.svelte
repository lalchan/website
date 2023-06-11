<script lang="ts">
	export let content: string = 'show content';
</script>

<span class="group relative">
	<slot /><span
		class="hidden group-hover:block whitespace-nowrap absolute left-0 w-fit over"
		>{content}</span
	>
</span>
