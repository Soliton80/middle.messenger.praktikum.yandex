import Block from '../../utils/Block';
import ChatModule from '../../modules/chatModule/chatModule';
import chats from './chats.pug';

export default class ChatPage extends Block {
  protected initChildren(): void {
    this.children.chatPage = new ChatModule();
  }

  render() {
    return this.compile(chats, { title: 'Chats', description: 'Chats' });
  }
}
