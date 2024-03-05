import Block from '../../utils/Block';
import field from './field.pug';


type Props = {
  label: string;
  id?: string;
  type?: string;
  value?: string;
  autocomplete?: string;
  placeholder?: string;
  classInput?: string;
  events?: {
    blur: () => void;
    focus: () => void;
  }
};

export default class Field extends Block {

  constructor(props: Props) {
    super(props);
  }

  render() {
    return this.compile(field, { ...this.props });
  }
}

