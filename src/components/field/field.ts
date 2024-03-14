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
  classDiv?: string;
  classLabel?: string;
  events?: {
    blur: () => void;
    focus: () => void;
  }
};

export default class Field extends Block {
  // eslint-disable-next-line no-useless-constructor
  constructor(props: Props) {
    super(props);
  }

  public getLabel(): string {
    return this.props.label;
  }

  render() {
    return this.compile(field, { ...this.props });
  }
}
