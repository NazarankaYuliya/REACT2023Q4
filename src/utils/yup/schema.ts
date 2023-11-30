import * as yup from 'yup';

export const schema = yup.object().shape({
  name: yup
    .string()
    .required('Please enter a name')
    .matches(/^[A-Z][a-z]*$/, 'The name must begin with a capital letter'),
  age: yup
    .number()
    .required('Please enter an age')
    .positive('Age must be a positive number')
    .typeError('Please enter a valid age as a number'),
  email: yup
    .string()
    .email('Email format is not valid')
    .required('Please enter email'),
  password: yup
    .string()
    .required('Please enter password')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/,
      'Weak password'
    ),
  confirmPassword: yup
    .string()
    .required('Confirm the password')
    .oneOf([yup.ref('password')], "Passwords don't match"),
  gender: yup.string().required('Please select gender'),
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
  country: yup.string().required('Please select country'),
});
