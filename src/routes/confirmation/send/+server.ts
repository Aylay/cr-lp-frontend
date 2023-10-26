import { json } from '@sveltejs/kit';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
	host: 'smtp-relay.brevo.com',
	port: 587,
	secure: false,
	auth: {
		user: import.meta.env.VITE_BREVO_USER,
		pass: import.meta.env.VITE_BREVO_PWD
	}
});

export async function POST({ request }) {
	const { data } = await request.json();
	
	let textMail = 'Bonjour'
	textMail += '<br /><br />'
	textMail = "Cette personne a fait une demande d'informations.<br /><br />"
	textMail += 'Ses coordonnées :'
	textMail += '<br />'
	textMail += 'Prénom : ' + data.prenom + '<br />'
	textMail += 'Nom : ' + data.nom + '<br />'
	textMail += 'Société : ' + data.societe + '<br />'
	textMail += 'Fonction : ' + data.fonction + '<br />'
	textMail += 'Email : ' + data.email + '<br />'
	textMail += 'Téléphone : ' + data.telephone + '<br />'
	textMail += "Code postal de l'entreprise : " + data.codePostal + '<br />'
	textMail += "Landing page : " + data.lp + '<br />'
	textMail += '<br />'

	const options = {
		from: 'ocs@richard.fr',
		to: 'lattali@beavers-agency.fr',
		bcc: 'mcblaizot@beavers-agency.fr',
		subject: 'Formulaire abonnement',
		html: textMail
	};

	await transporter.sendMail(options);

	return json('ok')
}

