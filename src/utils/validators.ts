import validator from 'validator';
import ErrorMessage from '../components/errorMessage/errorMessage';

class Validator {
  static setValidator(
    inputElement: HTMLInputElement,
    myValidator: (argument: string) => string,
    events: string[] = ['blur', 'click'],
  ): void {
    let errorMessage = '';
    const errorElement = new ErrorMessage(inputElement).element;

    events.forEach((event) => {
      inputElement.addEventListener(event, () => {
        errorMessage = myValidator(inputElement.value);
        if (errorMessage) {
          inputElement.style.borderColor = 'var(--red-color)';
          if (errorElement) {
            errorElement.textContent = errorMessage;
          }
        } else {
          inputElement.style.borderColor = 'var(--primary-color)';
          if (errorElement) {
            errorElement.textContent = '';
          }
          console.log(inputElement.value);
        }
      });
    });
  }

  static validateLogin(login: string): string {
    if (validator.isEmpty(login)) {
      return 'login field cannot be empty';
    }
    if (!validator.isAlphanumeric(login, undefined, { ignore: '[-_]' })) {
      return 'Login must be alphanumeric and can include - and _';
    }
    if (validator.isNumeric(login)) {
      return 'Login cannot be entirely numeric';
    }
    if (!validator.isByteLength(login, { min: 3, max: 20 })) {
      return 'Login must be between 3 and 20 characters long';
    }
    return '';
  }

  static validateEmail(email: string): string {
    if (validator.isEmpty(email)) {
      return 'email field cannot be empty';
    }
    if (!validator.isEmail(email)) {
      return 'Invalid email format';
    }
    return '';
  }

  static validateName(name: string): string {
    if (validator.isEmpty(name)) {
      return 'name field cannot be empty';
    }
    if (!validator.isAlpha(name)) {
      return 'Name must only contain alphabetic characters';
    }
    if (name[0] !== name[0].toUpperCase()) {
      return 'Name must start with an uppercase letter';
    }
    return '';
  }

  static validatePhone(phone: string): string {
    if (validator.isEmpty(phone)) {
      return 'phone field cannot be empty';
    }
    if (!validator.isNumeric(phone)) {
      return 'Phone number must only contain numeric characters';
    }
    if (!validator.isLength(phone, { min: 10, max: 15 })) {
      return 'Phone number must be between 10 and 15 characters long';
    }
    return '';
  }

  static validateMessage(message: string): string {
    if (validator.isEmpty(message)) {
      return 'Message cannot be empty';
    }
    return '';
  }

  static validatePassword(password: string): string {
    if (validator.isEmpty(password)) {
      return 'password field cannot be empty';
    }
    if (!validator.isLength(password, { min: 8 })) {
      return 'Password must be at least 8 characters long';
    }
    if (!/[A-Z]/.test(password)) {
      return 'Password must contain at least one uppercase letter';
    }
    if (!/[a-z]/.test(password)) {
      return 'Password must contain at least one lowercase letter';
    }
    if (!/[0-9]/.test(password)) {
      return 'Password must contain at least one number';
    }
    if (!/[^A-Za-z0-9]/.test(password)) {
      return 'Password must contain at least one special character';
    }
    return '';
  }
}

export default Validator;
