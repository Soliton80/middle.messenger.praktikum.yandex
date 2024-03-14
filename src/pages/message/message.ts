import Block from '../../utils/Block';
import MessageModule from '../../modules/messageModule/messageModule';
import message from './message.pug';

export default class Message extends Block {
  protected initChildren(): void {
    this.children.message = new MessageModule();
  }

  render() {
    return this.compile(message, { title: 'Message', description: 'Message' });
  }
}
