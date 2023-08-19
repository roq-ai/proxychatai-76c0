import * as yup from 'yup';

export const connectionValidationSchema = yup.object().shape({
  status: yup.string().required(),
  user_id1: yup.string().nullable().required(),
  user_id2: yup.string().nullable().required(),
});
