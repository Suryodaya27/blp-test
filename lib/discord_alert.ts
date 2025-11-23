export async function sendSignupAlert(title: string, email: string, name: string) {
	const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
	if (!webhookUrl) return;

	try {
		await fetch(webhookUrl, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				content: `**New ${title} Signup!** @everyone`,
				embeds: [
					{
						title: `New ${title} Registered`,
						color: title === 'Influencer' ? 5793266 : 5763719, // Blue for Influencer, Green for others
						fields: [
							{ name: "Name", value: name, inline: false },
							...(email ? [{ name: "Email", value: email, inline: false }] : [])
						],
						timestamp: new Date().toISOString()
					}
				]
			}),
		});
	} catch (error) {
		console.error("Discord Notification Failed", error);
	}
}