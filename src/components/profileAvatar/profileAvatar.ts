import Block from '../../utils/Block';
import profileAvatar from './profileAvatar.pug';

type Props = {
  avatar: string;
};

export default class ProfileAvatar extends Block {
  // eslint-disable-next-line no-useless-constructor
  constructor(props: Props) {
    super(props);
  }

  render() {
    return this.compile(profileAvatar, { ...this.props });
  }
}
