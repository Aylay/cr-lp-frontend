<script lang="ts">
	import Logo from '$lib/components/svg/Logo.svelte';
</script>

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
	<a href="/mentions-legales" title="Mentions légales" class="text-[1.2rem] lg:text-[1.4rem] leading-[1.7rem] hover:underline">Mentions légales & Politique RGPD</a>
</div>