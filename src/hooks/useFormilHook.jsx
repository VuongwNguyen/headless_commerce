import {useFormik} from 'formik';

export const useFormilHook = (initialValues, schemaValidation, onSubmit) => {
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: schemaValidation(),
    onSubmit: onSubmit,
  });

  return formik;
};
