import Block from '../../utils/Block';
import chatItem from './chatItem.pug';

type Props = {
  avatar: string;
  name: string;
  intro: string;
  time: string;
  unread?: number;
}

export default class ChatItem extends Block {
  // eslint-disable-next-line no-useless-constructor
  constructor(props?: Props) {
    super(props);
  }

  render() {
    return this.compile(chatItem, { ...this.props });
  }
}
