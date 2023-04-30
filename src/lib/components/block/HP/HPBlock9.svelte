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

<div
	class="container flex items-center justify-between gap-20 max-lg:flex-col max-lg:px-8 lg:gap-40"
	use:inview={options}
	on:inview_change={handleChange}
>
	<div class="flex-1">
		{#if isInView}
			<img src="/img/bureau.jpg" alt="Bureau" class={isInView ? 'animate-fade' : 'opacity-0'} />
		{/if}
	</div>
	<div class="flex-1">
		<h2
			class="mb-8 text-[2.8rem] font-bold leading-[3.2rem] text-crimson lg:mb-12 lg:text-[3.8rem] lg:leading-[4.56rem]"
		>
			Offrez bien + qu’un café !
		</h2>
		<h3 class="mb-6 font-highlight text-[2rem] font-bold leading-[3rem] lg:text-[2.3rem]">
			Renforcez l’esprit d’équipe avec la pause-café
		</h3>
		<p
			class="mb-8 text-[1.4rem] leading-[1.8rem] text-slate-gray lg:text-[1.6rem] lg:leading-[2.2rem]"
		>
			À l’heure du travail hybride, les pauses-café sont considérées comme essentielles par les
			collègues pour nouer des relations plus étroites et plus personnelles. Cela permet de
			renforcer le sentiment d’appartenance à leur entreprise.
		</p>
		<p
			class="mb-8 text-[1.4rem] leading-[1.8rem] text-slate-gray lg:text-[1.6rem] lg:leading-[2.2rem]"
		>
			La pause-café est donc un bon moyen de décloisonner l’entreprise et, par la même occasion de
			renforcer, l’esprit d’équipe. Alors, quel meilleur moment que la pause-café pour tisser des
			liens avec ses collègues ?
		</p>
		<p
			class="mb-8 text-[1.4rem] font-bold leading-[1.8rem] text-crimson lg:mb-16 lg:text-[1.6rem] lg:leading-[2.2rem]"
		>
			Laissez vous tenter par une dégustation !
		</p>
		<div>
			<Cta label="Demandez-nous un devis personnalisé" />
		</div>
	</div>
</div>
