import * as yup from "yup";

export const validationSchema = yup.object({
  firstname: yup.string().required('Firstname is required'),
  lastname: yup.string().required('Lastname is required'),
  documentNo: yup.string().required('Document No is required'),
  documentType: yup.string().required('Document Type is required'),
  birthDate: yup.string().required('Birth Date is required'),
  birthPlace: yup.string().required('Birth Place is required'),
  genderSelect: yup.string().required('Gender is required'),
});