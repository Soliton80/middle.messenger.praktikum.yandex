import button from './button.pug';
import Block from '../../utils/Block';

type Props = {
  label?: string;
  type?: string;
  classes?: string;
  imageSrc?: string;
  imageAlt?: string;
};

export default class Button extends Block {
  // eslint-disable-next-line no-useless-constructor
  constructor(props: Props) {
    super(props);
  }

  render() {
    return this.compile(button, { ...this.props });
  }
}
