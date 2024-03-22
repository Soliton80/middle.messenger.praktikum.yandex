import Block from '../../utils/Block';
import Button from '../../components/button/button';
import Field from '../../components/field/field';
import Title from '../../components/title/title';
import signInForm from './signInForm.pug';
import Validator from '../../utils/validators';

type Props = {
  textLink: string,
}

export default class SigninForm extends Block {
  constructor(props: Props) {
    super(props);
  }

  protected initChildren(): void {
    const handleEvent = (validator: (argument: string) => string) => (event: Event) => {
      const target = event.target as HTMLInputElement;
      Validator.setValidator(target, validator);
    };

    this.children.title = new Title({ title: 'Sign In' });

    this.children.fields = [
      {
        label: 'login',
        autocomplete: 'name',
        placeholder: 'Vanya',
        events: {
          blur: handleEvent(Validator.validateLogin),
          click: handleEvent(Validator.validateLogin),
        },
      },
      {
        label: 'password',
        autocomplete: 'current-password',
        type: 'password',
        classInput: 'input-text password-mask',
        events: {
          blur: handleEvent(Validator.validatePassword),
          click: handleEvent(Validator.validatePassword),
        },
      },
    ].map((field) => new Field(field));

    this.children.button = new Button({
      label: 'Sign In',
    });
  }

  render() {
    return this.compile(signInForm, { ...this.props });
  }
}
