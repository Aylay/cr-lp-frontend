<script lang="ts">
	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, Options } from 'svelte-inview';

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
	class="relative bg-porcelain py-24 max-lg:px-8"
	use:inview={options}
	on:inview_change={handleChange}
>
	{#if isInView}
		<img
			src="/img/branche-cafe.png"
			alt="Branche de café"
			class="absolute -top-80 right-0 z-10 h-auto max-w-[59rem] max-lg:hidden {isInView
				? 'animate-fade'
				: 'opacity-0'}"
		/>
	{/if}
	<div class="container flex items-center justify-between gap-20 max-lg:flex-col lg:gap-40">
		<div class="flex flex-1 flex-col max-lg:order-2">
			<h2
				class="mb-6 text-[3.8rem] font-bold leading-[4.8rem] lg:text-[5.5rem] lg:leading-[6.6rem]"
			>
				Cafés Richard,
			</h2>
			<h3
				class="mb-8 text-[2.8rem] font-bold leading-[3.2rem] text-crimson lg:text-[3.8rem] lg:leading-[4.56rem]"
			>
				une histoire de famille
			</h3>
			<h3 class="mb-6 font-highlight text-[2rem] font-bold leading-[3rem] lg:text-[2.5rem]">
				Le choix d’une marque inspirationnelle !
			</h3>
			<p
				class="mb-8 text-[1.4rem] leading-[1.8rem] text-slate-gray lg:text-[1.6rem] lg:leading-[2.2rem]"
			>
				Fondée en 1892, Cafés Richard est une maison qui puise ses racines dans une belle histoire
				de famille. Torréfacteur à la française, Cafés Richard, est attentif au moindre détail avec
				une expertise et une connaissance de la torréfaction transmis de génération en génération
				garant d’une qualité unique.
			</p>
			<p
				class="mb-8 text-[1.4rem] leading-[1.8rem] text-slate-gray lg:text-[1.6rem] lg:leading-[2.2rem]"
			>
				Derrière chaque tasse de café, il y a le savoir-faire et la créativité d’une communauté
				d’hommes et de femmes qui cultivent, torréfient, distribuent et préparent un produit avec
				passion.
			</p>
			<p
				class="text-[1.4rem] font-bold leading-[1.8rem] text-crimson lg:text-[1.6rem] lg:leading-[2.2rem]"
			>
				Avec nous, découvrez l’art français du café, aussi au bureau !
			</p>
		</div>
		<div class="flex-1 max-lg:order-1">
			{#if isInView}
				<img
					src="/img/cafes-richard-famille.png"
					alt="Cafés Richard Famille"
					class="h-auto w-full {isInView ? 'animate-fade' : 'opacity-0'}"
				/>
			{/if}
		</div>
	</div>
</div>
