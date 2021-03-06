const DiscordCommand = require('../DiscordCommand.js');

class DiscordCommandApples extends DiscordCommand {

  constructor(subsystem) {
    super("updateserver", "Update the server", undefined, subsystem, true);
  }

  onRun(message, permissions, args) {
	if (message.author.id == 115886044162949123) {
		message.reply("Updating server...");
		setTimeout(() => {
			message.reply("Server updated.");
		}, 5000);
	} else{
		message.reply("Hah, fool, did you really think that would work? April fools came early. I was never really going to make the server update itself.");
	}
  }

}

module.exports = DiscordCommandApples;
