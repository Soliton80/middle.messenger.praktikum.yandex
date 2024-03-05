import Block from "../../utils/Block";
import SignupForm from '../../modules/signupForm/sign_up_form'
import template from './testup.pug'

export class TestUp extends Block {

  constructor() {
    super();
  }

  protected initChildren(): void {
    this.children.TestUp = new SignupForm({ title: 'Sign Up', textLink: 'Log in' });
  }

  render() {
    return this.compile(template, {})
  }
}