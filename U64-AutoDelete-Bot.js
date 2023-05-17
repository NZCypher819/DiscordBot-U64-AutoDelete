// Bot essentially connects to Discord and watches a channel, it deletes messages after a timeout. 
// Author: NZCypher819

// Set configuration Information
const targetChannels = ['<channel id 1>', '<channel id 1>', '<channel id 1>']; // Array of target channel IDs - chat\admin\status
const botToken = '<token>';  // The bot access token

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
    const msgChannelId = message.channel.id;
    console.log(message.content);
    console.log(msgChannelId);
  
    // Check if the message is from any of the target channels
    if (targetChannels.includes(msgChannelId)) {
      setTimeout(() => {
        message.delete();
      }, 1000 * 60 * 15); // Delete message after 15 minutes
    } else {
      console.log('I saw something, but did nothing...');
    }
  });
client.login(botToken);