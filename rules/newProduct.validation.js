export function newProductValidation(data) {
  let errors = {};

  //Validar Name---------------------------->
  if (!data.name) {
    errors.name = "El nombre es obligatorio";
  } else if (data.name.length > 250) {
    errors.name = "El nombre del producto no puede tener más de 250 caracteres";
  }

  //Validar Price---------------------------->
  if (!data.price) {
    errors.price = "El precio es obligatorio";
  } else if (data.price.length > 12) {
    errors.price = "El precio del producto no puede tener más de 12 cifras";
  }

  //Validar Description---------------------------->
  if (!data.description) {
    errors.description = "La descripción es obligatoria";
  } else if (data.description.length > 3000) {
    errors.description =
      "El precio del producto no puede tener más de 3000 caracteres";
  }

  //Validar Stock---------------------------->
  if (!data.stock) {
    errors.stock =
      "El stock es obligatorio y debe expresase en números enteros";
  }

  //Validar Brand---------------------------->
  if (!data.brand) {
    errors.brand = "La marca es obligatoria";
  } else if (data.brand.length > 80) {
    errors.brand = "La marca del producto no puede tener más de 80 caracteres";
  }

  return errors;
}
