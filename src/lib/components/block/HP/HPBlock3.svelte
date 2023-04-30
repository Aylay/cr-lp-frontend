<script lang="ts">
	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, Options } from 'svelte-inview';
	import MachineCafe from '$lib/components/svg/MachineCafe.svelte';
	import Ecologique from '$lib/components/svg/Ecologique.svelte';
	import Service from '$lib/components/svg/Service.svelte';

	let isInView: boolean;
	const options: Options = {
		unobserveOnEnter: true,
		rootMargin: '-200px'
	};

	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
		isInView = detail.inView;
	};
</script>

<div
	class="bg-porcelain py-20 max-lg:px-8 lg:py-24"
	use:inview={options}
	on:inview_change={handleChange}
>
	<div class="container flex items-center gap-20 max-lg:flex-col lg:gap-40">
		<div class="flex-1 max-lg:order-2">
			<h3
				class="text-[2.8rem] font-bold leading-[3.2rem] text-crimson lg:text-[3.8rem] lg:leading-[4.56rem]"
			>
				Pourquoi s’abonner ?
			</h3>
			<h4
				class="mt-8 font-highlight text-[2rem] font-bold italic leading-[2rem] lg:mt-16 lg:text-[2.5rem] lg:leading-[3rem]"
			>
				Une offre 360° pour combler<br />
				toutes vos envies au bureau !
			</h4>
			<p
				class="mt-6 text-[1.4rem] leading-[1.8rem] text-slate-gray lg:text-[1.6rem] lg:leading-[2.2rem]"
			>
				Nous avons choisi de lancer une nouvelle offre de cafés pour les entreprises : un abonnement
				avec ou sans machine, qui s’adapte à tous vos besoins ! Oui, on a bien dit TOUS vos besoins.
			</p>
			<div class="mt-16 flex items-center gap-7">
				<MachineCafe color="fill-regent-gray" newClass="h-full max-h-[3.4rem] w-auto" />
				<p class="text-[1.4rem] leading-[1.8rem] lg:text-[1.6rem] lg:leading-[2.2rem]">
					Installation de la machine à café <span class="font-bold uppercase text-crimson"
						>incluse</span
					>
				</p>
			</div>
			<div class="mt-10 flex items-center gap-7">
				<Ecologique color="fill-regent-gray" newClass="h-full max-h-[3.4rem] w-auto" />
				<p class="text-[1.4rem] leading-[1.8rem] lg:text-[1.6rem] lg:leading-[2.2rem]">
					Profitez de la <span class="font-bold uppercase text-crimson">livraison récurrente</span
					><br />de votre commande café
				</p>
			</div>
			<div class="mt-10 flex items-center gap-7">
				<Service color="fill-regent-gray" newClass="w-full max-w-[3.7rem] h-auto" />
				<p class="text-[1.4rem] leading-[1.8rem] lg:text-[1.6rem] lg:leading-[2.2rem]">
					Bénéficiez d’un <span class="font-bold uppercase text-crimson">service tout compris</span
					><br />(livraison café, SAV, adoucisseur d’eau...)
				</p>
			</div>
		</div>
		<div class="flex-1 max-lg:order-1">
			{#if isInView}
				<img
					src="/img/pourquoi.jpg"
					alt="réunion de travail en buvant un café"
					class="w-full {isInView ? 'animate-fade' : 'opacity-0'}"
				/>
			{/if}
		</div>
	</div>
</div>
