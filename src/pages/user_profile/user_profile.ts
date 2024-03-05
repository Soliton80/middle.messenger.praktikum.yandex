import Block from '../../utils/Block'
// import FormChangePassword from '../../modules/formChangePassword'
// import ProfileForm from '../../modules/profileForm'
import ProfileAvatar from '../../components/profileAvatar'
import template from './template.pug';

type Props = {
  nickName?: string
}

export class Profile extends Block {
  constructor(props: Props) {
    super(props);
  }

  protected initChildren(): void {

    // this.children.formChangePassword = new FormChangePassword();
    // this.children.formProfile = new ProfileForm();
    this.children.profileAvatar = new ProfileAvatar({ avatar: 'src/assets/avatar.svg' });
  }

  render() {
    return this.compile(template, { ...this.props })
  }
}
