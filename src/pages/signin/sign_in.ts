import Block from "../../utils/Block";
import SigninForm from "../../modules/signInForm/sign_in_form";
import sign_in from './sign_in.pug'


type Props = {
  title: string;
  description: string;
};


export class SignIn extends Block {

  constructor() {
    super();
  }

  protected initChildren(): void {
    this.children.SignIn = new SigninForm({textLink: 'Sign Up' });
  }

  render() {
    return this.compile(sign_in, {title: 'Sign In!!!!!!!!!!!', })
  }
}
