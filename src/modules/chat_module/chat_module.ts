import Block from "../../utils/Block";
import ChatItem from "../../components/chatItem/chat_item";
import Search from "../../components/search_field/search_field";
import chat_module from "./chat_module.pug";

export default class ChatModule extends Block {
  constructor() {
    super();
  }

  protected initChildren(): void {

    this.children.search_field = new Search()

    this.children.chatList = [
      {
        avatar: '',
        name: 'Андрей',
        intro: "Изображение",
        time: "10:49",
        unread: 2
      },
      {
        avatar: "assets/chat_avatar.svg",
        name: 'Петя',
        intro: "ipsum dolor sit amet, consectetur adipisicing elit. Ipsa,",
        time: "9:49",
        unread: 12
      },
      {
        avatar: '',
        name: 'Саша',
        intro: "ipsum dolor sit amet consectetur, adipisicing elit. Numquampariatur eos!",
        time: "6:40",
        unread: 14
      },
      {
        avatar: '',
        name: 'Андрей',
        intro: "Изображение",
        time: "10:49",
        unread: 2
      },
      {
        avatar: '',
        name: 'Андрей',
        intro: "Изображение",
        time: "10:49",
        unread: 2
      },
      {
        avatar: '',
        name: 'Андрей',
        intro: "Изображение",
        time: "10:49",
        unread: 2
      },
      {
        avatar: '',
        name: 'Андрей',
        intro: "Изображение",
        time: "10:49",
        unread: 2
      },
      {
        avatar: '',
        name: 'Андрей',
        intro: "Изображение",
        time: "10:49",
        unread: 2
      },

    ].map(chat => new ChatItem({
      avatar: chat.avatar,
      name: chat.name,
      intro: chat.intro,
      time: chat.time,
      unread: chat.unread
    }))

  }


  render() {
    return this.compile(chat_module, {});
  }
}