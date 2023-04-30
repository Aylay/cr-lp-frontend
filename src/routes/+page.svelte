<script lang="ts">
	import '../app.css';
	import HpBlock1 from '$lib/components/block/HPBlock1.svelte';
	import HpBlock2 from '$lib/components/block/HPBlock2.svelte';
	import HpBlock3 from '$lib/components/block/HPBlock3.svelte';
	import HpBlock4 from '$lib/components/block/HPBlock4.svelte';
	import HpBlock5 from '$lib/components/block/HPBlock5.svelte';
	import HpBlock6 from '$lib/components/block/HPBlock6.svelte';
	import HpBlock7 from '$lib/components/block/HPBlock7.svelte';
	import HpBlock8 from '$lib/components/block/HPBlock8.svelte';
	import HpBlock9 from '$lib/components/block/HPBlock9.svelte';
	import Logo from '$lib/components/svg/Logo.svelte';

</script>

<HpBlock1 />

<HpBlock2 />

<HpBlock3 />

<HpBlock4 />

<HpBlock5 />

<HpBlock6 />

<HpBlock7 />

<HpBlock8 />

<HpBlock9 />

<div class="relative bg-crimson pt-32 lg:pt-40 pb-20 lg:pb-24 mt-48 lg:mt-64">
	<Logo newClass="max-w-[16rem] lg:max-w-[20rem] w-full h-auto absolute top-0 transform -translate-y-1/2 left-1/2 -translate-x-1/2" />
	<div class="container flex justify-center gap-16 lg:gap-32">
		<p class="text-center text-white text-[1.4rem] leading-[1.8rem] lg:text-[1.6rem] lg:leading-[2.2rem]">
			+33 (0)6 37 79 78 17<br />ocs@richard.fr
		</p>
		<p class="text-center text-white text-[1.4rem] leading-[1.8rem] lg:text-[1.6rem] lg:leading-[2.2rem]">
			106 Rue du Fossé blanc<br />92230 Gennevilliers
		</p>
	</div>
</div>

<div class="container flex justify-center py-5 gap-2 lg:gap-4 max-lg:px-8">
	<p class="text-[1.2rem] lg:text-[1.4rem] leading-[1.7rem]">
		©2023 Cafés Richard
	</p>
	<p class="text-[1.2rem] lg:text-[1.4rem] leading-[1.7rem]">|</p>
	<a href="/mentions-legales" title="Mentions légales" class="text-[1.2rem] lg:text-[1.4rem] leading-[1.7rem] hover:underline">Mentions légales</a>
	<p class="text-[1.2rem] lg:text-[1.4rem] leading-[1.7rem]">|</p>
	<a href="/mentions-legales" title="Politique RGPD" class="text-[1.2rem] lg:text-[1.4rem] leading-[1.7rem] hover:underline">Politique RGPD</a>
</div>
