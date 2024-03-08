import Block from '../../utils/Block'
import search_field from './search_field.pug';

export default class Search extends Block {
  
  render() {
    return this.compile(search_field, {});
  }
}

