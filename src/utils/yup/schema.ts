import * as yup from 'yup';

export const schema = yup.object().shape({
  name: yup
    .string()
    .required('Name is required')
    .matches(/^[A-Z][a-z]*$/, 'The name must begin with a capital letter'),
  age: yup
    .number()
    .required('Age is required')
    .positive('Age must be a positive number')
    .integer('Age must be an integer'),
  email: yup
    .string()
    .email('Email format is not valid')
    .required('Email is required'),
  password: yup
    .string()
    .required('Password is required')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/,
      'Weak password'
    ),
  confirmPassword: yup
    .string()
    .required('Confirm the password')
    .oneOf([yup.ref('password')], "Passwords don't match"),
  gender: yup.string().required('Select gender'),
  acceptTerms: yup.bool().oneOf([true], 'You must accept the terms'),
  picture: yup
    .mixed<FileList>()
    .test(
      'fileSize',
      'File too big',
      (files) =>
        !files ||
        files.length === 0 ||
        Array.from(files).every((file) => file.size <= 2000000)
    )
    .test(
      'fileType',
      'Invalid file format',
      (files) =>
        !files ||
        files.length === 0 ||
        Array.from(files).every((file) =>
          ['image/jpeg', 'image/png'].includes(file.type)
        )
    ),
  country: yup
    .string()
    .required('Select the country')
    .oneOf(['country1', 'country2'], 'Invalid country'),
});
