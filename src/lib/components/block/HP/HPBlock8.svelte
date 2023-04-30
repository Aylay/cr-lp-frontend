<script lang="ts">
	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, Options } from 'svelte-inview';
	import MaisonFamiliale from '$lib/components/svg/MaisonFamiliale.svelte';
	import Torrefacteur from '$lib/components/svg/Torrefacteur.svelte';
	import Croissant from '$lib/components/svg/Croissant.svelte';
	import Salaries from '$lib/components/svg/Salaries.svelte';

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
	class="container grid grid-cols-2 justify-between gap-14 py-20 max-lg:px-8 lg:grid-cols-4 lg:gap-20 lg:py-36"
	use:inview={options}
	on:inview_change={handleChange}
>
	<div class="flex flex-col {isInView ? 'animate-fade' : 'opacity-0'}">
		<div
			class="mx-auto flex h-[6.2rem] w-[6.2rem] items-end justify-center lg:h-[8.5rem] lg:w-[8.5rem]"
		>
			<MaisonFamiliale newClass="h-auto w-full" />
		</div>
		<h3
			class="mt-10 text-center font-highlight text-[2rem] font-bold leading-[3rem] lg:text-[2.5rem]"
		>
			Une Maison familiale
		</h3>
		<p
			class="mt-7 text-center text-[1.4rem] leading-[1.8rem] text-slate-gray lg:text-[1.6rem] lg:leading-[2.2rem]"
		>
			Fondée en 1892.
		</p>
	</div>
	<div class="flex flex-col animate-delay-[250ms] {isInView ? 'animate-fade' : 'opacity-0'}">
		<div
			class="mx-auto flex h-[6.2rem] w-[6.2rem] items-end justify-center lg:h-[8.5rem] lg:w-[8.5rem]"
		>
			<Croissant newClass="h-auto w-full" />
		</div>
		<h3
			class="mt-10 text-center font-highlight text-[2rem] font-bold leading-[3rem] lg:text-[2.5rem]"
		>
			Un torréfacteur<br />à la française
		</h3>
		<p
			class="mt-7 text-center text-[1.4rem] leading-[1.8rem] text-slate-gray lg:text-[1.6rem] lg:leading-[2.2rem]"
		>
			Depuis trois générations.
		</p>
	</div>
	<div class="flex flex-col animate-delay-500 {isInView ? 'animate-fade' : 'opacity-0'}">
		<div
			class="mx-auto flex h-[6.2rem] w-[6.2rem] items-end justify-center lg:h-[8.5rem] lg:w-[8.5rem]"
		>
			<Torrefacteur newClass="h-full w-auto" />
		</div>
		<h3
			class="mt-10 text-center font-highlight text-[2rem] font-bold leading-[3rem] lg:text-[2.5rem]"
		>
			La référence<br />café du marché
		</h3>
		<p
			class="mt-7 text-center text-[1.4rem] leading-[1.8rem] text-slate-gray lg:text-[1.6rem] lg:leading-[2.2rem]"
		>
			Hors domicile.
		</p>
	</div>
	<div class="flex flex-col animate-delay-[750ms] {isInView ? 'animate-fade' : 'opacity-0'}">
		<div
			class="mx-auto flex h-[6.2rem] w-[6.2rem] items-end justify-center lg:h-[8.5rem] lg:w-[8.5rem]"
		>
			<Salaries newClass="h-full w-auto" />
		</div>
		<h3
			class="mt-10 text-center font-highlight text-[2rem] font-bold leading-[3rem] lg:text-[2.5rem]"
		>
			450 salariés<br />en France
		</h3>
		<p
			class="mt-7 text-center text-[1.4rem] leading-[1.8rem] text-slate-gray lg:text-[1.6rem] lg:leading-[2.2rem]"
		>
			Qui sont experts café.
		</p>
	</div>
</div>
