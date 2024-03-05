import Block from '../../utils/Block'
import template from './template.pug';

type Props = {
  avatar: string;
};

export default class ProfileAvatar extends Block {
  constructor(props: Props) {
    super(props);
  }
  
  render() {
    return this.compile(template, {...this.props});
  }
}
