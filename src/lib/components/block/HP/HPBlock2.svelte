<script lang="ts">
	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, Options } from 'svelte-inview';
	import Engagee from '$lib/components/svg/Engagee.svelte';
	import Experte from '$lib/components/svg/Experte.svelte';
	import Ecologique from '$lib/components/svg/Ecologique.svelte';
	import Ensemble from '$lib/components/svg/Ensemble.svelte';

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
			<Engagee newClass="h-auto w-full" />
		</div>
		<h3
			class="mt-10 text-center font-highlight text-[2rem] font-bold leading-[3rem] lg:text-[2.5rem]"
		>
			Engagée
		</h3>
		<p
			class="mt-7 text-center text-[1.4rem] leading-[1.8rem] text-slate-gray lg:text-[1.6rem] lg:leading-[2.2rem]"
		>
			Du grain à la tasse, choisissez votre café parmi nos cafés Tradition ou Engagés certifiés BIO
			ou Max Havelaar.
		</p>
	</div>
	<div class="flex flex-col animate-delay-[250ms] {isInView ? 'animate-fade' : 'opacity-0'}">
		<div
			class="mx-auto flex h-[6.2rem] w-[6.2rem] items-end justify-center lg:h-[8.5rem] lg:w-[8.5rem]"
		>
			<Experte newClass="h-auto w-full" />
		</div>
		<h3
			class="mt-10 text-center font-highlight text-[2rem] font-bold leading-[3rem] lg:text-[2.5rem]"
		>
			Experte
		</h3>
		<p
			class="mt-7 text-center text-[1.4rem] leading-[1.8rem] text-slate-gray lg:text-[1.6rem] lg:leading-[2.2rem]"
		>
			Maison familiale depuis 1892, Cafés Richard est la référence de l’art français du café.
		</p>
	</div>
	<div class="flex flex-col animate-delay-500 {isInView ? 'animate-fade' : 'opacity-0'}">
		<div
			class="mx-auto flex h-[6.2rem] w-[6.2rem] items-end justify-center lg:h-[8.5rem] lg:w-[8.5rem]"
		>
			<Ecologique newClass="h-auto w-full" />
		</div>
		<h3
			class="mt-10 text-center font-highlight text-[2rem] font-bold leading-[3rem] lg:text-[2.5rem]"
		>
			Ecologique
		</h3>
		<p
			class="mt-7 text-center text-[1.4rem] leading-[1.8rem] text-slate-gray lg:text-[1.6rem] lg:leading-[2.2rem]"
		>
			Choisissez la livraison à vélo pour tous vos bureaux à Paris intramuros.
		</p>
	</div>
	<div class="flex flex-col animate-delay-[750ms] {isInView ? 'animate-fade' : 'opacity-0'}">
		<div
			class="mx-auto flex h-[6.2rem] w-[6.2rem] items-end justify-center lg:h-[8.5rem] lg:w-[8.5rem]"
		>
			<Ensemble newClass="h-auto w-full" />
		</div>
		<h3
			class="mt-10 text-center font-highlight text-[2rem] font-bold leading-[3rem] lg:text-[2.5rem]"
		>
			Ensemble
		</h3>
		<p
			class="mt-7 text-center text-[1.4rem] leading-[1.8rem] text-slate-gray lg:text-[1.6rem] lg:leading-[2.2rem]"
		>
			Retrouvez la convivialité des pauses au bureau avec vos collègues.
		</p>
	</div>
</div>
