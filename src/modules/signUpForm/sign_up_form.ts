import Block from '../../utils/Block';
import Button from '../../components/button/button';
import Title from "../../components/title/title";
import Field from '../../components/field/field';
import sign_up_form from './sign_up_form.pug';

type Props = {
  title: string,
}

export default class SignupForm extends Block {
  constructor(props?: Props) {
    super(props);
  }

  protected initChildren(): void {

    this.children.title = new Title({ title: 'Sign Up' })

    this.children.fields = [
      { label: 'email', autocomplete: 'email', placeholder: "kirill@sukharev.ru" },
      { label: 'login', autocomplete: 'username', placeholder: "username" },
      { label: 'first_name', autocomplete: 'name', placeholder: "Vanya" },
      { label: 'second_name', autocomplete: 'family-name', placeholder: "Ivanov" },
      { label: 'phone', autocomplete: 'tel', placeholder: "+7 (777) 777 77 77" },
      { label: 'password', autocomplete: 'current-password', type: 'password' },
      { label: 'repeat password', autocomplete: 'current-password', type: 'password' },
    ].map(field => new Field({ label: field.label, autocomplete: field.autocomplete, type: field.type, placeholder: field.placeholder }))

    this.children.button = new Button({ label: 'Sign Up' })
  }

  render() {
    return this.compile(sign_up_form, { ...this.props })
  }
}

