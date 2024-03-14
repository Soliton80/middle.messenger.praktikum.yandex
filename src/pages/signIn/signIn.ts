import Block from '../../utils/Block';
import SigninForm from '../../modules/signInForm/signInForm';
import signIn from './signIn.pug';

export default class SignIn extends Block {
  protected initChildren(): void {
    this.children.SignIn = new SigninForm({ textLink: 'Sign Up' });
  }

  render() {
    return this.compile(signIn, {
      title: 'Sign In',
      description: 'Sign in to chat',
    });
  }
}
