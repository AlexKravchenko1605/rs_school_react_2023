import '../../styles/formsStyle.css';

const UnControlledForm = () => {
  return (
    <>
      <h1>form created using uncontrolled components approach</h1>

      <form className="decor">
        <div className="form-inner">
          <h3>Controlled form</h3>
          <label htmlFor="unControl_name">Name</label>
          <input
            type="text"
            name="unControl_name"
            id="unControl_name"
            required
          />

          <label htmlFor="unControl_age">Age</label>
          <input type="text" name="unControl_age" id="unControl_age" required />

          <label htmlFor="unControl_email">E-mail</label>
          <input
            type="email"
            name="unControl_email"
            id="unControl_email"
            required
          />

          <label htmlFor="unControl_password">Password</label>
          <input
            type="password"
            name="unControl_password"
            id="unControl_password"
            placeholder="password"
            required
          />

          <label htmlFor="unControl_confirm_passwor">
            Confirm the password
          </label>
          <input
            type="password"
            name="unControl_confirm_passwor"
            id="unControl_confirm_passwor"
            placeholder="confirm password"
            required
          />
          <label htmlFor="unControl_select">Select gender</label>
          <select name="unControl_select" id="unControl_select">
            <option value="not specified">not specified</option>
            <option value="male">male</option>
            <option value="female">female</option>
          </select>
          <div className="terms_and_conditions">
            <input id="unControl_T&C" name="unControl_T&C" type="checkbox" />
            <label htmlFor="unControl_T&C">Agree to Terms and Conditions</label>
          </div>

          <label htmlFor="unControl_avatar">Choose a profile picture:</label>

          <input
            type="file"
            id="unControl_avatar"
            name="unControl_avatar"
            accept="image/png, image/jpeg"
          />

          <label htmlFor="unControl_select_country">Select country</label>
          <select
            name="unControl_select_country"
            autoComplete="on"
            id="unControl_select_country"
          >
            <option value="">Country</option>
            <option value="unControl_Belarus">Belarus</option>
            <option value="unControl_Russia">Russia</option>
            <option value="unControl_England">England</option>
            <option value="unControl_Germany">Germany</option>
            <option value="unControl_Australia">Australia</option>
          </select>

          <input type="submit" value="Отправить" />
        </div>
      </form>
    </>
  );
};

export { UnControlledForm };
