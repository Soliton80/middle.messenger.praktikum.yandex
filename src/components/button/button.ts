import button from './button.pug';
import Block from '../../utils/Block';

type Props = {
  label: string;
  type?: string;
  classes?: string;
};

export default class Button extends Block {

  constructor(props: Props) {
    super(props);
  }

  render() {
    return this.compile(button, { ...this.props })
  }
}
