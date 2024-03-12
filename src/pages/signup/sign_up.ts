import Block from '../../utils/Block'
import SignupForm from '../../modules/signUpForm/sign_up_form'
import sign_up from './sign_up.pug'

export class SignUp extends Block {

  constructor() {
    super();
  }

  protected initChildren(): void {
    this.children.SignUp = new SignupForm();
  }

  render() {
    return this.compile(sign_up, {description: 'Sign Up to chats'})
  }
}
