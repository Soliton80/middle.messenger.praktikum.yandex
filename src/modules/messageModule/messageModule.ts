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

    ].map((message) => new MessageItem({
      class_author: message.class_author,
      text: message.text,
      time: message.time,
    }));

    this.children.messageInput = new Field({
      label: 'message',
      autocomplete: 'off',
      placeholder: 'Type your message here...',
      classInput: 'message-placeholder',
      classLabel: 'label-invisible',
    });

    this.children.submitButton = new Button({
      classes: 'd',
      type: 'submit',
      imageSrc: 'assets/forward_arrow.svg',
      imageAlt: 'Forward Arrow',
    });

    if (this.children.messageInput.element !== null) {
      const messageInputElement = this.children.messageInput.element;
      const inputElement = messageInputElement.querySelector('input');
      if (inputElement !== null) {
        inputElement.addEventListener('blur', () => {
          setValidator(inputElement, validateMessage);
        });
      }
    }

    if (this.children.submitButton?.element !== null) {
      this.children.submitButton.element.addEventListener('click', () => {
        if (
          this.children.messageInput instanceof Field
          && this.children.messageInput.element !== null
        ) {
          const messageInputElement = this.children.messageInput.element;
          const inputElement = messageInputElement.querySelector('input');
          if (inputElement !== null) {
            setValidator(inputElement, validateMessage);
            console.log(inputElement.value);
          }
        }
      });
    }
  }

  render() {
    return this.compile(messageModule, {});
  }
}
