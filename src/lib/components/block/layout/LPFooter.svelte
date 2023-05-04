<script lang="ts">
	import Logo from '$lib/components/svg/Logo.svelte';
</script>

<div class="relative mt-48 bg-crimson pb-20 pt-32 lg:mt-64 lg:pb-24 lg:pt-40">
	<Logo
		newClass="max-w-[16rem] lg:max-w-[20rem] w-full h-auto absolute top-0 transform -translate-y-1/2 left-1/2 -translate-x-1/2"
	/>
	<div class="container flex justify-center gap-16 lg:gap-32">
		<p
			class="text-center text-[1.4rem] leading-[1.8rem] text-white lg:text-[1.6rem] lg:leading-[2.2rem]"
		>
			+33 (0)6 37 79 78 17<br />ocs@richard.fr
		</p>
		<p
			class="text-center text-[1.4rem] leading-[1.8rem] text-white lg:text-[1.6rem] lg:leading-[2.2rem]"
		>
			106 Rue du Fossé blanc<br />92230 Gennevilliers
		</p>
	</div>
</div>

<div class="container flex justify-center gap-2 py-5 max-lg:px-8 lg:gap-4">
	<p class="text-[1.2rem] leading-[1.7rem] lg:text-[1.4rem]">©2023 Cafés Richard</p>
	<p class="text-[1.2rem] leading-[1.7rem] lg:text-[1.4rem]">|</p>
	<a
		href="/mentions-legales"
		title="Mentions légales"
		class="text-[1.2rem] leading-[1.7rem] hover:underline lg:text-[1.4rem]"
		>Mentions légales & Politique RGPD</a
	>
</div>
