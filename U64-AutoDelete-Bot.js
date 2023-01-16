// Bot essentially connects to Discord and watches a channel, it deletes messages after a timeout. 
// Author: NZCypher819

// Set configuration Information
const targetChannel = '<TARGET CHANNEL ID>';   // The Target Channel ID
const botToken = '<YOUR BOTS ACCESS TOKEN>';  // The bot access token

const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({
    intents: [ 
	GatewayIntentBits.Guilds, 
	GatewayIntentBits.GuildMessages,
	GatewayIntentBits.MessageContent,
	],
});

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

// this is a bulk delete function, cannot delete anything older than 2 weeks. This is a DISCORD API limitation.  To execute, in the target channel, type !Execute Order 69   
client.on('messageCreate', async message => {
    if (message.content === '!Execute Order 69') {
        console.log("Execution of Order 69 has been requested");
		let messages = await message.channel.messages.fetch();
        let thirteenDaysAgo = new Date();
        thirteenDaysAgo.setDate(thirteenDaysAgo.getDate() - 13);
        let messagesToDelete = messages.filter(msg => msg.createdAt < thirteenDaysAgo);
        let messagesIds = messagesToDelete.map(msg => msg.id);
		console.log(messagesIds);
        await message.channel.bulkDelete(messagesIds);
    }
});
 
// This is the autodelete part. It looks for a message from the targetChannel, if it matches then note it and start the timer for deletion.
client.on('messageCreate', (message) => {
	// Some console output, primarily for debugging and helping to show you its doing something.
	const msgchannelid = message.channel.id;
	console.log(message.content);
	console.log(msgchannelid);

	// if the message is from the target channel, then start timer for deletion.
    if (msgchannelid === targetChannel) {
		setTimeout(() => {
            message.delete();
        }, 1000 * 60 * 15); // delete message after 15mins
    }
	else {console.log('I saw something, but did nothing...')}  // This is more debugging on the console. 

});

client.login(botToken);