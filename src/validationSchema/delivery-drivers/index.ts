import * as yup from 'yup';

export const deliveryDriverValidationSchema = yup.object().shape({
  availability: yup.string().required(),
  vehicle_type: yup.string().required(),
  license_number: yup.string().required(),
  user_id: yup.string().nullable().required(),
});
