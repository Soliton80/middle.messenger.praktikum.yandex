import Block from '../../utils/Block';
import Button from '../../components/button/button';
import Title from '../../components/title/title';
import Field from '../../components/field/field';
import signUpForm from './signUpForm.pug';
import {
  setValidator,
  validateEmail,
  validateLogin,
  validateName,
  validatePhone,
  validatePassword,
} from '../../utils/validators';

type Props = {
  title: string,
}

export default class SignupForm extends Block {
  // eslint-disable-next-line no-useless-constructor
  constructor(props?: Props) {
    super(props);
  }

  protected initChildren(): void {

    const handleEvent = (validator: (argument: string) => string) => (event: Event) => {
      const target = event.target as HTMLInputElement;
      setValidator(target, validator);
    };


    this.children.title = new Title({ title: 'Sign Up' });
    this.children.fields = [
      {
        label: 'email',
        autocomplete: 'email',
        placeholder: 'kirill@sukharev.ru',
        events: {
          blur: handleEvent(validateEmail),
          click: handleEvent(validateEmail),
        },
      },
      {
        label: 'login',
        autocomplete: 'username',
        placeholder: 'username',
        events: {
          blur: handleEvent(validateLogin),
          click: handleEvent(validateLogin),
        },
      },
      {
        label: 'first_name',
        autocomplete: 'name',
        placeholder: 'Vanya',
        events: {
          blur: handleEvent(validateName),
          click: handleEvent(validateName),
        },
      },
      {
        label: 'second_name',
        autocomplete: 'family-name',
        placeholder: 'Ivanov',
        events: {
          blur: handleEvent(validateName),
          click: handleEvent(validateName),
        },
      },
      {
        label: 'phone',
        autocomplete: 'tel',
        placeholder: '+7 (777) 777 77 77',
        events: {
          blur: handleEvent(validatePhone),
          click: handleEvent(validatePhone),
        },
      },
      {
        label: 'password',
        autocomplete: 'current-password',
        type: 'password',
        classInput: 'input-text password-mask',
        events: {
          blur: handleEvent(validatePassword),
          click: handleEvent(validatePassword),
        },
      },
      {
        label: 'repeat password',
        autocomplete: 'current-password',
        type: 'password',
        classInput: 'input-text password-mask',
        events: {
          blur: handleEvent(validatePassword),
          click: handleEvent(validatePassword),
        },
      },
    ].map((field) => new Field(field));
    this.children.button = new Button({ label: 'Sign Up' });

  }

  render() {
    return this.compile(signUpForm, { ...this.props });
  }
}
