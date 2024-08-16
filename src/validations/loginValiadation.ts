import * as Yup from 'yup';
import {emailPattern, passwordPattern} from './pattern';

export const loginValidation = () => {
  return Yup.object().shape({
    email: Yup.string()
      .email('Invalid email')
      .required('Email is required')
      .matches(emailPattern, 'Email must be in correct format'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters')
      .matches(
        passwordPattern,
        'Password must contain at least uppercase letter, lowercase letter, number and special character',
      ),
  });
};
