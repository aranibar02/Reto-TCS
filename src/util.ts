const blankValidation = (fieldName: any, fieldValue: any) => {
    if (fieldValue.trim() === '') {
      return `${fieldName} es requerido`;
    }
    return null;
  };

  const emailValidation = (email: string) => {
    if (
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        email,
      )
    ) {
      return null;
    }
    if (email.trim() === '') {
      return 'Email es requerido';
    }
    return 'Ingrese un correo válido';
  };

const getNumberKeysEmpty = (obj: any) => {
  return Object.keys(obj).filter(key => obj[key] === null || obj[key] === undefined).length;
}
  

  export {
    blankValidation,
    emailValidation,
    getNumberKeysEmpty,
  }