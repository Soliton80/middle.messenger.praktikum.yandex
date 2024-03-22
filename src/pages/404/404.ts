import Block from '../../utils/Block';
import error404 from './404.pug';


export default class ChatPage extends Block {

  render() {
    return this.compile(error404, { title: '404', description: 'error404' });
  }
}
