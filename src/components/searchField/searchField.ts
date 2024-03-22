import Block from '../../utils/Block';
import searchField from './searchField.pug';

export default class Search extends Block {
  render() {
    return this.compile(searchField, {});
  }
}
