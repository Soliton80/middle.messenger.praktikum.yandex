import Block from '../../utils/Block'
import MessageItem from '../../components/messageItem/message_item';
import ProfileAvatar from '../../components/profileAvatar/profile_avatar'
import Title from '../../components/title/title';
import message_module from './message_module.pug';

type Props = {
  nickname: string
  title: string
}


export default class MessageModule extends Block {
  constructor() {
    super();
  }

  protected initChildren(): void {


    this.children.messagesList = [
      {
        text: "!Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        time: "10:49",
      },
      {
        class_author: 'message-reply',
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae delectus eum possimus!",
        time: "10:49",
      },
      {
        text: "!Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ur adipisicing elit, sed do eiusmod tempor i",
        time: "10:49",
      },


    ].map(message => new MessageItem({
      class_author: message.class_author,
      text: message.text,
      time: message.time,
    }))

  }


  render() {
    return this.compile(message_module, {});
  }
}