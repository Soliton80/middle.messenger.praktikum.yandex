import title from './title.pug';
import Block from '../../utils/Block';

type Props = {
  title: string;
};

export default class Titles extends Block {

  constructor(props: Props) {
    super(props);
  }

  render() {
    return this.compile(title, { ...this.props })
  }
}
