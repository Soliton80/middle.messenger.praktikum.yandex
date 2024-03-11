import Block from '../../utils/Block';
import Button from '../../components/button/button';
import Title from "../../components/title/title";
import Field from '../../components/field/field';
import sign_up_form from './sign_up_form.pug';
import {
  setValidator,
  validateEmail,
  validateLogin,
  validateName,
  validatePhone,
  validatePassword,
} from "../../utils/validators";

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
      { label: 'password', autocomplete: 'current-password', type: 'password', classInput: 'input-text password-mask' },
      { label: 'repeat password', autocomplete: 'current-password', type: 'password', classInput: 'input-text password-mask'},
    ].map(field => new Field({ label: field.label, autocomplete: field.autocomplete, type: field.type, placeholder: field.placeholder, classInput: field.classInput }))

    this.children.button = new Button({ label: 'Sign Up' })

    if (Array.isArray(this.children.fields)) {
      this.children.fields.forEach((field: Block) => {
        if (field instanceof Field && field.element !== null) {
          const inputElement = field.element.querySelector('input');
          if (inputElement !== null) {
            inputElement.addEventListener('blur', () => {
              switch (field.getLabel()) {
                case 'email':
                  setValidator(inputElement, validateEmail);
                  break;
                case 'login':
                  setValidator(inputElement, validateLogin);
                  break;
                case 'first_name':
                case 'second_name':
                  setValidator(inputElement, validateName);
                  break;
                case 'phone':
                  setValidator(inputElement, validatePhone);
                  break;
                case 'password':
                  setValidator(inputElement, validatePassword);
                  break;
              }
            });
          }
        }
      });
    }

    if (this.children.button.element !== null) {
      this.children.button.element.addEventListener('click', () => {
        if (Array.isArray(this.children.fields)) {
          this.children.fields.forEach((field: Block) => {
            if (field instanceof Field && field.element !== null) {
              const inputElement = field.element.querySelector('input');
              if (inputElement !== null) {
                console.log(inputElement.value);
              }
            }
          });
        }
      });
    }
  }

  render() {
    return this.compile(sign_up_form, { ...this.props })
  }
}