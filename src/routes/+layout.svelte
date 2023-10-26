<script lang="ts">
	import { page } from "$app/stores";
	
	import Gtm from '$lib/components/utilities/GTM.svelte';
	import '../app.css';
</script>

<svelte:head>
	{#if $page.url.host.includes('beavers-agency')}
		<meta name="robots" content="noindex, nofollow">
	{/if}
</svelte:head>

{#if $page.url.host.includes('extreme.fr')}
	<Gtm gtmId="GTM-W3PHBR8" />
{/if}


<slot />