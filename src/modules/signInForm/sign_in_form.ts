import Block from "../../utils/Block";
import Button from "../../components/button/button";
import Field from "../../components/field/field";
import Title from "../../components/title/title";
import sign_in_form from "./sign_in_form.pug";

type Props = {
  textLink: string,
}

export default class SigninForm extends Block {
  constructor(props: Props) {
    super(props);
  }

  protected initChildren(): void {
    this.children.title = new Title({ title: 'Sign In' })
    this.children.fields = [
      { label: 'login', autocomplete: 'name', placeholder: "Vanya" },
      { label: 'password', autocomplete: 'current-password', type: 'password' },
    ].map(field => new Field({ label: field.label, autocomplete: field.autocomplete, type: field.type, placeholder: field.placeholder }))

    this.children.button = new Button({ label: 'Sign In' })
  }

  render() {
    return this.compile(sign_in_form, { ...this.props })
  }
}