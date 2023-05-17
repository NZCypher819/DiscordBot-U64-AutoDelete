# DiscordBot-U64-AutoDelete
Simple discord bot for auto deleting messages in a target channel after a set time. Great for server admin channels or just a way to keep a channel clean.

# Bot Access Token
You need a discord App and Bot which you can create a new bot and get the token by following these steps:

    1. Go to the Discord Developer Portal (https://discord.com/developers/applications)
    2. Log in with your Discord account
    3. Click on "New Application"
    4. Give your application a name, and then select "Create"
    5. On the left sidebar, select "Bot"
    6. Click on "Add Bot"
    
    A token will be generated for your bot, keep this token safe and never share it out.

# Bot Permissions
Here are the specific permissions that the bot needs:

    Read Messages: The bot needs this permission to read messages in the channel and determine which messages to delete.
    Manage Messages: The bot needs this permission to delete messages in the channel.

# Running the Bot on Windows
To run the bot on a Windows Server, you will need to do the following:

    1. Install Node.js: You will need to have Node.js installed on your server in order to run the script. You can download the installer from the official website (https://nodejs.org/) and run it on your server.

    2. Copy the U64-AutoDelete-Bot.js file into a folder for which you will run it from.

    3. Replace placeholder values in the bot file: Replace the placeholder values in the script with the actual values. 
    - The <YOUR BOTS ACCESS TOKEN> should be the token of your bot
    - <channel id 1>, <channel id 2> and <channel id 3> are the channels you want to monitor.  Add further channels as required 
    
    You need to have your discord client in Application Test Mode aka developer mode to get the ID - More info here https://discord.com/developers/docs/game-sdk/store

    4. Install dependencies: Open a command prompt or PowerShell in the same directory as your bot file, and run the following command 'npm install discord.js' to install the Discord.js library that the script depends on.   For debugging you can also install nodemon 'npm install nodemon'  This makes diagnosing issues a bit easier.

    5. Run the script: To start the script, run the following command 'node U64-AutoDelete-Bot.js' or 'nodemon U64-AutoDelete-Bot.js' if you want to use the monitor in the same command prompt or PowerShell window.

    6. Check logs: Check the logs to see if the bot is working as expected, if you see Logged in as {username}! in the logs, it means that the bot has connected to the Discord API successfully.