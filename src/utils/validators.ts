import validator from "validator";

export function setValidator(
  inputElement: HTMLInputElement,
  validator: (argument: string) => boolean,
  events: string[] = ["blur", "focus"]
) {
  events.forEach((event) => {
    inputElement.addEventListener(event, () => {
      if (validator(inputElement.value)) {
        inputElement.style.borderWidth = "0px";
        console.log(inputElement.value);
      } else {
        inputElement.style.setProperty("border-width", "2px", "important");
        inputElement.style.borderColor = "red";
      }
    });
  });
}

export function validateLogin(login: string): boolean {
  return (
    validator.isAlphanumeric(login, undefined, { ignore: "[-_]" }) &&
    !validator.isNumeric(login) &&
    validator.isByteLength(login, { min: 3, max: 20 })
  );
}

export function validateEmail(email: string): boolean {
  return validator.isEmail(email);
}

export function validateName(name: string): boolean {
  return validator.isAlpha(name) && name[0] == name[0].toUpperCase();
}

export function validatePhone(name: string): boolean {
  return (
    validator.isNumeric(name) && validator.isLength(name, { min: 10, max: 15 })
  );
}

export function validateMessage(message: string): boolean {
  return !validator.isEmpty(message);
}

export function validatePassword(password: string): boolean {
  return validator.isStrongPassword(password);
}
