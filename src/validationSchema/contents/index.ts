import * as yup from 'yup';

export const contentValidationSchema = yup.object().shape({
  type: yup.string().required(),
  title: yup.string().required(),
  description: yup.string().nullable(),
  user_id: yup.string().nullable(),
});
