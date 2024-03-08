import Block from '../../utils/Block'
import chatItem from './chat_item.pug';

type Props = {
  avatar: string;
  name: string;
  intro: string;
  time: string;
  unread?: number;
}

export default class ChatItem extends Block {
  constructor(props?: Props) {
    super(props);
  }

  render() {
    return this.compile(chatItem, {...this.props})
  }
}

