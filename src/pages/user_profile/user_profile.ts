import Block from '../../utils/Block'
import Profile from '../../modules/user_profile_modul/user_profile_modul'
import user_profile from './user_profile.pug';


export class UserProfile extends Block {
  constructor() {
    super();
  }

  protected initChildren(): void {
    this.children.UserProfile = new Profile();
  }

  render() {
    return this.compile(user_profile, {})
  }
}
