import { Client, Interaction, event, slash } from 'deps';

import { commands } from './commands.ts';

export class QnABot extends Client {
  channelId: string | undefined;

  @event('messageCreate')
  addQuestion() {}

  @event('messageDelete')
  removeQuestion() {}

  @event('messageUpdate')
  updateQuestion() {}

  @event('messageReactionAdd')
  @event('messageReactionRemove')
  updateVotes() {}

  @event('ready')
  ready() {
    console.log('Ready!');
    commands.forEach(command => {
      // If you want to create command globally, just remove 'Your Server/Guild ID' part
      // I recommend making it for only one guild for now because Global Slash Commands can take max 1 hour to come live.
      this.interactions.commands
        .create(command, 'Your Server/Guild ID')
        .then(cmd => console.log(`Created Slash Command ${cmd.name}!`))
        .catch(cmd => console.log(`Failed to create ${cmd.name} command!`));
    });
  }

  @slash()
  setup(i: Interaction) {
    this.channelId = i.channel?.id;
    i.respond({
      content: 'Setting current channel as Q&A target'
    });
  }
}
