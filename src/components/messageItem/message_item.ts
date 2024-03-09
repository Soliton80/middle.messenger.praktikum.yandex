import Block from '../../utils/Block'
import message_item from './message_item.pug';

type Props = {
  text: string;
  time: string;
  class_author?: string;
}

export default class MessageItem extends Block {
  constructor(props?: Props) {
    super(props);
  }

  render() {
    return this.compile(message_item, {...this.props})
  }
}

