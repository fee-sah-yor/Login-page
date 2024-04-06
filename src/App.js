import "./App.css";
import { useState } from "react";

export const PasswordValidation = () => {
  return <p className='passVal'>* Password must be up to or more than 8 characters</p>;
};

function App() {
  const [details, setDetails] = useState({
    email: "",
    password: "",
    confirm: "",
  });
  const [error, setError] = useState(false);
  const [detailsArr, setDetailsArr] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // to check for errors while inputing email
    if (email.includes("@", ".com")) {
      setError(false);
    } else {
      setError(true);
    }
  };

  let { email, password, confirm } = details;
  const handleSubmit = () => {
    setDetailsArr([...detailsArr, { email, confirm, password }]);
    // to clear form after submission
    setDetails({ email: "", confirm: "", password: "" });
    // to check if both passwords match
    if (confirm !== password && email === ' ') {
      setError(true);
    } else {
      setError(false);
    }
  };

  const formValid = () => {
      if(email === ' '){
        return false
      } 
      return true;
  }

  return (
    <div>
      <section>
        <form>
          {/* Form header */}

          <div className="formHeader">
            <h1>Sign Up</h1>
            <p>Log in with the data provided during your registeration</p>
          </div>
          {/* =========error message=========== */}
          {error && (
            <div className="error">
              <p>Wrong password or email address</p>
            </div>
          )}

          {/* input field */}
          <article className="inputField">
            <div className="email">
              <p>Email</p>
              <input
                type="email"
                name="email"
                required
                placeholder="your email address"
                onChange={handleChange}
                value={details.email}
              />
            </div>
            <div className="password">
              <p>Password</p>
              <input
                type="Password"
                name="password"
                required
                placeholder="type your password"
                onChange={handleChange}
                value={details.password}
              />
              {details.password.length < 8 ? <PasswordValidation /> : null}
            </div>
            <div className="c_Password">
              <p>Confirm password</p>
              <input
                type="password"
                name="confirm"
                required
                placeholder="re-type your password"
                onChange={handleChange}
                value={details.confirm}
              />
            </div>
          </article>

          <article className="helpLinks">
            <div className="remember">
              <input className="checkBox" type="checkbox" />
              <p>Remember me?</p>
            </div>
            <div className="forgot">
              <p>Forgot password</p>
            </div>
          </article>

          <article className="btnCont">
            <button className="signIn" onClick={handleSubmit} disabled={!formValid()}>
              Sign Up
            </button>
            <button className="logIn">Log In</button>
          </article>
        </form>
      </section>
    </div>
  );
}

export default App;
