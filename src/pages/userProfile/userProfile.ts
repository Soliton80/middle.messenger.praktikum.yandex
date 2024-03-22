import Block from '../../utils/Block';
import Profile from '../../modules/userProfileModul/userProfileModul';
import userProfile from './userProfile.pug';

export default class UserProfile extends Block {
  protected initChildren(): void {
    this.children.UserProfile = new Profile();
  }

  render() {
    return this.compile(userProfile, { description: 'User Profile' });
  }
}
