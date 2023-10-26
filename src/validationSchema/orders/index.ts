import * as yup from 'yup';

export const orderValidationSchema = yup.object().shape({
  order_time: yup.date().required(),
  delivery_time: yup.date().nullable(),
  total_price: yup.number().integer().required(),
  status: yup.string().required(),
  customer_id: yup.string().nullable().required(),
  restaurant_id: yup.string().nullable().required(),
});
