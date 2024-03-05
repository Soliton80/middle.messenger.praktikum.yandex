import Block from '../../utils/Block'
import SignupForm from '../../modules/signUpForm/sign_up_form'
import template from './sign_up.pug'

export class SignUp extends Block {

  constructor() {
    super();
  }

  protected initChildren(): void {
    this.children.SignUp = new SignupForm({ title: 'Sign Up', textLink: 'Log in' });
  }

  render() {
    return this.compile(template, {})
  }
}
