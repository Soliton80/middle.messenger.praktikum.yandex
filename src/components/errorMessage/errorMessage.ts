export default class ErrorMessage {
  inputElement: HTMLInputElement;

  errorElement: HTMLSpanElement | null;

  constructor(inputElement: HTMLInputElement) {
    this.inputElement = inputElement;
    this.errorElement = this.inputElement.parentNode?.querySelector(
      '.error-message',
    ) as HTMLSpanElement;

    if (!this.errorElement) {
      this.errorElement = document.createElement('div');
      this.errorElement.className = 'error-message';
      this.errorElement.style.color = 'red';
      this.errorElement.style.fontSize = '10px';
      this.inputElement.nextSibling
        ?.parentNode
        ?.insertBefore(
          this.errorElement,
          this.inputElement.nextSibling.nextSibling,
        );
    }
  }

  get element(): HTMLSpanElement | null {
    return this.errorElement;
  }
}
