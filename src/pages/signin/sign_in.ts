import Block from "../../utils/Block";
import SigninForm from "../../modules/signInForm/sign_in_form";
import template from './sign_in.pug'

export class SignIn extends Block {

  constructor() {
    super();
  }

  protected initChildren(): void {
    this.children.SignIn = new SigninForm({ title: 'Sign In', textLink: 'Sign Up' });
  }

  render() {
    return this.compile(template, {})
  }
}