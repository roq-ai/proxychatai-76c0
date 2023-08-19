import * as yup from 'yup';

export const recommendationValidationSchema = yup.object().shape({
  content_type: yup.string().required(),
  content_id: yup.string().nullable().required(),
  user_id: yup.string().nullable(),
});
