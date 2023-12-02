import '../../styles/formsStyle.css';

import * as Yup from 'yup';

import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';

import { updateStateWidthControlFormResult } from '../../store/controlFormSlice';
import { controlFormSchema } from './controlFromValidetionSchema';

type FormData = Yup.InferType<typeof controlFormSchema>;

const ControlledForm: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { isDirty, isValid, errors },
  } = useForm<FormData>({
    mode: 'onChange',
    resolver: yupResolver(controlFormSchema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    dispatch(
      updateStateWidthControlFormResult({
        control_name: data.control_name,
        control_age: data.control_age,
        control_email: data.control_email,
        control_password: data.control_password,
        control_confirm_password: data.control_confirm_password,
        control_select: data.control_select,
        control_T_C: data.control_T_C,
        control_select_country: data.control_select_country,
      })
    );
    navigate('/');
  };

  return (
    <>
      <h1>form created with the help of the React Hook Form</h1>

      <form
        className="decor"
        autoComplete="true"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="form-inner">
          <h3>Controlled form</h3>
          <label>Name</label>
          <input {...register('control_name')} />
          {errors.control_name && (
            <p className="error_message">{errors.control_name.message}</p>
          )}

          <label>Age</label>
          <input {...register('control_age')} />
          {errors.control_age && (
            <p className="error_message">{errors.control_age.message}</p>
          )}
          <label>E-mail</label>
          <input {...register('control_email')} />
          {errors.control_email && (
            <p className="error_message">{errors.control_email.message}</p>
          )}
          <label>Password</label>
          <input type={'password'} {...register('control_password')} />
          {errors.control_password && (
            <p className="error_message">{errors.control_password.message}</p>
          )}
          <label>Confirm the password</label>
          <input type={'password'} {...register('control_confirm_password')} />

          {errors.control_confirm_password && (
            <p className="error_message">
              {errors.control_confirm_password.message}
            </p>
          )}
          <label>Select gender</label>
          <select {...register('control_select')}>
            <option value="control_not specified">not specified</option>
            <option value="male">male</option>
            <option value="female">female</option>
          </select>
          {errors.control_select && (
            <p className="error_message">{errors.control_select.message}</p>
          )}
          <div className="terms_and_conditions">
            <input type="checkbox" {...register('control_T_C')} />
            <label>Agree to Terms and Conditions</label>
            {errors.control_T_C && (
              <p className="error_message">{errors.control_T_C.message}</p>
            )}
          </div>

          <label>Select country</label>
          <select {...register('control_select_country')}>
            <option value="">Country</option>
            <option value="Belarus">Belarus</option>
            <option value="Russia">Russia</option>
            <option value="England">England</option>
            <option value="Germany">Germany</option>
            <option value="Australia">Australia</option>
          </select>
          {errors.control_select_country && (
            <p className="error_message">
              {errors.control_select_country.message}
            </p>
          )}
          <button type="submit" disabled={!isDirty || !isValid}>
            Send
          </button>
        </div>
      </form>
    </>
  );
};

export { ControlledForm };
