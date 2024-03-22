import Block from '../../utils/Block';
import ChatItem from '../../components/chatItem/chatItem';
import Search from '../../components/searchField/searchField';
import chatModulePug from './chatModule.pug';

export default class ChatModule extends Block {
  protected initChildren(): void {
    this.children.searchField = new Search();

    this.children.chatList = [
      {
        avatar: '',
        name: 'Андрей',
        intro: 'Изображение',
        time: '10:49',
        unread: 2,
      },
      {
        avatar: 'assets/chat_avatar.svg',
        name: 'Петя',
        intro: 'ipsum dolor sit amet, consectetur adipisicing elit. Ipsa,',
        time: '9:49',
        unread: 12,
      },
      {
        avatar: '',
        name: 'Саша',
        intro: 'ipsum dolor sit amet consectetur, adipisicing elit.'
          + ' Numquampariatur eos!',
        time: '6:40',
        unread: 14,
      },
      {
        avatar: '',
        name: 'Андрей',
        intro: 'Изображение',
        time: '10:49',
        unread: 2,
      },
      {
        avatar: '',
        name: 'Андрей',
        intro: 'Изображение',
        time: '10:49',
        unread: 2,
      },
      {
        avatar: '',
        name: 'Андрей',
        intro: 'Изображение',
        time: '10:49',
        unread: 2,
      },
      {
        avatar: '',
        name: 'Андрей',
        intro: 'Изображение',
        time: '10:49',
        unread: 2,
      },
      {
        avatar: '',
        name: 'Андрей',
        intro: 'Изображение',
        time: '10:49',
        unread: 2,
      },

    ].map((chat) => new ChatItem(chat));
  }

  render() {
    return this.compile(chatModulePug, {});
  }
}
