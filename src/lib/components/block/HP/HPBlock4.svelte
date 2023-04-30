<script lang="ts">
	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, Options } from 'svelte-inview';
	import Cta from '$lib/components/common/CTA.svelte';

	let isInView: boolean;
	const options: Options = {
		unobserveOnEnter: true,
		rootMargin: '-200px'
	};

	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
		isInView = detail.inView;
	};
</script>

<div class="container py-20 lg:py-32" use:inview={options} on:inview_change={handleChange}>
	<h3
		class="text-center text-[2.8rem] font-bold leading-[3.2rem] text-crimson max-lg:px-8 lg:text-[3.8rem] lg:leading-[4.56rem]"
	>
		Comment ça marche ?
	</h3>
	<div class="mt-20 flex justify-between gap-20 max-lg:flex-col max-lg:px-20 lg:mt-24 lg:gap-72">
		<div class="flex-1 {isInView ? 'animate-fade' : 'opacity-0'}">
			<div
				class="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-black lg:h-32 lg:w-32"
			>
				<p class="pb-4 font-highlight text-[6rem] font-bold italic text-white lg:text-[7.5rem]">
					1
				</p>
			</div>
			<h4
				class="mt-10 text-center font-highlight text-[2rem] font-bold leading-[2rem] text-crimson lg:text-[2.5rem] lg:leading-[3rem]"
			>
				Sélectionnez<br />la solution café
			</h4>
			<p
				class="mt-7 text-center text-[1.4rem] leading-[1.8rem] text-slate-gray lg:text-[1.6rem] lg:leading-[2.2rem]"
			>
				qui vous convient : en grains, PODS ou capsules PREMIUM*
			</p>
		</div>
		<div class="flex-1 animate-delay-[250ms] {isInView ? 'animate-fade' : 'opacity-0'}">
			<div
				class="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-black lg:h-32 lg:w-32"
			>
				<p class="pb-2 font-highlight text-[5rem] font-bold italic text-white lg:text-[6rem]">2</p>
			</div>
			<h4
				class="mt-10 text-center font-highlight text-[2rem] font-bold leading-[2rem] text-crimson lg:text-[2.5rem] lg:leading-[3rem]"
			>
				Composez votre abonnement
			</h4>
			<p
				class="mt-7 text-center text-[1.4rem] leading-[1.8rem] text-slate-gray lg:text-[1.6rem] lg:leading-[2.2rem]"
			>
				avec les cafés qui vous plaisent.
			</p>
		</div>
		<div class="flex-1 animate-delay-500 {isInView ? 'animate-fade' : 'opacity-0'}">
			<div
				class="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-black lg:h-32 lg:w-32"
			>
				<p class="pb-4 font-highlight text-[5rem] font-bold italic text-white lg:text-[6rem]">3</p>
			</div>
			<h4
				class="mt-10 text-center font-highlight text-[2rem] font-bold leading-[2rem] text-crimson lg:text-[2.5rem] lg:leading-[3rem]"
			>
				Choisissez<br />la quantité
			</h4>
			<p
				class="mt-7 text-center text-[1.4rem] leading-[1.8rem] text-slate-gray lg:text-[1.6rem] lg:leading-[2.2rem]"
			>
				selon vos besoins.
			</p>
		</div>
	</div>

	<p class="mt-16 text-center text-[1.3rem] leading-[2.2rem] text-slate-gray max-lg:px-20">
		*Capsule Premium compatible uniquement avec notre machine Ventura
	</p>

	<div class="mt-10 flex justify-center">
		<Cta label="Demandez-nous un devis personnalisé" />
	</div>
</div>
