import * as yup from 'yup';
import {
  VALIDATION_ERROR_EMAIL,
  VALIDATION_ERROR_REQUIRED,
  getValidationErrorMinMessage,
} from './validators';

const FeedbackFormValidationSchemaPrototype = yup.object({
  name: yup.string().required(),
  family: yup.string().required(),
  email: yup
    .string()
    .email(VALIDATION_ERROR_EMAIL)
    .required(VALIDATION_ERROR_REQUIRED),
  category: yup.string().required(VALIDATION_ERROR_REQUIRED),
  message: yup
    .string()
    .min(10, getValidationErrorMinMessage(10))
    .required(VALIDATION_ERROR_REQUIRED),
  img: yup.string(),
});

export interface Feedback
  extends yup.Asserts<typeof FeedbackFormValidationSchemaPrototype> {}

export const FeedbackFormValidationSchema =
  FeedbackFormValidationSchemaPrototype.shape(
    {
      name: yup.string().when('family', {
        is: (family: string) => !family,
        then: yup.string().required(VALIDATION_ERROR_REQUIRED),
      }),
      family: yup.string().when('name', {
        is: (name: string) => !name,
        then: yup.string().required(VALIDATION_ERROR_REQUIRED),
      }),
    },
    [['family', 'name']],
  );
