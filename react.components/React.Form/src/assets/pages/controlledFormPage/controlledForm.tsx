import '../../styles/formsStyle.css';

const ControlledForm = () => {
  return (
    <>
      <h1>form created with the help of the React Hook Form</h1>

      <form className="decor">
        <div className="form-inner">
          <h3>Controlled form</h3>
          <label htmlFor="control_name">Name</label>
          <input
            type="text"
            name="control_name"
            id="control_name"
            autoComplete="off"
            required
          />

          <label htmlFor="control_age">Age</label>
          <input
            type="text"
            name="control_age"
            id="control_age"
            autoComplete="off"
            required
          />

          <label htmlFor="control_email">E-mail</label>
          <input
            type="email"
            name="control_email"
            id="control_email"
            autoComplete="off"
            required
          />

          <label htmlFor="control_password">Password</label>
          <input
            type="password"
            name="control_password"
            id="control_password"
            autoComplete="off"
            placeholder="password"
            required
          />

          <label htmlFor="control_confirm_passwor">Confirm the password</label>
          <input
            type="password"
            name="control_confirm_passwor"
            id="control_confirm_passwor"
            autoComplete="off"
            placeholder="confirm password"
            required
          />
          <label htmlFor="control_select">Select gender</label>
          <select name="control_select" id="control_select">
            <option value="control_not specified">not specified</option>
            <option value="control_male">male</option>
            <option value="control_female">female</option>
          </select>
          <div className="terms_and_conditions">
            <input id="control_T&C" name="control_T&C" type="checkbox" />
            <label htmlFor="control_T&C">Agree to Terms and Conditions</label>
          </div>

          <label htmlFor="control_avatar">Choose a profile picture:</label>
          <input
            type="file"
            id="control_avatar"
            name="control_avatar"
            accept="image/png, image/jpeg"
          />

          <label htmlFor="control_select_country">Select country</label>
          <select
            name="control_select_country"
            autoComplete="on"
            id="control_select_country"
          >
            <option value="">Country</option>
            <option value="control_Belarus">Belarus</option>
            <option value="control_Russia">Russia</option>
            <option value="control_England">England</option>
            <option value="control_Germany">Germany</option>
            <option value="control_Australia">Australia</option>
          </select>
          <input type="submit" value="Отправить" />
        </div>
      </form>
    </>
  );
};

export { ControlledForm };
