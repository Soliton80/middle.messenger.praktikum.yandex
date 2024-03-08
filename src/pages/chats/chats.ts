import Block from "../../utils/Block";
import ChatModule from '../../modules/chat_module/chat_module'
import chats from './chats.pug'

export default class ChatPage extends Block {

  constructor() {
    super();
  }
  
  protected initChildren(): void {
    this.children.chatPage = new ChatModule();
  }

  render() {
    return this.compile(chats, {})
  }
}
