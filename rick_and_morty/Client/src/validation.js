const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const numeroRegex = /\d/;

export function validation(userData) {
  let errors = {};

  userData.email.length === 0 || userData.email.length > 35
    ? (errors.email =
        "La longitud del email debe tener entre 0 y 35 caracteres")
    : (errors.email = "");
  !regexEmail.test(userData.email)
    ? (errors.email = "Debe ser un correo electrónico")
    : (errors.email = "");
  numeroRegex.test(userData.password)
    ? (errors.password = "El password debe contener al menos un numero")
    : (errors.passoword = "");
  userData.password.length < 6 || !userData.password.length > 10
    ? (errors.password = "El password debe contener entre 6 y 10 caracteres")
    : (errors.password = "");
  return errors;
}
