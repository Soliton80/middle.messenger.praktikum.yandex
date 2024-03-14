import Block from '../../utils/Block';
import Button from '../../components/button/button';
import Field from '../../components/field/field';
import Title from '../../components/title/title';
import signInForm from './signInForm.pug';
import {
  setValidator,
  validateLogin,
  validatePassword,
} from '../../utils/validators';

type Props = {
  textLink: string,
}

export default class SigninForm extends Block {
  // eslint-disable-next-line no-useless-constructor
  constructor(props: Props) {
    super(props);
  }

  protected initChildren(): void {
    this.children.title = new Title({ title: 'Sign In' });
    this.children.fields = [
      {
        label: 'login',
        autocomplete: 'name',
        placeholder: 'Vanya',
      },
      {
        label: 'password',
        autocomplete: 'current-password',
        type: 'password',
        classInput: 'input-text password-mask',
      },
    ].map((field) => new Field(
      {
        label: field.label,
        autocomplete: field.autocomplete,
        type: field.type,
        placeholder: field.placeholder,
        classInput: field.classInput,
      },
    ));

    this.children.button = new Button({ label: 'Sign In' });

    if (Array.isArray(this.children.fields)) {
      this.children.fields.forEach((field: Block) => {
        if (field instanceof Field && field.element !== null) {
          const inputElement = field.element.querySelector('input');
          if (inputElement !== null) {
            inputElement.addEventListener('blur', () => {
              if (field.getLabel() === 'login') {
                setValidator(inputElement, validateLogin);
              } else if (field.getLabel() === 'password') {
                setValidator(inputElement, validatePassword);
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
    return this.compile(signInForm, { ...this.props });
  }
}
