import Block from "../../utils/Block";
import MessageModule from "../../modules/message_module/message_module";
import message from './message.pug'

export class Message extends Block {

  constructor() {
    super();
  }

  protected initChildren(): void {
    this.children.message = new MessageModule();
  }

  render() {
    return this.compile(message, {title: 'Message', description: 'Message'})
  }
}