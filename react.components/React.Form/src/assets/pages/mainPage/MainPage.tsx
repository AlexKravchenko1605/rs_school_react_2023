import '../../styles/completedForm.css';
import '../../styles/mainPage.css';
import { useSelector } from 'react-redux';
import { ReducerControlForm } from '../../types/formType';

const MainPage = () => {
  const controlForm = useSelector(
    (state: ReducerControlForm) => state.controlForm
  );
  const unControlForm = useSelector(
    (state: ReducerControlForm) => state.unControlForm
  );

  if (controlForm.control_name === '' && unControlForm.unControl_name === '') {
    return (
      <p className="no_results">
        To see the information you need to fill out the forms
      </p>
    );
  }

  if (controlForm.control_name !== '' && unControlForm.unControl_name === '') {
    return (
      <div className="forms_results_wrapper">
        <div className="box7">
          <h2>Control form data</h2>
          <p>Name - {controlForm.control_name}</p>
          <p>Age - {controlForm.control_age}</p>
          <p>Email - {controlForm.control_email}</p>
          <p>Password - {controlForm.control_password}</p>
          <p>Gender - {controlForm.control_select}</p>
          <p>
            Agree to Terms and Conditions -{' '}
            {controlForm.control_T_C ? 'yes' : 'no'}
          </p>
          <p>Country - {controlForm.control_select_country}</p>
        </div>
      </div>
    );
  }

  if (unControlForm.unControl_name !== '' && controlForm.control_name === '') {
    return (
      <div className="forms_results_wrapper">
        <div className="box7">
          <h2>UnControl form data</h2>
          <p>Name - {unControlForm.unControl_name}</p>
          <p>Age - {unControlForm.unControl_age}</p>
          <p>Email - {unControlForm.unControl_email}</p>
          <p>Password - {unControlForm.unControl_password}</p>
          <p>Gender - {unControlForm.unControl_select}</p>
          <p>
            Agree to Terms and Conditions -{' '}
            {unControlForm.unControl_T_C ? 'yes' : 'no'}
          </p>
          <p>Country - {unControlForm.unControl_select_country}</p>
        </div>
      </div>
    );
  }

  if (controlForm.control_name !== '' && unControlForm.unControl_name !== '') {
    return (
      <div className="forms_results_wrapper">
        <div className="box7">
          <h2>Control form data</h2>
          <p>Name - {controlForm.control_name}</p>
          <p>Age - {controlForm.control_age}</p>
          <p>Email - {controlForm.control_email}</p>
          <p>Password - {controlForm.control_password}</p>
          <p>Gender - {controlForm.control_select}</p>
          <p>
            Agree to Terms and Conditions -{' '}
            {controlForm.control_T_C ? 'yes' : 'no'}
          </p>
          <p>Country - {controlForm.control_select_country}</p>
        </div>
        <div className="box7">
          <h2>UnControl form data</h2>
          <p>Name - {unControlForm.unControl_name}</p>
          <p>Age - {unControlForm.unControl_age}</p>
          <p>Email - {unControlForm.unControl_email}</p>
          <p>Password - {unControlForm.unControl_password}</p>
          <p>Gender - {unControlForm.unControl_select}</p>
          <p>
            Agree to Terms and Conditions -{' '}
            {unControlForm.unControl_T_C ? 'yes' : 'no'}
          </p>
          <p>Country - {unControlForm.unControl_select_country}</p>
        </div>
      </div>
    );
  }
};

export { MainPage };
