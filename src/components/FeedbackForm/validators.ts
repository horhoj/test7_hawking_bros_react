export const VALIDATION_ERROR_REQUIRED = 'должно быть заполнено!';
export const VALIDATION_ERROR_EMAIL = 'введена не почта!';
export const getValidationErrorMinMessage = (min: number): string =>
  `Введите не менее ${min} символов`;
