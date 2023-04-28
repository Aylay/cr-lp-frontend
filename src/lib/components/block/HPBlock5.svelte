<script lang="ts">
	const testimonies = [
		{
			text: 'Je suis tout à fait satisfait du travail réalisé. Vous avez réussi à nous créer de véritables espaces café où nos collaborateurs ont plaisir à se retrouver. J’ai apprécié tout particulièrement votre réactivité et votre capacité à comprendre très vite nos besoins.',
			name: 'Frédéric',
			job: 'Responsable Achat'
		},
		{
			text: 'J’ai trouvé que vous avez été capable de me donner des conseils assez justes qui m’ont permis de choisir le café le plus adapté à l’ensemble de mes collègues. Les livraisons récurrentes facilitent également mon organisation.',
			name: 'Eva',
			job: 'Responsable Services Généraux'
		},
		{
			text: 'Je partais avec quelques a priori. En effet, je ne voyais pas comment un acteur du CHR pourrait m’aider à améliorer ma pause-café au bureau. Votre innovation produit et vos concepts 360° m’ont séduite et m’apporte un plus dans mon quotidien.',
			name: 'Justine',
			job: 'Office Manager'
		}
	];
</script>

<div class="bg-porcelain py-20 max-lg:px-8 lg:py-24">
	<div class="container">
		<h3
			class="text-center text-[2.8rem] font-bold leading-[3.2rem] text-crimson lg:text-[3.8rem] lg:leading-[4.56rem]"
		>
			Témoignages clients
		</h3>
		<p
			class="mt-4 text-center font-highlight text-[2rem] font-bold italic leading-[2rem] lg:text-[2.5rem] lg:leading-[3rem]"
		>
			Ils parlent de nous...
		</p>
		<div class="mt-16 flex justify-between gap-20 max-lg:flex-col max-lg:px-10 lg:mt-24 lg:gap-32">
			{#each testimonies as testimony}
				<div class="flex-1 flex-col">
					<p class="text-center text-[1.4rem] leading-[2.2rem] text-slate-gray lg:text-[1.6rem]">
						{testimony.text}
					</p>
					<p
						class="mt-6 text-center font-highlight text-[1.8rem] font-bold italic leading-[2.4rem] lg:text-[2rem]"
					>
						{testimony.name}
					</p>
					<p
						class="mt-2 text-center text-[1.4rem] font-semibold leading-[1.9rem] text-crimson lg:text-[1.6rem]"
					>
						{testimony.job}
					</p>
				</div>
			{/each}
		</div>
	</div>
</div>
