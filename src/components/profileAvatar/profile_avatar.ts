import Block from '../../utils/Block'
import profile_avatar from './profile_avatar.pug';

type Props = {
  avatar: string;
};

export default class ProfileAvatar extends Block {
  constructor(props: Props) {
    super(props);
  }
  
  render() {
    return this.compile(profile_avatar, {...this.props});
  }
}
