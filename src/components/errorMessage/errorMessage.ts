import Block from '../../utils/Block';
// import errorMessage from './errorMessage.pug';

// type Props = {
//   error: string;


// };

// export default class ErrorMessage extends Block {
//   // eslint-disable-next-line no-useless-constructor
//   constructor(props: Props) {
//     super(props);
//   }

//   render() {
//     return this.compile(errorMessage, { ...this.props });
//   }
// }


// export default class ErrorMessage {
//   inputElement: HTMLInputElement;
//   errorElement: HTMLSpanElement | null;

//   constructor(inputElement: HTMLInputElement) {
//     this.inputElement = inputElement;
//     this.errorElement = this.inputElement.parentNode?.querySelector('.error-message') as HTMLSpanElement;

//     if (!this.errorElement) {
//       this.errorElement = document.createElement('span');
//       this.errorElement.className = 'error-message';
//       this.errorElement.style.color = 'red';
//       this.inputElement.parentNode?.insertBefore(this.errorElement, this.inputElement.nextSibling);
//     }
//   }

//   get element(): HTMLSpanElement | null {
//     return this.errorElement;
//   }
// }


export default class ErrorMessage {
  inputElement: HTMLInputElement;
  errorElement: HTMLSpanElement | null;

  constructor(inputElement: HTMLInputElement) {
    this.inputElement = inputElement;
    this.errorElement = this.inputElement.parentNode?.querySelector('.error-message') as HTMLSpanElement;

    if (!this.errorElement) {
      this.errorElement = document.createElement('div');
      this.errorElement.className = 'error-message';
      this.errorElement.style.color = 'red';
      this.errorElement.style.fontSize = '10px';
      this.inputElement.nextSibling?.parentNode?.insertBefore(this.errorElement, this.inputElement.nextSibling.nextSibling); }
  }

  get element(): HTMLSpanElement | null {
    return this.errorElement;
  }
}
