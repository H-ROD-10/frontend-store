export function loginValidation(data) {
  let errors = {};

  //Validar Email------------------------------>
  if (!data.email) {
    errors.email = "El email es obligatorio";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(data.email)) {
    errors.email = "Email no válido";
  }
  //Validar Password---------------------------->
  if (!data.password) {
    errors.password = "El password es obligatorio";
  } else if (data.password.length < 8) {
    errors.password = "El password debe contener al menos 8 caracteres";
  }

  return errors;
}
