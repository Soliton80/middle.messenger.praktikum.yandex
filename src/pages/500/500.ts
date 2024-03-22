import Block from '../../utils/Block';
import error500 from './500.pug';


export default class ChatPage extends Block {

  render() {
    return this.compile(error500, { title: '500', description: 'error500' });
  }
}
