const HeliusApiKey = "";
const WebHookId = "";

export const newAcccountSubscriptionHandler = async (newTrg: string) => {
    try {
        const response = await fetch(`https://api.helius.xyz/v0/webhooks/${WebHookId}?api-key=${HeliusApiKey}`,
            {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                webhookURL: "https://trades-webhook-url.com/webhook",
                transactionTypes: ["Any"],
                accountAddresses: [newTrg],
                webhookType: "rawDevnet",
            }),
            }
        );

        const data = await response.json();
        console.log({ data });
    } catch (error) {
        console.error("Subscription Error:", error);
    }
};
