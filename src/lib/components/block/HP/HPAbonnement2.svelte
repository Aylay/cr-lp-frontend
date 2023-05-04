<script lang="ts">
	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, Options } from 'svelte-inview';
	import { page } from '$app/stores';

	import Mug from '$lib/components/svg/Mug.svelte';
	import Sav from '$lib/components/svg/SAV.svelte';
	import Cta from '$lib/components/common/CTA.svelte';

	let isInView: boolean;
	const options: Options = {
		unobserveOnEnter: true,
		rootMargin: '0px'
	};

	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
		isInView = detail.inView;
	};

	const offer = {
		id: 'pods',
		img: {
			src: '/img/abonnement-pods-main.png',
			alt: "Plusieurs photos représentant l'abonnement Cafés Richard Pods"
		},
		title: "L'abonnement Cafés en pods",
		text1:
			'Découvrez nos 12 purs Arabica et Grands Crus sélectionnés par les experts Cafés Richard.',
		text2:
			'Chaque Pod café protège une dose de café fraîchement moulu, tassé comme au bar et emballé sous une atmosphère neutre pour conserver tous ses arômes. Une solution simple et rapide qui fera de l’instant café un moment de découverte et un voyage des sens.',
		nbCoffee: 15,
		offers: [
			{
				nbCoffee: 300,
				text1: 'Machine Zmini',
				text2: '+ 300 PODs',
				price: 96,
				unitPrice: '0,32'
			},
			{
				nbCoffee: 600,
				text1: 'Machine ZPressa',
				text2: '+ 600 PODs',
				price: 185,
				unitPrice: '0,31'
			},
			{
				nbCoffee: 800,
				text1: '2 Machines ZPressa',
				text2: '+ 800 PODs',
				price: 242,
				unitPrice: '0,30'
			}
		],
		legals:
			'Tarif à titre indicatif – demandez-nous un devis sur-mesure - Engagement 12 mois – livraison et SAV inclus<br />Notre POD est aussi appelé dosette E.S.E'
	};
</script>

<div
	class="bg-porcelain bg-opacity-50"
	use:inview={options}
	on:inview_change={handleChange}
	id={offer.id}
>
	<div class="relative pt-32 max-lg:px-8 max-lg:pt-12">
		<div class="container flex items-center justify-between gap-32 max-lg:flex-col">
			<div class="order-2 flex flex-1 flex-col">
				<h3
					class="mb-14 text-[2.8rem] font-bold leading-[3.2rem] text-crimson lg:text-[3.8rem] lg:leading-[4.56rem]"
				>
					{offer.title}
				</h3>
				<h4
					class="mb-6 font-highlight text-[2rem] font-bold italic leading-[3rem] lg:text-[2.5rem]"
				>
					{offer.text1}
				</h4>
				<p
					class="text-[1.4rem] leading-[1.8rem] text-slate-gray lg:text-[1.6rem] lg:leading-[2.2rem]"
				>
					{offer.text2}
				</p>
			</div>
			<div class="order-1 flex-1">
				{#if isInView}
					<img
						src={offer.img.src}
						alt={offer.img.alt}
						class={isInView ? 'animate-fade' : 'opacity-0'}
					/>
				{/if}
			</div>
		</div>
	</div>

	<div
		class="container mt-14 flex items-center justify-between max-lg:flex-col max-lg:px-8 lg:mt-28"
	>
		<div class="w-full lg:max-w-[30%]">
			<h3
				class="mb-8 font-highlight text-[2rem] font-bold leading-[3rem] lg:mb-16 lg:text-[2.5rem]"
			>
				Abonnement <span class="uppercase">{offer.id}</span> Machine & café
			</h3>
			<div class="mb-8 flex items-center gap-7 lg:mb-16">
				<Mug newClass="h-full max-h-[3.2rem] w-auto" />
				<p class="flex-1 text-[1.4rem] leading-[1.8rem] lg:text-[1.6rem] lg:leading-[2.2rem]">
					Cette offre convient parfaitement pour les bureaux <span class="font-bold text-crimson"
						>à partir de {offer.nbCoffee} cafés/jour</span
					>.
				</p>
			</div>
			<div class="flex gap-7">
				<Sav newClass="h-full max-h-[3.2rem] w-auto" />
				<p class="flex-1 text-[1.4rem] leading-[1.8rem] lg:text-[1.6rem] lg:leading-[2.2rem]">
					Choisissez l’abonnement “Machine + Café <span class="uppercase">{offer.id}</span>” et
					<span class="font-bold text-crimson">bénéficiez de notre SAV inclus</span>.
				</p>
			</div>
		</div>
		<div class="w-full max-lg:mt-12 max-lg:px-20 lg:max-w-[65%]">
			<div class="flex justify-center gap-10 max-lg:flex-col">
				{#each offer.offers as unitOffer}
					<div
						class="flex-1 rounded-lg border border-solid border-geyser bg-white py-9 text-center"
					>
						<p
							class="mb-2 text-[1.4rem] uppercase leading-[2.2rem] tracking-[.2rem] text-slate-gray"
						>
							Abonnement
						</p>
						<h4
							class="pb-4 text-[1.6rem] font-bold leading-[1.2rem] text-crimson lg:text-[2.5rem] lg:leading-[2.2rem]"
						>
							{unitOffer.nbCoffee} cafés
						</h4>
						<hr class="mx-auto my-5 h-[2px] w-12 bg-crimson" />
						<div class="flex flex-col">
							<div class="flex items-center justify-center gap-4">
								<div class="h-3 w-3 rounded-full bg-crimson" />
								<p class="text-[1.4rem] leading-[1.8rem] lg:text-[1.6rem] lg:leading-[2.2rem]">
									{unitOffer.text1}
								</p>
							</div>
							<div class="flex items-center justify-center gap-4">
								<div class="h-3 w-3 rounded-full bg-crimson" />
								<p class="text-[1.4rem] leading-[1.8rem] lg:text-[1.6rem] lg:leading-[2.2rem]">
									{unitOffer.text2}
								</p>
							</div>
						</div>
						<hr class="mx-auto my-5 h-[2px] w-12 bg-crimson" />
						<p
							class="pt-4 font-highlight text-[2rem] font-bold italic leading-[2.2rem] text-crimson"
						>
							{unitOffer.price}€ HT /mois
						</p>
						<p class="mt-2 text-[1.4rem] leading-[2.2rem] text-slate-gray">
							{unitOffer.unitPrice}€ ht /café
						</p>
					</div>
				{/each}
			</div>
		</div>
	</div>

	<div class="container mt-10 flex flex-col items-center gap-10 pb-32 max-lg:px-8">
		<p class="text-center text-[1.3rem] leading-[1.6rem] text-slate-gray">
			{@html offer.legals}
		</p>
		{#if !$page.route.id.includes('confirmation')}
			<div>
				<Cta label="Demandez-nous un devis personnalisé" />
			</div>
		{/if}
	</div>
</div>
