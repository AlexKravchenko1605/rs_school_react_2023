import * as Yup from 'yup';

export const unControlFormSchema = Yup.object({
  unControl_name: Yup.string()
    .matches(
      /^[A-ZА-Я]{1}[a-zА-Яа-я]{1,3}([a-zа-я]{0,11})?( [A-ZА-Я]{1})?([a-zа-я]{1,14})?$/,
      'Name must begin with a capital letter'
    )
    .min(3, 'Name must be longer than 3 characters')
    .max(25, 'Too long name')
    .required('Required field'),

  unControl_age: Yup.number()
    .typeError('You must specify a number')
    .min(14, 'You must be over 14 years old')
    .max(110, 'Are you shoure?')
    .integer('Please,enter truth your age')
    .positive('Please,enter positive value')
    .required('Required field'),
  unControl_email: Yup.string()
    .email('Invalid email')
    .required('Email is required'),
  unControl_password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .matches(
      /^(?=.*[A-ZА-Я])(?=.*[a-zа-я])(?=.*\d)(?=.*[\W])(?!.*\s).{8,}$/,
      'Passwor should contain 1 number, 1 uppercased letter, 1 lowercased letter, 1 special character'
    )
    .required('Password is required'),
  unControl_confirm_password: Yup.string()
    .oneOf([Yup.ref('unControl_password')], 'Passwords must match')
    .required('Confirm Password is required'),

  unControl_select: Yup.string()
    .required('Gender is required')
    .oneOf(['male', 'female'], 'Please indicate gender')
    .label('unControl_select'),

  unControl_select_country: Yup.string()
    .required('Country is required')
    .oneOf(
      ['Belarus', 'Russia', 'England', 'Germany', 'Australia'],
      'Please choose country'
    )
    .label('unControl_select_country'),

  unControl_T_C: Yup.boolean()
    .oneOf([true], 'You need to accept the terms and conditions')
    .required('Required field'),
});
