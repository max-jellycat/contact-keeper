import React, { useState, useContext } from 'react';
import FormInput from '../../helpers/form-input/form-input.component';
import AlertContext from '../../../context/alert/alert.context';

const Register = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });

  const { setAlert } = useContext(AlertContext);

  const {
    name, email, password, passwordConfirm,
  } = user;

  const handleChange = ({ target }) => {
    setUser({ ...user, [target.name]: target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !password) setAlert('All fields must be filled', 'danger');
    else if (password !== passwordConfirm) setAlert('Passwords must match', 'danger');
    else {
      console.log('User', user);
    }
  };


  return (
    <div className="register-page">
      <h1 className="title">Register</h1>
      <div className="card p-1 pt-0">
        <div className="card-content">
          <form onSubmit={handleSubmit}>
            <FormInput
              type="text"
              name="name"
              placeholder="Name"
              icon="user"
              handleChange={handleChange}
              value={name}
            />
            <FormInput
              type="email"
              name="email"
              placeholder="Email"
              icon="envelope-open"
              handleChange={handleChange}
              value={email}
            />
            <FormInput
              type="password"
              name="password"
              placeholder="Password"
              icon="key"
              handleChange={handleChange}
              value={password}
            />
            <FormInput
              type="password"
              name="passwordConfirm"
              placeholder="Confirm password"
              icon="check-double"
              handleChange={handleChange}
              value={passwordConfirm}
            />
            <button type="submit" className="button is-primary has-shadow">
              <span className="icon">
                <i className="fas fa-check" />
              </span>
              <span>Submit</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
