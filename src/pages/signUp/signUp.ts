import Block from '../../utils/Block';
import SignupForm from '../../modules/signUpForm/signUpForm';
import signUp from './signUp.pug';

export default class SignUp extends Block {
  protected initChildren(): void {
    this.children.SignUp = new SignupForm();
  }

  render() {
    return this.compile(signUp, { description: 'Sign Up to chats' });
  }
}
