import Block from '../../utils/Block';
import messageItem from './messageItem.pug';

type Props = {
  text: string;
  time: string;
  class_author?: string;
}

export default class MessageItem extends Block {
  // eslint-disable-next-line no-useless-constructor
  constructor(props?: Props) {
    super(props);
  }

  render() {
    return this.compile(messageItem, { ...this.props });
  }
}
