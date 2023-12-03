import '../../styles/formsStyle.css';

import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateStateWidthUNControlFormResult } from '../../store/unControlFormSlice';
import { unControlFormSchema } from './unControlFormValidationSchema';

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
    validationSchema: unControlFormSchema,
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

      <form
        className="decor"
        autoComplete="true"
        onSubmit={formik.handleSubmit}
      >
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
          {formik.errors.unControl_name && (
            <p className="error_message">{formik.errors.unControl_name}</p>
          )}

          <label htmlFor="unControl_age">Age</label>
          <input
            type="text"
            name="unControl_age"
            id="unControl_age"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.unControl_age}
          />
          {formik.errors.unControl_age && (
            <p className="error_message">{formik.errors.unControl_age}</p>
          )}
          <label htmlFor="unControl_email">E-mail</label>
          <input
            type="email"
            name="unControl_email"
            id="unControl_email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.unControl_email}
          />
          {formik.errors.unControl_email && (
            <p className="error_message">{formik.errors.unControl_email}</p>
          )}
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
          {formik.errors.unControl_password && (
            <p className="error_message">{formik.errors.unControl_password}</p>
          )}
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
          {formik.errors.unControl_confirm_password && (
            <p className="error_message">
              {formik.errors.unControl_confirm_password}
            </p>
          )}
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
          {formik.errors.unControl_select && (
            <p className="error_message">{formik.errors.unControl_select}</p>
          )}
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
          {formik.errors.unControl_T_C && (
            <p className="error_message">{formik.errors.unControl_T_C}</p>
          )}

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
          {formik.errors.unControl_select_country && (
            <p className="error_message">
              {formik.errors.unControl_select_country}
            </p>
          )}

          <button type="submit" disabled={!formik.isValid}>
            Send
          </button>
        </div>
      </form>
    </>
  );
};

export { UnControlledForm };
