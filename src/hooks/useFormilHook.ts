import {useFormik} from 'formik';

export const useFormilHook = (
  initialValues: any,
  schemaValidation: any,
  onSubmit: any,
) => {
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: schemaValidation(),
    onSubmit: onSubmit,
  });

  return formik;
};
