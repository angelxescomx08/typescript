namespace Validations{
  export const validarLongitud = (text: string) => {
    return text.length > 3;
  }

  export const validarPositivo = (num: number) => {
    return num > 0;
  }
}

/**
 * Los namescpaces son como agrupadores de código
 */

Validations.validarLongitud('dasd')