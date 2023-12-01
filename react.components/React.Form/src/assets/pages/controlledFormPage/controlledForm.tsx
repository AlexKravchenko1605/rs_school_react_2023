import '../../styles/formsStyle.css';

import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';
import { updateStateWidthControlFormResult } from '../../store/controlFormSlice';

const schema = Yup.object({
  control_name: Yup.string()
    .matches(
      /^[A-ZА-Я]{1}[a-zА-Яа-я]{1,3}([a-zа-я]{0,11})?( [A-ZА-Я]{1})?([a-zа-я]{1,14})?$/,
      'Name must begin with a capital letter'
    )
    .min(3, 'Name must be longer than 3 characters')
    .max(25, 'Too long name')
    .required('Required field'),

  control_age: Yup.number()
    .typeError('you must specify a number')
    .min(14, 'You must be over 14 years old')
    .max(110, 'Are you shoure?')
    .integer('Please,enter truth your age')
    .positive('Please,enter positive value')
    .required('Required field'),
  control_email: Yup.string()
    .email('Invalid email')
    .required('Email is required'),
  control_password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .matches(
      /^(?=.*[A-ZА-Я])(?=.*[a-zа-я])(?=.*\d)(?=.*[\W])(?!.*\s).{8,}$/,
      'Passwor should contain 1 number, 1 uppercased letter, 1 lowercased letter, 1 special character'
    )
    .required('Password is required'),
  control_confirm_password: Yup.string()
    .oneOf([Yup.ref('control_password')], 'Passwords must match')
    .required('Confirm Password is required'),

  control_select: Yup.string()
    .required('Gender is required')
    .oneOf(['male', 'female'], 'Please indicate gender')
    .label('control_select'),

  control_select_country: Yup.string()
    .required('Country is required')
    .oneOf(
      ['Belarus', 'Russia', 'England', 'Germany', 'Australia'],
      'Please choose country'
    )
    .label('control_select_country'),

  control_T_C: Yup.boolean()
    .oneOf([true], 'You need to accept the terms and conditions')
    .required('Required field'),

  // unControl_avatar: Yup.mixed<File>()
  //   .nullable()
  //   .test(
  //     'fileSize',
  //     'File too large',
  //     (file) => !file || (file && file.size <= FILE_SIZE)
  //   )
  //   .test(
  //     'fileFormat',
  //     'Unsupported Format',
  //     (file) => !file || (file && SUPPORTED_FORMATS.includes(file.type))
  //   ),
});

type FormData = Yup.InferType<typeof schema>;
const ControlledForm: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { isDirty, isValid, errors },
  } = useForm<FormData>({
    mode: 'onChange',
    resolver: yupResolver(schema),
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

      <form className="decor" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-inner">
          <h3>Controlled form</h3>
          <label>Name</label>
          <input
            // type="text"
            // name="control_name"
            // id="control_name"
            // autoComplete="off"
            // required
            {...register('control_name')}
          />
          {errors.control_name && <p>{errors.control_name.message}</p>}

          <label>Age</label>
          <input
            // type="text"
            // name="control_age"
            // id="control_age"
            // autoComplete="off"
            // required
            {...register('control_age')}
          />
          {errors.control_age && <p>{errors.control_age.message}</p>}
          <label>E-mail</label>
          <input
            // type="email"
            // name="control_email"
            // id="control_email"
            // autoComplete="off"
            // required

            {...register('control_email')}
          />
          {errors.control_email && <p>{errors.control_email.message}</p>}
          <label>Password</label>
          <input
            // type="password"
            // name="control_password"
            // id="control_password"
            // autoComplete="off"
            // placeholder="password"
            // required
            {...register('control_password')}
          />
          {errors.control_password && <p>{errors.control_password.message}</p>}
          <label>Confirm the password</label>
          <input
            // type="password"
            // name="control_confirm_passwor"
            // id="control_confirm_passwor"
            // autoComplete="off"
            // placeholder="confirm password"
            // required
            {...register('control_confirm_password')}
          />

          {errors.control_confirm_password && (
            <p>{errors.control_confirm_password.message}</p>
          )}
          <label>Select gender</label>
          <select
            // name="control_select"
            // id="control_select"
            {...register('control_select')}
          >
            <option value="control_not specified">not specified</option>
            <option value="male">male</option>
            <option value="female">female</option>
          </select>
          {errors.control_select && <p>{errors.control_select.message}</p>}
          <div className="terms_and_conditions">
            <input
              // id="control_T_C"
              // name="control_T_C"
              type="checkbox"
              {...register('control_T_C')}
            />
            <label>Agree to Terms and Conditions</label>
            {errors.control_T_C && <p>{errors.control_T_C.message}</p>}
          </div>

          <label>Select country</label>
          <select
            // name="control_select_country"
            // autoComplete="on"
            // id="control_select_country"
            {...register('control_select_country')}
          >
            <option value="">Country</option>
            <option value="Belarus">Belarus</option>
            <option value="Russia">Russia</option>
            <option value="England">England</option>
            <option value="Germany">Germany</option>
            <option value="Australia">Australia</option>
          </select>
          {errors.control_select_country && (
            <p>{errors.control_select_country.message}</p>
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
