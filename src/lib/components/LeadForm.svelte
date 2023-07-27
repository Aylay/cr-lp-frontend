<script lang="ts">
	import { goto } from '$app/navigation';
	import SpecificInput from '$lib/components/block/utilities/SpecificInput.svelte';
	import Hoverable from '$lib/components/utilities/Hoverable.svelte';

	let firstName = '';
	let firstNameError = false;

	let lastName = '';
	let lastNameError = false;

	let company = '';
	let companyError = false;

	let job = '';
	let jobError = false;

	let email = '';
	let emailError = false;

	let phone = '';
	let phoneError = false;

	let postalCode = '';
	let postalCodeError = false;

	let legals = false;
	let legalsError = false;

	let onError = false;

	function addProspect() {
		checkFormError();
		if (onError) {
			return;
		}

		const data = {
			prenom: firstName,
			nom: lastName,
			societe: company,
			fonction: job,
			email: email,
			telephone: phone,
			codePostal: postalCode
		};
		console.log(data)

		fetch(import.meta.env.VITE_STRAPI_URL + '/api/prospects', {
			method: 'POST',
			body: JSON.stringify({ data }),
			headers: {
				'Content-Type': 'application/json'
			}
		});

		goto('/confirmation');
	}

	function checkFormError() {
		onError = false;
		firstNameError = false;
		lastNameError = false;
		companyError = false;
		jobError = false;
		emailError = false;
		phoneError = false;
		postalCodeError = false;
		legalsError = false;

		if (firstName === '') {
			onError = true;
			firstNameError = true;
		}

		if (lastName === '') {
			onError = true;
			lastNameError = true;
		}

		if (company === '') {
			onError = true;
			companyError = true;
		}

		if (job === '') {
			onError = true;
			jobError = true;
		}

		if (email === '' || (email !== '' && !validEmail(email))) {
			onError = true;
			emailError = true;
		}

		if (phone === '') {
			onError = true;
			phoneError = true;
		}

		if (postalCode === '') {
			onError = true;
			postalCodeError = true;
		}

		if (!legals) {
			onError = true;
			legalsError = true;
		}
	}

	function validEmail(email: string) {
		const re =
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(email);
	}
</script>

<form class="flex flex-col gap-9 rounded-lg bg-white p-12 lg:p-20" id="prospectForm">
	<div class="flex gap-9 max-lg:flex-col">
		<SpecificInput error={firstNameError} content="Prénom" bind:value={firstName} />

		<SpecificInput error={lastNameError} content="Nom" bind:value={lastName} />
	</div>

	<div class="flex gap-9 max-lg:flex-col">
		<SpecificInput error={companyError} content="Société" bind:value={company} />

		<SpecificInput error={jobError} content="Fonction" bind:value={job} />
	</div>

	<SpecificInput error={emailError} content="Email professionnel" bind:value={email} />

	<div class="flex gap-9 max-lg:flex-col">
		<SpecificInput error={phoneError} content="Téléphone professionnel" bind:value={phone} />

		<SpecificInput
			error={postalCodeError}
			content="Code postal de l'entreprise"
			bind:value={postalCode}
		/>
	</div>

	<Hoverable let:hovering={active}>
		<div class="flex cursor-pointer gap-6" on:click={() => (legals = !legals)}>
			<div
				class="h-8 w-8 rounded-lg border-[2px] border-solid transition-colors {legalsError
					? 'border-crimson'
					: 'border-geyser'} {legals || active ? 'bg-crimson' : 'bg-transparent'} "
			/>
			<p class="flex-1 text-[1.4rem] leading-[1.7rem] {legalsError
				? 'text-crimson'
				: 'text-slate-gray'}">
				En soumettant ce formulaire, j'accepte que les informations saisies soient traitées dans le cadre de ma demande et de la relation commerciale qui en découle.<sup class="text-crimson"> *</sup>
			</p>
		</div>
	</Hoverable>

	<button
		class="w-full rounded-3xl bg-crimson p-6 text-center text-[1.4rem] font-semibold leading-[1.9rem] text-white transition-colors hover:bg-black lg:text-[1.6rem]"
		on:click|preventDefault={addProspect}
	>
		Demander plus d'informations
	</button>
</form>
