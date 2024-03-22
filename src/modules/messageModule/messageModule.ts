import Block from '../../utils/Block';
import MessageItem from '../../components/messageItem/messageItem';
import Field from '../../components/field/field';
import Button from '../../components/button/button';
import messageModule from './messageModule.pug';
import {
  setValidator,
  validateMessage,
} from '../../utils/validators';

export default class MessageModule extends Block {
  protected initChildren(): void {

    const handleEvent = (validator: (argument: string) => string) => (event: Event) => {
      const target = event.target as HTMLInputElement;
      setValidator(target, validator);
    };

    this.children.messagesList = [
      {
        text: '!Lorem ipsum dolor sit amet, consectetur adipisicing elit,'
          + 'ed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        time: '10:49',
      },
      {
        class_author: 'message-reply',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
          + 'Quae delectus eum possimus!',
        time: '10:49',
      },
      {
        text: '!Lorem ipsum dolor sit amet, consectetur adipisicing elit,'
          + 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
          + 'ur adipisicing elit, sed do eiusmod tempor i',
        time: '10:49',
      },

    ].map((message) => new MessageItem(message));

    this.children.messageInput = new Field({
      label: 'message',
      autocomplete: 'off',
      placeholder: 'Type your message here...',
      classInput: 'message-placeholder',
      classLabel: 'label-invisible',
      events: {
        blur: handleEvent(validateMessage),
        click: handleEvent(validateMessage),
      },
    });

    this.children.submitButton = new Button({
      classes: 'd',
      type: 'submit',
      imageSrc: 'assets/forward_arrow.svg',
      imageAlt: 'Forward Arrow',
    });
  }

  render() {
    return this.compile(messageModule, {});
  }
}
