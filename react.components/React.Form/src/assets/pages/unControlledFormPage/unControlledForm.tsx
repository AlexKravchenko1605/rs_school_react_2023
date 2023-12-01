import '../../styles/formsStyle.css';
import * as Yup from 'yup';

import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateStateWidthUNControlFormResult } from '../../store/unControlFormSlice';

const schema = Yup.object({
  unControl_name: Yup.string()
    .matches(
      /^[A-ZА-Я]{1}[a-zА-Яа-я]{1,3}([a-zа-я]{0,11})?( [A-ZА-Я]{1})?([a-zа-я]{1,14})?$/,
      'Name must begin with a capital letter'
    )
    .min(3, 'Name must be longer than 3 characters')
    .max(25, 'Too long name')
    .required('Required field'),

  unControl_age: Yup.number()
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
const initialValues = {
  unControl_name: '',
  unControl_age: '',
  unControl_email: '',
  unControl_password: '',
  unControl_confirm_password: '',
  unControl_select: '',
  unControl_select_country: '',
  unControl_T_C: false,
};
const UnControlledForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: schema,
    validateOnBlur: true,
    onSubmit: async (values, { resetForm }) => {
      console.log(values);
      dispatch(
        updateStateWidthUNControlFormResult({
          unControl_name: values.unControl_name,
          unControl_age: values.unControl_age,
          unControl_email: values.unControl_email,
          unControl_password: values.unControl_password,
          unControl_confirm_password: values.unControl_confirm_password,
          unControl_select: values.unControl_select,
          unControl_T_C: values.unControl_T_C,
          unControl_select_country: values.unControl_select_country,
        })
      );
      navigate('/');
      resetForm();
    },
  });

  return (
    <>
      <h1>form created using uncontrolled components approach</h1>

      <form className="decor" onSubmit={formik.handleSubmit}>
        <div className="form-inner">
          <h3> Uncontrolled form</h3>
          <label htmlFor="unControl_name">Name</label>
          <input
            type="text"
            name="unControl_name"
            id="unControl_name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.unControl_name}
          />
          {formik.errors.unControl_name ? formik.errors.unControl_name : ''}

          <label htmlFor="unControl_age">Age</label>
          <input
            type="text"
            name="unControl_age"
            id="unControl_age"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.unControl_age}
          />
          {formik.errors.unControl_age ? formik.errors.unControl_age : ''}
          <label htmlFor="unControl_email">E-mail</label>
          <input
            type="email"
            name="unControl_email"
            id="unControl_email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.unControl_email}
          />
          {formik.errors.unControl_email ? formik.errors.unControl_email : ''}
          <label htmlFor="unControl_password">Password</label>
          <input
            type="password"
            name="unControl_password"
            id="unControl_password"
            placeholder="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.unControl_password}
          />
          {formik.errors.unControl_password
            ? formik.errors.unControl_password
            : ''}
          <label htmlFor="unControl_confirm_password">
            Confirm the password
          </label>
          <input
            type="password"
            name="unControl_confirm_password"
            id="unControl_confirm_password"
            placeholder="confirm password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.unControl_confirm_password}
          />
          {formik.errors.unControl_confirm_password
            ? formik.errors.unControl_confirm_password
            : ''}
          <label htmlFor="unControl_select">Select gender</label>
          <select
            name="unControl_select"
            id="unControl_select"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.unControl_select}
          >
            <option value="not specified">not specified</option>
            <option value="male">male</option>
            <option value="female">female</option>
          </select>
          {formik.errors.unControl_select ? formik.errors.unControl_select : ''}
          <div className="terms_and_conditions">
            <input
              id="unControl_T_C"
              name="unControl_T_C"
              type="checkbox"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <label htmlFor="unControl_T_C">Agree to Terms and Conditions</label>
          </div>
          {formik.errors.unControl_T_C ? formik.errors.unControl_T_C : ''}

          <label htmlFor="unControl_select_country">Select country</label>
          <select
            name="unControl_select_country"
            autoComplete="on"
            id="unControl_select_country"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.unControl_select_country}
          >
            <option value="Country">Country</option>
            <option value="Belarus">Belarus</option>
            <option value="Russia">Russia</option>
            <option value="England">England</option>
            <option value="Germany">Germany</option>
            <option value="Australia">Australia</option>
          </select>
          {formik.errors.unControl_select_country
            ? formik.errors.unControl_select_country
            : ''}

          <button type="submit" disabled={!formik.isValid}>
            Send
          </button>
        </div>
      </form>
    </>
  );
};

export { UnControlledForm };
